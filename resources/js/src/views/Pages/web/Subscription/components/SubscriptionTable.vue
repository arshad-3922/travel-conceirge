<template>


    <div class="row justify-content-center align-items-center pb-5">
    <div>
        <table class="table table-striped table-bordered zero-configuration">
            <thead>
            <tr>
                <th>s.no</th>
                <th>Package Name</th>
                <th>Package ID</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr :key="index" v-for="(subscription,index) in subscriptions">
                <td>{{ index }}</td>
                <td>{{ subscription.name }}</td>
                <td>{{ subscription.id }}</td>
                <td v-if="subscription.status == 1" class="l-green-text">Active</td>
                <td v-if="subscription.status == 0" class="red-text">IN-Active</td>
                <td>
                    <div class="btn-group mr-1 mb-1">
                        <button type="button" class="btn btn-drop-table btn-sm"
                                data-toggle="dropdown"><i class="fa fa-ellipsis-v"></i>
                        </button>
                        <div class="dropdown-menu">
<!--                            <router-link class="dropdown-item" :to="{name: 'admin.users.view',params: {id: user.id}}"><i
                                class="fa fa-eye"></i>View </router-link>-->
                            <router-link class="dropdown-item" :to="{name: 'admin.subscriptions.edit',params: {id: subscription.id}}"><i
                                class="fa fa-edit"></i>edit</router-link>
<!--                            <a class="dropdown-item" data-toggle="modal"
                               data-target=".bd-example-modal-lg" @click="setUserId(subscription.id)"><i class="fa fa-ban"></i>block</a>-->
                        </div>
                    </div>
                </td>
            </tr>
            </tbody>
            <no-record tag="tr" :colspan="5" :data="subscriptions.data"
                       class="col-md-3"></no-record>
        </table>
<!--        <confirmation @confirmed="blockEntity">
        </confirmation>-->
    </div>
    </div>







	<!-- <div class="row justify-content-center align-items-center pb-5">


	<div class="col-xl-4 col-lg-5 col-md-6" :key="index" v-for="(subscription,index) in subscriptions">
		<div class="subscription-card pt-2 mt-2 pb-3">
			<div class="btn-group custom-dropdown mr-1 d-block mb-1">
				<button type="button" class="btn black-text subscription-edit btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-ellipsis-v"></i></button>
				<div class="dropdown-menu custom-dropdown">
					<router-link :to="{name: 'admin.subscriptions.edit',params:{id: subscription.id}}" class="dropdown-item">Edit</router-link>
				</div>
			</div>
			<div class="px-3">
				<img src="images/subscription-card.png" alt="" class="img-fluid">
				<h3 class="mt-2 d-blue-text bold">Standard</h3>
				<p class="p-lg yellow-text">{{subscription.name}}</p>
				<ul class="ingredients-list pl-0">
					<li>Unlimited Calls</li>
					<li>Free Hosting</li>
					<li>40MB of Storage Space</li>
				</ul>
				<h2 class="nunito">${{subscription.price}}</h2>
			</div>
		</div>
	</div>
		</div> -->
</template>
<script>
const Confirmation = () => import('@core/components/Popups/Confirm.vue');
import {mapState, mapActions} from 'vuex';

export default {
    data() {
        return {
            userId: 0,
        };
    },
    computed: {
        ...mapState('admin', ['subscriptions']),
        status() {
            return this.$route.params.status;
        },
    },
    components: {
        Confirmation
    },
    methods: {
        ...mapActions('admin', ['subscriptions']),
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
        setUserId(id){
            this.userId = id;

        }
    }
}

</script>
