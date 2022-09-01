<template>
    <div class="content-wrapper">
        <div class="content-body">
            <section id="configuration">
                <div class="row">
                    <div class="col-12">
                        <div class="card rounded pad-20">
                            <div class="card-content collapse show">
                                <div class="card-body card-dashboard">
                                    <div class="row">
                                        <div class="col-12">
                                            <h1>User Management</h1>
                                        </div>
                                    </div>
                                    <div class="session-div">
                                        <div class="ses-header">
                                            <h2>Add User</h2>
                                        </div>
                                        <div class="ses-content">
                                            <ValidationObserver v-slot="{ handleSubmit }">
                                                <form ref="UserForm" @submit.prevent="handleSubmit(create)">
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <div class="attached"><img
                                                                :src="`${base_url}/assets/admin/images/avatar.jpg`"
                                                                class="img-fluid" alt="">
                                                                <button name="file" class="camera-btn"
                                                                        onclick="document.getElementById('upload').click()">
                                                                    <i class="fa fa-camera"></i></button>
                                                                <input type="file" id="upload" name="file">
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-lg-6 col-xl-4 form-group">
                                                            <label for="">First Name <span
                                                                class="text-danger">*</span></label>
                                                            <ValidationProvider name="First name" rules="required"
                                                                                v-slot="{ errors }">

                                                                <input type="text" class="form-control"
                                                                       name="first_name" v-model="first_name"
                                                                       placeholder="Enter First Name">
                                                                <span class="text-danger">{{ errors[0] }}</span>
                                                            </ValidationProvider>
                                                        </div>
                                                        <div class="col-12 col-lg-6 col-xl-4 form-group">
                                                            <label for="">Last Name <span
                                                                class="text-danger">*</span></label>
                                                            <ValidationProvider name="Last name" rules="required"
                                                                                v-slot="{ errors }">
                                                                <input type="text" class="form-control" name="last_name"
                                                                       v-model="last_name"
                                                                       placeholder="Enter Last Name">
                                                                <span class="text-danger">{{ errors[0] }}</span>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12 col-lg-6 col-xl-4 form-group">
                                                            <label for="">Phone Number <span
                                                                class="text-danger">*</span></label>
                                                            <ValidationProvider name="Phone number" rules="required"
                                                                                v-slot="{ errors }">
                                                                <input type="number" name="phone_number"
                                                                       v-model="phone_number" class="form-control"
                                                                       placeholder="000 000 0000">
                                                                <span class="text-danger">{{ errors[0] }}</span>
                                                            </ValidationProvider>
                                                        </div>
                                                        <div class="col-12 col-lg-6 col-xl-4 form-group">
                                                            <label for="">Email <span
                                                                class="text-danger">*</span></label>
                                                            <ValidationProvider name="email" rules="required|email"
                                                                                v-slot="{ errors }">
                                                                <input type="email" class="form-control" name="email"
                                                                       v-model="email"
                                                                       placeholder="Enter Email">
                                                                <span class="text-danger">{{ errors[0] }}</span>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12 col-xl-8 form-group">
                                                            <label for="">Address <span class="text-danger">*</span>
                                                            </label>
                                                            <ValidationProvider name="address" rules="required"
                                                                                v-slot="{ errors }">
                                                            <textarea name="address" v-model="address"
                                                                      placeholder="Enter Address"
                                                                      class="form-control"></textarea>
                                                                <span class="text-danger">{{ errors[0] }}</span>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12 col-lg-6 col-xl-4 form-group">
                                                            <label for="">Country <span
                                                                class="text-danger">*</span></label>
                                                            <ValidationProvider name="country" rules="required"
                                                                                v-slot="{ errors }">
                                                                <input type="text" class="form-control" name="country"
                                                                       v-model="country"
                                                                       placeholder="Enter Country">
                                                                <span class="text-danger">{{ errors[0] }}</span>
                                                            </ValidationProvider>
                                                        </div>
                                                        <div class="col-12 col-lg-6 col-xl-4 form-group">
                                                            <label for="">State <span
                                                                class="text-danger">*</span></label>
                                                            <ValidationProvider name="state" rules="required"
                                                                                v-slot="{ errors }">
                                                                <input type="text" class="form-control" name="state"
                                                                       v-model="state"
                                                                       placeholder="Enter state">
                                                                <span class="text-danger">{{ errors[0] }}</span>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12 col-lg-6 col-xl-4 form-group">
                                                            <label for="">City <span
                                                                class="text-danger">*</span></label>
                                                            <ValidationProvider name="city" rules="required"
                                                                                v-slot="{ errors }">
                                                                <input type="text" class="form-control" name="city"
                                                                       v-model="city"
                                                                       placeholder="Enter City">
                                                                <span class="text-danger">{{ errors[0] }}</span>
                                                            </ValidationProvider>
                                                        </div>
                                                        <div class="col-12 col-lg-6 col-xl-4 form-group">
                                                            <label for="">Zip Code <span
                                                                class="text-danger">*</span></label>
                                                            <ValidationProvider name="zip code" rules="required"
                                                                                v-slot="{ errors }">
                                                                <input type="text" class="form-control" name="zipcode"
                                                                       v-model="zipcode"
                                                                       placeholder="Enter Zip Code">
                                                                <span class="text-danger">{{ errors[0] }}</span>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div
                                                            class="col-12 col-lg-6 col-xl-4 form-group position-relative">
                                                            <label for="">Password <span
                                                                class="text-danger">*</span></label>
                                                            <ValidationProvider name="password"
                                                                                rules="required|confirmed:confirmation"
                                                                                v-slot="{ errors }">
                                                                <input type="password" class="form-control"
                                                                       name="password" v-model="password"
                                                                       placeholder="Enter Password">
                                                                <span class="view" type="button"><i
                                                                    class="fa fa-eye"></i>
                                                        </span>
                                                                <span class="text-danger">{{ errors[0] }}</span>
                                                            </ValidationProvider>
                                                        </div>
                                                        <div
                                                            class="col-12 col-lg-6 col-xl-4 form-group position-relative">
                                                            <label for="">Confirm Password <span
                                                                class="text-danger">*</span></label>
                                                            <ValidationProvider name="confirmation" rules="required"
                                                                                v-slot="{ errors }">
                                                                <input type="password" class="form-control"
                                                                       name="confirmation" v-model="confirmation"
                                                                       placeholder="Enter Confirm Password">
                                                                <span class="view" type="button"><i
                                                                    class="fa fa-eye"></i>
                                                        </span>
                                                                <span class="text-danger">{{ errors[0] }}</span>
                                                            </ValidationProvider>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <ValidationProvider name="role" v-slot="{errors}">
                                                                <input name="role" v-model="role" type="hidden"
                                                                       spellcheck="true"
                                                                       class="form-control" placeholder="Password"
                                                                       value="public">
                                                                <span class="text-danger">{{ errors[0] }}</span>
                                                            </ValidationProvider>
                                                        </div>
                                                        <div class="col-12 form-group">
                                                            <button class="orange-btn" type="submit" data-toggle="modal"
                                                                    data-target=".user-added">Add
                                                            </button>
                                                            <button class="blue-btn" type="reset">reset</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </ValidationObserver>
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
import {mapActions, mapState} from 'vuex';

export default {
    computed: {
        ...mapState('admin', ['users', 'search', 'entries']),
    },
    data() {
        return {
            first_name: '',
            last_name: '',
            phone_number: '',
            email: '',
            address: '',
            country: '',
            state: '',
            city: '',
            zipcode: '',
            password: '',
            confirmation: '',
            role: 'user',
        };
    },
    methods: {
        ...mapActions('admin', ['store', 'get']),
        async create() {
            let fd = new FormData(this.$refs.UserForm);
            //fd.append('_method', 'PUT');
            this.buildFormData(fd, this.form);
            let params = {
                route: 'api/auth/user/register',
                method: 'POST',
                data: fd,
            };
            try {
                let {data} = await this.store(params);

                if (data.data) {
                    this.$snotify.success(data.message);
                    Vue.prototype.$user = data.user;
                    this.$router.push({name: 'admin.account.index'});
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

        },
    }
}

</script>
