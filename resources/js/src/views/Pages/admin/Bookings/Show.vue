<template>

<div class="app-content content dashboard">
     <div class="content-wrapper">
          <div class="content-body">
               <section id="configuration">
                    <div class="row">
                         <div class="col-12">
                              <div class="card p-md-4 p-1">
                                   <div class="row">
                                        <div class="col-12">
                                             <router-link :to="{name:'admin.bookings.index'}">
                                             <div class="d-flex align-items-center">
                                                 <img :src="base_url+`/assets/admin/images/go-back.png`" class="go_back_link mr-1" alt="goBack">
                                                  <h1 class="fw-600 fc-black main-heading">
                                                       Booking Details
                                                  </h1>
                                             </div>
                                            </router-link>
                                        </div>
                                   </div>
                                   <div class="row mt-4">
                                        <div class="col-lg-3 col-md-6 mb-2">
                                             <label for="" class="cms-lable">Reference Number</label>
                                             <p class="cms-value">{{booking.id}}</p>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mb-2">
                                             <label for="" class="cms-lable">Booking Date</label>
                                             <p class="cms-value">{{formatDate(booking.created_at)}}</p>
                                        </div>
                                   </div>
                                   <!-- Account Information -->
                                   <h4 class="cms-site-heading mb-3">Account Information</h4>
                                   <div class="row">
                                        <div class="col-lg-3 col-md-6 mb-2">
                                             <label for="" class="cms-lable">Full Name</label>
                                             <p class="cms-value">{{booking.user.name}}</p>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mb-2">
                                             <label for="" class="cms-lable">Email Address</label>
                                             <p class="cms-value">{{booking.user.email}}</p>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mb-2">
                                             <label for="" class="cms-lable">Mobile Number</label>
                                             <p class="cms-value">{{booking.user.phone_number}}</p>
                                        </div>
                                   </div>
                                   <!-- Booking Information -->
                                   <h4 class="cms-site-heading mb-3">Booking Information</h4>
                                   <div class="row">
                                        <div class="col-lg-3 col-md-6 mb-2">
                                             <label for="" class="cms-lable">Hotel Name</label>
                                             <p class="cms-value">Hotel Quartier Latin</p>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mb-2">
                                             <label for="" class="cms-lable">Hotel Country</label>
                                             <p class="cms-value">Paris</p>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mb-2">
                                             <label for="" class="cms-lable">Number Of Rooms</label>
                                             <p class="cms-value">2 Rooms</p>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mb-2">
                                             <label for="" class="cms-lable">Name Of Guests</label>
                                             <ol>
                                                  <li> mark carson</li>
                                                  <li> mark carson</li>
                                                  <li> mark carson</li>
                                                  <li> mark carson</li>
                                             </ol>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mb-2">
                                             <label for="" class="cms-lable">Room Type</label>
                                             <p class="cms-value">Standard Double Room</p>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mb-2">
                                             <label for="" class="cms-lable">Number Of Adults</label>
                                             <p class="cms-value">5 Adults</p>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mb-2">
                                             <label for="" class="cms-lable">Number Of Child</label>
                                             <p class="cms-value">0 Child</p>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mb-2">
                                             <label for="" class="cms-lable">Meal Type</label>
                                             <p class="cms-value">Breakfast, Lunch & Dinner Included</p>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mb-2">
                                             <label for="" class="cms-lable">VAT</label>
                                             <p class="cms-value">Not Applicable</p>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mb-2">
                                             <label for="" class="cms-lable">Check-In Time</label>
                                             <p class="cms-value">August 21, 2021, 13:00</p>
                                        </div>
                                        <div class="col-lg-10">
                                             <label for="" class="cms-lable">Special Requests</label>
                                             <p class="cms-value">{{booking.spacial_request}}</p>
                                        </div>
                                   </div>
                                   <!-- Payment Information -->
                                   <h4 class="cms-site-heading mb-3 mt-5">Payment Information</h4>
                                   <div class="row">
                                        <div class="col-lg-10">
                                             <div class="row">
                                                  <div class="col-md-4 mb-2">
                                                       <label for="" class="cms-lable">Payment Method</label>
                                                       <p class="cms-value">{{booking.payment}}</p>
                                                  </div>
                                                  <div class="col-md-4 mb-2">
                                                       <label for="" class="cms-lable">Currency</label>
                                                       <p class="cms-value">USD</p>
                                                  </div>
                                                  <div class="col-md-4 mb-2">
                                                       <label for="" class="cms-lable">Total Amount Paid</label>
                                                       <p class="cms-value">{{booking.subscription.amount}}</p>
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
        ...mapState('admin',['booking']),
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
                route: `api/bookings/show/${this.$route.params.id}`,
                mutation: 'SET_BOOKING',
                variable: 'data',
            };
            let {data} = await this.getAll(params); 
        }
    }

};
</script>