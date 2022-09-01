<template>
		<div class="col-sm-12">
            <table class="table table-borderless dataTable">
              <thead>
                      <tr>
						<th class="sorting_asc">S.No</th>
                        <th class="sorting">Booked By</th>
						<th class="sorting">Booked For Services</th>
                        <th class="sorting">Appointment Date</th>
						<th class="sorting">Appointment Time</th>
                        <th class="sorting_asc">Payment</th>
						<th class="sorting">Status</th>
						<th class="sorting">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(booking,index) in bookings.data" :key="index">
					<td>{{++index}}</td>
					<td>{{booking.user.name}}</td>
					<td>{{booking.service.name}}</td>
				    <td>{{formatDate(booking.appointment_date)}}</td>
					<td>{{booking.appointment_from}} -- {{booking.appointment_to}} </td>
					<td>{{booking.payment}}</td>
					<td v-if="booking.status == 1">
                        <span style="color:green">Approved</span>
					</td>
                    <td v-else>
                        <span style="color:orange">Pending</span>
					</td>
					<td>
						<div class="btn-group mr-1 mb-1">
							 <button type="button" class="btn btn-drop-table btn-sm"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-ellipsis-v"></i>
                        </button>
							<div class="dropdown-menu">
								<router-link class="dropdown-item" :to="{name:'web.booking.show',params:{id:booking.id}}">View</router-link>
							</div>
						</div>
					</td>
				     </tr>
						<no-record tag="tr" :colspan="7" :data="bookings.data"
						class="col-md-3"></no-record>
                    </tbody>
                </table>
        </div>
</template>
<script>
	import {mapState, mapActions} from 'vuex';

	export default {
		data() {
			return {
				bookingId: undefined,
				title: '',
				subTitle: '',
			};
		},
		computed: {
			...mapState('web', ['bookings']),
			status() {
				return this.$route.params.status;
			},
		}
	
	}

</script>
