<template>
<div class="modal fade" id="change-password-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <button type="button" class="btn-close close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <div class="modal-body ">
                    <ValidationObserver  v-slot="{handleSubmit}">
                    <form @submit.prevent="handleSubmit(onSubmit)">
                    <div class="text-center mb-2">
                        <h4 class="fw-600 modal-primary-heading">Change Password</h4>
                    </div>
                    <div class="mb-1">
                        <label class="primary_heading fw-400" for="packageName*">Current Password* </label>
                        <div class="position-relative form-group passwordWrapper">
                            <ValidationProvider tag="div" name="Current Password" rules="required" v-slot="{errors}">
                            <input :type="passwordEye" class="w-100 primary-input-filed confirm-input" v-model="form.old_password" placeholder="Enter Current Password">
                            <button type="button" class="modal-eye-btns  position-absolute">
                            <i class="enter-icon-1 right-icon" aria-hidden="true" @click="togglePasswordEye('passwordEye','passwordClass')" :class="passwordClass"></i>
                            </button>
                            <span class="text-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                    </div>
                    <div class="mb-1">
                        <label class="primary_heading fw-400" for="packageName*">New Password* </label>
                        <div class="position-relative passwordWrapper">
                            <ValidationProvider tag="div" name="New Password" rules="required" v-slot="{errors}">
                            <input :type="passwordEyee" class="w-100 primary-input-filed current-input" v-model="form.new_password" placeholder="Enter New Password">
                            <button type="button" class="modal-eye-btns  position-absolute">
                            <i class="enter-icon-1 right-icon" aria-hidden="true" @click="togglePasswordEyee('passwordEyee','passwordClasss')" :class="passwordClasss"></i>
                            </button>
                            <span class="text-danger">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="mb-1">
                        <label class="primary_heading fw-400" for="packageName*">Confirm Password </label>
                        <div class="position-relative passwordWrapper">
                            <ValidationProvider tag="div" name="Confirm Password" rules="required" v-slot="{errors}">
                            <input :type="passwordEyeee" class="w-100 primary-input-filed enter-input" v-model="form.password_confirmation" placeholder="Confirm Password">
                            <button type="button" class="modal-eye-btns  position-absolute">
                            <i class="enter-icon-1 right-icon" aria-hidden="true" @click="togglePasswordEyeee('passwordEyeee','passwordClassss')" :class="passwordClassss"></i>
                            </button>
                               <span class="text-danger">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="text-center mt-3">
                        <button type="submit" class="btn btn-purple modal-primary-btn">Update</button>
                    </div>
                </form>
              </ValidationObserver>
            </div>
        </div>
    </div>
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
		    let response = await axios.post('api/auth/AdminChangePassword',fd);
			if(response.data.data == true){
            setTimeout(function () {
            window.location.reload();
            }, 2000);  
            this.$router.push({name:'admin.account.index'});   
			this.$snotify.success(response.data.message);
			}else if(response.data.data == false){
            this.$snotify.error(response.data.message);
            }
		  	
		  }
		}
	}
</script>
