<template>
<div class="app-content content dashboard">
    <div class="content-wrapper content-wrapper-2">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row card">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="ml-1 main-heading">Services Management</h1>
                            </div>
                            <div class="col-lg-6 text-right my-auto">
                                <router-link :to="{name:'admin.services.create'}" class="general-btn d-inline-block">Create</router-link>
                            </div>
                        </div>
                        <div class="dataTables_wrapper">
                            <div class="user-listing-top">
                                <div class="row align-items-end d-flex mb-4">
                                    <div class="col-md-6 mt-2 sort-datepicker">
                                        <div class="d-sm-flex align-items-center">
                                            <label class="">Sort by:</label>
                                            <div class="input-wrap mr-0 mr-sm-2 mb-2 mb-sm-0">
                                                <input type="date" placeholder="From" class="form-control" v-model="from"/>
                                            </div>
                                            <div class="input-wrap">
                                                <input type="date" placeholder="To" class="form-control" v-model="to"/>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="col-lg-6 text-right mt-2">
                                        <label class="">Filter by:</label>
                                        <select name="" id="" class="general-select w-50">
                                            <option value="">Select</option>
                                        </select>
                                    </div> -->
                                </div>
                                <!-- <div class="row">
                                    <div class="col-12 col-md-6 col-lg-6 col-xl-6 mt-2">
                                        <div class="dataTables_length">
                                            <label class="d-inline-block">Show</label>
                                            <select class="form-control d-inline-block table-entry">
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select>
                                            <label class="d-inline-block ml-1">Entries</label>

                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 mt-2 mt-md-0 d-md-flex d-block justify-content-start justify-content-md-end align-items-center">
                                        <div class="dataTables_filter">
                                            <div class="search-wrap">
                                                <input type="search" class="form-control" placeholder="Search" />
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                            </div>
                            <div class="row row-table">
                                <div class="main-tabble table-responsive">
                                    <div class="dataTables_wrapper container-fluid dt-bootstrap4">
                                       <table-search></table-search>  
                                        <service-table></service-table>
                                        <div class="row mb-4">
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
            </section>
        </div>
    </div>
</div>
</template>

<script>

 import {mapState, mapActions} from 'vuex';
const ServiceTable = () => import('./components/ServicesTable.vue');
 export default {
        computed: {
            ...mapState('admin', ['services', 'search', 'entries']),
        },
        data() {
            return {
                date: '',
                from: '',
                to: '',
                dateFilterCounter : 0
            };
        },
        components: {
                ServiceTable
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
            ...mapActions('admin', ['getAll']),
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
                let {type, status} = this.$route.params;
                let params = {
                    route: 'api/services/index',
                    mutation: 'SET_SERVICES',
                    variable: 'data',
                    data: {
                        page,
                        type,
                        status,
                        from: this.from,
                        to: this.to,
                        search: this.search,
                        entries: this.entries,
                    }
                };
                let {data} = await this.getAll(params);
               
            }
        }

    }

</script>
