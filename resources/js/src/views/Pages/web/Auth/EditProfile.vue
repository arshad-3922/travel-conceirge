<template>
	<section class="recipes text-center py-4 py-md-5">
		<div class="container">
			<div class="my-profile">
				<h3>My Profile</h3>
				<ValidationObserver  v-slot="{handleSubmit}">
					<form ref="profileUpdate" @submit.prevent="handleSubmit(updateProfile)">
						<div class="row">
							<div class="col-lg-7 pl-lg-0 text-sm-right ml-auto">
								<div class="d-sm-flex justify-content-between">
									<div class="user-edit mt-4">
										<img :src="cropped" alt="" class="img-fluid user-img">
										<form action="#type your action here" method="POST" enctype="multipart/form-data" name="myForm">
											<div id="yourBtn"  onclick="getFile()" >
												<div class="camera-icon">
													<i class="fas fa-camera"></i>
												</div>
											</div>
											<div style="height: 0px;width: 0px; overflow:hidden;"><input id="upfile" type="file" name="file_photo" value="upload" onchange="sub(this)" @change="croppie" accept="image/*"></div>
										</form>
									</div>
									<div class="modal fade" id="cropImagePop" tabindex="-1"
									role="dialog" aria-labelledby="myModalLabel"
									aria-hidden="true">
									<div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-header">
												<button type="button" class="close"
												data-dismiss="modal"
												aria-label="Close"><span
												aria-hidden="true">&times;</span>
											</button>
											<h4 class="modal-title" id="myModalLabel">
											Edit Photo</h4>
										</div>
										<div class="modal-body">
											<vue-croppie
											ref="croppieRef"
											:enableOrientation="true"
											:boundary="{ width: 450, height: 300}"
											>
										</vue-croppie>

									</div>
									<div class="modal-footer">
										<button type="button"
										class="btn btn-default"
										data-dismiss="modal">Close
									</button>
									<button type="button" id="cropImageBtn"
									class="btn btn-primary"
									@click="crop">Crop
								</button>
							</div>
						</div>
					</div>
				</div>
				<div class="mt-3 mt-sm-4">
					<a href="#_" class="pink-text" data-toggle="modal" data-target="#changepassword">Edit Password</a>
				</div>
			</div>
		</div>
		<div class="col-lg-6 mt-4 mx-auto">
			<div class="row align-items-center">
				<div class="col-6">
					<p class="p-lg pink-text mb-0">Name:</p>
					<p class="p-lg pink-text mt-3 mb-0">Email:</p>
					<p class="p-lg pink-text mb-0">Password:</p>
				</div>
				<div class="col-6">
					<ValidationProvider tag="div" name="name" rules="required" v-slot="{errors}"
					>
					<input type="text" class="site-input medium" name="name" v-model="user.name" >
					<span class="text-danger">{{ errors[0] }}</span>
				</ValidationProvider>
				<p class="p-lg grey-text mb-0 mt-3">{{user.email}}</p>
				<p class="p-lg grey-text">*********</p>
			</div>
		</div>
	</div>
	<div class="col-12 mt-5 pb-5">
		<button class="site-btn py-2" type="submit">Update</button>
	</div>
</div>
</form>
</ValidationObserver>
</div>
</div>
<change-password-modal></change-password-modal>
</section>
</template>
<script>
	const ChangePasswordModal = () => import('./ChangePassword.vue');
	import {mapState, mapActions} from 'vuex';
	export default {
		data() {
			return {
				date: '',
				croppieImage: '',
				cropped: null,
				stores: {},
				categories: {},
				category_id: undefined,
				search: ''
			};
		},
		components: {
			ChangePasswordModal
		},
		computed: {
			...mapState('admin', ['user']),
		},
		created() {
			this.fetch();
			this.cropped = this.user.image;
		},

		methods: {
			...mapActions('admin', ['getAll','store']),
			async fetch() {
				let {type, status} = this.$route.params;
				let params = {
					route: `api/auth/getProfile`,
					mutation: 'SET_USER',
					variable: 'data',
				};
				let {data} = await this.getAll(params);
				this.stores = data.data;

			},

			croppie(e) {
				var files = e.target.files || e.dataTransfer.files;
				if (!files.length) return;

				var reader = new FileReader();
				reader.onload = e => {
					this.$refs.croppieRef.bind({
						url: e.target.result
					});
				};
				$('#cropImagePop').modal('show');
				reader.readAsDataURL(files[0]);
			},
			crop() {
            // Options can be updated.
            // Current option will return a base64 version of the uploaded image with a size of 600px X 450px.
            let options = {
            	type: 'base64',
            	size: {width: 150, height: 200},
            	format: 'jpeg'
            };
            this.$refs.croppieRef.result(options, output => {
            	this.cropped = this.croppieImage = output;
            	$('#cropImagePop').modal('hide');
            	console.log(this.croppieImage);
            });
        },
        async updateProfile()
        {
        	let fd = new FormData(this.$refs.profileUpdate);
        	fd.append('image',this.croppieImage);
        	let params = {
        		route: 'api/auth/profile/update',
        		method: 'POST',
        		data: fd,
        	};
        	try {
        		let { data } = await this.store(params);
        		if (data.status) {
        			this.$snotify.success(data.message);
        			this.$router.push({ name: 'web.user.profile' });

        		} else {
        			this.$snotify.error('something went wrong');
        		}
        	} catch (e) {
        		if (e.response) {
        			this.$refs.adminObserver.setErrors(e.response.data.errors);
        		}
                // statements
                console.log(e);
            }
        }


    }

};

</script>