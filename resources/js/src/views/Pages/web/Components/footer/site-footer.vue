<template>
<footer class="">
    <div class="footer-top">
        <div class="container">
            <div class="row mt-2">
                <div class="col-lg-3 mb-lg-0 mb-3">
                    <router-link :to="{name:'web.home.index'}">
                        <img :src="base_url+`/assets/web/images/footer-logo.png`" alt="" class="img-fluid">
                    </router-link>
                </div>
                <div class="col-lg-3 mb-lg-0 mb-3">
                    <h2 class="f-26 white f-sp mb-2">Useful Links</h2>
                    <ul>
                        <li><router-link :to="{name:'web.home.index'}" class="footer-a-margin">Home</router-link></li>
                        <li><router-link :to="{name:'web.services.index'}" class="footer-a-margin">Our Treatments
                            </router-link>
                        </li>
                        <li><router-link :to="{name:'web.technology.index'}">Technology</router-link></li>
                    </ul>
                </div>
                <div class="col-lg-3 mb-lg-0 mb-3">
                    <h2 class="f-26 white f-sp mb-2">Quick Links</h2>
                    <ul>
                        <li><router-link :to="{name:'web.home.pricing'}"  class="footer-a-margin">Pricing</router-link>
                        </li>
                        <li><router-link :to="{name:'web.home.aboutus'}">About Us</router-link>
                        </li>
                        <li><router-link :to="{name:'web.home.contact'}">Contact Us</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <h2 class="f-26 white f-sp mb-2">Quick Contact</h2>
                    <ul class="last-menu">
                        <li class="footer-a-margin">
                            <p class="fotter-33">If You Have Question Please Use Our 24 - Hours Helpline Service</p>
                            <p class="fotter-33"><strong>Address : </strong>344 Wellington Road North, Stockport, SK45DA</p>
                        </li>
                        <li><span class="phone-li"><a href="tel:01612808799" class="white"><img :src="base_url+`/assets/web/images/phone-number.png`" class="mr-3"> 0161 2808799</a></span></li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <p>© 2022 Apto Beauty..All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
	import Login from '../../../web/Auth/Login.vue';
	export default{
			data(){
			return {
                base_url:base_url,
				currentDate: new Date,
                email:'',
                code:'',
                password:'',
                password_confirmation:'',
                passwordClass : 'fa-eye',
                passwordEye: 'password',
                passwordClasss : 'fa-eye',
                passwordEyee: 'password',
			}
		},
        components:{
            Login
        },
         methods:{
           togglePasswordEye(passwordVar,classVar){
           this[passwordVar] = this[passwordVar] == 'password'?"text": "password";
           this[classVar] = this[passwordVar] == 'password'?"fa-eye": "fa-eye-slash";
           },
           togglePasswordEyee(passwordVar,classVar){
           this[passwordVar] = this[passwordVar] == 'password'?"text": "password";
           this[classVar] = this[passwordVar] == 'password'?"fa-eye": "fa-eye-slash";
           },
            async submit(e) {
            let fd = new FormData();
            fd.append('email', this.email)
            try {
                let response = await axios.post('api/auth/send/email', fd);
                if(response.data.status){
                   $('.forgotPassword').hide();
                   $('.verifyCode').modal({modal: true});
                    this.$snotify.success(response.data.message);
                }else {
                    this.$snotify.error(response.data.message);
                }
            } catch (e) {
                    this.$snotify.error(response.data.message);
            }
          },
           async verifyCode(e) {
            let fd = new FormData(this.$refs.verifyCode);
            fd.append('email', this.email);
            fd.append('code', this.code);
            try {
                let response = await axios.post('api/auth/verify/code', fd);
                if (response.data.status) {
                    this.$snotify.success(response.data.message);
                    $('.verifyCode').hide();
                    $('.newPassword').modal({modal: true});
                } else{
                    this.$snotify.error(response.data.message, 'Invalid Code');
                }
             } catch (e) {
                if (e.response) {
                    this.$snotify.error(response.data.message, 'Invalid Code');
                }
            }
          },
           async newPassword(e) {
            let fd = new FormData();
            fd.append('password', this.password);
            fd.append('password_confirmation', this.password_confirmation);
            fd.append('email', this.email);
            let response = await axios.post('api/auth/new-password', fd);
            if (response.data.status) {
                this.$snotify.success(response.data.msg, 'Updated!');
                 $('.newPassword').hide();
                 $('body').removeClass('modal-open');
                 $('.modal-backdrop').remove();
            } else {
                this.$snotify.error(response.data.msg, 'Oops!');
            }
          }
        }
	};
</script>
<style scoped>
li.footer-a-margin p {
    color: white !important
}
</style>