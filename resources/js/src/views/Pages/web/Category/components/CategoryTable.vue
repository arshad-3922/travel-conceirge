<template>
	<div>
		<table class="table table-striped table-bordered zero-configuration dataTable no-footer">
			<thead>
				<tr>
					<th>S.NO</th>
					<th>Category Name</th>
					<th>DATE</th>
					<th>status</th>
					<th>ACTIONS</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(category,index) in categories.data" :key="index">
					<td>{{index}}</td>
					<td>{{category.name}}</td>
					<td>{{formatDate(category.create_at)}}</td>
					<td v-if="category.status == 1">
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
                            <router-link class="dropdown-item" :to="{name: 'admin.categories.show',params: {id: category.id}}"><i
                                class="fa fa-eye"></i>View </router-link>
                             <router-link class="dropdown-item" :to="{name: 'admin.categories.edit',params: {id: category.id}}"><i
                                class="fa fa-eye"></i>Edit </router-link>    
                             <!-- <a v-if="category.status== 0" class="dropdown-item" data-toggle="modal" data-target=".activeUser" id="#activeUser"><i
                                class="fa fa-eye" @click="updateStatus(category.id)"></i>active</a>
                             <a v-else class="dropdown-item" data-toggle="modal" data-target=".inactiveUser" id="#inactiveUser" ><i
                                class="fa fa-eye" @click="updateStatus(category.id)"></i>in-active</a> -->
                        </div>
                    </div>
					</td>
				</tr>
				<no-record tag="tr" :colspan="7" :data="categories.data"
				class="col-md-3"></no-record>
			</tbody>
		</table>
		<!-- <confirmation :title="title" :subtitle="subTitle" @confirmed="updateStatus">
		</confirmation> -->
	</div>
</template>
<script>
	const Confirmation = () => import('@core/components/Popups/Confirm.vue');
	import {mapState, mapActions} from 'vuex';

	export default {
		data() {
			return {
				categoryId: undefined,
				title: '',
				subTitle: '',
			};
		},
		computed: {
			...mapState('admin', ['categories']),
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
			setCategoryConfirmation(id,status){
				this.categoryId = id;
				this.title = (status) ? 'Inactive' : 'active';
				this.subTitle = (status) ? 'Are you sure you want to inactivate this category?' : 'Are you sure you want to active this category?';

			},
			async updateStatus(id){

				let params = {
					route: 'api/category/status/'+id,
					method: 'POST',
					mutation: 'SET_CATEGORY_STATUS',
					variable: 'data',

				};
				let {data} = await this.store(params);
				if (data.status) {
					$('.inactiveRecipe').modal('hide');
					this.$snotify.success('category status updated');

				} else {

					this.$snotify.error('something went wrong');
				}
			}
		}
	}

</script>
