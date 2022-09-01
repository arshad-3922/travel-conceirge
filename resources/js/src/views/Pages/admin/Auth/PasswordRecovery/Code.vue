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
                                    <p>Kindly enter your verification code</p>
                                </div>
                            </div>
                             <ValidationObserver v-slot="{handleSubmit}">
                              <form @submit.prevent="handleSubmit(onSubmit)">  
                                <div class="form-group mt-3">
                                    <label for="">Verification Code<span class="fc-orange">*</span></label>
                                    <ValidationProvider tag="div" name="Verification Code" rules="required" v-slot="{errors}">
                                    <input type="text" class="form-control" placeholder="Enter Verification Code" v-model="code">
                                    <span class="text-danger">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="text-right">
                                    <a href="javascript:void(0)" @click="onResend"><u>Resend Code</u></a>
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
            isSending: false,
            code: '',
            base_url:baseUrl
        };
    },
    methods: {
        async onResend(e) {
            let fd = new FormData();
            fd.append('email', localStorage.getItem('email'));
            if (!this.isSending) {
                this.isSending = true;
                let response = await axios.post(route('admin.password.verify'), fd);
                if (response.data.status) {
                    let self = this;
                    this.isSending = false;
                    setTimeout(function () {
                        self.$snotify.success(response.data.msg);
                    }, 1000);
                } else {
                    this.$snotify.error(response.data.msg);
                }
            } else {
                this.$snotify.error('already sending', 'Please Wait!');
            }
        },
        async onSubmit(e) {
            localStorage.setItem('code',this.code);
            let fd = new FormData(this.$refs.validateCode);
            fd.append('email', localStorage.getItem('email'));
            fd.append('code', this.code);
            try {
                let response = await axios.post('api/auth/verify/code', fd);
                if (response.data.status) {
                    this.$snotify.success(response.data.message);
                    this.$router.push({ name:'admin.passwordRecovery.changePassword'});
                } else {
                    this.$snotify.error(response.data.message, 'Invalid Code');
                }
            } catch (e) {
                if (e.response) {
                    this.$refs.codeObserver.setErrors(e.response.data.errors);
                }
                console.log(e);
            }
        }
    }
}

</script>
