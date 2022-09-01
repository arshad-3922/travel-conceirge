<template>
<div class="app-content content dashboard">
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row">
                    <div class="col-12">
                        <div class="card p-xl-4 p-2">
                            <div class="row">
                                <div class="col-xl-12">
                                    <h1 class="fw-600 fc-black">
                                        Subscription Package Management
                                    </h1>
                                </div>
                            </div>
                            <div class="row mt-2 mb-3">
                                <div class="col-xl-6">
                                    <h2 class="fw-600">View Packages</h2>
                                </div>
                                <div class="col-xl-6 text-lg-right text-center mt-1">
                                    <router-link :to="{name:'admin.subscriptions.create'}" class="btn btn-purple pt-1">Add New Package</router-link>
                                </div>
                            </div>
                            <div class="row">
                               <Subscription />
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
const Subscription = () => import('./components/Subscription.vue');
import {mapActions, mapState} from 'vuex';
export default {
           computed: {
                ...mapState('admin', ['subscriptions']),
            },
            components: {
                Subscription,
            },
            created(){
              this.fetch();
            },
            methods: {
                ...mapActions('admin', ['getAll']),
                async fetch() {
                    let params = {
                        route: 'api/subscriptions/index',
                        mutation: 'SET_SUBSCRIPTIONS',
                        variable: 'data',
                    };
                    let {data} = await this.getAll(params);
                }
            }

        }
    </script>
