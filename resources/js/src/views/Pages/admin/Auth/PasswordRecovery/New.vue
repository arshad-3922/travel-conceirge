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
                                    <p>Kindly enter the new password</p>
                                </div>
                            </div>
                               <ValidationObserver  v-slot="{handleSubmit}">
                                 <form @submit.prevent="handleSubmit(onSubmit)">
                                <div class="form-group position-relative mt-3">
                                    <label for="">New Password<span class="fc-orange">*</span></label>
                                    <div class="position-relative">
                                        <ValidationProvider tag="div" name="New Password" rules="required" v-slot="{errors}">
                                        <input :type="passwordEye" class="form-control enter-input" placeholder="Enter New Password" v-model="password">
                                        <button class="modal-eye-btns  position-absolute" type="button">
                                          <i class="enter-icon-1 right-icon" aria-hidden="true" @click="togglePasswordEye('passwordEye','passwordClass')" :class="passwordClass"></i>
                                        </button>
                                        <span class="text-danger">{{ errors[0] }}</span>
                                      </ValidationProvider>   
                                    </div>
                                </div>
                                <div class="form-group position-relative">
                                    <label for="">Confirm Password<span class="fc-orange">*</span></label>
                                    <div class="position-relative">
                                        <ValidationProvider tag="div" name="New Password" rules="required" v-slot="{errors}">
                                        <input :type="passwordEyee" class="form-control enter-input" placeholder="Enter New Password" v-model="password_confirmation">
                                        <button class="modal-eye-btns  position-absolute" type="button">
                                          <i class="enter-icon-1 right-icon" aria-hidden="true"   @click="togglePasswordEyee('passwordEyee','passwordClasss')" :class="passwordClasss"></i>
                                        </button>
                                        <span class="text-danger">{{ errors[0] }}</span>
                                      </ValidationProvider>   
                                    </div>
                                </div>
                                <div class="text-center mt-3 mb-3">
                                    <button type="submit" class="btn btn-primary btn-large">
                                        update
                                    </button>
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
            password: '',
            password_confirmation: '',
            passwordClass : 'far fa-eye-slash',
            passwordEye: 'password',
            passwordClasss : 'far fa-eye-slash',
            passwordEyee: 'password',
            base_url:baseUrl
        };
    },
    methods: {
        togglePasswordEye(passwordVar,classVar){
           this[passwordVar] = this[passwordVar] == 'password'?"text": "password";
           this[classVar] = this[passwordVar]    == 'password'?"far fa-eye-slash": "far fa-eye";
       },
       togglePasswordEyee(passwordVar,classVar){
           this[passwordVar] = this[passwordVar] == 'password'?"text": "password";
           this[classVar] = this[passwordVar]    == 'password'?"far fa-eye-slash": "far fa-eye";
       },
        async onSubmit(e) {
            let fd = new FormData();
            this.buildFormData(fd, this.$data);
            fd.append('email',localStorage.getItem('email'));
            let response = await axios.post('api/auth/changePassword', fd);
            console.log(response.data);
            if(response.data.status != 'Failed') {
                this.$snotify.success(response.data.message);
                this.$router.push({name:'admin.auth.login'});
            }else{
                this.$snotify.error(response.data.message);
            }
        }
    }
}

</script>
