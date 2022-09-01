<template>
<section class="login">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <ValidationObserver v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(onSubmit)">
                    <div class="form-div">
                        <h1 class="login-heading">Password Recovery</h1>
                        <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">Verification Code*</label>
                        <ValidationProvider name="code" rules="required"  v-slot="{ errors }">
                        <input type="number" class="all-input w-100" placeholder="Enter Verification Code" v-model="code">
                        <span class="text-danger">{{errors[0]}}</span>
						</ValidationProvider>
                        <div class="text-right mt-2">
                            <a href="javascript:void(0)" class="login-links mt-sm-0 mt-2 d-inline-block" @click="onResend"><u>Resend Code</u></a>
                        </div>
                        <button class="yellow-btn mt-lg-5 mt-3">Continue</button>
                        <router-link :to="{name:'web.auth.login'}" class="register-link mt-lg-5 mt-3 d-block">Back To Log In</router-link>
                    </div>
                </form>
                </ValidationObserver>
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
            code : '',
            email: ''
        };
    },
    created() {
        let email = localStorage.getItem('email');
        if (!email) {
            this.$snotify.error('Please Follow the first step & verify your email', 'Forbidden!');
            this.$router.push({ name: 'ForgetPassword'});
        }
    },
    methods: {
        async onResend(e) {
            let fd = new FormData();
            fd.append('email', localStorage.getItem('email'));
            if (!this.isSending) {
                this.isSending = true;
                let response = await axios.post('/api/auth/send/email', fd);
                if (response.data.data) {
                    let self = this;
                    this.isSending = false;
                    setTimeout(function() {
                        self.$snotify.success(response.data.message);
                    }, 1000);
                } else {
                    this.$snotify.error(response.data.message);
                }
            } else {

                this.$snotify.error('already sending', 'Please Wait!');
            }
        },
        async onSubmit(e) {
            let fd = new FormData();
            fd.append('code',this.code);
            let response = await axios.post('/api/auth/verify/code',fd);
            if(response.data.data){
                localStorage.setItem('code', this.code);
                var self = this;
                this.$router.push({name : 'web.password.newpassword'});
                this.$snotify.success(response.data.message,'Verified');

            }else{
                this.$snotify.error(response.data.message,'Invalid Code');
            }
        }
    }
}

</script>
