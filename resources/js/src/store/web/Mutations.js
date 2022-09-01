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
	SET_SEARCH(state,value){
		Vue.set(state,'search',value);
	},
	SET_ENTRIES(state,value){
		Vue.set(state,'entries',value);
	},

	SET_SERVICE(state,value){
		Vue.set(state,'services',value);
	},
	CHANGE_USER_STATUS(state,data){
		let index = _.findIndex(state.users.data,(user)=>{ return user.id == data.id});
		state.users.data.splice(index,1);
	},

	SET_CATEGORYS(state,data){
		Vue.set(state,'category',data);
	},

	SET_BOOKINGS(state,data){
		Vue.set(state,'bookings',data);
	},
	SET_BOOKING(state,data){
		Vue.set(state,'booking',data);
	},

	SET_SERVICE(state,value){
		Vue.set(state,'service',value);
	},
	SET_SERVICES(state,value){
		Vue.set(state,'services',value);
	},

	SET_PACKAGE(state,value){
		Vue.set(state,'packg',value);
	},

	SET_SURGEON(state,value){
		Vue.set(state,'surgeon',value);
	},
	
    SET_CONFIRMED_STATUS(state,data){
    	console.log('SET_CONFIRMED_STATUS',data);
    	if(data.status == 'confirmed'){
	    let index = _.findIndex(state.pendingOrders.data,(pendingOrder)=>{ return pendingOrder.id == data.id});
	    	console.log('index',state.pendingOrder);
			state.confirmeOrders.data.push(state.pendingOrders.data[index]);
	    	state.pendingOrders.data.splice(index,1);
    	}else if(data.status == 'rejected')
    	{
    		let index = _.findIndex(state.pendingOrders.data,(pendingOrder)=>{ return pendingOrder.id == data.id});
    		state.rejectedOrders.data.push(state.pendingOrders.data[index]);
	    	state.pendingOrders.data.splice(index,1);
    	}else if(data.status == 'delivered')
    	{
    		let index = _.findIndex(state.confirmeOrders.data,(confirmeOrders)=>{ return confirmeOrders.id == data.id});
    		state.deliveredOrders.data.push(state.confirmeOrders.data[index]);
	    	state.confirmeOrders.data.splice(index,1);
    	}
	},
    SET_STORE_STATUS(state,data){
		let index = _.findIndex(state.stores.data,(store)=>{ return store.id == data.id});
		state.stores.data[index].status = data.status;
	},
    SET_CATEGORY_STATUS(state,data){
		let index = _.findIndex(state.categories.data,(category)=>{ return category.id == data.id});
		state.categories.data[index].status = data.status;
	},
	SET_USER_STATUS(state,data){
		let index = _.findIndex(state.users.data,(user)=>{ return user.id == data.id});
		state.users.data[index].status = data.status;
	},
	SET_SERVICE_STATUS(state,data){
		let index = _.findIndex(state.services.data,(service)=>{ return service.id == data.id});
		state.services.data[index].status = data.status;
	},
	SET_PAYMENT_STATUS(state,data){
		let index = _.findIndex(state.payments.data,(payment)=>{ return payment.id == data.id});
		state.payments.data[index].status = data.status;
	},
    SET_BLOG_STATUS(state,data){
		let index = _.findIndex(state.blogs.data,(blog)=>{ return blog.id == data.id});
		state.blogs.data[index].status = data.status;
	},
    SET_STORES(state,data){
		Vue.set(state,'stores',data);
	},
    SET_CLIENT_REVIEW(state,data){
		Vue.set(state,'clientReviews',data);
	},
    SET_CLIENT_REVIEW_STATUS(state,data){
		let index = _.findIndex(state.clientReviews.data,(client_review)=>{ return client_review.id == data.id});
		state.clientReviews.data[index].status = data.status;
	},
    SET_STORE(state,data){
		Vue.set(state,'store',data);
	},

	SET_PAYMENT(state,data){
		Vue.set(state,'payments',data);
	},



}
