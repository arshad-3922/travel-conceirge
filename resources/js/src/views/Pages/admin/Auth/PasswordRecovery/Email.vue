<template>
<section class="loginMain">
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-11">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="loginCard px-lg-4 px-2 py-5 my-5">
                            <div class="row justify-content-center">
                                <div class="col-lg-12 text-center mt-2">
                                    <h2>Forgot Password</h2>
                                </div>
                                <div class="col-lg-8 text-center">
                                    <p>Kindly enter your email address to change
                                        the password.</p>
                                </div>
                            </div>
                                <ValidationObserver ref="verifyObserver" tag="fieldset" v-slot="{handleSubmit}">
                                <form  @submit.prevent="handleSubmit(submit)">
                                <div class="form-group mt-3">
                                    <label for="">Email Address<span class="fc-orange">*</span></label>
                                     <ValidationProvider tag="div" name="Email Address" rules="required|email" v-slot="{errors}">
                                        <input type="text" class="form-control" placeholder="Enter Email Address" v-model="email">
                                       <span class="text-danger">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="text-center mt-3">
                                    <button type="submit" class="btn btn-primary btn-large">
                                        Continue
                                    </button>
                                </div>
                                <div class="text-center mt-5 mb-4">
                                    <router-link :to="{name:'admin.auth.login'}" class="fc-black"><u>Back To Login</u></router-link>
                                </div>
                            </form>
                            </ValidationObserver>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            base_url:baseUrl
        };
    },
    methods: {
        async submit(e) {
            let fd = new FormData();
            fd.append('email', this.email);
            localStorage.setItem('email',this.email);
            try {
                let response = await axios.post('api/auth/send/email', fd);
                if (response.data.status) {
                    this.$snotify.success(response.data.message);
                    this.$router.push({ name:'admin.passwordRecovery.codeVerify'});
                    
                } else {
                    this.$snotify.error(response.data.message);
                }
            } catch (e) {
                
                if (e.response) {
                    this.$refs.verifyObserver.setErrors(e.response.data.errors);
                }
                console.log(e);
            }
        }
    }
}

</script>
