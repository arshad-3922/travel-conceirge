<template>
<div class="app-content content dashboard">
    <div class="content-wrapper content-wrapper-2">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row card px-lg-5">
                    <div class="col-12 mb-5">
                        <div class="row">
                            <div class="col-lg-6">
                                <router-link :to="{name:'admin.services.index'}">
                                    <h1 class="ml-1 main-heading"><i class="fas fa-angle-left mr-1"></i>Edit Service</h1>
                                </router-link>
                            </div>
                        </div>
                         <ValidationObserver v-slot="{ handleSubmit }">
					    <form ref="SongEditForm" @submit.prevent="handleSubmit(update(service))" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-lg-12">
                                <label for="" class="d-inline-block" style="cursor:pointer">
                                    <img :src="base_image || service.base_image" alt="" class="img-fluid" width="250px">
                                </label>
                                <label for="picture2" class="d-inline-block" style="cursor:pointer">
                                    <img :src="base_url+`/assets/admin/images/secondary-img.png`" alt="" class="img-fluid">
                                </label>
                                <form class="d-none">
                                    <input type="file" name="additional_images" accept=".gif,.jpg,.png,.tif|image/*" id="picture2"   @change="setImage">
                                    <input type="submit">
                                </form>
                            </div>
                            <div class="col-12 text-center">
                                <h1 class="ml-1 main-heading mt-lg-5">Secondary Images</h1>
                            </div>
                            <div class="col-12">
                                <label style="cursor:pointer" v-for="(image,index) in service.service_images" :key="index">
                                    <img :src="image.images" alt="" class="img-fluid" width="100px">
                                    <button type="button" class="close-btn" @click="removeImage(index,image.id)"><i class="fas fa-trash-alt" ></i></button>
                                </label>
                                  <label for="picture3" class="d-inline-block" style="cursor:pointer" v-for="(image,index) in base64Images" :key="`imagebase${index}`">
                                    <img :src="image" alt="image" class="img-fluid" width="100px">
                                    <button type="button" class="close-btn" @click="removeImage(index)"><i class="fas fa-trash-alt" ></i></button>
                                </label>
                                  <label for="picture1" class="d-inline-block" style="cursor:pointer">
                                    <img :src="base_url+`/assets/admin/images/secondary-img.png`" alt="" class="img-fluid">
                                </label>
                                <form class="d-none">
                                    <input type="file" name="additional_images" accept=".gif,.jpg,.png,.tif|image/*" id="picture1" multiple  @change="imageChange">
                                    <input type="submit">
                                </form>
                            </div>
                            <div class="col-lg-4 mt-lg-3 mt-2">
                                <label for="" class="site-labell">Service Name</label>
                                <ValidationProvider name="Service Name" rules="required" v-slot="{errors}">
                                <input type="text" class="all-inputt w-100" placeholder="Enter Name" v-model="service.name">
                                <span class="text-danger">{{ errors[0] }}</span>
								</ValidationProvider>
                            </div>
                            <div class="col-lg-4 mt-lg-3 mt-2">
                                <label for="" class="site-labell">Category</label>
                                 <ValidationProvider name="Category" rules="required" v-slot="{errors}">
                                 <select name="" id="" class="general-select-6 w-100">
                                   <option :value="cates.id"  :key="index" v-for="(cates,index) in categories" :selected="getSelected(cates.name)">{{ cates.name }}</option>
                                 </select>
                                  <span class="text-danger">{{ errors[0] }}</span>
								    </ValidationProvider>
                            </div>
                            <!-- <div class="col-lg-4 mt-lg-3 mt-2">
                                <div class="form-group position-relative">
                                    <label for="" class="site-labell">Sub Category</label>
                                    <select name="" id="" class="general-select-6 w-100">
                                        <option value="Active">Active</option>
                                        <option value="Inactive">In-Active</option>
                                    </select>
                                </div>
                            </div> -->
                            <div class="col-12 mt-lg-3 mt-2">
                                <label for="" class="site-labell">Description</label>
                                 <ValidationProvider name="Description" rules="required" v-slot="{errors}">
                                <textarea name="" id="" rows="5" class="all-inputt w-100 px-1" placeholder="Enter Description" v-model="service.description"></textarea>
                                 <span class="text-danger">{{ errors[0] }}</span>
							</ValidationProvider>
                            </div>
                            <div class="col-lg-4 mt-lg-3 mt-2">
                                <label for="" class="site-labell">Cost</label>
                                  <ValidationProvider name="Cost" rules="required" v-slot="{errors}">
                                <input type="text" class="all-inputt w-100" placeholder="Enter Cost" v-model="service.discounted_cost">
                                  <span class="text-danger">{{ errors[0] }}</span>
								</ValidationProvider>
                            </div>
                            <div class="col-lg-4 mt-lg-3 mt-2">
                               <ValidationProvider name="Discounted Cost" rules="required" v-slot="{errors}">
                                <label for="" class="site-labell">Discounted Cost</label>
                                <input type="text" class="all-inputt w-100" placeholder="Enter Discounted Cost" v-model="service.discounted_cost">
                                 <span class="text-danger">{{ errors[0] }}</span>
								</ValidationProvider>
                            </div>
                            <div class="col-lg-4 mt-lg-3 mt-2">
                                <label for="" class="site-labell">Surgeons</label>
                                <ValidationProvider name="Surgeons" rules="required" v-slot="{errors}">
                                  <v-select  class="site-input"
                                     v-if="surgeons"
                                     v-model="selectedSurgeons"
                                     multiple
                                    :options="surgeons"
                                  ></v-select>
                                     <span class="text-danger">{{ errors[0] }}</span>
								</ValidationProvider>
                            </div>
                            <div class="col-lg-6 mt-lg-3 mt-2">
                                <h1 class="ml-1 main-heading">Manage Service Avalibility</h1>
                                <h6 class="ml-1 service-hours">Hours of Service</h6>
                            </div>
                            <div class="dataTables_wrapper">
                                <!-- <div class="user-listing-top">
                                    <div class="row align-items-end d-flex mb-4">
                                        <div class="col-md-6 mt-2 sort-datepicker">
                                            <div class="d-sm-flex align-items-center">
                                                <label class="">Sort by:</label>
                                                <div class="input-wrap mr-0 mr-sm-2 mb-2 mb-sm-0">
                                                    <input type="date" placeholder="From" class="form-control" />
                                                </div>
                                                <div class="input-wrap">
                                                    <input type="date" placeholder="To" class="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                                <div class="row row-table">
                                    <div class="main-tabble table-responsive">
                                        <div class="dataTables_wrapper container-fluid dt-bootstrap4">
                                            <div class="row">
                                                <div class="col-sm-12">
                                                                    <p>
                                                                        <!-- <input type="checkbox" id="c2" name="cb"> -->
                                                                        <label for="c2"></label>
                                                                        <a href="javascript:void(0)" @click="addnewslot" class="general-btn d-inline-block">Add New Slot</a>
                                                                    </p>
                                                    <table class="table table-borderless dataTable service-table">
                                                        <thead>
                                                            <tr>
                                                                <th>Date of Week</th>
                                                                <th>Working Hour</th>
                                                                <th>Day off</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="(slot,index) in service.service_slot" :key="index">
                                                                <td><ValidationProvider v-slot="{errors}" name="Date" rules="required">
                                                                      <flat-pickr :config="config" name="date" class="sort-date ml-1"
                                                                        placeholder="Select a Date" v-model="slot.date">
                                                                      </flat-pickr>
                                                                        <span class="text-danger">{{ errors[0] }}</span>
								                                    </ValidationProvider>
                                                                </td>
                                                                <td class="d-flex">
                                                                    <div class="d-flex flex-column">
                                                                        <p class="mb-1">From</p>
                                                                        <ValidationProvider name="From Time" v-slot="{errors}" rules="required">
                                                                         <flat-pickr :config="config1" name="date" class="sort-date ml-1"
                                                                          placeholder="Select a Date"  v-model="slot.from">
                                                                        </flat-pickr>
                                                                         <span class="text-danger">{{ errors[0] }}</span>
								                                       </ValidationProvider>
                                                                    </div>
                                                                    <div class="d-flex flex-column">
                                                                        <p class="mb-1">To</p>
                                                                        <ValidationProvider name="To Time" v-slot="{errors}" rules="required">
                                                                         <flat-pickr :config="config1" name="date" class="sort-date ml-1"
                                                                          placeholder="Select a Date"  v-model="slot.to">
                                                                        </flat-pickr>
                                                                         <span class="text-danger">{{ errors[0] }}</span>
								                                       </ValidationProvider>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <p>
                                                                        <!-- <input type="checkbox" id="c2" name="cb"> -->
                                                                        <label for="c2"></label>
                                                                        <a href="javascript:void(0)" @click="removeslot(index,slot.id)" class="table-anchor"><i class="fas fa-trash"></i></a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="col-12 mt-2">
                                <label for="" class="site-labell">Select Package (if needed)</label>
                                <select class="js-example-basic-multiple w-100" name="states[]" multiple="multiple">
                                    <option value="ABC Package">ABC Package</option>
                                    <option value="ABC Package">ABC Package</option>
                                </select>
                            </div> -->
                            <div class="col-12 mt-2">
                                <label for="" class="site-labell">Packages</label>
                                <ValidationProvider name="Packages" rules="required" v-slot="{errors}">
                                  <v-select  class="site-input"
                                     v-if="service_packages"
                                     v-model="selectedPackages"
                                     multiple
                                    :options="packages"
                                  ></v-select>
                                <span class="text-danger">{{ errors[0] }}</span>
							   </ValidationProvider>
                            </div>
                            <div class="col-12 mt-2">
                                <label for="" class="site-labell">Status</label>
                                <ValidationProvider name="Status" rules="required" v-slot="{errors}">
                                <select name="" id="" class="general-select-6 w-100" v-model="service.status">
                                    <option value="1">Active</option>
                                    <option value="0">In-Active</option>
                                </select>
                                  <span class="text-danger">{{ errors[0] }}</span>
								</ValidationProvider>
                            </div>
                            <div class="col-12 text-center">
                                <button type="submit" class="general-btn d-inline-block mt-3 px-3">Update</button>
                            </div>
                        </div>
                         </form>
                        </ValidationObserver>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
