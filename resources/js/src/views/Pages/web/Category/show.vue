<template>
	<div>
               <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row">
                    <div class="col-12">
                        <div class="card my-5 mx-2">
                            <div class="card-content collapse show">
                                <div class="card-dashboard">
                                    <div class="row">
                                        <div class="col-12">
                                            <h3 class="semi-bold d-grey-text"><router-link :to="{name:'admin.categories.index'}" class="fas d-grey-text fa-angle-left mr-1"></router-link>Category Details</h3>
                                        </div>
                                        <div class="col-lg-6 pb-5 ml-2">
                                            <div class="row mt-3">
                                                <div class="col-xl-4 col-sm-6">
                                                    <p class="black-text semi-bold">Category Name:</p>
                                                    <p class="black-text semi-bold">Category ID:</p>
                                                    <p class="black-text semi-bold">Category Date</p>
                                                    <p class="black-text semi-bold">Category Status:</p>
                                                </div>
                                                <div class="col-xl-6 col-sm-6">
                                                    <p class="grey-text semi-bold">{{category.name}}</p>
                                                    <p class="grey-text semi-bold">{{category.id}}</p>
                                                    <p class="grey-text semi-bold">{{formatDate(category.create_at)}}</p>
                                                    <p class="grey-text semi-bold">{{category.status}}</p>
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
    </div>
</template>
<script>
export default {
            name:'show',
            data(){
            return{
            category:'',    
            }     
            },
            created(){
            this.getCategoryId()
            },
            methods:{
            getCategoryId(){
            axios({
            url:`/api/category/show/${this.$route.params.id}`,
            method:'get'    
            }).then((response)=>{
            this.category = response.data.data
            console.log(response.data);    
            }).catch((err)=>{
            console.log(response.data.data) 
            })
               
            }       
            }    
            }

</script>