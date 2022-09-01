<template>
	<section class="login">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<ValidationObserver v-slot="{ handleSubmit }">
					<form ref='forgotEmail' @submit.prevent="handleSubmit(sendEmail)">
						<div class="form-div">
							<h1 class="login-heading">Password Recovery</h1>
							<label for="" class="login-lbl mt-lg-5 mt-3 mb-2">Email Address*</label>
						    <ValidationProvider name="Email Address" rules="required|email" v-slot="{ errors }">
							<input type="email" class="all-input w-100" placeholder="Enter Email Address" v-model="email">
							<span class="text-danger">{{errors[0]}}</span>
							</ValidationProvider>
							<br />
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
		data () {
			return {
				email:'',
			};
		},
		methods: {
			async sendEmail() {
				let fd = new FormData();
				fd.append('email',this.email);
				let response = await axios.post('/api/auth/send/email',fd);      
				if(response.data.data){
					localStorage.setItem('email',this.email);
					this.$router.push({ name: 'web.password.code' });
					this.$snotify.success(response.data.message);
				}else{
					this.$snotify.error(response.data.message);
				}
			}
		}
	}

</script>