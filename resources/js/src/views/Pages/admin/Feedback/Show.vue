<template>
<div class="app-content content dashboard">
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row">
                    <div class="col-12">
                        <div class="card p-lg-4 p-1">
                            <div class="row">
                                <div class="col-xl-12">
                                    <router-link :to="{name:'admin.feedbacks.index'}">
                                    <div class="d-flex align-items-center">
                                        <img :src="base_url+`/assets/admin/images/go-back.png`" class="go_back_link mr-1" alt="goBack">
                                        <h1 class="fw-600 fc-black main-heading">
                                            Feedback Details
                                        </h1>
                                    </div>
                                    </router-link>
                                </div>
                            </div>
                            <!-- feedback details -->
                            <div class="row">
                                <div class="col-lg-10">
                                    <div class="row mt-4">
                                        <div class="col-lg-4 col-md-6 mb-2">
                                            <label for="" class="cms-lable">Package Name</label>
                                            <p class="cms-value">Basic</p>
                                        </div>
                                        <div class="col-lg-4 col-md-6 mb-2">
                                            <label for="" class="cms-lable">Date Submitted</label>
                                            <p class="cms-value">{{formatDate(feedback.created_at)}}</p>
                                        </div>
                                        <div class="col-lg-4 col-md-6 mb-2">
                                            <label for="" class="cms-lable">Email Address</label>
                                            <p class="cms-value">{{feedback.email}}</p>
                                        </div>
                                        <div class="col-lg-12 col-md-6  mt-3">
                                            <label for="" class="cms-lable">Subscription Note</label>
                                            <p class="cms-value">{{feedback.message}}</p>
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
import {mapState, mapActions} from 'vuex';
export default {
    computed: {
        ...mapState('admin',['feedback']),
    },
    data() {
        return {
            base_url:baseUrl
        };
    },
    created() {
        this.fetch();
    },
    methods: {
        ...mapActions('admin', ['getAll']),
        async fetch() {
            let params = {
                route: `api/feedbacks/show/${this.$route.params.id}`,
                mutation: 'SET_FEEDBACK',
                variable: 'data',
            };
            let {data} = await this.getAll(params); 
        }
    }

};
</script>