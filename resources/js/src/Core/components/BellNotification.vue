<template>
	              <li class="dropdown dropdown-notification nav-item two-bell-icons">
                        <a class="nav-link nav-link-label" href="#" data-toggle="dropdown">
                        <i class="fas fa-bell notifications-bell"></i>
                            <span class="badge badge-pill badge-default badge-danger badge-default badge-up">{{notification_count}} New</span> 
                        </a>
                        <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
                            <li class="scrollable-container media-list ps-container ps-theme-dark ps-active-y" data-ps-id="75e644f2-605d-3ecc-f100-72d86e4a64d8">
                                <a href="javascript:void(0)">
                                    <div class="media border-0" v-for="notification in bell_notifications" :key="notification.id">
                                        <div class="media-left align-self-center">
                                            <i class="fas fa-bell notifications-bell"></i>
                                        </div>
                                        <div class="media-body">
                                           <router-link :to="notification.data.route">
												<p class="notification-text font-small-3 text-muted"><span>{{notification.data.title}}</span><br>{{formatDate(notification.created_at,'hh:mm A')}}<small class="float-right">{{formatDate(notification.created_at)}}</small></p>
											</router-link>
                                        </div>
                                    </div>
                                </a>
                            </li>
		            	<li class="dropdown-menu-footer"><router-link class="dropdown-item text-muted text-center" :to="{name:'admin.notifications.index'}">View all</router-link></li>
                        </ul>
                    </li>
</template>
<script>
import { mapState,mapActions} from 'vuex';
export default {
	computed: {
		...mapState('admin', ['bell_notifications', 'notification_count']),
	},
	methods: {
		...mapActions('admin',['store']),
	  async markRead(id) {
	    let params = {
	    	route : route('admin.notification.markRead',{notification : id}),
	    	method : 'PUT',
	    	mutation : 'MARK_NOTIFICATION_READ',
	    	variable : 'notification',
	    };
	    let {data} = await this.store(params);
	    if(data.status){
	    	this.$snotify.success(data.msg);
	    }
	  }
	}
}

</script>
