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
                                 <router-link :to="{name:'admin.packages.index'}">
                                    <h1 class="ml-1 main-heading"><i class="fas fa-angle-left mr-1"></i>Package Details</h1>
                                 </router-link>
                            </div>
                            <div class="col-lg-6 text-right my-auto">
                                <a href="javascript:void(0)" class="my-label d-inline-block">Status: <span v-if="packag.status == 1" class="label-value">Active</span>
                                 <span v-else class="label-value">In-Active</span></a>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="row">
                                            <div class="col-md-8">
                                                <label for="" class="my-label">Package Name</label>
                                                <p class="label-value">{{packag.name}}</p>
                                            </div>
                                            <div class="col-md-4">
                                                <label for="" class="my-label">Package Description</label>
                                                <p class="label-value">{{packag.description}}</p>
                                            </div>
                                        </div>
                                        <div class="row mt-md-2">
                                            <div class="col-md-8">
                                                <label for="" class="my-label">Amount</label>
                                                <p class="label-value">{{packag.amount}}</p>
                                            </div>
                                            <div class="col-md-4">
                                                <label for="" class="my-label">Date</label>
                                                <p class="label-value">{{formatDate(packag.created_at)}}</p>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-12">
                                                <router-link :to="{name:'admin.packages.edit',params: {id: packag.id}}" class="general-btn d-inline-block px-3">Edit</router-link>
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
import {mapState, mapActions} from 'vuex';
export default {

    computed: {
        ...mapState('admin',['packag']),
    },
    data() {
        return {
            date: ''
        };
    },
    created() {
        this.fetch();
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
        ...mapActions('admin', ['getAll']),
        async fetch() {
            let {type, status} = this.$route.params;
            let params = {
                route: `api/packages/view/${this.$route.params.id}`,
                mutation: 'SET_PACKAGE',
                variable: 'data',
            };
            let {data} = await this.getAll(params); 
        }
    }

};
</script>