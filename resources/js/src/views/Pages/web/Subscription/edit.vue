<template>

        <div class="content-wrapper">
            <div class="content-body">
                <!-- Basic form layout section start -->
                <section id="configuration">
                    <div class="row">
                        <div class="col-12">
                            <div class="card my-5 mx-2">
                                <div class="card-content collapse show">
                                    <div class="card-dashboard">
                                        <div class="row">
                                            <div class="col-12">
                                                <h3 class="semi-bold d-grey-text"><a href="package-subscribers.php" class="fas d-grey-text fa-angle-left mr-1"></a>Package Edit User</h3>
                                            </div>
                                            <div class="col-lg-6 pb-5 mt-3 ml-2">
<!--<img src="images/image-download.png" alt="" class="img-fluid service-details-img">-->
                                                <ValidationObserver v-slot="{ handleSubmit }">
                                                    <form ref="SubscriptionForm" @submit.prevent="handleSubmit(update)">
                                                    <div class="row">
                                                        <div class="col-xl-4 mt-1 col-sm-6">
                                                            <p class="black-text mb-0 semi-bold">Package Name:</p>
                                                        </div>
                                                        <div class="col-lg-10 mt-1">
                                                            <input type="text" class="site-input" name="name" v-model="editSubscriptions.name">
                                                        </div>
                                                        <div class="col-xl-4 mt-1 col-sm-6">
                                                            <p class="black-text mb-0 semi-bold">Package ID:</p>
                                                        </div>
                                                        <div class="col-xl-4 mt-1 col-sm-6">
                                                            <p class="grey-text mb-0 semi-bold">{{editSubscriptions.id }}</p>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-xl-4 mt-1 col-sm-6">
                                                            <p class="black-text mb-0 semi-bold">Validity Period(Months):</p>
                                                        </div>
                                                        <div class="col-lg-10 mt-1">
                                                            <input type="text" class="site-input" name="duration" v-model="editSubscriptions.duration">
                                                        </div>
                                                        <div class="col-xl-4 mt-1 col-sm-6">
                                                            <p class="black-text mb-0 semi-bold">Date Added:</p>
<!--                                                            <p class="black-text mt-1 mb-0 semi-bold">Expiration Date:</p>-->
                                                        </div>
                                                        <div class="col-xl-4 mt-1 col-sm-6">
                                                            <p class="grey-text mb-0 semi-bold">{{ formatDate(editSubscriptions.created_at) }}</p>
<!--                                                            <p class="grey-text mt-1 mb-0 semi-bold">mm/dd/yyyy</p>-->
                                                        </div>
                                                        <div class="col-12 mt-2">
                                                            <button type="submit" class="login-btn site-btn px-3">Update</button>
                                                        </div>
                                                    </div>
                                                    </form>
                                                </ValidationObserver>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>









    <!-- <div class="content-wrapper">
		<div class="content-body">

			<section id="configuration">
				<div class="row">
					<div class="col-12">
						<div class="card">
							<div class="card-content collapse show">
								<div class="card-dashboard pb-1">
									<div class="row px-2">
										<router-link :to="{name: 'admin.subscriptions.index'}"><h3 class="mb-2 d-blue-text bold"><i class="fas fa-angle-left"></i> Subscription</h3></router-link>
									</div>
								</div>
								<div class="clearfix"></div>
								<div class="clearfix"></div>
								<ValidationObserver v-slot="{ handleSubmit }">
									<form ref="SubscriptionForm" @submit.prevent="handleSubmit(update)">
										<div class="card-dashboard pt-0">
											<div class="row">
												<div class="col-md-6 mt-2">
													<p class="p-lg black-text">Name</p>
													<input type="text" name="name" v-model='editSubscriptions.name' class="site-input" placeholder="Basic" id="">
												</div>
												<div class="col-md-6 mt-2">
													<p class="p-lg black-text">Price</p>
													<input type="text" name="price" v-model="editSubscriptions.price" class="site-input" placeholder="€123" id="">
												</div>
												<div class="col-md-6 mt-2">
													<p class="p-lg black-text">Status</p>
													<select name="status" v-model="editSubscriptions.status" class="w-100 site-input">
														<option value="1">Reoccuring</option>
														<option value="0">New</option>
													</select>
												</div>
												<div class="col-12 mt-2">
													<p class="p-lg black-text">Description</p>
													<textarea row="10" class="black-text w-100 p-bg pb-5 pt-1" name="description" v-model="editSubscriptions.description"></textarea>
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
	</div> -->
</template>
<script>
	import {mapActions, mapState} from 'vuex';
	export default {
		data() {
			return {
				editSubscriptions: {},
				name: '',
				price:'',
				status:'',
				description:'',

			};
		},
		async created() {
			await this.getSubscriptions();
		},
		methods: {
			...mapActions('admin', ['store']),
			async getSubscriptions() {
				this.editSubscriptions = (await axios.get(`/api/subscription/${this.$route.params.id}`)).data.data;
			},
			async update() {

				let fd = new FormData(this.$refs.SubscriptionForm);
				let params = {
					route: `api/subscription/update/${this.$route.params.id}`,
					method: 'POST',
					data: fd,
				};
				try {
					let {data} = await this.store(params);

					if (data.data) {
						this.$snotify.success(data.message);
						this.$router.push({name: 'admin.subscriptions.index'});
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

        },

    }
}
</script>
