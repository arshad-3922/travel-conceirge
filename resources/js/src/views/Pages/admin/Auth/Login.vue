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
                                    <h2>LOGIN</h2>
                                </div>
                                <div class="col-lg-8 text-center">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Aenean euismod</p>
                                </div>
                            </div>
                               <ValidationObserver  v-slot="{handleSubmit}">
                               <form @submit.prevent="handleSubmit(login)">
                                <div class="form-group mt-3">
                                    <label for="">Email Address<span class="fc-orange">*</span></label>
                                    <ValidationProvider tag="div" name="Email" rules="required" v-slot="{errors}">
                                    <input type="text" class="form-control" placeholder="Enter Email Address" v-model="form.email">
                                    <span class="text-danger">{{ errors[0] }}</span>
                                   </ValidationProvider>
                                </div>
                                <div class="form-group">
                                    <label for="">Password<span class="fc-orange">*</span></label>
                                    <div class="position-relative">
                                        <ValidationProvider tag="div" name="Password" rules="required" v-slot="{errors}">
                                        <input :type="passwordEye" class="form-control enter-input" placeholder="Enter Password" v-model="form.password">
                                        <button class="modal-eye-btns  position-absolute" type="button">
                                         <i class="enter-icon right-icon" aria-hidden="true"  @click="togglePasswordEye('passwordEye','passwordClass')" :class="passwordClass"></i>
                                        </button>
                                        <span class="text-danger">{{ errors[0] }}</span>
                                       </ValidationProvider>
                                    </div>
                                </div>
                                <div class="text-right">
                                <router-link :to="{name:'admin.passwordRecovery.email'}" class="forgot-pwdd">Forgot Password?</router-link>
                                </div>
                                <div class="text-center mt-3 mb-3">
                                    <button type="submit" class="btn btn-primary btn-large">
                                        Login
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
               base_url:baseUrl, 
               passwordClass : 'far fa-eye-slash',
               passwordEye: 'password',
               response: {},
               form: {
                email: '',
                password: '',
                role: 'admin'
            }
        };
    },
    methods: {
        togglePasswordEye(passwordVar,classVar){
           this[passwordVar] = this[passwordVar] == 'password'?"text": "password";
           this[classVar] = this[passwordVar]    == 'password'?"far fa-eye-slash": "far fa-eye";
       },
        async login(e) {
            let fd = new FormData();
            this.buildFormData(fd, this.form);
            try {
                let response = await axios.post('api/auth/login', fd);
                if (response.data.data) {
                    var data = response.data.data;
                    this.$snotify.success(response.data.message)
                    localStorage.setItem('isLoggedIn', '1');
                    localStorage.setItem('userType', 'admin');
                    localStorage.setItem('access-token', data.token);
                    localStorage.setItem('name', data.name);
                    this.$router.push({name:'admin.dashboard'});
                    setTimeout(function () {
                        window.location.reload();
                        this.$router.push({name:'admin.dashboard'});
                    }, 500);
                } else {
                    this.$snotify.error(response.data.message)
                }
               } catch (e) {
                if (e.response) {
                    this.response = e.response.data
                }
                console.log(e);
            }
        }
    }
}

</script>
