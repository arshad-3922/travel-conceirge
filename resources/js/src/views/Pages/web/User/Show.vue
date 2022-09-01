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
                                            <h1><router-link :to="{name:'admin.users.index'}" class="fas d-grey-text fa-angle-left mr-1"></router-link>User
                                                Management <i class="fa fa-angle-right"></i>User Details</h1>
                                        </div>
                                    </div>
                             <div class="card my-5 mx-2">
                              <div class="card-content collapse show">
                                <div class="card-dashboard">
                                    <div class="row">
                                        <div class="col-12 d-sm-flex align-items-center justify-content-between">
                                            <p class="green-tag">Active</p>
                                        </div>
                                        <div class="col-lg-6 mx-auto">
                                            <img  v-if="user.image == base_url" :src="`${base_url}/avatar.png`" alt="" class="img-fluid user-details-img">
                                            <img  v-else :src="`${user.image}`" alt="" class="img-fluid user-details-img">
                                            <div class="row justify-content-center mt-3">
                                                <div class="col-xl-4 col-6">
                                                    <p class="d-grey-text semi-bold">Name:</p>
                                                    <p class="d-grey-text semi-bold">User ID:</p>
                                                    <p class="d-grey-text semi-bold">Email:</p>
                                                    <p class="d-grey-text semi-bold">Phone:</p>
                                                    <p class="d-grey-text semi-bold">EIRCODE:</p>
                                                </div>
                                                <div class="col-xl-4 col-6">
                                                    <p class="grey-text semi-bold">{{user.name}}</p>
                                                    <p class="grey-text semi-bold">{{user.id}}</p>
                                                    <p class="grey-text semi-bold">{{user.email}}</p>
                                                    <p class="grey-text semi-bold">{{user.phone_number}}</p>
                                                    <p class="grey-text semi-bold">{{user.name}}</p>
                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
        export default {
           name:'show',
            data(){
            return{
            user:'',
            base_url:base_url+'/assets/upload/user'    
            }     
            },
            created(){
           // alert(this.$route.params.id)    
            this.getUserById()
            },
            methods:{
            getUserById(){
            axios({
            url:`api/auth/user/view/${this.$route.params.id}`,
            method:'get'    
            }).then((response)=>{
            this.user = response.data.data
            console.log(response.data);    
            }).catch((err)=>{
            console.log(response.data.data) 
            })
            }       
            }    
            }
</script>

<style scoped>
.card-body.card-dashboard {
    margin-top: 4%;
}
</style>