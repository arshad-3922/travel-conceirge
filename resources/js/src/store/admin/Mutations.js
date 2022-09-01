import Vue from "vue";

export default{
	SET_HOME_DATA(state,data){
		console.log(data);
		Vue.set(state,'home',data);

	},
	SET_NOTIFICATIONS(state,data){
		Vue.set(state,'notifications',data);
	},
	MARK_NOTIFICATION_READ(state,data){
		let index = _.findIndex(state.bell_notifications,(item)=>{return item.id == data.id});
		Vue.delete(state.bell_notifications,index);
		Vue.set(state,'notification_count',--state.notification_count);
	},
	SET_BELL_NOTIFICATIONS(state,data){

		Vue.set(state,'notification_count',data.notification_count);
		Vue.set(state,'bell_notifications',data.notifications);
	},
	PUSH_BELL_NOTIFICATIONS(state,notification){
		let notifications = state.bell_notifications;
		notifications.unshift(notification);
		let count = ++state.notification_count
		Vue.set(state,'bell_notifications',notifications);
		Vue.set(state,'notification_count',count);
	},

	SET_PROFILE(state,value){
		Vue.set(state,'profile',value);
	},
	SET_SEARCH(state,value){
		Vue.set(state,'search',value);
	},
	SET_ENTRIES(state,value){
		Vue.set(state,'entries',value);
	},

	SET_SERVICE(state,value){
		Vue.set(state,'service',value);
	},
	SET_SERVICES(state,value){
		Vue.set(state,'services',value);
	},
	CHANGE_USER_STATUS(state,data){
		let index = _.findIndex(state.users.data,(user)=>{ return user.id == data.id});
		state.users.data.splice(index,1);
	},
	SET_SUBSCRIPTIONS(state,data){
		Vue.set(state,'subscriptions',data);
	},
	SET_SUBSCRIPTION(state,data){
		Vue.set(state,'subscription',data);
	},
	SET_BOOKINGS(state,data){
		Vue.set(state,'bookings',data);
	},
	SET_BOOKING(state,data){
		Vue.set(state,'booking',data);
	},
	SET_CMSS(state,data){
		Vue.set(state,'cmss',data);
	},
	SET_CMS(state,data){
		Vue.set(state,'cms',data);
	},
	SET_CATEGORY(state,data){
		Vue.set(state,'category',data);
	},
    SET_CATEGORY_STATUS(state,data){
		let index = _.findIndex(state.categories.data,(category)=>{ return category.id == data.id});
		state.categories.data[index].status = data.status;
	},
	SET_USER_STATUS(state,data){
		let index = _.findIndex(state.users.data,(user)=>{ return user.id == data.id});
		state.users.data[index].block_status = data.status;
	},
	SET_SONGS_STATUS(state,data){
		let index = _.findIndex(state.songs.data,(song)=>{ return song.id == data.id});
		state.songs.data[index].status = data.status;
	},
	SET_PAYMENT_STATUS(state,data){
		let index = _.findIndex(state.payments.data,(payment)=>{ return payment.id == data.id});
		state.payments.data[index].status = data.status;
	},

  
	SET_USERS(state,data){
		Vue.set(state,'users',data);
	},
	SET_PAYMENTS(state,data){
		Vue.set(state,'payments',data);
	},
	SET_USER(state,data){
		Vue.set(state,'user',data);
	},
	SET_FEEDBACKS(state,data){
		Vue.set(state,'feedbacks',data);
	},
	SET_FEEDBACK(state,data){
		Vue.set(state,'feedback',data);
	},
	SET_ADMINS(state,data){
		Vue.set(state,'admins',data);
	},
	SET_ADMIN(state,data){
		Vue.set(state,'admin',data);
	},
	DELETE_ADMIN(state,data){
		let index = _.findIndex(state.admins.data,(admin)=>{ return admin.id == data.id});
		state.admins.data.splice(index,1);
	},   
}
