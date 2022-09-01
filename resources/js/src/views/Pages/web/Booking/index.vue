<template>
<div>
    <!-- Banner -->
<section class="inner-banner">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 position-rlative">
                <img :src="base_url+`/assets/web/images/inner-banner.png`" alt="" class="img-fluid w-100">
                <h1 class="inner-banner-heading">My Booking</h1>
            </div>
        </div>
    </div>
</section>
<!-- Banner -->
<!-- Table -->
<section class="table-section">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-11 mx-auto">
                <div class="row">
                    <div class="col-12">
                        <div class="dataTables_wrapper">
                            <div class="user-listing-top">
                                <div class="row align-items-end d-flex mb-4">
                                    <div class="col-lg-6 mt-2 mt-md-0 sort-datepicker">
                                        <label class="d-block">Sort by:</label>
                                        <div class="d-sm-flex d-block">
                                            <div class="input-wrap mr-0 mr-sm-2 mb-2 mb-sm-0">
                                                <input type="date" id="datepicker-2" placeholder="From" class="form-control" v-model="from"/>
                                            </div>
                                            <div class="input-wrap">
                                                <input type="date" id="datepicker-2" placeholder="From" class="form-control" v-model="to"/>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="col-lg-6 mt-3 mt-lg-0 d-lg-flex d-block justify-content-start justify-content-lg-end align-items-center">
                                        <label for="" class="d-block">Filter by Status</label>
                                        <select name="" class="" id="">
                                            <option value="">Filter</option>
                                            <option value="">user</option>
                                        </select>
                                    </div> -->
                                </div>
                                <!-- <div class="row">
                                    <div class="col-12 col-md-6 col-lg-6 col-xl-6 mt-2">
                                        <div class="dataTables_length">
                                            <label class="d-inline-block">Show</label>
                                            <select class=" d-inline-block">
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-xl-6 mt-2 mt-md-0 d-md-flex d-block justify-content-start justify-content-md-end align-items-center">
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
                                        <div class="row">
                                           <table-search></table-search>  
                                           <booking-table></booking-table>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-12 col-md-12">
                                                <div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                                                    <template>
                                                    <pagination class="float-right" :data="bookings"
                                                    @pagination-change-page="fetch"></pagination>
                                                    </template>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Table -->
</div>
</template>
<script>
const BookingTable = () => import('./components/BookingTable.vue');
import {mapActions, mapState} from 'vuex';
export default {
    data() {
     return {
         base_url:base_url,
         date: '',
         from: '',
         to: '',
         dateFilterCounter : 0,
          };
        },  
            computed: {
                ...mapState('web', ['bookings', 'search', 'entries']),
            },
            components: {
                BookingTable,
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
                ...mapActions('web', ['getAll']),
                   taskDateFilter() {
                if(this.from !== '' && this.to !== '' && (this.dateFilterCounter % 2 == 0) ) {
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
                        route: 'api/web/getBookings',
                        mutation: 'SET_BOOKINGS',
                        variable: 'data',
                        data: {
                            page,
                            type,
                            status,
                            from:this.from,
                            to:this.to,
                            search: this.search,
                            entries: this.entries,
                        }
                    };
                    
                    let {data} = await this.getAll(params);
                    console.log('>>>>>>>>>',data.data.data);
                }
            }

        }

    </script>
