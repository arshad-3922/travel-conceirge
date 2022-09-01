<template>
	<section class="login">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<ValidationObserver v-slot="{ handleSubmit }">
					<form ref="newPassword" @submit.prevent="handleSubmit(onSubmit)">
						<div class="form-div">
							<h1 class="login-heading">Password Recovery</h1>
							<label for="" class="login-lbl mt-lg-5 mt-3 mb-2">New Password*</label>
							<div class="position-relative">
								<ValidationProvider name="Password" rules="required|confirmed:password_confirmation" v-slot="{errors}">
								<input :type="passwordEye" class="all-input w-100 enter-input pr-5" placeholder="Enter New Password" v-model="password">
								<span class="text-danger">{{errors[0]}}</span>
								</ValidationProvider>
								<i class="far fa-eye enter-icon right-icon" @click="togglePasswordEye('passwordEye','passwordClass')" :class="passwordClass"></i>
							</div>
							<label for="" class="login-lbl mt-lg-5 mt-3 mb-2">Confirm Password*</label>
							<div class="position-relative">
								<ValidationProvider name="Confirm Password" rules="required" vid="password_confirmation" v-slot="{errors}">
								<input :type="passwordEyeConfirmation" class="all-input w-100 enter-input-2 pr-5" placeholder="Confirm Password" v-model="confirmation">
								<i class="far fa-eye enter-icon-2 right-icon" @click="togglePasswordEye('passwordEyeConfirmation','passwordClassConfirmation')" :class="passwordClassConfirmation"></i>
								<span class="text-danger">{{errors[0]}}</span>
								</ValidationProvider>
							</div>
							<button type="submit" class="yellow-btn mt-lg-5 mt-3" data-toggle="modal" data-target="#pwd-update">Update</button>
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
		data () {
			return {
				passwordClass : 'far fa-eye-slash',
				passwordEye: 'password',
				passwordEyeConfirmation: 'password',
				passwordClassConfirmation: 'far fa-eye-slash',
				password:'',
				confirmation : '',
			};
		},

		created() {
			let email = localStorage.getItem('email');
			if (!email) {
				this.$snotify.error('Please Follow step by step to change new password', 'Forbidden!');
				this.$router.push({ name: 'admin.passwordRecovery.email' });
			}
		},
		methods: {
			togglePasswordEye(passwordVar,classVar){
			this[passwordVar] = this[passwordVar] == 'password'?"text": "password";
			this[classVar] = this[passwordVar] == 'password'?"far fa-eye-slash": "far fa-eye";
		},
			async onSubmit(e) {
				let fd = new FormData(this.$refs.newPassword); 
				fd.append('code',localStorage.getItem('code'));
				let response = await axios.post('/api/auth/new-password',fd);
				if(response.data.status){
					localStorage.removeItem('code');
					localStorage.removeItem('email');
					var self = this;
					this.$router.push({name : 'web.auth.login'});
					this.$snotify.success(response.data.msg,'Updated!');
				}else{
					this.$snotify.error(response.data.msg,'Oops!');
				}
			}
		}
	}

</script>