</template>
<script>
	import {mapState, mapActions} from 'vuex';
	export default {
		// computed: {
		// 	...mapState('admin', ['service']),
		// },
		data() {
			return {
                categories:{},
                serviceId:'',
                service:{},
                selectedServicesCategories : {},
                servicesCategories:{},
                removeSlots:[],
                removeImages:[],
                surgeons:[],
                packages:[],
                selectedSurgeons:[],
                base64Images: [],
                servica: {
                images: []
                },
                base_image:'',
                service_packages:[],
                service_surgeons:[],
                selectedPackages:[],
               config: {
                wrap: true, // set wrap to true only when using 'input-group'
                altFormat: 'M j, Y',
                altInput: true,
                dateFormat: 'Y-m-d',
                minDate: "today",
          
              },
              config1:{
                enableTime: true,
                noCalendar: true,
                dateFormat: "H:i",
                defaultDate: "13:45"
             } 
            }
		},
		created() {
			this.fetch();
            this.getCategories();
            this.getsurgeons();
            this.getpackages();
		},
		methods: {
			...mapActions('admin', ['getAll']),
			async fetch() {
             
				let params = {
					route: `api/services/edit/${this.$route.params.id}`,
					mutation: 'SET_SERVICE',
					variable: 'data',
				};
				let {data} = await this.getAll(params);
                this.service  = data.data.service;
                let surgeondata  = data.data.surgeons;
                let packagesdata = this.service.service_packages
                for(var i=0; i< surgeondata.length;i++){
                    this.service_surgeons.push(surgeondata[i]);
                }
                this.selectedSurgeons  = this.service_surgeons
                for(var i=0; i< packagesdata.length;i++){
                    this.service_packages.push(packagesdata[i].package);
                }
                this.selectedPackages = this.service_packages
                if(data.data.category){
                    this.selectedServicesCategories = data.data.category;
                }
			},

         	imageChange(e) {
				Array.from(e.target.files).forEach(file => {
					if(this.servica.images.length === 3) {
						this.$snotify.warning('Only 3 pictures can be uploaded')
						return;
					}
					this.servica.images.push(file);
					const reader = new FileReader();
					reader.onload = e => {
					this.base64Images.push(e.target.result);
					};
					reader.readAsDataURL(file);
				    });
			   },
			    removeImage(index,id) {
			      this.service.service_images.splice(index, 1);
				  this.base64Images.splice(index, 1);
                  this.removeImages.push(id);
			  },

          setImage: function (e) {
              const file = e.target.files[0]
              console.log(file);
                if (!file.type.includes('image/')) {
                  alert('Please select an image file')
                  return
                 }
                if(typeof FileReader === 'function') {
                  const reader = new FileReader()
                  reader.onload = (event) => {
                  this.base_image = event.target.result
                  console.log(this.profile);
                   }
                 reader.readAsDataURL(file)
                  } else {
                 alert('Sorry, FileReader API not supported')
               }
           },
		 	async update(data){
                try {
                    let fd = new FormData();
                    fd.append('id',data.id);
                    fd.append('name',data.name);
                    fd.append('description',data.description);
                    fd.append('category_id',data.category.id);
                    fd.append('package_id',data.service_packages.id);
                    fd.append('discount_cost',data.discounted_cost);
                    fd.append('status',data.status);
                    fd.append('removed_slots',this.removeSlots);
                    fd.append('base_image',this.base_image);
                    fd.append('service',JSON.stringify(this.service));
                    fd.append('surgeons',JSON.stringify(this.selectedSurgeons));
                    fd.append('packages',JSON.stringify(this.selectedPackages));
                    fd.append('removedImages',this.removeImages);
                    for (const key in this.servica) {
                      if(Array.isArray(this.servica[key])) {
                      for(const fk in this.servica[key]) {
                      fd.append('images[' + fk + ']', this.servica[key][fk]);
                        }
                      }
                    }
                    let result = await axios.post(`api/services/update/${this.$route.params.id}`,fd);
                    if (result.data.data) {
                        this.$snotify.success("service updated successfully", "service");
                        this.$router.push({name: 'admin.services.index'});
                    } else {
                        //console.log(result.data.message)
                        this.$snotify.error(result.data.message[0]);
                    }
                } catch (e) {
                    console.log(e);
                }
            },

            getSelected(selectedVal){
                for(var i = 0; i < this.selectedServicesCategories.length; i++)
                   {
                    if(this.selectedServicesCategories[i].name == selectedVal){
                        return true;
                    }
                }
            },
            getCategories(){	
		      	axios.get('api/category/index').then((response)=>{
		        this.categories = response.data.data.data
			      }).catch((error)=>{
		     	  this.$snotify.error(error.data.message)	
			     })
			     },
            addnewslot(){
             this.service.service_slot.push({});
           },
           removeslot(index,id){
              this.removeSlots.push(id);
              this.service.service_slot.splice(index,1)
           },

         getsurgeons(){
          	axios.get('api/auth/surgions',{params:{role:'surgeon'}}).then((response)=>{
		    this.surgeons = response.data;
			}).catch((error)=>{
			this.$snotify.error(error.data.message)	
			})
		  }, 
          getpackages(){
          	axios.get('api/auth/packages').then((response)=>{
		    this.packages = response.data;
			}).catch((error)=>{
			this.$snotify.error(error.data.message)	
			})
		  }, 

	   }

	}

</script>
