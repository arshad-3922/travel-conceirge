<template>
	<div class="app-content content dashboard">
    <div class="content-wrapper content-wrapper-2">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row white-div px-3">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="ml-1 main-heading">Notifications</h1>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-12" v-for="notification in notifications.data" :key="notification.id">
                                <div class="noti-div px-lg-3 px-1">
                                    <div class="d-lg-flex justify-content-between align-items-center">
                                        <div class="d-lg-flex align-items-start">
                                            <img :src="base_url+`/assets/admin/images/noti-icon.png`"  alt="" class="mr-3 img-fluid mb-lg-0 mb-2">
                                            <div>
                                                <h3 class="noitfication-p">{{notification.data.title}}</h3>
                                                <div class="d-lg-flex justify-content-between mt-2">
                                                    <div>
                                                        <h6 class="noti-small noti-date">{{formatDate(notification.created_at)}}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <router-link :to="notification.data.route">View</router-link>
                                    </div>
                                </div>
                            </div>
							<no-record tag="div" :data="notifications.data" class="noti-inner-cards mb-3">No Data Available</no-record>
							<pagination :data="notifications" @pagination-change-page="fetch"></pagination>
                        </div>
                     
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
// const EmployeeTable = ()=> import('./components/EmployeeTable.vue');
export default {
	data(){
		return{
			base_url:base_url
		}
	},
	computed: {
		...mapState('admin', ['notifications', 'search','bell_notifications']),
	},
	components: {
		// EmployeeTable,
	},
	created() {
		let { page } = this.$route.query;
		this.fetch(page);
	},
	watch: {
		search: function(val, oldVal) {
			this.fetch();
		},
		bell_notifications(val,oldVal){
			this.fetch();
		}

	},
	methods: {
		...mapActions('admin', ['getAll']),
		async fetch(page = 1) {
			let { status } = this.$route.params;
			let params = {
				route: route('admin.notification.index'),
				mutation: 'SET_NOTIFICATIONS',
				variable: 'notifications',
				data: {
					page,
					status,
					search: this.search,
				}
			};
			let { data } = await this.getAll(params);
			if (page != 1) {
				this.addRouteQuery({ page });
			} else {

				this.addRouteQuery({});
			}
		}
	}
}

</script>
