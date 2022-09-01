<template>
<div>
<section class="login">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-12">
            <ValidationObserver ref="wizardobserver" v-slot="{handleSubmit,validate}">
             <form @submit.prevent="handleSubmit(submit)" id="msform">
              <form-wizard  @on-change="changeTab" ref="wizard">
                <tab-content title="Step" :before-change="changingStep">
                        <div class="row">
                                <div class="col-lg-12">
                                    <div class="for-blue-head">
                                        <h3>Step 1</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3">
                              <div class="col-lg-12">
                                <div class="for-padd">
                                    <fieldset>
                                        <h1 class="login-heading">Make an Appointment</h1>
                                        <div class="row">
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-field">
                                                    <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">Full Name*</label>
                                                    <ValidationProvider  name="Full Name" rules="required" v-slot="{errors}">
                                                    <input type="text" class="all-input w-100" placeholder="Enter Full Name" v-model="booking.first_name">
                                                    <span class="text-danger">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-field">
                                                    <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">Email Address*</label>
                                                    <ValidationProvider  name="Email Address" rules="required" v-slot="{errors}">
                                                    <input type="email" class="all-input w-100" placeholder="Enter Email Address" v-model="booking.email">
                                                    <span class="text-danger">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-field">
                                                    <label for="" class="login-lbl mt-3 mb-2">Phone*</label>
                                                     <ValidationProvider  name="Phone" rules="required" v-slot="{errors}">
                                                    <input type="number" class="all-input w-100" placeholder="Enter Phone" v-model="booking.phone_number">
                                                    <span class="text-danger">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-field">
                                                    <label for="" class="login-lbl mt-lg-5 mt-3 mb-2">Special Request:</label>
                                                    <textarea name="" id="" rows="8" class="all-input w-100" placeholder="Enter Special Request" v-model="booking.spacial_request"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- <input type="button" name="next" class="next yellow-btn px-5 py-3" value="Continue"/> -->
                                    </fieldset>
                                </div>
                              </div>
                            </div> 
                </tab-content>

              <tab-content title="Step" :before-change="changingStep">     
                <div class="row">
                <div class="col-lg-12">
                    <div class="for-blue-head">
                        <h3>Step 2</h3>
                    </div>
                </div>
            </div>
             <div class="row mt-3">
                <div class="col-lg-12">
                    <div class="for-padd">
                        <fieldset>
                        <h1 class="login-heading">Make an Appointment</h1><br />
                        <div class="row">
                            <div class="col-12">
                                <div class="form-field">
                                    <flat-pickr :config="config" name="date" class="sort-date ml-1"
                                     placeholder="Select a booking Date" v-model="checkslots"  @on-change="fetch">
                                     </flat-pickr>
                                </div>
                            </div>
                            <div class="col-12">
                                <h3 class="select-time my-3">Select Time</h3>
                            </div>
                            <div class="col-12" v-if="isShowing">
                                <div class="form-field">
                                    <div>
                                        <p class="d-lg-inline-block" v-for="(time,index) in serviceslots" :key="index">
                                            <ValidationProvider  name="SlotOption" rules="required" v-slot="{errors}">
                                            <input type="radio" :id="index" :value="time.from" name="radio-group" v-model="booking.slot">&nbsp;
                                            <label :for="index">{{time.from}} - {{time.to}}</label>
                                             <span class="text-danger">{{ errors[0] }}</span>
                                           </ValidationProvider>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <input type="button" name="previous" class="previous yellow-btn px-5 py-3 mt-sm-0 mt-2" value="Previous" /> -->
                        <!-- <input type="button" name="next" class="next yellow-btn px-5 py-3 py-3 mt-sm-0 mt-2" value="Continue" /> -->
                    </fieldset>
                    </div>
                </div>
            </div>     
     </tab-content> 

    <tab-content :before-change="changingStep">
        <div class="row">
                    <div class="col-lg-12">
                        <div class="for-blue-head">
                            <h3>Step 3</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                             <div class="for-padd" v-if="currentTab == 3">
                        <fieldset>
                        <h1 class="login-heading">Payment Method</h1>
                        <div class="row"  v-if="isOnline">
                             <p class="d-lg-inline-block">
                                   <input type="radio"   id="test1" name="radio-group"   value="Online"    v-model="booking.payment_method" @click="checkMethod('online')">
                                  <label for="test1">Pay Online</label>
                                     <input type="radio" id="test2" name="radio-group"   value="Person"    v-model="booking.payment_method" @click="checkMethod('person')">
                                  <label for="test2">Pay Person</label>
                            </p>
                            
                            <div class="col-12">
                                <h3 class="select-time my-3">Payment Details</h3>
                            </div>
                            <div class="col-12">
                                <div class="form-field">
                                    <label for="" class="login-lbl mt-3 mb-2">Enter Card Holder Name*</label>
                                    <ValidationProvider  name="Card Holder Name" rules="required" v-slot="{errors}">
                                    <input type="text" class="all-input w-100" placeholder="Cardholder Name" v-model="booking.card_holder_name">
                                     <span class="text-danger">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-field">
                                    <label for="" class="login-lbl mt-3 mb-2">Enter Card Number*</label>
                                    <ValidationProvider  name="Card Number" rules="required" v-slot="{errors}">
                                    <input type="number" class="all-input w-100" placeholder="Card Number" v-model="booking.card_number">
                                    <span class="text-danger">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-field">
                                    <label for="" class="login-lbl mt-3 mb-2">Enter Expiry Date*</label>
                                    <ValidationProvider  name="Expiry Date" rules="required" v-slot="{errors}">
                                    <input type="date" class="all-input w-100" placeholder="Expiration Date" v-model="booking.expiry_date">
                                     <span class="text-danger">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-field">
                                    <label for="" class="login-lbl mt-3 mb-2">Enter Code*</label>
                                    <ValidationProvider  name="Code" rules="required" v-slot="{errors}">
                                    <input type="number" class="all-input w-100" placeholder="Security Code" v-model="booking.code">
                                    <span class="text-danger">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>
                            
                        </div>

                        <div class="row" v-else>
                              <p class="d-lg-inline-block">
                                   <input type="radio"   id="test1" name="radio-group"   value="Online"    v-model="booking.payment_method" @click="checkMethod('online')">
                                  <label for="test1">Pay Online</label>
                                     <input type="radio" id="test2" name="radio-group"   value="Person"    v-model="booking.payment_method" @click="checkMethod('person')">
                                  <label for="test2">Pay Person</label>
                            </p>
                        </div>
                        <!-- <input type="button" name="previous" class="previous yellow-btn px-5 py-3 mt-sm-0 mt-2" value="Previous" />
                        <span class="yellow-btn px-5 py-3 mt-sm-0 mt-2 d-inline-block" data-toggle="modal" data-target="#orderPlace">
                                Submit
                        </span> -->
                    </fieldset>
                            </div>
                        </div>
                </div>
              </tab-content>
             <div slot="footer" slot-scope="props" class="row">
               <div class="col-md-6">
                <button @click="props.prevTab()" v-if="props.activeTabIndex != 0" type="button" class="veri-green-button">Previous</button>
                </div>
                <div class="col-md-6">
                <button v-if="!props.isLastStep" @click="props.nextTab()" type="button" class="veri-green-button">Continue</button>
                <button v-else type="submit" class="veri-green-button">Complete</button>
                </div>
            </div>  
            </form-wizard>
            </form>
             </ValidationObserver>
            </div>
        </div>
    </div>
