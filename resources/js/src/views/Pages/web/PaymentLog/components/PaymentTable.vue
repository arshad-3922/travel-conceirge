<template>
	<div>
		<table class="table table-striped table-bordered zero-configuration dataTable no-footer">
			<thead>
				<tr>
					<th>S.NO</th>
					<th>Order Id</th>
					<th>Order Date</th>
					<th>Amount</th>
					<th>Status</th>
					<th>ACTIONS</th>
				</tr>
			</thead>
			<tbody>
				<tr :key="index" v-for="(payment,index) in payments.data">
					<td>{{++index}}</td>
					<td>{{payment.order_id}}</td>
					<td>{{formatDate(payment.create_at)}}</td>
					<td>{{payment.amount}}</td>

					<td>
						<div class="btn-group custom-dropdown ml-2 mb-1">
						<p v-if="payment.status == 'Paid' " v-bind:style="{'color':'green'}">Paid</p>
						<p v-if="payment.status == 'Unpaid' " v-bind:style="{'color':'orange'}">Unpaid</p>	
						</div>
					</td>
					<td>
						<div class="btn-group custom-dropdown ml-2 mb-1">
							<button type="button" class="btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-ellipsis-v"></i></button>
							<div class="dropdown-menu custom-dropdown">

								<router-link :to="{name:'admin.payments.view',params:{id: payment.id}}" class="dropdown-item">View</router-link>
							</div>
						</div>
					</td>
				</tr>
				<no-record tag="tr" :colspan="7" :data="payments.data"
				class="col-md-3"></no-record>
			</tbody>
		</table>
		<confirmation :title="title" :subtitle="subTitle" @confirmed="updateStatus">
		</confirmation>
	</div>
</template>
<script>
	const Confirmation = () => import('@core/components/Popups/Confirm.vue');
	import {mapState, mapActions} from 'vuex';

	export default {
		data() {
			return {
				paymentId: undefined,
				title: '',
				subTitle: '',
			};
		},
		created(){
	    //alert(payments.data) 		
		},
		computed: {
			...mapState('admin', ['payments']),
			status() {
				return this.$route.params.status;
			},
		},
		components: {
			Confirmation
		},
		methods: {
			...mapActions('admin', ['store']),
			async blockEntity() {
				let params = {
					route: 'api/auth/user/block/'+this.userId,
					method: 'post',
				};
				let {data} = await this.store(params);
				if (data.status) {
					this.$snotify.success(data.message);

				} else {

					this.$snotify.error(data.message);
				}
			},
			setPaymentConfirmation(id,status){
				this.paymentId = id;
				this.title = (status) ? 'Inactive' : 'active';
				this.subTitle = (status) ? 'Are you sure you want to inactivate this payment?' : 'Are you sure you want to active this payment?';

			},
			async updateStatus(){

				let params = {
					route: 'api/payment/status/'+this.paymentId,
					method: 'POST',
					mutation: 'SET_PAYMENT_STATUS',
					variable: 'data',

				};
				let {data} = await this.store(params);
	
				if (data.status) {
					$('.inactiveRecipe').modal('hide');
					this.$snotify.success(data.message);

				} else {

					this.$snotify.error(data.message);
				}
			}
		}
	}

</script>
