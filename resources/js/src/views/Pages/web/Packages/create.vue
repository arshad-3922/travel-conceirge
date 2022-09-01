<template>
<div class="app-content content dashboard">
    <div class="content-wrapper content-wrapper-2">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row card px-lg-5">
                    <div class="col-12 mb-5">
                        <div class="row">
                              <div class="col-lg-6">
                                <router-link :to="{name:'admin.packages.index'}">
                                    <h1 class="ml-1 main-heading"><i class="fas fa-angle-left mr-1"></i>Create Package</h1>
                                </router-link>
                            </div>
                        </div>
                        <ValidationObserver v-slot="{handleSubmit}">
                       <form @submit.prevent="handleSubmit(createPackage)" class="form">
                        <div class="row">
                            <div class="col-lg-4 mt-lg-3 mt-2">
                                <label for="" class="site-labell">Title</label>
                                 <ValidationProvider  name="Package Title" rules="required" v-slot="{ errors }">
                                <input type="text" class="all-inputt w-100" placeholder="Enter Title" v-model="packages.package_name">
                                 <span class="text-danger">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-lg-4 mt-lg-3 mt-2">
                                <label for="" class="site-labell">Charges</label>
                                 <ValidationProvider  name="Package Charges" rules="required" v-slot="{ errors }">
                                <input type="text" class="all-inputt w-100" placeholder="Enter Charges" v-model="packages.amount">
                                <span class="text-danger">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-lg-8 mt-lg-3 mt-2">
                                <label for="" class="site-labell">Description</label>
                                <textarea name="" id="" rows="5" class="all-inputt w-100 px-1" placeholder="Enter Description" v-model="packages.description"></textarea>
                            </div>
                            <div class="col-lg-8 mt-lg-3 mt-2">
                                <label for="" class="site-labell">Surgeons</label>
                              <ValidationProvider  name="Surgeons" rules="required" v-slot="{ errors }">
                                <select class="js-example-basic-multiple w-100"  multiple v-model="packages.surgeons">
                                    <option v-for="(surgeon,index) in packages.surgeonss " :key="index" :value="surgeon.id">{{surgeon.name}}</option>
                                </select>
                              <span class="text-danger">{{ errors[0] }}</span>
                            </ValidationProvider>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="general-btn d-inline-block mt-3 px-3">Add</button>
                            </div>
                        </div>
                       </form>
                        </ValidationObserver>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
</template>
<script>
	import {mapActions} from 'vuex';
	export default {
		components: {},
		data() {
		return {
        
		packages:{
         package_name: '',
         duration:'',
		 amount: '',
         package_type:'',
         surgeons:[],
         surgeonss:[],
        
        },
				errors:[]
	
			}
		},
        created(){
            this.getsurgeons()
        },
		methods: {
			...mapActions('admin', ['store']),
		async createPackage(e) {
	    let fd = new FormData();
        this.buildFormData(fd, this.packages);
				let response = (await axios.post('/api/packages/create', fd));
				if (response.data.data) {
					this.$snotify.success(response.data.message)
					this.$router.push({name: 'admin.packages.index'});
				} else {
          this.errors   = response.data.message;
					this.$snotify.error(response.data.message)

				}
			},
      getsurgeons(){
        axios.get('api/auth/surgions',{params:{role:'surgeon'}}).then((response)=>{
		    this.packages.surgeonss = response.data;
			}).catch((error)=>{
			this.$snotify.error(error.data.message)	
			})
		  },
		}
	}
</script>
