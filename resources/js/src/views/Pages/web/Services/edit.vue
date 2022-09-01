<template>

    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <ValidationObserver v-slot="{ handleSubmit }">
                <form ref="ServiceEditForm" @submit.prevent="handleSubmit(update)" enctype="multipart/form-data">

                <div class="row">
                    <div class="col-12">
                        <div class="card my-5 mx-2">
                            <div class="card-content collapse show">
                                <div class="card-dashboard">
                                    <div class="row">
                                        <div class="col-12 d-sm-flex align-items-center justify-content-between">
                                            <h3 class="mb-2 semi-bold d-grey-text"><a href="services.php" class="fas d-grey-text fa-angle-left mr-1"></a>Service Edit</h3>
                                            <div class="text-right">
                                                <p class="green-tag l-green-tag">{{(service.status) ? 'Active' : 'Inactive'}}</p>
                                            </div>
                                        </div>
                                        <div class="col-12 d-flex ml-2 mt-1">
                                           
                                            <div class="service-img-edit" id="editImage">
                                                <img v-if="service.thumb == base_url"  :src="`${base_url}/image-download.png`"  alt="" class="img-fluid service-details-img">
                                                <img v-else :src="`${serviceThumb}`"  alt="" class="img-fluid service-details-img">
                                                <!-- <button type="button" @click="removeImage()" class="close-btn"><i class="fas fa-times"></i></button> -->
                                            </div>
                                             <div class="service-img-edit" id="changeImage" v-for="(image,index) in base64Images" :key="`imagebase${index}`">
                                                <img :src="image" alt="" class="img-fluid service-details-img">
                                                <!-- <button type="button" @click="removeSaveImage()" class="close-btn"><i class="fas fa-times"></i></button> -->
                                            </div>
                                            <label for="upload-doc" class="upload-btn"><i  class="fas fa-upload"></i></label>
                                            <div class="d-none">
                                                <input type="file" @change="imageChange" name="thumb" id="upload-doc">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 pb-5 mt-1 ml-2">
                                                <div class="row">
                                                    <div class="col-xl-8 col-12 mt-2">
                                                        <p class="d-grey-text semi-bold">Service Name:</p>
                                                        <input type="text" class="site-input" name="title" v-model="service.title" value="ABC">
                                                    </div>
                                                </div>
                                                
                                                <div class="row mt-3">
                                                    <div class="col-xl-4 col-sm-6">
                                                        <p class="d-grey-text semi-bold">Service ID:</p>
                                                        <p class="grey-text semi-bold">{{service.id}}</p>
                                                    </div>
                                                    <div class="col-xl-4 col-sm-6">
                                                        <p class="d-grey-text semi-bold">Service Date:</p>
                                                        <p class="grey-text semi-bold">{{formatDate(service.create_at)}}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-xl-8 col-12">
                                                        <p class="d-grey-text semi-bold">Service Categories:</p>
                                                        <div class="position-relative">
                                                           <select class="SelectedCategories" name="serviceCategories[]" multiple="multiple">
                                                                <option :value="cates.id"  :key="index" v-for="(cates,index) in servicesCategories" :selected="getSelected(cates.name)">{{  cates.name }}</option>
                                                           </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 mt-2">
                                                        <p>
                                                           <input type="checkbox" id="c1" name="status" value="1" v-model="servicesStatus">
                                                            <label for="c1" class="d-flex l-green-text align-items-center mt-2">Activate</label>
                                                        </p>
                                                    </div>
                                                    <div class="col-12 mt-3">
                                                        <button type="submit" class="site-btn px-4 rounded l-blue-btn">Update</button>
                                                    </div>
                                                </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
                </ValidationObserver>
            </section>
        </div>
    </div>
</template>

<script>

	import {mapState, mapActions} from 'vuex';
	export default {

		computed: {
			...mapState('admin', ['service', 'search', 'entries']),
		},
		data() {
			return {
                service:'',
                serviceThumb:'',
				base64Images: [],
				base64Images1: [],
                services: {
				baseFiles: []
				},
				date: '',
                secFiles:'',
				saveSecFile: [],
				categories: {},
				saveSecFilesId: [],
                servicesStatus : false,
                servicesThumb : "",
                servicesCategories : {},
                selectedServicesCategories : {},
                base_url:base_url+'/assets/upload/services'
			};
		},
		created() {
			this.fetch();

            console.log("Worked")
            //this.getCategory();
		},
		watch: {
			search: function (val, oldVal) {
				this.fetch();
			},
			entries: function (val, oldVal) {
				this.fetch();
			},
		},
		methods: {
			...mapActions('admin', ['getAll']),
			async fetch() {
				let {type, status} = this.$route.params;
				let params = {
					route: `api/services/show/${this.$route.params.id}`,
					mutation: 'SET_SERVICE',
					variable: 'data',
				};
				let {data} = await this.getAll(params);
				this.service = data.data.services
                this.serviceThumb = this.service.thumb
                let {categories} = data.data.categories;
                console.log('============++',categories)

                if(data.data.services.status == 1){
                    this.servicesStatus = true;
                    console.log("Checked");
                }
                if(data.data.services.thumb != ""){
                    this.servicesThumb = base_url+"/assets/upload/services/"+data.data.services.thumb;
                }else{
                    this.servicesThumb = base_url+"/images/image-download.png";
                }

                if(data.data.categories){
                    this.servicesCategories = data.data.categories;
                }

                if(data.data.services.categories){
                    this.selectedServicesCategories = data.data.services.categories;
                }

                $("[name='serviceCategories[]']").select2({ width: '100%' });

                this.addRouteQuery({});
			},
			async update() {
                try {
                    let data = new FormData(this.$refs.ServiceEditForm);

                    for (const key in this.service) {
                        if (Array.isArray(this.service[key])) {
                        	if (key == 'secFiles') {
                                for (const fk in this.service[key]) {
                                    data.append(`secFiles[]`, this.service[key][fk]);
                                }
                            }

                        }

                        else {
                        }
                    }

                    let result = await axios.post(`api/services/update/${this.$route.params.id}`, data);
                    if (result.data.data) {
                        this.$snotify.success("service updated successfully", "store");
                        this.$router.push({name: 'admin.services.index'});
                    } else {
                        this.$snotify.error("Error occur updating store", "store");
                    }
                } catch (e) {
                    console.log(e);
                }
            },
			removeSaveImage(index) {
				this.base64Images.push(base_url+"/assets/upload/services/image-download.png");
                $('#changeImage').hide()
			},
			imageChange(e) {
				//alert('working');
				Array.from(e.target.files).forEach(file => {
					console.log(e.target.files[0])
					if (this.services.baseFiles.length === 1) {
						this.$snotify.warning('Only 1 pictures can be uploaded')
						return;
					}

					this.services.baseFiles.push(file);
					const reader = new FileReader();
					reader.onload = e => {
						this.base64Images.push(e.target.result);
                        $('#editImage').hide()
					};
					reader.readAsDataURL(file);
				});
			},
			removeImage() {
                this.serviceThumb = base_url+"/assets/upload/services/image-download.png";
                this.base64Images.push(this.serviceThumb);
                $('#changeImage').hide()

			},
            getSelected(selectedVal){

                for(var i = 0; i < this.selectedServicesCategories.length; i++)
                {
                    console.log("GettingSelected");
                    if(this.selectedServicesCategories[i].name == selectedVal){
                        return true;
                    }
                }
            },


		}

	};

</script>
