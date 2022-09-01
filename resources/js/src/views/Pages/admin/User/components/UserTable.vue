<template>
        
                                <div class="col-lg-12">
                                    <div class="table-responsive">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>S.No</th>
                                                    <th>Full Name</th>
                                                    <th>Email Address</th>
                                                    <th>Date Registered</th>
                                                    <th>Package Subscribed</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                       <tr v-for="(user,index) in users.data" :key="index">
                                       <td>{{++index}}</td>
                                       <td>{{user.name}}</td>
                                       <td>{{user.email}}</td>
                                       <td>{{formatDate(user.created_at)}}</td>
                                       <td>Basic</td>
                                       <td>{{user.block_status ? 'Active' : 'Inactive'}}</td>
                                       <td>
                                          <div class="btn-group custom-dropdown">
                                                      <button type="button" class="btn transparent-btn bg-transparent btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-ellipsis-v"></i></button>
                                                     <div class="dropdown-menu text-left custom-dropdown">
                                                                <router-link :to="{name:'admin.users.show',params:{id:user.id}}" class="dropdown-item d-flex align-items-center justify-content-start">
                                                                    <i class="fas fa-eye"></i>
                                                                    View
                                                                </router-link>

                                                                <a href="javascript:void(0)" data-toggle="modal"  @click="setUserConfirmation(user.id,user.block_status)" class="dropdown-item d-flex align-items-center justify-content-start">
                                                                    <i class="fas fa-check"></i>
                                                                    {{user.block_status ? 'Inactive' : 'Active'}}
                                                                </a>
                                                            </div>
                                          </div>
                                       </td>
                                    </tr>
                                       <no-record tag="tr" :colspan="7" :data="users.data"
                                             class="col-md-3"></no-record>
                                                                  </tbody>
                                                               </table>
                                                            </div>
                                                            <confirmation :title="title" @confirmed="updateStatus(userId)">
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
			};
		},
		computed: {
			...mapState('admin', ['users']),
		},
      components:{Confirmation},
		methods: {
			...mapActions('admin', ['store']),
			async updateStatus(id) {
				let params = {
					route: 'api/auth/user/block/'+id,
               mutation:'SET_USER_STATUS',
               variable: 'data',
					method: 'POST',
				};
				let {data} = await this.store(params);
				if (data.status) {
					this.$snotify.success(data.message);		
				} else {
					this.$snotify.error(data.message);
				}
			},
        	setUserConfirmation(id,status){
            $('.activeUser').modal('show');
				this.userId = id;
				this.title = (status) ? 'Are you sure you want to inactivate this user?' : 'Are you sure you want to active this user?';
			}, 
		}
	}

</script>
