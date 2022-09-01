<template>
	<div>
	 <div class="row">
		<div class="col-sm-12">
            <table class="table table-borderless dataTable">
              <thead>
                      <tr>
						<th class="sorting_asc">S.No</th>
                        <th class="sorting">Service Name</th>
						<th class="sorting">Category</th>
                        <th class="sorting">Cost</th>
						<th class="sorting">Date Added</th>
						<th class="sorting">Status</th>
						<th class="sorting">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(service,index) in services.data" :key="index">
					<td>{{++index}}</td>
					<td>{{service.name}}</td>
					<td>{{service.category.name}}</td>
					<td>{{service.discounted_cost}}</td>
				    <td>{{formatDate(service.created_At)}}</td>
					<td v-if="service.status == 1">
                        <span style="color:green">Active</span>
					</td>
                    <td v-else>
                        <span style="color:red">In-active</span>
					</td>
					<td>
						<div class="btn-group mr-1 mb-1">
							 <button type="button" class="btn btn-drop-table btn-sm"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-ellipsis-v"></i>
                        </button>
								<div class="dropdown-menu">
								<router-link class="dropdown-item" :to="{name:'admin.services.show', params: {id: service.id}}">View</router-link>
							    <router-link class="dropdown-item" :to="{name:'admin.services.edit', params: {id: service.id}}">Edit</router-link>
								<a class="dropdown-item" data-toggle="modal" data-target=".inactiveRecipe" @click="setServiceConfirmation(service.id,service.status)" v-if="service.status == 1">in-active</a>
								<a class="dropdown-item" data-toggle="modal" data-target=".inactiveRecipe" @click="setServiceConfirmation(service.id,service.status)" v-if="service.status == 0">active</a>
							</div>
						</div>
					</td>
				     </tr>
							<no-record tag="tr" :colspan="7" :data="services.data"
							class="col-md-3"></no-record>
                    </tbody>
                </table>
        </div>
	</div>
		<confirmation :title="title" :subtitle="subTitle" @confirmed="blockEntity(serviceId)">
		</confirmation>
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
				songFile:''
			};
		},
		computed: {
			...mapState('admin', ['services']),
			status() {
				return this.$route.params.status;
			},
		},
		components: {
			Confirmation,
		},
		methods: {
			...mapActions('admin', ['store','getAll']),
			async blockEntity() {
				let params = {
					route: 'api/services/status/'+this.serviceId,
					method: 'post',
				};
				let {data} = await this.store(params);
				if (data.status) {
					this.$snotify.success(data.message);
					setTimeout(function () {
					window.location.reload();
					}, 1000);		
					$(".inactiveRecipe").hide();
					$(".modal-backdrop").remove();
				} else {
					this.$snotify.error(data.message);
				}
			},
			setServiceConfirmation(id,status){
				this.serviceId = id;
				this.title    = (status) ? 'Inactive' : 'active';
				this.subTitle = (status) ? 'Are you sure you want to in-active this service?' : 'Are you sure you want to active this service?';

			},
			async updateStatus(id){
				let params = {
					route: 'api/services/status/'+id,
					method: 'POST',
					mutation: 'SET_SERVICES_STATUS',
					variable: 'data',

				};
				let {data} = await this.store(params);
				if (data.status) {
					$('.inactiveRecipe').modal('hide');
					  setTimeout(function () {
                        window.location.reload();
                    }, 2000);
					this.$snotify.success('service status updated');

				} else {
					this.$snotify.error('something went wrong');
				}
			},
 
		}
	}

</script>
