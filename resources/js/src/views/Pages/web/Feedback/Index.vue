<template>
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration" class="search view-cause">
                <div class="row">
                    <div class="col-12">
                        <div class="card pad-20">
                            <div class="card-content collapse show">
                                <div class="card-body table-responsive card-dashboard">
                                    <h2>FEEDBACK</h2>
                                    <div class="row maain-tabble mt-3">
                                        <table-search></table-search>
                                        <table class="table table-striped table-bordered zero-configuration">
                                            <thead>
                                                <tr>
                                                    <th>S.No</th>
                                                    <th>Feedback ID</th>
                                                    <th>FULL NAME</th>
                                                    <th>EMAIL</th>
                                                    <th>SUBJECT</th>
                                                    <th>DATE</th>
                                                    <th>ACTIONS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(feedback,index) in feedbacks.data">
                                                    <td>{{serialNumber('feedbacks',index)}}</td>
                                                    <td>{{feedback.id}}</td>
                                                    <td>{{feedback.name}}</td>
                                                    <td>{{feedback.email}}</td>
                                                    <td>{{feedback.subject}}</td>
                                                    <td>{{formatDate(feedback.created_at)}}</td>
                                                    <td>
                                                        <div class="btn-group mr-1 mb-1">
                                                            <button type="button" class="btn  btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-ellipsis-v"></i></button>
                                                            <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-start" style="position: absolute; transform: translate3d(4px, 23px, 0px); top: 0px; left: 0px; will-change: transform;">
                                                                <router-link class="dropdown-item" :to="{name : 'admin.feedback.show',params : {feedback : feedback.feedback_id} }"><i class="fa fa-eye"></i>VIEW</router-link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <no-record tag="tr" :colspan="9" :data="feedbacks.data" class="col-md-3"></no-record>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="row">
                                            <div class="col-md-12">
                                                <pagination :data="feedbacks" @pagination-change-page="fetch"></pagination>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
// const EmployeeTable = ()=> import('./components/EmployeeTable.vue');
export default {
    computed: {
        ...mapState('admin', ['feedbacks','search']),
    },
    components: {
        // EmployeeTable,
    },
    created() {
        let { page } = this.$route.query;
        this.fetch(page);
    },
     watch: {
        search(val, oldVal) {
            this.fetch();
        }
    },
    methods: {
        ...mapActions('admin', ['getAll']),
        async fetch(page = 1) {
            let { status } = this.$route.params;
            let params = {
                route: route('admin.feedback.index'),
                mutation: 'SET_FEEDBACKS',
                variable: 'feedbacks',
                data: {
                    page,
                    status,
                    search : this.search,
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
</script>
