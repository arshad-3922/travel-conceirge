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
                                <router-link :to="{name:'admin.services.create'}">
                                    <h1 class="ml-1 main-heading"><i class="fas fa-angle-left mr-1"></i>Add Service</h1>
                                </router-link>
                            </div>
                        </div>
                        <ValidationObserver v-slot="{ handleSubmit }">
						<form ref="ServicesForm" @submit.prevent="handleSubmit(createService)" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-lg-12">
                                <label for="picture" class="d-inline-block" style="cursor:pointer">
                                    <img :src="base_image || base_url+`/assets/admin/images/base-img.png`" alt="" class="img-fluid" ref="base_image">
                                </label>
                                <form class="d-none">
                                    <input type="file" name="image" accept=".gif,.jpg,.png,.tif|image/*" id="picture" @change="setImage">
                                    <input type="submit">
                                </form>
                            </div>
                            <div class="col-12 text-center">
                                <h1 class="ml-1 main-heading mt-lg-5">Secondary Images</h1>
                            </div>
                            <div class="col-12">
                                <label for="picture1" class="d-inline-block" style="cursor:pointer">
                                    <img :src="base_url+`/assets/admin/images/secondary-img.png`" alt="" class="img-fluid">
                                </label>
                                <form class="d-none">
                                    <input type="file" name="additional_images" accept=".gif,.jpg,.png,.tif|image/*" id="picture1" multiple  @change="imageChange">
                                    <input type="submit">
                                </form>
                                <label for="picture3" class="d-inline-block" style="cursor:pointer" v-for="(image,index) in base64Images" :key="`imagebase${index}`">
                                    <img :src="image" alt="image" class="img-fluid" width="75px">
                                </label>
                            </div>

                            <div class="col-lg-4 mt-lg-3 mt-2">
                                <label for="" class="site-labell">Service Name</label>
                                <ValidationProvider name="Service Name" rules="required" v-slot="{errors}">
                                <input type="text" class="all-inputt w-100" placeholder="Enter Service Name" v-model="services.name">
                                <span class="text-danger">{{ errors[0] }}</span>
								</ValidationProvider>
                            </div>
                            <div class="col-lg-4 mt-lg-3 mt-2">
                                <label for="" class="site-labell">Category</label>
                                <ValidationProvider name="Service Category" rules="required" v-slot="{errors}">
                                <select name="" id="" class="general-select-6 w-100" v-model="services.category" @change="getsubcategory">
                                    <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
                                </select>
                                <span class="text-danger">{{ errors[0] }}</span>
								</ValidationProvider>
                            </div>
                            <div class="col-lg-4 mt-lg-3 mt-2">
                                <div class="form-group position-relative">
                                    <label for="" class="site-labell">Sub Category</label>
                                 <select name="" id="" class="general-select-6 w-100">
                                    <option v-for="subcategory in subcategories" :key="subcategory.id" :value="subcategory.id">{{subcategory.name}}</option>
                                </select>
                                </div>
                            </div>
                            <div class="col-12 mt-lg-3 mt-2">
                                <label for="" class="site-labell">Description</label>
                                 <ValidationProvider name="Service Description" rules="required" v-slot="{errors}">
                                <textarea name="" id="" rows="5" class="all-inputt w-100 px-1" placeholder="Enter Description" v-model="services.description"></textarea>
                                <span class="text-danger">{{ errors[0] }}</span>
								</ValidationProvider>
                            </div>
                            <div class="col-lg-6 mt-lg-3 mt-2">
                                <label for="" class="site-labell">Discounted Cost</label>
                                 <ValidationProvider name="Discounted Cost" rules="required" v-slot="{errors}">
                                <input type="number" class="all-inputt w-100" placeholder="Enter Discounted Cost" v-model="services.discount_cost">
                                <span class="text-danger">{{ errors[0] }}</span>
								</ValidationProvider>
                            </div>
                            <div class="col-lg-6 mt-lg-3 mt-2">
                                <label for="" class="site-labell">Surgeons</label>
                                <ValidationProvider name="Surgeons" rules="required" v-slot="{errors}">
                                    <v-select  class="site-input"
                                     v-if="surgeons"
                                     v-model="services.surgeons"
                                     multiple
                                    :options="surgeons"
                                    :reduce="surgeons => surgeons"
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
                                <slot-table v-model="services.slots"></slot-table>
                            </div>
                            <div class="col-12 mt-2">
                                <label for="" class="site-labell">Select Package (if needed)</label>
                                   <v-select  class="site-input"
                                    v-if="packages"
                                    v-model="services.packages"
                                     multiple
                                    :options="packages"
                                    :reduce="packages => packages.id"
                                  ></v-select>
                                <!-- <select class="general-select-6 w-100"  v-model="services.package">
                                    <option v-for="packg in packages" :key="packg.id"  :value="packg.id">{{packg.name}}</option>
                                </select> -->
                            </div>
                            <div class="col-12 mt-2">
                                <label for="" class="site-labell">Status</label>
                             <ValidationProvider name="Status" rules="required" v-slot="{errors}">
                                <select name="" id="" class="general-select-6 w-100" v-model="services.status">
                                    <option value="Active">Active</option>
                                    <option value="Inactive">In-Active</option>
                                </select>
                                <span class="text-danger">{{ errors[0] }}</span>
							</ValidationProvider>
                            </div>
                            <div class="col-12 text-center">
                                <button type="submit"  class="general-btn d-inline-block mt-3 px-3">Save</button>
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
    import SlotTable from './components/SlotTable.vue';
	export default {
        components : {
            SlotTable,
        },
	data() {
	   return {  
        categories:{},
        subcategories:{}, 
        surgeons:[],  
	    services:{
		name:'',
        description:'',
        discount_cost:'',
		category:[],
        surgeon:[],
        slots:[],
		packages:[],
		status:''
		},
        errors:[],
        base_url:base_url,
        base64Images: [],
        service: {
		images: []
		},
        base_image:'',
        packages:[]
		  }
		},

		async created() {
			this.getcategories();
            this.getsubcategory();	
            this.getsurgeons();
            this.getpackages();
		},
		methods: {
			...mapActions('admin', ['store']),
	     	imageChange(e) {
				Array.from(e.target.files).forEach(file => {
					if(this.service.images.length === 3) {
						this.$snotify.warning('Only 3 pictures can be uploaded')
						return;
					}
					this.service.images.push(file);
					const reader = new FileReader();
					reader.onload = e => {
					this.base64Images.push(e.target.result);
					};
					reader.readAsDataURL(file);
				    });
			   },
			    removeImage(index) {
			      this.service.images.splice(index, 1);
				    this.base64Images.splice(index, 1);
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
      
			async createService(){
				let fd = new FormData();
                fd.append('services',JSON.stringify(this.services));
                //this.buildFormData(fd, this.form);
				fd.append('base_image',this.base_image);
				for (const key in this.service) {
					if(Array.isArray(this.service[key])) {
					for(const fk in this.service[key]) {
					fd.append('images[' + fk + ']', this.service[key][fk]);
						}
					}
				}
				let response = await axios.post('/api/services/create',fd);
				if (response.data.data) {
					this.$snotify.success("service create successfully", "service");
					let self = this;
					this.$router.push({name: 'admin.services.index'});
				} else {
                this.errors  = response.data.message;  
				this.$snotify.error(response.data.message)
				}
			},
		getcategories(){	
			axios.get('api/category/index').then((response)=>{
		    this.categories = response.data.data.data	
			}).catch((error)=>{
			this.$snotify.error(error.data.message)	
			})
			},
        getsubcategory(){
          	axios.get('api/category/subcategory',{params:{category:this.services.category}}).then((response)=>{
		    this.subcategories = response.data;
			}).catch((error)=>{
			this.$snotify.error(error.data.message)	
			})
		  }, 
         getsurgeons(){
           	axios.get('api/auth/surgions',{params:{role:'surgeon'}}).then((response)=>{
            let surgeondata  = response.data;
            for(var i =0; i<surgeondata.length; i++){
              this.surgeons.push(surgeondata[i].user);
            }
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
