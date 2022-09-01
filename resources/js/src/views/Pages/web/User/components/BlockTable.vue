<template>
    <table class="table table-striped table-bordered zero-configuration">
        <thead>
        <tr>
            <th>s.no</th>
            <th>User ID</th>
            <th>Full Name</th>
            <th>Registration Date</th>
            <th>action</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>01</td>
            <td>001</td>
            <td>Topias Kantola</td>
            <td>Aug-14-2020</td>
            <td>
                <div class="btn-group mr-1 mb-1">
                    <button type="button" class="btn btn-drop-table btn-sm" data-toggle="dropdown"><i
                        class="fa fa-ellipsis-v"></i></button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="blocked-users-listing-detail.php"><i class="fa fa-eye"></i>View
                        </a>
                        <a class="dropdown-item" href="#" data-toggle="modal" data-target=".unblock-user-modal"><i
                            class="fa fa-unlock"></i>unblock</a>
                    </div>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
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
