<template>
<div>

<section class="inner-banner">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 position-rlative">
                <img :src="base_url+`/assets/web/images/inner-banner.png`" alt="" class="img-fluid w-100">
                <h1 class="inner-banner-heading">Select Surgeon</h1>
            </div>
        </div>
    </div>
</section>

<section class="surgeon position-relative mt-lg-5 mt-3">
    <img :src="base_url+`/assets/web/images/about-right.png`" alt="" class="about-right img-fluid">
    <div class="container">
      
        <div class="row" v-if="surgeon != ''">
            <div class="col-lg-6 mt-2" v-for="(user,index) in surgeon" :key="index">
                <img :src="user.user.image" alt="" class="surgeon-img">
                <div class="surgeon-div">
                    <h2>{{user.user.name}}</h2>
                    <p>{{user.user.description}}</p>
                    <router-link :to="{name:'web.booking.bookappointment',params:{id:user.user.id}}" class="yellow-btn d-inline-block mt-4" data-toggle="modal" data-target="#login">Book Appointment</router-link>
                </div>
            </div>
        </div>
         <div class="row" v-else>
            <div class="col-lg-6 mt-2" >
                <div class="surgeon-div">
                    <h2>No Surgeons Found!...</h2>
                </div>
            </div>
        </div>
    </div>
</section>

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
		...mapState('web', ['surgeon']),
	},
	created() {
        localStorage.setItem('isLogin',0);
        localStorage.setItem('message','Please Login To Continue!')
		this.fetch();
	},
	methods: {
		...mapActions('web', ['getAll']),
		async fetch() {
            let packageId  = this.$route.params.id;
			let params = {
				route: 'api/web/surgeonDetails',
				mutation: 'SET_SURGEON',
				variable: 'data',
				data: {
                    id:packageId
                }
			};
			let { data } = await this.getAll(params);
            console.log('?????????',data)
		}   
	}
}

</script>