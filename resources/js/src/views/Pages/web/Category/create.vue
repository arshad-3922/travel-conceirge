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
										<router-link :to="{name : 'admin.categories.index'}"><h3 class="mb-2 d-blue-text bold"><i class="fas fa-angle-left"></i> Category</h3></router-link>
									</div>
								</div>      
								<div class="clearfix"></div>
								<div class="clearfix"></div>
								<ValidationObserver v-slot="{ handleSubmit }">
									<form ref="CategoryForm"
									@submit.prevent="handleSubmit(createCategory)">
									<div class="card-dashboard pt-0">
										<div class="row">
											<div class="col-12">
												<div class="d-flex">
													<h3 class="semi-bold d-grey-text">New Category</h3>
												</div>
											</div>
											<div class="col-lg-10">
												<p class="p-lg black-text">Name</p>
											<ValidationProvider name="category name" rules="required"
												v-slot="{ errors }">
												<input type="text"  v-model="category_name" name="category_name" class="site-input" placeholder="ABC" id="">
												<span class="text-danger">{{ errors[0] }}</span>
											     </ValidationProvider>
										</div>
										<div class="col-lg-10 mt-2">
											<p class="p-lg black-text">Visible In Menu</p>
											<ValidationProvider name="visible menu" rules="required"
											v-slot="{ errors }">
											<select  name="visible menu" v-model="isVisible"  class="w-100 site-input">
												<option value="1">Yes</option>
												<option value="0">No</option>
											</select>
											<span class="text-danger">{{ errors[0] }}</span>
										</ValidationProvider>
									</div>
									<div class="col-12 mt-2">
										<p class="p-lg black-text">Image</p>
									</div>
								</div>

								<div class="row align-items-center">
									<div class="col-lg-4 col-sm-6 mt-1" v-for="(image,index) in base64Images" :key="`imagebase${index}`">
										<div class="position-relative">
											<img :src="image" :alt="`image ${index}`" class="img-fluid w-100">
											<!-- <img src="images/image-delete.png" alt="" class="img-fluid w-100"> -->
											<button class="btn delete-img-btn" @click="removeImage(index)"><i class="fas fa-trash-alt red-text"></i></button>

										</div>
									</div>
									<form action="#type your action here" method="POST" enctype="multipart/form-data" name="myForm" class="mt-1 mx-auto mx-sm-1">
										<div id="yourBtn" class="text-center">
											<ValidationProvider name="image" v-slot="{errors}">
												<label for="file1"
												class="green-btn-project float-right  login-btn  ">Upload Images</label>
												<input type="file" id="file1" class="d-none"
												@change="imageChange" multiple>
												<span class="text-danger">{{ errors[0] }}</span>
											</ValidationProvider>
										</div>
										<div style='height: 0px;width: 0px; overflow:hidden;'><input id="upfile" type="file" value="upload" onchange="sub(this)" /></div>
									</form>
									<div class="col-12 mt-5 pb-5">
										<button type="submit" class="site-btn login-btn py-1 mx-auto px-5">Add</button>
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
		components: {},
		data() {
			return {
				categories: '',
				category_name: '',
				isVisible: '',
				category: {
					baseFiles: []
				},
				base64Images: [],
			}
		},

		async created() {

		},
		methods: {
			...mapActions('admin', ['store']),
			async createCategory() {
				let fd = new FormData(this.$refs.CategoryForm);
				for (const key in this.category) {
						if (Array.isArray(this.category[key])) {
								for (const fk in this.category[key]) {
									fd.append(`baseFiles`, this.category[key][fk]);
								}
						}

						else {
						}
					}

				let response = (await axios.post('/api/category/create', fd));
				if (response.data.data) {
					this.$snotify.success(response.data.message)
					let self = this;
					this.$router.push({name: 'admin.categories.index'});
				} else {
					this.$snotify.error(response.data.message)

				}
			},
			imageChange(e) {
				Array.from(e.target.files).forEach(file => {

					if (this.category.baseFiles.length === 1) {
						this.$snotify.warning('Only 1 pictures can be uploaded')
						return;
					}

					this.category.baseFiles.push(file);

					const reader = new FileReader();
					reader.onload = e => {
						this.base64Images.push(e.target.result);
					};
					reader.readAsDataURL(file);
				});
			},
			removeImage(index) {
				this.category.baseFiles.splice(index, 1);
				this.base64Images.splice(index, 1);
			},
			async updateStatus(id){

				let params = {
					route: 'api/category/status/'+id,
					method: 'POST',

				};
				let {data} = await this.store(params);
				if (data.status) {

					this.$snotify.success(data.message);

				} else {

					this.$snotify.error(data.message);
				}
			}

		}
	}
</script>
