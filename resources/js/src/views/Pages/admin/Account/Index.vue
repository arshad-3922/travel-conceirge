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
                                        <div class="row">
                                            <div class="col-xl-3 mx-auto text-center">
                                                <div class="userImg">
                                                    <img :src="profile.image" alt="img" class="img-fluid">
                                                </div>
                                                <a href="#" data-toggle="modal" data-target="#change-password-modal" type="button" class="mt-2 d-block change_pass_link">Change Password</a>
                                            </div>
                                        </div>
                                        <div class="row mt-4 mb-5">
                                            <div class="col-lg-4">
                                                <div class="mb-2">
                                                    <p class="grey-mini-title">{{profile.first_name}}</p>
                                                    <h5 class="dark-mini-text">First Name</h5>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="mb-2">
                                                    <p class="grey-mini-title">{{profile.last_name}}</p>
                                                    <h5 class="dark-mini-text">Last Name</h5>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="mb-2">
                                                    <p class="grey-mini-title">Email</p>
                                                    <h5 class="dark-mini-text">{{profile.email}}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <router-link :to="{name:'admin.account.edit',params:{id:profile.id}}" class="btn pkg-primary-btn">Edit</router-link>
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
    <Password />
</div>
</template>
<script>
import Password from './Password.vue';
import {mapState} from 'vuex';
export default {
     computed:{
        ...mapState('admin',['profile']),
     },
     components:{Password}
}
</script>
