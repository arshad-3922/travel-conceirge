<template>
<section class="login">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
              <ValidationObserver v-slot="{ handleSubmit }">
				  <form ref="CategoryForm" @submit.prevent="handleSubmit(sendRequestForm)">
                    <div class="form-div">
                        <h1 class="login-heading">Request for a Booking</h1>
                        <div class="row">
                            <div class="col-lg-6">
                                <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">First Name*</label>
                                <ValidationProvider name="First Name" rules="required" v-slot="{ errors }">
                                <input type="text" class="all-input w-100" placeholder="Enter First Name" v-model="request.first_name">
                                <span class="text-danger">{{ errors[0] }}</span>
								</ValidationProvider>
                            </div>
                            <div class="col-lg-6">
                                <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">Last Name*</label>
                                 <ValidationProvider name="Last Name" rules="required" v-slot="{ errors }">
                                <input type="text" class="all-input w-100" placeholder="Enter Last Name" v-model="request.last_name">
                                <span class="text-danger">{{ errors[0] }}</span>
								</ValidationProvider>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">Email Address*</label>
                                <ValidationProvider name="Email Address" rules="required" v-slot="{ errors }">
                                <input type="email" class="all-input w-100" placeholder="Enter Email Address" v-model="request.email">
                                 <span class="text-danger">{{ errors[0] }}</span>
								</ValidationProvider>
                            </div>
                            <div class="col-lg-6">
                                <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">Phone*</label>
                                <ValidationProvider name="Phone Number" rules="required" v-slot="{ errors }">
                                <input type="number" class="all-input w-100" placeholder="Enter Phone" v-model="request.phone_number">
                                <span class="text-danger">{{ errors[0] }}</span>
								</ValidationProvider>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">Preferred Contact Method*</label>
                                 <ValidationProvider name="Contact Method" rules="required" v-slot="{ errors }">
                                   <select name="" id="" class="all-input w-100" v-model="request.contact_method">
                                    <option value="phone">Phone</option>
                                    <option value="email">Email</option>
                                   </select>
                                   <span class="text-danger">{{ errors[0] }}</span>
								</ValidationProvider>
                            </div>
                            <div class="col-lg-6">
                                <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">Preferred Day For Contact*</label>
                                <ValidationProvider name="Day For Contact" rules="required" v-slot="{ errors }">
                                 <select name="" id="" class="all-input w-100" v-model="request.contact_day">
                                   <option v-for="day of days"   :key="day"   :value="day">{{day}}</option>
                                </select>
                                <span class="text-danger">{{ errors[0] }}</span>
								</ValidationProvider>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">Preferred Time For Contact*</label>
                                <ValidationProvider name="Time For Contact" rules="required" v-slot="{ errors }">
                                <input type="time" class="all-input w-100" placeholder="E.g 11:00 AM" v-model="request.contact_time">
                                <span class="text-danger">{{ errors[0] }}</span>
								</ValidationProvider>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">Message*</label>
                                <textarea name="" id="" rows="8" class="all-input w-100" placeholder="Enter Your Message Here" v-model="request.message"></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 mt-2">
                                <p>
                                    <ValidationProvider name="Policy" rules="required" v-slot="{ errors }">
                                    <input type="checkbox" id="c1" name="cb" value="yes" v-model="request.policy">
                                    <label for="c1" class="login-links">I agreed to privacy & policy</label>
                                    <br />
                                     <span class="text-danger">{{ errors[0] }}</span>
								    </ValidationProvider>
                                </p>
                            </div>
                        </div>
                        <button type="submit" class="yellow-btn mt-lg-5 mt-3">Submit</button>
                    </div>
                </form>
              </ValidationObserver>
            </div>
        </div>
    </div>
</section>
</template>
<script>
    export default{
       data() {
        return {
           request:{},
           days:['Monday','Tuesday','Wednesday','Thrusday','Friday','Satarday','Sunday'], 
        };
    },
    methods:{
        async sendRequestForm(){
            let fd = new FormData();
            this.buildFormData(fd, this.request);
            let response = await axios.post('api/web/request', fd);
            if (response.data.status != 422) {
					this.$snotify.success(response.data.message);
                    this.$router.push({name: 'web.home.index'});    
					this.$refs.applicationForm.reset();
						
					} else {
						this.$snotify.error(response.data.message)
					}
            
        }
    }
}
</script>
