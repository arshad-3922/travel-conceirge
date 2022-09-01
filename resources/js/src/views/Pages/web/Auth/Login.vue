<template>
<section class="login">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
              <ValidationObserver  v-slot="{handleSubmit}">
			    <form @submit.prevent="handleSubmit(login)">
                    <div class="form-div">
                        <h1 class="login-heading">User Login</h1>
                        <p class="login-p mt-2">If You Have An Account, Sign In With Your Email Address.</p>
                        <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">Email Address*</label>
						<ValidationProvider tag="div" name="Email" rules="required" v-slot="{errors}">
                        <input type="email" name="email" class="all-input w-100" placeholder="Enter Email Address" v-model="form.email">
					    <span class="text-danger">{{ errors[0] }}</span>
					   </ValidationProvider>
                        <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">Password*</label>
                        <div class="position-relative">
							<ValidationProvider tag="div" name="Password" rules="required" v-slot="{errors}"> 
                            <input :type="passwordEye" name="password" class="all-input w-100 enter-input pr-5" placeholder="Enter Password" v-model="form.password">
                            <i class="enter-icon right-icon" aria-hidden="true" @click="togglePasswordEye('passwordEye','passwordClass')" :class="passwordClass"></i>
						    <span class="text-danger">{{ errors[0] }}</span>
					      </ValidationProvider>
                        </div>
                        <div class="d-sm-flex justify-content-between mt-2">
                            <p>
                                <input type="checkbox" id="c1" name="cb">
                                <label for="c1" class="login-links">Remember Me</label>
                            </p>
                            <router-link :to="{name:'web.password.email'}" class="login-links mt-sm-0 mt-2 d-inline-block"><u>Forgot Password?</u></router-link>
                        </div>
                        <button type="submit" class="yellow-btn mt-lg-5 mt-3">Login</button>
                        <p class="register-link mt-lg-5 mt-3">New Here? <span><router-link :to="{name:'web.auth.register'}">Register Your Account</router-link></span></p>
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
               passwordClass :'far fa-eye-slash',
               passwordEye: 'password',
               response: {},
               form:{
			   email: '',
               password: '',
               role: 'user',
			   },
               base_url:base_url,
               checkisLogin:''
        };
    },
    created(){
        this.checkisLogin  = localStorage.getItem('isLogin');
        if(this.checkisLogin == 0){
            this.$snotify.success(localStorage.getItem('message'))
        }
    },
    methods: {
        togglePasswordEye(passwordVar,classVar){
           this[passwordVar] = this[passwordVar] == 'password'?"text": "password";
           this[classVar] = this[passwordVar] == 'password'?"far fa-eye-slash": "far fa-eye";
       }, 
       async login(e) {
        let fd = new FormData();
		this.buildFormData(fd,this.form);
        try {
            let response = await axios.post('api/auth/login', fd);
            if (response.data.data) {
                    var data = response.data.data;
                    this.$snotify.success(response.data.message)
                    let self = this;
                    localStorage.setItem('isLoggedIn', '1');
                    localStorage.setItem('userType', 'web');
                    localStorage.setItem('access-token', data.token);
                    localStorage.setItem('name', data.name);
					localStorage.setItem('id', data.id);
                    localStorage.setItem('image', data.image);
                    setTimeout(function () {
                        window.location.reload();
                    }, 500);
                    if(localStorage.getItem('isLogin') == 0){
                    let serviceId  = localStorage.getItem('service_id');    
                    this.$router.push({ name:'web.booking.bookappointment',params:{id:serviceId}});
                    }else{
                      this.$router.push({ name:'web.account.index'});
                    }
                  }
                 else {
                 this.$snotify.error(response.data.message)

            }
            this.response = {}
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
