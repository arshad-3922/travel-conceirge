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
                                    <h2>SUB-ADMINS MANAGEMENT</h2>
                                    <div class="row">
                                        <div class="col-12 d-block d-sm-flex justify-content-between">
                                            <div class="left">
                                            </div>
                                            <div class="right">
                                                <router-link :to="{name : 'admin.admins.create'}">ADD SUB-ADMIN</router-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row maain-tabble mt-3">
                                    	<table-search></table-search>
                                        <table class="table table-striped table-bordered zero-configuration">
                                            <thead>
                                                <tr>
                                                    <th>S.No</th>
                                                    <th>Sub-Admin_ID</th>
                                                    <th>Sub-Admin Name</th>
                                                    <th>Email</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(admin,index) in admins.data">
                                                    <td>{{serialNumber('admins',index)}}</td>
                                                    <td>{{admin.id}}</td>
                                                    <td>{{admin.full_name}}</td>
                                                    <td>{{admin.email}}</td>
                                                    <td>
                                                        <div class="btn-group mr-1 mb-1">
                                                            <button type="button" class="btn  btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-ellipsis-v"></i></button>
                                                            <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-start" style="position: absolute; transform: translate3d(4px, 23px, 0px); top: 0px; left: 0px; will-change: transform;">
                                                                <router-link class="dropdown-item" :to="{name : 'admin.admins.show' , params : {admin : admin.admin_id}}"><i class="fa fa-eye"></i>VIEW DETAILS</router-link>
                                                                <router-link class="dropdown-item" :to="{name : 'admin.admins.edit',params : {admin : admin.admin_id}}"><i class="fas fa-edit"></i>EDIT</router-link>
                                                                <a class="dropdown-item" href="#" data-toggle="modal" @click="adminId = admin.id" data-target="#delete-modal"><i class="fas fa-trash-alt"></i>DELETE</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <no-record tag="tr" :colspan="5" :data="admins.data" class="col-md-3"></no-record>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <pagination :data="admins" @pagination-change-page="fetch"></pagination>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <confirm el="delete-modal" @confirmed="deleteEntity"  title="System Message" :subtitle="`Are you sure you want to delete this Admin? `"></confirm>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
// const EmployeeTable = ()=> import('./components/EmployeeTable.vue');
export default {
	data() {
        return {
            adminId: 0,
        };
    },
    computed: {
        ...mapState('admin', ['admins','search']),
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
        ...mapActions('admin', ['getAll','delete']),
        async fetch(page = 1) {
            let { status } = this.$route.params;
            let params = {
                route: route('admin.admin.index'),
                mutation: 'SET_ADMINS',
                variable: 'admins',
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
        },
        async deleteEntity() {
            let params = {
                route: route('admin.admin.destroy', { admin: this.adminId }),
                mutation: 'DELETE_ADMIN',
                variable: 'data',
                data: {},
            };
            let { data } = await this.delete(params);
            if (data.status) {
                this.$snotify.success(data.msg);

            } else {

                this.$snotify.error(data.msg);
            }
        }
    }
}

</script>
