<template>
    <div class="row row-table">
                                    <div class="main-tabble table-responsive">
                                        <div class="dataTables_wrapper container-fluid dt-bootstrap4">
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <table class="table table-borderless dataTable service-table">
                                                        <thead>
                                                            <tr>
                                                                <th>Date of Week</th>
                                                                <th>Working Hour</th>
                                                                <th>Day off</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <p>
                                                                        <!-- <input type="checkbox" id="c1" name="cb"> -->
                                                                        <label for="c1"></label>
                                                                        <a href="javascript:void(0)" @click="addnewslot" class="general-btn d-inline-block">Add New Slot</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr v-for="(slots, index ) in servicesSlots" :key="index">
                                                                <td>
                                                                      <ValidationProvider v-slot="{errors}" name="Date" rules="required">
                                                                      <flat-pickr :config="config" name="date" class="sort-date ml-1"
                                                                        placeholder="Select a Date" v-model="slots.date">
                                                                      </flat-pickr>
                                                                        <span class="text-danger">{{ errors[0] }}</span>
								                                    </ValidationProvider>
                                                                </td>
                                                                <!-- <td>
                                                                 <ValidationProvider name="Day" v-slot="{errors}" rules="required">
                                                                  <select name="" id="" class="general-select-6 w-100" v-model="slots.day">
                                                                    <option v-for="day of service_days"   :key="day"   :value="day">{{day}}</option>
                                                                 </select>   
                                                                  <span class="text-danger">{{ errors[0] }}</span>
								                                </ValidationProvider>
                                                                </td> -->
                                                                <td class="d-flex">
                                                                    <div class="d-flex flex-column">
                                                                        <p class="mb-1">From</p>
                                                                         <ValidationProvider v-slot="{errors}" name="From Time" rules="required">
                                                                         <flat-pickr :config="config1" name="date" class="sort-date ml-1"
                                                                          placeholder="Select a Date" v-model="slots.from">
                                                                        </flat-pickr>
                                                                        <span class="text-danger">{{ errors[0] }}</span>
								                                       </ValidationProvider>
                                                                    </div>
                                                                    &nbsp; &nbsp; &nbsp;
                                                                    <div class="d-flex flex-column">
                                                                        <p class="mb-1">To</p>
                                                                         <ValidationProvider name="To Time" v-slot="{errors}" rules="required">
                                                                         <flat-pickr :config="config1" name="date" class="sort-date ml-1"
                                                                          placeholder="Select a Date"  v-model="slots.to">
                                                                        </flat-pickr>
                                                                         <span class="text-danger">{{ errors[0] }}</span>
								                                       </ValidationProvider>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <p>
                                                                        <!-- <input type="checkbox" id="c2" name="cb"> -->
                                                                        <label for="c2"></label>
                                                                        <a href="javascript:void(0)" @click="removeslot(index)" class="table-anchor"><i class="fas fa-trash"></i></a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
</template>
<script>
export default {
    props :{
        slots : {
            model: true,
            type : Array,
            default : ()=> ([]),
        },
    },
    data(){
        return {
            servicesSlots : [],
            service_days:['Monday','Tuesday','Wednesday','Thrusday','Friday','Satarday','Sunday'], 
            config: {
                wrap: true, // set wrap to true only when using 'input-group'
                altFormat: 'M j, Y',
                altInput: true,
                dateFormat: 'Y-m-d',
                minDate: "today",
          
            },
             config1:{
                enableTime: true,
                noCalendar: true,
                dateFormat: "H:i",
                defaultDate: "13:45"
             }
         };
    },
    created(){
        this.servicesSlots = this.slots;
    },
    methods: {
        addnewslot(){
             this.servicesSlots.push({ id:'' });
             this.$emit('input',this.servicesSlots);
        },
        removeslot(index){
            this.servicesSlots.splice(index,1)
        },
    }
}
</script>