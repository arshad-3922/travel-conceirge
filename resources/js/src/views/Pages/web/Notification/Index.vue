<template>
<section class="position-relative pb-lg-5">
    <img :src="base_url+`/assets/web/images/about-right.png`" alt="" class="img-fluid noti-right">
    <img :src="base_url+`/assets/web/images/about-left.png`" alt="" class="img-fluid noti-left">
    <div class="container">
        <div class="row">
            <div class="col-12 mt-lg-5 mt-3">
                <h2 class="notification-heading">Notifications</h2>
            </div>
            <div class="col-12">
                <div class="d-flex align-items-start noti-div mt-2" v-for="notification in notifications.data" :key="notification.id">
                    <img :src="base_url+`/assets/web/images/noti-img.png`" alt="" class="mr-3">
                    <div>
                        <p>{{notification.data.title}}</p>
                        <label for="" class="noti-lbl">{{formatDate(notification.created_at)}}</label>
                        <label for="" class="noti-lbl">10:30 AM</label>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-lg-5 mt-3">
               	<no-record tag="div" :data="notifications.data" class="noti-inner-cards mb-3">No Data Available</no-record>
				<pagination :data="notifications" @pagination-change-page="fetch"></pagination>
            </div>
        </div>
    </div>
</section>
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
