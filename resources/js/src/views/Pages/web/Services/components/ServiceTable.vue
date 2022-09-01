<template>
	<div>
		<table class="table table-striped table-bordered zero-configuration dataTable no-footer">
			<thead>
				<tr>
					<th>S.NO</th>
					<th>Service Name</th>
					<th>DATE</th>
					<th>status</th>
					<th>ACTIONS</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(service,index) in services.data">
					<td>{{index}}</td>
					<td>{{service.title}}</td>
					<td>{{formatDate(service.create_at)}}</td>

				    <td v-if="service.status == 1">
                        <span style="color:green">Active</span>
					</td>
                        <td v-else>
                        <span style="color:red">In Active</span>
					</td>
					<td>
						<div class="btn-group mr-1 mb-1">
                        <button type="button" class="btn btn-drop-table btn-sm"
                                data-toggle="dropdown"><i class="fa fa-ellipsis-v"></i>
                        </button>
                        <div class="dropdown-menu">
                            <router-link class="dropdown-item" :to="{name: 'admin.services.show',params: {id: service.id}}">View </router-link>
                              <router-link class="dropdown-item" :to="{name: 'admin.services.edit',params: {id: service.id}}">Edit </router-link> 
						<a class="dropdown-item" data-toggle="modal" data-target=".inactiveRecipe" @click="updateStatus(service.id)" v-if="service.status == 1">in-active</a>
                      <a class="dropdown-item" data-toggle="modal" data-target=".inactiveRecipe" @click="updateStatus(service.id)" v-if="service.status == 0">active</a>
                        </div>
                    </div>
					</td>
				</tr>
				<no-record tag="tr" :colspan="7" :data="services.data"
				class="col-md-3"></no-record>
			</tbody>
		</table>
		<!-- <confirmation :title="title" :subtitle="subTitle">
		</confirmation> -->
	</div>
</template>
<script>
	const Confirmation = () => import('@core/components/Popups/Confirm.vue');
	import {mapState, mapActions} from 'vuex';

	export default {
		data() {
			return {
				serviceId: undefined,
				title: '',
				subTitle: '',
			};
		},
		computed: {
			...mapState('admin', ['services']),
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
			// setUserConfirmation(id,status){
			// 	$('.inactiveRecipe').model({backdrop:false})
			// 	this.serviceId = id;
			// 	this.title =    (status) ? 'Active' : 'Inactive';
			// 	this.subTitle = (status) ? 'Are you sure you want to active this service?' : 'Are you sure you want to inactive this service?';

			// },
			async updateStatus(id){
				let params = {
					route: 'api/services/status/'+id,
					method: 'POST',
					mutation: 'SET_SERVICE_STATUS',
					variable: 'data',

				};
				let {data} = await this.store(params);
	
				if (data.status) {
					$('.inactiveRecipe').modal('hide');
					this.$snotify.success('service status updated');

				} else {

					this.$snotify.error('something went wrong');
				}
			}
		}
	}

</script>
