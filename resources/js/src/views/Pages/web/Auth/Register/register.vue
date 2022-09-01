<template>
<section class="login">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                  <ValidationObserver  v-slot="{handleSubmit}">
			        <form @submit.prevent="handleSubmit(signup)">
                    <div class="form-div">
                        <h1 class="login-heading">Become A User</h1>
                        <p class="login-p mt-2">If You Are New Here, We Are Glad To Have You Here.</p>
                        <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">First Name*</label>
						<ValidationProvider tag="div" name="First Name" rules="required" v-slot="{errors}">
                        <input type="text" class="all-input w-100" placeholder="Enter First Name" v-model="form.first_name">
                            <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                        <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">Last Name*</label>
						<ValidationProvider tag="div" name="Last Name" rules="required" v-slot="{errors}">
                        <input type="text" class="all-input w-100" placeholder="Enter Last Name" v-model="form.last_name">
						<span class="text-danger">{{ errors[0] }}</span>
					   </ValidationProvider>
                        <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">Email Address*</label>
						<ValidationProvider tag="div" name="Email" rules="required" v-slot="{errors}">
                        <input type="email" class="all-input w-100" placeholder="Enter Email Address" v-model="form.email">
						<span class="text-danger">{{ errors[0] }}</span>
					   </ValidationProvider>
                        <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">Password*</label>
                        <div class="position-relative">
							<ValidationProvider tag="div" name="Password" rules="required" v-slot="{errors}">
                            <input :type="passwordEye" class="all-input w-100 enter-input pr-5" placeholder="Enter Password" v-model="form.password">
                            <i class="enter-icon right-icon" aria-hidden="true" @click="togglePasswordEye('passwordEye','passwordClass')" :class="passwordClass"></i>
							<span class="text-danger">{{ errors[0] }}</span>
					       </ValidationProvider>
                        </div>
                        <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">Confirm Password*</label>
                        <div class="position-relative">
							<ValidationProvider tag="div" name="Confirm Password" rules="required" v-slot="{errors}">
                            <input :type="passwordEyee" class="all-input w-100 enter-input-2 pr-5" placeholder="Confirm Password" v-model="form.passwordConfirmation">
                            <i class="enter-icon right-icon" aria-hidden="true" @click="togglePasswordEyee('passwordEyee','passwordClasss')" :class="passwordClasss"></i>
							<span class="text-danger">{{ errors[0] }}</span>
					       </ValidationProvider>
                        </div>
                        <button type="submit" class="yellow-btn mt-lg-5 mt-3">Sign Up</button>
                        <p class="register-link mt-lg-5 mt-3">Already Have An Account? <span><router-link :to="{name:'web.auth.login'}">Log In</router-link></span></p>
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
			   passwordClasss :'far fa-eye-slash',
               passwordEyee: 'password',
               response: {},
               form:{
                role: 'user'   
			   },
               base_url:base_url
        };
    },
    methods: {
        togglePasswordEye(passwordVar,classVar){
           this[passwordVar] = this[passwordVar] == 'password'?"text": "password";
           this[classVar] = this[passwordVar] == 'password'?"far fa-eye-slash": "far fa-eye";
       },
	     togglePasswordEyee(passwordVar,classVar){
           this[passwordVar] = this[passwordVar] == 'password'?"text": "password";
           this[classVar] = this[passwordVar] == 'password'?"far fa-eye-slash": "far fa-eye";
       },
       async signup() {
        let fd = new FormData();
		this.buildFormData(fd,this.form)
        try {
            let response = await axios.post('api/auth/register',fd);
            if (response.data.data) {
                var data = response.data.data;
                this.$snotify.success(response.data.message)
                let self = this;
                setTimeout(function () {
                    //window.location.reload();
                         self.$router.push({name:'web.auth.login'});
                    }, 2000);
            } else {
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
