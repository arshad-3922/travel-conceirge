<template>
<div>
	<!-- Banner -->
<section class="inner-banner">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 position-rlative">
                <img :src="base_url+`/assets/web/images/inner-banner.png`" alt="" class="img-fluid w-100">
                <h1 class="inner-banner-heading">Our Treatments</h1>
            </div>
        </div>
    </div>
</section>

<section class="position-relative my-lg-5 my-4">
    <img :src="base_url+`/assets/web/images/about-right.png`" alt="" class="experienced-right img-fluid">
    <img :src="base_url+`/assets/web/images/about-left.png`" alt="" class="experienced-left img-fluid">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="main-heading-two-line-2">We Are Experienced</h2>
                <h2 class="main-heading">In Making You More Beautiful</h2>
            </div>
        </div>
    </div>
</section>

<section class="intersting treatment-page">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="main-heading-two-line-2">Our Treatments Services</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-9 mx-auto mt-lg-5 mt-3">
                <div class="row" v-if="services">
                    <div class="col-lg-6 text-center mt-4" v-for="(category,index) in services" :key="index">
                        <img :src="images[index]" alt="" class="team-img">
                        <div class="interesting-div">
                            <h3 class="interesting-heading">{{category.category_data.name}}</h3>
                            <!-- <p class="interesting-para px-4">lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. at vero eos et accusam et justo duo</p> -->
                          <router-link :to="{name:'web.services.show',params:{id:category.id,name:category.category_data.name}}" class="my-3 d-inline-block yellow-btn">More Info</router-link>
                        </div>
                    </div>
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

        // computed: {
        //     ...mapState('web', ['services']),
        // },
        data() {
            return {
				base_url:base_url,
                services:{},
                images:{}
            };
        },
  
        created() {
            this.fetch();
        },
        methods: {
            ...mapActions('web', ['getAll']),
            async fetch(page = 1) {
                let params = {
                    route: 'api/web/services',
                    mutation: 'SET_SERVICES',
                    variable: 'data',
                    data: {
                        page,
                        entries:10				
                    }
            };
				let {data} = await this.getAll(params);
                this.services = data.data.category;
                this.images   = data.data.images;
			},
				
	   	}

    }
</script>