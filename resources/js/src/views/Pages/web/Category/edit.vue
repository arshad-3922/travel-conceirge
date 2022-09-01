<template>
 <div class="content-wrapper">
    <div class="content-body">
        <!-- Basic form layout section start -->
        <section id="configuration">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-content collapse show">
                            <div class="card-dashboard pb-1">
                                <div class="row px-2">
                                    <router-link :to="{name: 'admin.categories.index'}"><h3 class="mb-2 d-blue-text bold"><i class="fas fa-angle-left"></i> Category</h3></router-link>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="clearfix"></div>
                            <ValidationObserver v-slot="{ handleSubmit }">
                                    <form ref="StoreEditForm" @submit.prevent="handleSubmit(update)" enctype="multipart/form-data">
                            <div class="card-dashboard pt-0">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="d-flex">
                                            <h3 class="semi-bold d-grey-text">Edit Category</h3>
                                        </div>
                                    </div>
                                    <div class="col-lg-10">
                                        <p class="p-lg black-text">Name</p>
                                        <input type="text" name="name" v-model="category.name" class="site-input" placeholder="ABC" id="">
                                    </div>
                                    <div class="col-lg-10 mt-2">
                                        <p class="p-lg black-text">Visible In Menu</p>
                                        <select name="is_visible" v-model="category.is_visible" class="w-100 site-input">
                                            <option value="1">Yes</option>
                                            <option value="0">No</option>
                                        </select>
                                    </div>
                                    <div class="col-12 mt-2">
                                        <p class="p-lg black-text">Image</p>
                                    </div>
                                </div>
                                <div class="row align-items-center">
                                    <div class="col-lg-4 col-sm-6 mt-1" v-show="saveSecFile">
                                        <div class="position-relative">
                                            <img :src="saveSecFile" alt="" class="img-fluid w-100">
                                            <button type="button" class="btn delete-img-btn" v-show="saveSecFile" @click="removeSaveImage(0)"><i class="fas fa-trash-alt red-text"></i></button>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 mt-1" v-for="(image,index) in base64Images" :key="`image${index}`">
                                        <div class="position-relative">
                                            <img :src="image" :alt="`image ${index}`" class="img-fluid w-100">
                                            <!-- <img src="images/image-delete.png" alt="" class="img-fluid w-100"> -->
                                            <button class="btn delete-img-btn" @click="removeImage(index,id)"><i class="fas fa-trash-alt red-text" ></i></button>

                                        </div>
                                    </div>
                                    <div class="col-12">
                                     <div id="yourBtn">
                                        <ValidationProvider name="image" v-slot="{errors}">
                                            <label for="file"
                                            class="green-btn-project  login-btn  ">Upload Images</label>

                                            <input type="file" id="file" class="d-none" @change="imageChange">
                                            <span class="text-danger">{{ errors[0] }}</span>
                                        </ValidationProvider>

                                    </div>
                                </div>
                                <div class="col-12 mt-5 pb-5">

                                        <button type="submit" class="site-btn login-btn py-1 mx-auto px-5">Update</button>

                                </div>
                            </div>
                        </div>
                    </form>
                </ValidationObserver>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</div>
</template>

<script>

	import {mapState, mapActions} from 'vuex';
	export default {

		computed: {
			...mapState('admin', ['category', 'search', 'entries']),
		},
		data() {
			return {
				product: {
					product_name: '',
					category_id: '',
					isVisible: '',
					descriptions: '',
					price:'',
					sku: '',
					inventory_management: '',
					quantity: '',
					in_stock: '',
					imageFile: [],
					baseFiles: [],
				},
				base64Images: [],
				base64Images1: [],
				date: '',
				saveSecFile: [],
				categories: {},
				saveimageFileId: [],
                removedImage:[]

			};
		},
		created() {
			this.fetch();
			this.getCategory();
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
					route: `api/category/show/${this.$route.params.id}`,
					mutation: 'SET_CATEGORYS',
					variable: 'data',
				};
				let {data} = await this.getAll(params);

				this.saveSecFile = data.data.image;

				this.addRouteQuery({});
			},
			async update() {
                try {
                    let data = new FormData(this.$refs.StoreEditForm);

                    for (const key in this.product) {
                        if (Array.isArray(this.product[key])) {
                        	if (key == 'imageFile') {
                                for (const fk in this.product[key]) {
                                    data.append(`imageFile[]`, this.product[key][fk]);
                                }
                            }

                        }

                        else {
                        }
                    }
                    let result = await axios.post(`api/category/update/${this.$route.params.id}`, data);
                    if (result.data.data) {
                        this.$snotify.success("category updated successfully", "store");
                        this.$router.push({name: 'admin.categories.index'});
                    } else {
                       
                        this.$snotify.error(result.data.message[0]);
                    }
                } catch (error) {
                    console.log('==========',error)
                    this.$snotify.error(error);
                }
            },
			// async getCategory() {
			// 	let response = (await axios.get('/api/category'));
			// 	this.categories = response.data;
			// },
			removeSaveImage(id) {
                this.saveSecFile = null;
				//this.product.imageFile.splice(index, 1);
			},
			imageChange(e) {
				Array.from(e.target.files).forEach(file => {
					let secFileCheck = this.saveSecFile;
                    let imageLength = this.product.imageFile.length;
					//alert(imageLength);

					if (imageLength === 1) {
						this.$snotify.warning('Only 1 pictures can be uploaded')
						return;
					}else if(secFileCheck != null){
                        this.$snotify.warning('Only 1 pictures can be uploaded')
                        return;
                    }

					this.product.imageFile.push(file);

					const reader = new FileReader();
					reader.onload = e => {
						this.base64Images.push(e.target.result);
					};
					reader.readAsDataURL(file);
				});
			},
			removeImage(index) {
                this.removedImage.push()
				this.product.imageFile.splice(index, 1);
				this.base64Images.splice(index, 1);
			},

		}

	};

</script>
