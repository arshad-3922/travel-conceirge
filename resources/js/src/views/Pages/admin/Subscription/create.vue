<template>
<div class="app-content content dashboard">
     <div class="content-wrapper">
          <div class="content-body">
               <section id="configuration">
                    <div class="row">
                         <div class="col-12">
                              <div class="card p-xl-4 p-2">
                                   <div class="row mb-2">
                                        <div class="col-xl-12">
                                             <div class="d-flex align-items-center">
                                                  <img :src="base_url+`/assets/admin/images/go-back.png`" class="go_back_link mr-1" alt="goBack">
                                                  <h1 class="fw-600 fc-black main-heading">
                                                       Add Subscription Packages
                                                  </h1>
                                             </div>
                                        </div>
                                   </div>
                                        <ValidationObserver v-slot="{handleSubmit}">
                       					<form ref="PackageEditForm" @submit.prevent="handleSubmit(createSubscription)">
                                        <div class="main-box px-md-5 primaryBorder primaryBorderRadius">
                                             <div class="row">
                                                  <div class="col-lg-6">
                                                       <div class="mb-3">
                                                            <label class="primary_heading pl-md-2 mb-1" for="packageName*">Package Name <span class="req-color">*</span> </label>
															<ValidationProvider  name="Package Name" rules="required" v-slot="{ errors }">
														    <input type="text" class="w-100 primary-input-filed" v-model="subscription.name">
														    <span class="text-danger">{{ errors[0] }}</span>
                                							</ValidationProvider>
													   </div>	
                                                  </div>
                                                  <div class="col-lg-6">
                                                       <div class="mb-3">
                                                            <label class="primary_heading pl-md-2 mb-1" for="amount">Amount<span class="req-color">*</span> </label>
												<ValidationProvider  name="Amount" rules="required" v-slot="{ errors }">
                                                            <input type="number" class="w-100 primary-input-filed"  v-model="subscription.amount">
												            <span class="text-danger">{{ errors[0] }}</span>
                                							</ValidationProvider>
													   </div>
                                                  </div>
                                                  <div class="col-lg-6">
                                                       <div class="mb-3">
                                                            <label class="primary_heading pl-md-2 mb-1" for="amount">Select Validity<span class="req-color">*</span> </label>
                                                            <ValidationProvider  name="Validity" rules="required" v-slot="{ errors }">     
                                                            <select name="" id="" v-model="subscription.duration" class="w-100 primary-input-filed">
                                                                 <option value="1">One Month</option>
                                                                 <option value="3">Three Month</option>
                                                                 <option value="6">Six Month</option>
                                                            </select>
                                                                 <span class="text-danger">{{ errors[0] }}</span>
                                						</ValidationProvider>
                                                       </div>
                                                  </div>
                                                  <div class="col-lg-6">
                                                       <div class="mb-3 position-relative">
                                                            <label class="primary_heading pl-md-2 mb-1" for="amount">Add Features <span class="req-color">*</span> </label>
                                                            <ValidationProvider  name="Features" rules="required" v-slot="{ errors }">     
                                                            <input-tag v-model="subscription.features" class="w-100 primary-input-filed"></input-tag>
                                                            <span class="text-danger">{{ errors[0] }}</span>
                                						</ValidationProvider>
                                                            <!-- <button class="no_btn"><i class="fas fa-plus-circle"></i></button> -->
                                                       </div>
                                                  </div>
                                                  <div class="col-lg-12">
                                                       <div class="mb-3">
                                                            <label class="primary_heading pl-md-2 mb-1" for="subscription">Subscription Note (Optional)</label>
                                                            <textarea class="d-block w-100 p-2  primary-input-filed" placeholder="Enter Subscription Note" name="text" rows="5" v-model="subscription.description"></textarea>
                                                       </div>
                                                  </div>
                                                  <button type="submit" class="btn btn-purple sec-btn">ADD</button>
                                             </div>
                                        </div>
                                   </form>
								</ValidationObserver>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     </div>
</div>
</template>
<script>
     import InputTag from 'vue-input-tag';
	import {mapActions, mapState} from 'vuex';
	export default {
		data() {
			return {
				base_url:baseUrl,
			};
		},
          components:{InputTag},
		computed:{
			...mapState('admin',['subscription'])
		},
		methods: {
			...mapActions('admin', ['store']),
			async createSubscription() {
				let params = {
					route: `api/subscriptions/create`,
					method: 'POST',
					data: this.subscription,
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
            }

        },

    }
}
</script>
