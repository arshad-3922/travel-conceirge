<template>
<div class="app-content content dashboard">
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row">
                    <div class="col-12">
                        <div class="card p-lg-4 p-1">
                            <div class="row">
                                <div class="col-xl-12">
                                    <h1 class="fw-600 fc-black">
                                        My Profile
                                    </h1>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-xl-12">
                                    <div class="card-white-rounded p-lg-3 p-1">
                                            <ValidationObserver v-slot="{handleSubmit}">
                                            <form @submit.prevent="handleSubmit(update)" ref="AdminEditForm">
                                            <div class="row">
                                                <div class="col-xl-3 col-md-5 mx-auto text-center">
                                                    <div class="userImg position-relative">
                                                        <img :src="profile.image" alt="img" class="img-fluid">
                                                        <button name="file" type="button" class="upload_btn " onclick="document.getElementById('upload').click()">
                                                            <i class="fa fa-camera"></i>
                                                        </button>
                                                        <input type="file" accept="image/*" class="d-none" id="upload" @change="setImage">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-4 mb-5 justify-content-center">
                                                <div class="col-lg-10 mx-auto">
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <div class="mb-2">
                                                                <label class="fw-700 d-block pl-2 mb-1">First Name<span class="req-color">*</span></label>
                                                                <ValidationProvider  name="First Name" rules="required" v-slot="{errors}">
                                                                <input type="text" class="w-100 sec-inp" v-model="profile.first_name">
                                                                <span class="text-danger">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="mb-2">
                                                                <label class="fw-700 d-block pl-2 mb-1">Last Name<span class="req-color">*</span></label>
                                                               <ValidationProvider  name="Last Name" rules="required" v-slot="{errors}">
                                                                <input type="text" class="w-100 sec-inp" v-model="profile.last_name">
                                                                <span class="text-danger">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-5 col-md-6 mb-2">
                                                        <p class="grey-mini-title text-uppercase">Email</p>
                                                        <h5 class="dark-mini-text">{{profile.email}}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <button type="submit" class="btn pkg-primary-btn">Update</button>
                                            </div>
                                        </form>
                                        </ValidationObserver>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
</template>
<script>
import {mapActions, mapState} from 'vuex';
export default {
    data() {
        return {
            name: '',
            current_password: '',
            password: '',
            confirmation: '',
            editProfile: {},
            image:'',
            errors:[],
            base_url:baseUrl
        };
    },
    computed: {
        ...mapState('admin', ['profile']),
    },
    methods: {
        ...mapActions('admin', ['store', 'get']),
              setImage: function (e) {
                    const file = e.target.files[0]
                    if (!file.type.includes('image/')) {
                        alert('Please select an image file')
                        return
                    }
                    if (typeof FileReader === 'function') {
                        const reader = new FileReader()
                        reader.onload = (event) => {
                        this.profile.image = event.target.result
                        }
                        reader.readAsDataURL(file)
                    } else {
                        alert('Sorry, FileReader API not supported')
                    }
              },       
        async update() {
            let fd = new FormData();
            fd.append('first_name',this.profile.first_name);
            fd.append('last_name',this.profile.last_name);
            fd.append('image',this.profile.image);
            let params = {
                route: 'api/auth/profile',
                method: 'POST',
                data: fd,
            };
            try {
                let {data} = await this.store(params);
                if (data) {
                    this.$snotify.success('admin profile updated');
                    this.$router.push({name: 'admin.account.index'});
                } else {
                   this.$snotify.error(data.message)
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
