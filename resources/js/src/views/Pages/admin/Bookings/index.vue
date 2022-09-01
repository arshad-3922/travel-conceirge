<template>
<div class="app-content content dashboard">
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row">
                    <div class="col-12">
                        <div class="card p-md-4 p-1">
                            <div class="row">
                                <div class="col-xl-12">
                                    <h1 class="fw-600">Booking Logs</h1>
                                </div>
                            </div>
                            <div class="row mt-3 align-items-center">
                                <div class="col-lg-6 my-1">
                                    <div class="d-flex">
                                        <div class="my-1">
                                            <div class="form-group">
                                                <label for="" class="ml-2">To</label>
                                                <input type="date" class="form-control inputCstm bg-transparent" v-model="from">
                                            </div>
                                        </div>
                                        <div class="ml-lg-1 my-1">
                                            <div class="form-group">
                                                <label for="" class="ml-2">From</label>
                                                <input type="date" class="form-control inputCstm bg-transparent" v-model="to">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="col-lg-6 text-right  my-1">
                                    <div class="form-inline justify-content-end">
                                        <label for="" class="mr-1">Filter By:</label>
                                        <select name="" id="" class="form-control inputCstm bg-transparent">
                                            <option value="">Select Status</option>
                                            <option value="">Active</option>
                                        </select>
                                    </div>
                                </div> -->
                            </div>
                            <div class="row">
                                <table-search></table-search>    
                                <booking-table></booking-table>
                            </div>
                            <div class="row mt-5">
                                <template>
                                <pagination class="float-right" :data="bookings"
                                @pagination-change-page="fetch"></pagination>
                                </template>
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
const BookingTable = () => import('./components/BookingTable.vue');
import {mapActions, mapState} from 'vuex';
export default {
    data() {
     return {
         date: '',
         from: '',
         to: '',
         dateFilterCounter : 0,
          };
        },  
            computed: {
                ...mapState('admin', ['bookings', 'search', 'entries']),
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
                ...mapActions('admin', ['getAll']),
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
                    let params = {
                        route: 'api/bookings/index',
                        mutation: 'SET_BOOKINGS',
                        variable: 'data',
                        data: {
                            page,
                            from:this.from,
                            to:this.to,
                            search: this.search,
                            entries: this.entries,
                        }
                    };
                    
                    let {data} = await this.getAll(params);

                }
            }

        }

    </script>
