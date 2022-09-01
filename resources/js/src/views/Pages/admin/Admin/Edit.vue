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
                                    <router-link :to="{name : 'admin.admins.index'}">
                                        <h2>
                                            < SUB-ADMINS MANAGEMENT</h2> </router-link> <section class="add-sub-admin-box">
                                                <h5>Add-Sub-Admin</h5>
                                                <ValidationObserver v-slot="{handleSubmit}">
                                                    <form @submit.prevent="handleSubmit(update)">
                                                        <div class="row">
                                                            <ValidationProvider tag="div" rules="required" name="First name" v-slot="{errors}" class="col-xl-4 col-lg-4 col-md-4 col-12">
                                                                <label for="inputEmail4">First Name</label>
                                                                <input v-model="form.first_name" type="text" class="form-control" placeholder="Enter First Name">
                                                                <div class="text-danger">{{errors[0]}}</div>
                                                            </ValidationProvider>
                                                            <ValidationProvider tag="div" rules="required" name="Last name" v-slot="{errors}" class="col-xl-4 col-lg-4 col-md-4 col-12">
                                                                <label for="inputEmail4">Last Name</label>
                                                                <input v-model="form.last_name" type="text" class="form-control" placeholder="Enter Last Name">
                                                                <div class="text-danger">{{errors[0]}}</div>
                                                            </ValidationProvider>
                                                            <ValidationProvider tag="div" rules="required" name="Email" v-slot="{errors}" class="col-xl-4 col-lg-4 col-md-4 col-12">
                                                                <label for="inputEmail4">Email</label>
                                                                <input v-model="form.email" type="email" class="form-control" placeholder="Enter Email">
                                                                <div class="text-danger">{{errors[0]}}</div>
                                                            </ValidationProvider>
                                                            <ValidationProvider tag="div" rules="confirmed:password_confirmation" name="Password" v-slot="{errors}" class="col-xl-4 col-lg-4 col-md-4 col-12">
                                                                <label for="inputEmail4">Password</label>
                                                                <input ref="password" v-model="form.password" autocomplete="new-password" type="password" class="form-control" placeholder="Password">
                                                                <button type="button" @click="togglePasswordType('password')" class="view-btn position-absolute"><i class="fa fa-eye"></i></button>
                                                                <div class="text-danger">{{errors[0]}}</div>
                                                            </ValidationProvider>
                                                            <ValidationProvider vid="password_confirmation" tag="div" rules="" name="Confirm password" v-slot="{errors}" class="col-xl-4 col-lg-4 col-md-4 col-12">
                                                                <label for="inputEmail4">Confirm Password</label>
                                                                <input ref='password_confirmation' v-model="form.password_confirmation" type="password" class="form-control" placeholder="Confirm Password">
                                                                <button type="button" @click="togglePasswordType('password_confirmation')" class="view-btn position-absolute"><i class="fa fa-eye"></i></button>
                                                                <div class="text-danger">{{errors[0]}}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                        <h5>Permissions</h5>
                                                        <ValidationProvider tag="div" name="Permissions" rules="required" v-slot="{errors}">
                                                            <ul class="for-check-box">
                                                                <li>
                                                                    <!-- Default inline 1-->
                                                                    <div class="custom-control custom-checkbox custom-control-inline">
                                                                        <input v-model="form.permissions" type="checkbox" class="custom-control-input" id="defaultInline1" value="admin.users" :value="{value : 'admin.users', title : 'User Management' }">
                                                                        <label class="custom-control-label" for="defaultInline1">User
                                                                            Management</label>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <!-- Default inline 2-->
                                                                    <div tag="div" class="custom-control custom-checkbox custom-control-inline">
                                                                        <input v-model="form.permissions" type="checkbox" class="custom-control-input" id="defaultInline2" :value="{value : 'admin.feedbacks', title : 'Feedback' }">
                                                                        <label class="custom-control-label" for="defaultInline2">Feedback</label>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <ul class="for-check-box2">
                                                                <li>
                                                                    <!-- Default inline 1-->
                                                                    <div tag="div" class="custom-control custom-checkbox custom-control-inline">
                                                                        <input v-model="form.permissions" type="checkbox" class="custom-control-input" id="defaultInline3" :value="{value : 'admin.properties', title : 'Property Management' }">
                                                                        <label class="custom-control-label" for="defaultInline3">Property Management</label>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <!-- Default inline 2-->
                                                                    <div tag="div" class="custom-control custom-checkbox custom-control-inline">
                                                                        <input v-model="form.permissions" type="checkbox" :value="{value : 'admin.logs', title : 'Task Log' }" class="custom-control-input" id="defaultInline4">
                                                                        <label class="custom-control-label" for="defaultInline4">Task Log</label>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <div class="text-danger">{{errors[0]}}</div>
                                                        </ValidationProvider>
                                                        <button type="submit" class="sub-admin-add">UPDATE</button>
                                                    </form>
                                                </ValidationObserver>
            </section>
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
export default {
    data() {
        return {
            form: {
                permissions: [],
            }
        };
    },
    created() {
        this.fetch();
    },
    computed: {
        ...mapState('admin', ['admin']),
    },
    methods: {
        ...mapActions('admin', ['store', 'get']),
        async fetch() {
        	let {admin} = this.$route.params;
            let params = {
                route: route('admin.admin.show',{admin}),
                mutation: 'SET_ADMIN',
                variable: 'admin',
                data: {}
            };
            let { data } = await this.get(params);
            let {permissions} = this.form; 
            this.form = this.admin;
            this.form.permissions = (this.admin.permissions)?this.admin.permissions:permissions;
        },
        async update() {
        	let {admin} = this.$route.params;
            let fd = new FormData();
            fd.append('_method','PUT');
            this.buildFormData(fd, this.form);
            let params = {
                route: route('admin.admin.update',{admin}),
                method: 'POST',
                data: fd,
            };
            try {
                let { data } = await this.store(params);
                if (data.status) {
                    this.$snotify.success(data.msg);
                    this.$router.push({ name: 'admin.admins.index' });
                    this.form = {
                        permissions: [],
                    };
                } else {
                    this.$snotify.error('something went wrong');
                }
            } catch (e) {
                if (e.response) {
                    this.$refs.adminObserver.setErrors(e.response.data.errors);
                }
                // statements
                console.log(e);
            }

        }
    }
}

</script>
