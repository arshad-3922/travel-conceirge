<template>
<div>
    	<div class="banner" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="600">
		<div class="container">
				<div class="row">
				<div class="col-12 text-center">
					<h1 data-aos="zoom-in" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom" data-aos-delay="700">Hire an Expert & Get</h1>
					<h2 data-aos="zoom-in" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom" data-aos-delay="800">Your "Work Done"</h2>
					<router-link :to="{name:'user.home.demovideos'}" class="blue-cta" data-aos="zoom-in" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom" data-aos-delay="900">Watch Demo</router-link>
				</div>
			</div>
		</div>
	</div>

	<div class="content-area">
		<div class="container">
			<div class="row">
				<div class="col-12 text-center">
					<h2 data-aos="zoom-in" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom" data-aos-delay="800">Service Categories</h2>
					<div class="row">
						<div class="col-12">
							<select class="js-example-basic-multiple" @change="getServiceCategories" v-model="category">
								<option v-for="(category,index) in categories" :value="category.id" :key="index">{{category.name}}</option>
							</select>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-12" v-for="(service,index) in services.data" :key="index">
							<div class="categeory">
				             <router-link :to="{name:'user.home.servicescategory',params:{id:service.id}}"><img :src="service.thumb"></router-link>
								<h4>{{service.title}}</h4>
								<p>{{service.description}}</p>
							</div>
						</div>
						<div class="col-lg-6 text-lg-right text-left">
						  <template>
							<pagination class="float-right" :data="services"
							@pagination-change-page="fetch"></pagination>
						 </template>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

</template>
<script>
import {mapActions, mapState} from 'vuex';
  export default {

        computed: {
            ...mapState('user', ['search', 'entries']),
        },
        data() {
            return {
				category:'',
				base_url:base_url,
				categories:{},
				services:{}
            };
        },
  
        created() {
            let {page} = this.$route.query;
            this.fetch(page);
        },
        watch: {
            search: function (val, oldVal) {
                this.fetch();
            },
            entries: function (val, oldVal) {
                this.fetch();
            },
        },
        methods: {
            ...mapActions('user', ['getAll']),
            taskDateFilter() {
                if (this.from !== '' && this.to !== '' && (this.dateFilterCounter % 2 == 0) ) {
                    this.fetch();
                } else {
                    this.from = '';
                    this.to = '';
                    this.fetch();
                }

                this.dateFilterCounter++;
            },
            async fetch(page = 1) {
                let params = {
                    route: 'api/services/getServices',
                    mutation: 'SET_SERVICE',
                    variable: 'data',
                    data: {
                        page,
                        search: this.search,
                        entries: this.entries,
						category:this.category
						
                    }
                };
                let {data} = await this.getAll(params);
				this.categories = data.data.categories;
				console.log(data.data.service, '=======');
				this.services   = data.data.service;
				},
				getServiceCategories(){
				this.fetch();
				}
			}

    }
</script>