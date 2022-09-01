<template>
<div>
	<!-- Banner -->
<section class="inner-banner">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 position-rlative">
                <img :src="base_url+`/assets/web/images/inner-banner.png`" alt="" class="img-fluid w-100">
                <h1 class="inner-banner-heading">Update Password</h1>
            </div>
        </div>
    </div>
</section>
<!-- Banner -->
<section>
    <div class="container">
        <div class="row my-lg-5 my-3">
            <div class="col-lg-10 mx-auto">
				<ValidationObserver  v-slot="{handleSubmit}">
                <form @submit.prevent="handleSubmit(onSubmit)">
                <div class="row">
                    <div class="col-lg-4 mt-lg-0 mt-2">
                        <label for="" class="blue-lbl mb-2">Current Password:</label>
                        <div class="position-relative">
						    <ValidationProvider tag="div" name="Current Password" rules="required" v-slot="{errors}">
                            <input :type="passwordEye" class="all-input w-100 enter-input pr-5" placeholder="Enter Current Password" v-model="form.old_password">
                            <i class="enter-icon-2 right-icon" aria-hidden="true" @click="togglePasswordEye('passwordEye','passwordClass')" :class="passwordClass"></i>
						    <span class="text-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                    </div>
                    <div class="col-lg-4 mt-lg-0 mt-2">
                        <label for="" class="blue-lbl mb-2">New Password:</label>
                        <div class="position-relative">
				           <ValidationProvider tag="div" name="New Password" rules="required" v-slot="{errors}">
                            <input :type="passwordEyee" class="all-input w-100 enter-input-2 pr-5" placeholder="Enter New Password" v-model="form.new_password">
                            <i class="enter-icon-2 right-icon" aria-hidden="true" @click="togglePasswordEyee('passwordEyee','passwordClasss')" :class="passwordClasss"></i>
							<span class="text-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                    </div>
                    <div class="col-lg-4 mt-lg-0 mt-2">
                        <label for="" class="blue-lbl mb-2">Confirm Password:</label>
                        <div class="position-relative">
							<ValidationProvider tag="div" name="Confirm Password" rules="required" v-slot="{errors}">
                            <input :type="passwordEyeee" class="all-input w-100 enter-input-3 pr-5" placeholder="Confirm Password" v-model="form.password_confirmation">
                            <i class="enter-icon-2 right-icon" aria-hidden="true" @click="togglePasswordEyeee('passwordEyeee','passwordClassss')" :class="passwordClassss"></i>
						    <span class="text-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="row mt-lg-4">
                    <div class="col-12 mt-lg-0 mt-2 text-center">
                        <button type="submit" class="d-inline-block yellow-btn">Update</button>
                    </div>
                </div>
				</form>
				</ValidationObserver>
            </div>
        </div>
    </div>

</section>
</div>
</template>
<script>
	export default{
		data () {
		  return {
		    form:{
                old_password:'',
                new_password:'',
                password_confirmation:''
            },
            passwordClass : 'far fa-eye-slash',
            passwordEye: 'password',
            passwordClasss : 'far fa-eye-slash',
            passwordEyee: 'password',
            passwordClassss : 'far fa-eye-slash',
            passwordEyeee: 'password',
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
      togglePasswordEyeee(passwordVar,classVar){
           this[passwordVar] = this[passwordVar] == 'password'?"text": "password";
           this[classVar] = this[passwordVar]    == 'password'?"far fa-eye-slash": "far fa-eye";
       },
		async onSubmit() {
		  	let fd = new FormData();
		  	this.buildFormData(fd,this.form);
		    let response = await axios.post('api/auth/user/changePassword',fd);
			if(response.data.data == true){
            setTimeout(function () {
            window.location.reload();
            }, 2000);  
            this.$router.push({name:'web.account.index'});   
			this.$snotify.success(response.data.message);
			}else if(response.data.data == false){
            this.$snotify.error(response.data.message);
            }
		  	
		  }
		}
	}
</script>