</section>
</div>
</template>
<script>
import {mapState, mapActions} from 'vuex';
export default {
    data() {
        return {
            currentTab: 1,
            activeTabIndex: 0,
            base_url:base_url,
            serviceslots:{},
            booking:{},
            checkslots:'',
            isShowing:false,
            isOnline:true,
            config: {
                wrap: true, // set wrap to true only when using 'input-group'
                altFormat: 'M j, Y',
                altInput: true,
                dateFormat: 'Y-m-d',
                minDate: "today",
          
            },
         };
        
    },
    computed:{
        checkPayment(){
            return this.checkMethod();
        }
    },
    created() {
       this.checkMethod();
       localStorage.setItem('surgeon_id',this.$route.params.id);
    },
    methods: {
        ...mapActions('web', ['getAll','store']),
        async fetch() {
            this.isShowing  = false
            let serviceId   = localStorage.getItem('service_id');
            let packageId   = localStorage.getItem('package_id');
            let surgeonId   = this.$route.params.id;
			let params = {
				route: 'api/web/serviceslotDetails',
				mutation: 'SET_BOOKING',
				variable: 'data',
				data: {
                    service_id:serviceId,
                    surgeon_id:surgeonId,
                    package_id:packageId,
                    date:this.checkslots
                }
			};
			let { data } = await this.getAll(params);
            if(data.status == 'Failed'){
              	this.$snotify.error(data.message)	
            }else{
               this.serviceslots  = data.data
               this.isShowing = true;
            }
         
		  },
            changeTab(prev, next) {
                    console.log();
                    this.currentTab = next + 1;
                },
            async changingStep(index) {
                    let valid = await this.$refs.wizardobserver.validate(this.$event);
                    //alert(index);
                    this.$emit('on-validate', valid, this.activeTabIndex)
                    return valid;
            },
            checkMethod(method){
               if(method == 'person'){
                   this.isOnline = false
               }
               if(method == 'online'){
                   this.isOnline = true
               }
            },
            async submit(){
                let fd = new FormData();
                fd.append('service_id',localStorage.getItem('service_id'))
                fd.append('package_id',localStorage.getItem('package_id'))
                fd.append('surgeon_id',localStorage.getItem('surgeon_id'))
                fd.append('booking_date',this.checkslots)
                this.buildFormData(fd,this.booking)
             	let response = await axios.post('/api/web/booking',fd);
				if (response.data.data) {
					this.$snotify.success(response.data.message);
                    this.$router.push({name: 'web.booking.index'});
				} else {
                this.errors  = response.data.message;  
				this.$snotify.error(response.data.message)
				}
         }   
    }

};

</script>