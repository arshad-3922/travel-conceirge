<template>
	<section class="recipes text-center py-4 py-md-5">
		<div class="container">
			<div class="my-profile">
				<h3>My Profile</h3>
				<div class="row">
					<div class="col-lg-7 pl-lg-0 text-sm-right ml-auto">
						<div class="d-sm-flex justify-content-between">
							<img :src="`${base_url}/assets/admin/images/invite.png`" alt="" class="img-fluid user-img mt-4" v-if="!user.image">
							<img :src="user.image" alt="" class="img-fluid user-img mt-4" v-if="user.image">
							<div class="mt-sm-4 mt-3">
								<router-link :to="{name: 'web.user.editProfile'}" class="pink-text d-block">Edit Profile</router-link>
								<a href="#_" class="pink-text" data-toggle="modal" data-target="#changepassword">Edit Password</a>
							</div>
						</div>
					</div>
					<div class="col-lg-6 mt-4 mx-auto">
						<div class="row">
							<div class="col-6">
								<p class="p-lg pink-text mb-0">Name:</p>
								<p class="p-lg pink-text mb-0">Email:</p>
								<p class="p-lg pink-text mb-0">Password:</p>
							</div>
							<div class="col-6">
								<p class="p-lg grey-text mb-0">{{user.name}}</p>
								<p class="p-lg grey-text mb-0">{{user.email}}</p>
								<p class="p-lg grey-text mb-0">*********</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<change-password-modal></change-password-modal>
	</section>
</template>

<script>
	const ChangePasswordModal = () => import('./ChangePassword.vue');
    import {mapState, mapActions} from 'vuex';
    export default {
        data() {
            return {
                date: '',
                stores: {},
                categories: {},
                category_id: undefined,
                search: ''
            };
        },
        components: {
        ChangePasswordModal
    },
        computed: {
            ...mapState('admin', ['user']),
        },
        created() {
            this.fetch();
           //this.fetchCategory();
        },
        
        methods: {
            ...mapActions('admin', ['getAll']),
            async fetch() {
                let {type, status} = this.$route.params;
                let params = {
                    route: `api/auth/getProfile`,
                    mutation: 'SET_USER',
                    variable: 'data',
                };
                let {data} = await this.getAll(params);
                this.stores = data.data;
                
            },

           
    }

};

</script>