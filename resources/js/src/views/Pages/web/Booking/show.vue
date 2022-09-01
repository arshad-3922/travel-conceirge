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
<section>
    <div class="container-fluid">
        <div class="col-lg-10 text-right my-lg-5 my-3">
            <label for="" class="grey-lbl">Status:</label>
            <label for="" class="blue-lbl" v-if="booking.status == 1">Approved</label>
            <label for="" class="blue-lbl" v-else>Pending</label>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-10 mx-auto">
                <div class="row">
                    <div class="col-lg-4 mt-lg-0 mt-2">
                        <label for="" class="grey-lbl">Booked By:</label>
                        <p class="blue-lbl">{{booking.user.name}}</p>
                    </div>
                    <div class="col-lg-4 mt-lg-0 mt-2">
                        <label for="" class="grey-lbl">Service Type:</label>
                        <p class="blue-lbl">{{booking.service.name}}</p>
                    </div>
                    <div class="col-lg-4 mt-lg-0 mt-2">
                        <label for="" class="grey-lbl">Surgeon Name:</label>
                        <p class="blue-lbl">{{booking.surgeon.name}}</p>
                    </div>
                </div>
                <div class="row mt-lg-4">
                    <div class="col-lg-4 mt-lg-0 mt-2">
                        <label for="" class="grey-lbl">Date:</label>
                        <p class="blue-lbl">{{formatDate(booking.created_at)}}</p>
                    </div>
                    <div class="col-lg-4 mt-lg-0 mt-2">
                        <label for="" class="grey-lbl">Slot:</label>
                        <p class="blue-lbl">{{booking.appointment_from}} - {{booking.appointment_to}}</p>
                    </div>
                    <div class="col-lg-4 mt-lg-0 mt-2">
                        <label for="" class="grey-lbl">Type:</label>
                        <p class="blue-lbl">{{booking.package.name}}</p>
                    </div>
                </div>
                <div class="row mt-lg-4">
                    <div class="col-lg-4 mt-lg-0 mt-2">
                        <label for="" class="grey-lbl">Payment:</label>
                        <p class="blue-lbl">{{booking.payment}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
</div>
</template>
<script>
import {mapState, mapActions} from 'vuex';
export default {

    computed: {
        ...mapState('web',['booking']),
    },
    data() {
        return {
            date: '',
            base_url:base_url
        };
    },
    created() {
        this.fetch();
    },
    methods: {
        ...mapActions('web', ['getAll']),
        async fetch() {
            let {type, status} = this.$route.params;
            let params = {
                route: `api/web/show/${this.$route.params.id}`,
                mutation: 'SET_BOOKING',
                variable: 'data',
            };
            let {data} = await this.getAll(params); 
        }
    }

};
</script>