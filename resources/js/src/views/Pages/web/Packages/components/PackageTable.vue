<template>		
 <div class="row">
		<div class="col-sm-12">
            <table class="table table-borderless dataTable">
              <thead>
                      <tr>
						<th class="sorting_asc">S.No</th>
                        <th class="sorting">Package Id</th>
						<th class="sorting">Package Name</th>
                        <th class="sorting">Charges</th>
                        <th class="sorting_asc">Status</th>
						<th class="sorting">Manage</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(packag,index) in packages.data" :key="packag.id">
					<td>{{++index}}</td>
					<td>{{packag.id}}</td>
					<td>{{packag.name}}</td>
					<td>{{packag.amount}}</td>
					<td v-if="packag.status == 1">
                        <span style="color:green">Active</span>
					</td>
                    <td v-else>
                        <span style="color:red">In Active</span>
					</td>
					<td>
						<div class="btn-group mr-1 mb-1">
							 <button type="button" class="btn btn-drop-table btn-sm"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-ellipsis-v"></i>
                        </button>
							<div class="dropdown-menu">
								<router-link class="dropdown-item" :to="{name:'admin.packages.show', params: {id: packag.id}}">View</router-link>
								<router-link class="dropdown-item" :to="{name:'admin.packages.edit', params: {id: packag.id}}">Edit</router-link>
								<a class="dropdown-item" data-toggle="modal" data-target=".inactiveRecipe" @click="setPackageConfirmation(packag.id,packag.status)" v-if="packag.status == 1">in-active</a>
								<a class="dropdown-item" data-toggle="modal" data-target=".inactiveRecipe" @click="setPackageConfirmation(packag.id,packag.status)" v-if="packag.status == 0">active</a>
							</div>
						</div>
					</td>
				     </tr>
							<no-record tag="tr" :colspan="7" :data="packages.data"
							class="col-md-3"></no-record>
                    </tbody>
                </table>
        </div>
		 <confirmation :title="title" :subtitle="subTitle" @confirmed="blockEntity(packageId)">
		</confirmation>
	</div>
</template>
<script>
	const Confirmation = () => import('@core/components/Popups/Confirm.vue');
	import {mapState, mapActions} from 'vuex';
	export default {
		data() {
			return {
				packageId: undefined,
				title: '',
				subTitle: '',
			};
		},
		computed: {
			...mapState('admin', ['packages']),
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
					route: 'api/packages/status/'+this.bidId,
					method: 'post',
				};
				let {data} = await this.store(params);
				if (data.status) {
					this.$snotify.success(data.message);

				} else {

					this.$snotify.error(data.message);
				}
			},
			setPackageConfirmation(id,status){
				this.packageId = id;
				this.title = (status) ? 'Inactive' : 'active';
				this.subTitle = (status) ? 'Are you sure you want to in-active this package?' : 'Are you sure you want to active this package?';

			},
			async updateStatus(id){
				let params = {
					route: 'api/package/status/'+id,
					method: 'POST',
					mutation: 'SET_PACKAGE_STATUS',
					variable: 'data',

				};
				let {data} = await this.store(params);
				if (data.status) {
					$('.inactiveRecipe').modal('hide');
					  setTimeout(function () {
                        window.location.reload();
                    }, 2000);
					this.$snotify.success('package status updated');

				} else {
					this.$snotify.error('something went wrong');
				}
			}
		}
	}

</script>
