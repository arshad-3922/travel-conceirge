<template>
<div class="app-content content dashboard">
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row">
                    <div class="col-12">
                        <div class="card py-xl-4 py-2 pl-xl-4 pl-2 pr-0">
                            <div class="row">
                                <div class="col-xl-6">
                                    <router-link :to="{name:'admin.users.index'}">
                                        <h1 class="fw-600 fc-black main-heading"><img :src="base_url+`/assets/admin/images/go-back.png`" alt="" class="img-fluid"> User Details</h1>
                                    </router-link>
                                </div>
                                <div class="col-xl-6 text-right">
                                    <div class="d-flex justify-content-end align-items-center">
                                        <button class="btn btn-purple" id="markInactive">Mark In-Active</button>
                                        <p class="status-label active mb-0">Status Active</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row my-2">
                                <div class="col-lg-10 mx-auto text-center">
                                    <img :src="base_url+`/assets/admin/images/user-detail-image.png`" alt="" class="img-fluid">
                                    <h4 class="user-title mt-2 fc-black">{{user.name}}</h4>
                                    <div class="row my-4 text-left pb-xl-5 border-bottom border-grey">
                                        <div class="col-xl-3 col-md-6 mb-md-3 mb-2">
                                            <p class="grey-mini-title">Email</p>
                                            <h5 class="dark-mini-text">{{user.email}}</h5>
                                        </div>

                                        <div class="col-xl-3 col-md-6 mb-md-3 mb-2">
                                            <p class="grey-mini-title">User</p>
                                            <h5 class="dark-mini-text">Narmal</h5>
                                        </div>

                                        <div class="col-xl-3 col-md-6 mb-md-3 mb-2">
                                            <p class="grey-mini-title">Phone</p>
                                            <h5 class="dark-mini-text">{{user.phone_number}}</h5>
                                        </div>
                                        <div class="col-xl-3 col-md-6 mb-md-3 mb-2">
                                            <p class="grey-mini-title">Date Registered</p>
                                            <h5 class="dark-mini-text">{{formatDate(user.created_at)}}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xl-10 col-11 mx-auto">
                                    <h1 class="fw-600 fc-black main-heading mb-3">All Trips</h1>

                                    <div class="row">
                                        <div class="col-xl-4 col-md-6 mb-3">
                                            <h3 class="trip-type">Family Trip</h3>
                                            <div class="trip-card text-center cardYellow p-2">
                                                <img :src="base_url+`/assets/admin/images/family-trip.jpg`" alt="" class="img-fluid w-100">
                                                <h4 class="trip-title mt-2">Universal Studios, Japan</h4>
                                                <h5 class="mb-2">Direct Attraction Transfer From Osaka</h5>
                                                <p class="price-from mb-0">From </p>
                                                <p class="trip-price">US <span>100</span></p>
                                            </div>
                                        </div>
                                        <div class="col-xl-4 col-md-6 mb-3">
                                            <h3 class="trip-type">Friends Trip</h3>
                                            <div class="trip-card text-center cardYellow p-2">
                                                <img :src="base_url+`/assets/admin/images/friends-trip.jpg`" alt="" class="img-fluid w-100">
                                                <h4 class="trip-title mt-2">Universal Studios, Japan</h4>
                                                <h5 class="mb-2">Direct Attraction Transfer From Osaka</h5>
                                                <p class="price-from mb-0">From </p>
                                                <p class="trip-price">US <span>100</span></p>
                                            </div>
                                        </div>
                                        <div class="col-xl-4 col-md-6 mb-3">
                                            <h3 class="trip-type">Office Trip</h3>
                                            <div class="trip-card text-center cardYellow p-2">
                                                <img :src="base_url+`/assets/admin/images/office-trip.jpg`" alt="" class="img-fluid w-100">
                                                <h4 class="trip-title mt-2">Universal Studios, Japan</h4>
                                                <h5 class="mb-2">Direct Attraction Transfer From Osaka</h5>
                                                <p class="price-from mb-0">From </p>
                                                <p class="trip-price">US <span>100</span></p>
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
        ...mapState('admin',['user','users']),
    },
    data() {
        return {
            base_url:baseUrl
        };
    },
    created() {
        this.fetch();
        this.getBookings();
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
            let params = {
                route: `api/auth/user/view/${this.$route.params.id}`,
                mutation: 'SET_USER',
                variable: 'data',
            };
            let {data} = await this.getAll(params); 
        },
          async getBookings(page = 1) {
                    let params = {
                        route: 'api/bookings/getUserBooking',
                        mutation: 'SET_USERS',
                        variable: 'data',
                        data: {
                            page,
                            entries:10,
                            id:this.$route.params.id
                        }
                    };
                    
            let {data} = await this.getAll(params);
       }
    }

};
</script>