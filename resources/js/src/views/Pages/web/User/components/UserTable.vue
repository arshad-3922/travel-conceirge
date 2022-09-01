<template>
	<div>
		<table class="table table-striped table-bordered zero-configuration dataTable no-footer">
			<thead>
				<tr>
					<th>S.NO</th>
					<th>Username</th>
					<th>Registration Date</th>
					<th>status</th>
					<th>ACTIONS</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(user,index) in users.data">
					<td>{{++index}}</td>
					<td>{{user.name}}</td>
					<td>{{formatDate(user.create_at)}}</td>
					<td v-if="user.block_status == 0"><span style="color:red">in-active</span></td>
					<td v-else ><span style="color:green">active</span></td>
					<td>
					<div class="btn-group mr-1 mb-1">
							 <button type="button" class="btn btn-drop-table btn-sm"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-ellipsis-v"></i>
                        </button>
							<div class="dropdown-menu">
								 <router-link class="dropdown-item" :to="{name:'admin.users.view', params: {id: user.id}}">View </router-link>
								<a class="dropdown-item" data-toggle="modal" data-target=".inactiveRecipe" @click="setUserConfirmation(user.id,user.block_status)" v-if="user.block_status == 1">in-active</a>
								<a class="dropdown-item" data-toggle="modal" data-target=".inactiveRecipe" @click="setUserConfirmation(user.id,user.block_status)" v-if="user.block_status == 0">active</a>

							</div>
						</div>
					</td>
				</tr>
				<no-record tag="tr" :colspan="7" :data="users.data"
				class="col-md-3"></no-record>
			</tbody>
		</table>
		<confirmation :title="title" :subtitle="subTitle" @confirmed="blockEntity(userId)">
		</confirmation>
	</div>
</template>
<script>
	const Confirmation = () => import('@core/components/Popups/Confirm.vue');
	import {mapState, mapActions} from 'vuex';

	export default {
		data() {
			return {
				userId:'',
				title: '',
				subTitle: '',
			};
		},

		computed: {
			...mapState('admin', ['users']),
			status() {
				return this.$route.params.status;
			},
		},
		components: {
			Confirmation
		},
		methods: {
			...mapActions('admin', ['store']),
			async blockEntity(id) {
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
			setUserConfirmation(id,status){
				//$('.modal').remove();
				$('.inactiveRecipe').modal({backdrop: false});
				$('body').css('opacity','1');
				this.userId = id;
				this.title =    (status) ? 'Inactive' : 'active';
				this.subTitle = (status) ? 'Are you sure you want to inactivate this user?' : 'Are you sure you want to active this user?';

			},
			async updateStatus(id){
				let params = {
					route: 'api/auth/user/status/'+id,
					method: 'POST',
					mutation: 'SET_USER_STATUS',
					variable: 'data',

				};
				let {data} = await this.store(params);
				if (data.status) {
					$('.inactiveRecipe').modal('hide');
					this.$snotify.success('user status updated');
					  setTimeout(function () {
                        window.location.reload();
                        // self.$router.push({ name: 'admin.dashboard' });
                    }, 2000);
					
				} else {
					this.$snotify.error('something went wrong');
				}
			}
		}
	}

</script>
