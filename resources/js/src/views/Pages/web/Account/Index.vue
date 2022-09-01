<template>
<div>

<section class="inner-banner">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 position-rlative">
                <img :src="base_url+`/assets/web/images/inner-banner.png`" alt="" class="img-fluid w-100">
                <h1 class="inner-banner-heading">Profile</h1>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container-fluid">
        <div class="col-12 text-center my-lg-5 my-3">
            <img :src="user.image" alt="" class="user-porfile">
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-10 mx-auto">
                <div class="row">
                    <div class="col-lg-4 mt-lg-0 mt-2">
                        <label for="" class="grey-lbl">First Name:</label>
                        <p class="blue-lbl">{{user.first_name}}</p>
                    </div>
                    <div class="col-lg-4 mt-lg-0 mt-2">
                        <label for="" class="grey-lbl">Last Name:</label>
                        <p class="blue-lbl">{{user.last_name}}</p>
                    </div>
                    <div class="col-lg-4 mt-lg-0 mt-2">
                        <label for="" class="grey-lbl">Email Address:</label>
                        <p class="blue-lbl">{{user.email}}</p>
                    </div>
                </div>
                <div class="row mt-lg-4">
                    <div class="col-12 mt-lg-0 mt-2 text-center">
                        <router-link :to="{name:'web.account.edit' , params:{id:user.id}}" class="d-inline-block yellow-btn">Edit</router-link>
                        <router-link :to="{name:'web.account.password'}" class="d-inline-block black-btn">Change Password</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
</div>
</template>
<script>
const PasswordModal = () => import('./PasswordModal.vue');
import {mapActions, mapState} from 'vuex';

export default {
    data() {
        return {
            base_url:base_url,
            user:{}
        };
    },
    components: {
        PasswordModal,
    },
    async created() {
   		this.fetch();
    },
    methods: {
	    ...mapActions('web', ['getAll']),
			async fetch() {
				let params = {
					route: `api/auth/getProfile`,
					mutation: 'SET_USER',
					variable: 'data',
				};
				let {data} = await this.getAll(params);
                this.user    = data 
			},
         

    }
}
</script>
