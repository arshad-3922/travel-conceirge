<template>
<div>

<section class="inner-banner">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 position-rlative">
                <img :src="base_url+`/assets/web/images/inner-banner.png`" alt="" class="img-fluid w-100">
                <h1 class="inner-banner-heading">Complete Package</h1>
            </div>
        </div>
    </div>
</section>

<section class="about-h position-relative">
    <div class="container">
        <div class="row">
             <div class="col-lg-6" v-if="packg.service.base_image">
                <img :src="packg.service.base_image" alt="" class="img-fluid w-100 about-h-img">
            </div>
            <div class="col-lg-6 my-lg-auto mt-2">
                <h2 class="main-heading-l">
                   {{packg.package.name}}
                </h2>
                <p class="mt-lg-4 mt-2"> {{packg.package.description}}
                </p>
                <p class="pound-para mt-2">{{packg.package.amount}}</p>
                <router-link :to="{name:'web.services.servicesurgeondetails',params:{id:packg.package.id}}" class="d-inline-block yellow-btn mt-2">Book Your Appointment</router-link>
            </div>
        </div>
        
    </div>
</section>
<!-- About -->
</div>
</template>
<script>
import {mapActions, mapState} from 'vuex';
export default {
    data(){
        return{
            base_url:base_url
        }
    },
	computed: {
		...mapState('web', ['packg']),
	},
	created() {
		this.fetch();
      //  alert(this.$route.params.id);
        localStorage.setItem('package_id',this.$route.params.id)
	},
	methods: {
		...mapActions('web', ['getAll']),
		async fetch() {
            let packageId  = this.$route.params.id;
			let params = {
				route: 'api/web/packageDetails',
				mutation: 'SET_PACKAGE',
				variable: 'data',
				data: {
                    id:packageId
                }
			};
			let { data } = await this.getAll(params);

		}
	}
}

</script>