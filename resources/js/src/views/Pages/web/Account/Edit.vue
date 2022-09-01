<template>
<div>
	<!-- Banner -->
<section class="inner-banner">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 position-rlative">
                <img :src="base_url+`/assets/web/images/inner-banner.png`" alt="" class="img-fluid w-100">
                <h1 class="inner-banner-heading">Edit Profile</h1>
            </div>
        </div>
    </div>
</section>
<!-- Banner -->
<section>
    <div class="container-fluid">
        <div class="col-12 text-center my-lg-5 my-3">
            <span class="position-relative">
                <img :src="profile || user.image" alt="" class="user-porfile">
                <label for="picture" class="d-block">
                    <img :src="base_url+`/assets/web/images/upload-img.png`" alt="" class="pro-upload">
                </label>
            </span>
            <div class="d-none">
                <input type="file" name="pic" ref="image" accept=".gif,.jpg,.png,.tif|image/*" id="picture" @change="setImage">
                <input type="submit">
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
			<div class="col-lg-10 mx-auto">
			<ValidationObserver  v-slot="{handleSubmit}">
			<form @submit.prevent="handleSubmit(update)">
            
                <div class="row">
                    <div class="col-lg-4 mt-lg-0 mt-2">
                        <label for="" class="grey-lbl">First Name:</label>
						<ValidationProvider tag="div" name="First Name" rules="required" v-slot="{errors}">
                         <input type="text" class="w-100 all-input" v-model="user.first_name">
						 <span class="text-danger">{{ errors[0] }}</span>
					    </ValidationProvider>
                    </div>
                    <div class="col-lg-4 mt-lg-0 mt-2">
                        <label for="" class="grey-lbl">Last Name:</label>
						<ValidationProvider tag="div" name="First Name" rules="required" v-slot="{errors}">
                        <input type="text" class="w-100 all-input" v-model="user.last_name">
						 <span class="text-danger">{{ errors[0] }}</span>
					    </ValidationProvider>
                    </div>
                    <div class="col-lg-4 mt-lg-0 mt-2">
                        <label for="" class="grey-lbl">Email Address:</label>
                        <p class="blue-lbl">{{user.email}}</p>
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
import {mapActions, mapState} from 'vuex';

export default {
    async created() {
       this.fetch();
    },
	data(){
		return{
			profile:'',
			user:{}
		}
	},
    methods: {
        ...mapActions('web', ['store', 'getAll']),
	  async fetch() {
			let params = {
			route: `api/auth/getProfile`,
			mutation: 'SET_USER',
			variable: 'data',
			}
			let {data} = await this.getAll(params); 
            this.user  = data
		},
		setImage: function (e) {
            const file = e.target.files[0]
            if (!file.type.includes('image/')) {
            alert('Please select an image file')
            return
             }
         if(typeof FileReader === 'function') {
             const reader = new FileReader()
             reader.onload = (event) => {
             this.profile = event.target.result
             }
             reader.readAsDataURL(file)
          }else {
             alert('Sorry, FileReader API not supported')
            }
         }, 
        async update(data) {
            let fd = new FormData();
			this.buildFormData(fd,this.user);
			fd.append('profile',this.$refs.image.files[0]);
            let params = {
                route: 'api/auth/profile/update',
                method: 'POST',
                data: fd,
            };
            try {
                let {data} = await this.store(params);
                if (data.data) {
                this.$snotify.success('user profile updated');
				setTimeout(function () {
				window.location.reload();
                }, 2000);
				 this.$router.push({name:'web.account.index'});
                } else {
                   this.$snotify.error(data.message)
                }
               } catch (e) {
                if (e.response) {
                    this.$refs.adminObserver.setErrors(e.response.data.errors);
                }
                // statements
                console.log(e);
            }

        },
         
    }
}

</script>
