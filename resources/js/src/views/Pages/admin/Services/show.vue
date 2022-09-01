<template>
	<div class="app-content content dashboard">
    <div class="content-wrapper content-wrapper-2">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row card px-lg-5 pb-5">
                    <div class="col-12">
                        <div class="row mt-3">
                            <div class="col-lg-6">
                                 <router-link :to="{name:'admin.services.index'}">
                                    <h1 class="ml-1 main-heading"><i class="fas fa-angle-left mr-1"></i>Service Details</h1>
                                 </router-link>
                            </div>
                            <div class="col-lg-6 text-right my-auto">
                                <a href="#_" class="my-label d-inline-block">Status: <span class="label-value">Active</span></a>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="row">
                                            <div class="col-md-8">
                                                <label for="" class="my-label">Service Name</label>
                                                <p class="label-value">{{service.name}}</p>
                                            </div>
                                            <div class="col-md-4">
                                                <label for="" class="my-label">Categories</label>
                                                <p class="label-value">{{service.category.name}}</p>
                                            </div>
                                        </div>
                                        <div class="row mt-md-2">
                                            <div class="col-md-4">
                                                <label for="" class="my-label">Date</label>
                                                <p class="label-value">{{formatDate(service.created_at)}}</p>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-12">
                                                <router-link :to="{name:'admin.services.edit',params: {id: service.id}}" class="general-btn d-inline-block px-3">Edit</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
</template>
<script>
const Song = () => import('@core/components/Popups/Song.vue');
import {mapState, mapActions} from 'vuex';
 export default {
		computed: {
			...mapState('admin', ['service']),
		},
        components:{
            Song
        },
		data() {
			return {
              songFile:{}
			};
		},
		created() {
			this.fetch();
		},
		methods: {
			...mapActions('admin', ['getAll']),
			async fetch() {
				let params = {
					route: `api/services/show/${this.$route.params.id}`,
					mutation: 'SET_SERVICE',
					variable: 'data',
				};
				let {data} = await this.getAll(params);
                this.songFile  = data.data.file
			},

		}

	};

</script>