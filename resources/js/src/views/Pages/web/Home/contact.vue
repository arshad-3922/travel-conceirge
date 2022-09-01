<template>
<section class="login">
    <div class="container">
        <div class="row">
            <div class="col-lg-7">
              	<ValidationObserver v-slot="{ handleSubmit }">
				  <form ref="CategoryForm" @submit.prevent="handleSubmit(sendContactForm)">
                    <div class="form-div">  
                        <!-- <h1 class="login-heading">Contact Us</h1> -->
                         <h1 class="login-heading">Got Any Queries? Fill the form below!</h1>
                        <p class="login-p my-2">Contact Us For Best Services</p>
                      
                        <div class="row">
                            <div class="col-lg-6">
                                <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">First Name*</label>
                                <ValidationProvider name="First Name" rules="required" v-slot="{ errors }">
                                <input type="text" class="all-input w-100" placeholder="Enter First Name" v-model="contact.first_name">
                                <span class="text-danger">{{ errors[0] }}</span>
								</ValidationProvider>
                            </div>
                            <div class="col-lg-6">
                                <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">Last Name*</label>
                                 <ValidationProvider name="Last Name" rules="required" v-slot="{ errors }">
                                <input type="text" class="all-input w-100" placeholder="Enter Last Name" v-model="contact.last_name">
                                <span class="text-danger">{{ errors[0] }}</span>
								</ValidationProvider>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">Email Address*</label>
                                <ValidationProvider name="Email Address" rules="required" v-slot="{ errors }">
                                <input type="email" class="all-input w-100" placeholder="Enter Email Address" v-model="contact.email">
                                 <span class="text-danger">{{ errors[0] }}</span>
								</ValidationProvider>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">Subject*</label>
                                 <ValidationProvider name="Subject" rules="required" v-slot="{ errors }">
                                <input type="text" class="all-input w-100" placeholder="Enter Subject" v-model="contact.subject">
                                <span class="text-danger">{{ errors[0] }}</span>
								</ValidationProvider>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">Message*</label>
                                 <ValidationProvider name="Message" rules="required" v-slot="{ errors }">
                                 <textarea name="" id="" rows="8" class="all-input w-100" v-model="contact.message" placeholder="Enter Your Message Here"></textarea>
                                <span class="text-danger">{{ errors[0] }}</span>
								</ValidationProvider>
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
           contact:{}
        };
    },
    methods:{
        async sendContactForm(){
            let fd = new FormData();
            this.buildFormData(fd, this.contact);
            let response = await axios.post('api/contactUs', fd);
            if (response){
                var data = response.data.data;
                this.$snotify.success(response.data.message)
                 setTimeout(function () {
                        window.location.reload();
                 }, 2000)
                
            } else {
                this.$snotify.error(response.data.message)
            }
        }
    }
}
</script>
