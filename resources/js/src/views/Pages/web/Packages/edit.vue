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
                                    <h1 class="ml-1 main-heading"><i class="fas fa-angle-left mr-1"></i>Edit Package</h1>
                                </router-link>
                            </div>
                        </div>
                        <ValidationObserver v-slot="{handleSubmit}">
                       <form ref="PackageEditForm" @submit.prevent="handleSubmit(update(pk))">
                        <div class="row">
                            <div class="col-lg-4 mt-lg-3 mt-2">
                                <label for="" class="site-labell">Title</label>
                                <ValidationProvider  name="Package Title" rules="required" v-slot="{ errors }">
                                <input type="text" class="all-inputt w-100" v-model="pk.name">
                                <span class="text-danger">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-lg-4 mt-lg-3 mt-2">
                                <label for="" class="site-labell">Charges</label>
                                 <ValidationProvider  name="Charges" rules="required" v-slot="{ errors }">
                                <input type="number" class="all-inputt w-100" v-model="pk.amount">
                                <span class="text-danger">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-lg-8 mt-lg-3 mt-2">
                                <label for="" class="site-labell">Description</label>
                                <textarea name="" id="" rows="5" class="all-inputt w-100 px-1" v-model="pk.description">{{pk.description}}</textarea>
                            </div>
                            <div class="col-lg-8 mt-lg-3 mt-2">
                                <label for="" class="site-labell">Surgeons</label>
                                  <v-select  class="site-input"
                                    v-if="surgeons"
                                    v-model="selected"
                                     multiple
                                    :options="surgeons"
                                    :reduce="surgeons => surgeons.id"
                                  ></v-select>
                                </div>
                            <div class="col-12">
                                <button type="submit" class="general-btn d-inline-block mt-3 px-3">Update</button>
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
import {mapState, mapActions} from 'vuex';
export default {

    computed: {
        ...mapState('admin',['packag']),
    },
    data() {
        return {
            date: '',
            errors:[],
            packge_type: '',
            surgeons:[],
            pk:[],
            selected:[]
        };
    },
    created() {
        this.fetch();
    },
    methods: {
        ...mapActions('admin', ['getAll']),
        async fetch() {
            let params = {
                route: `api/packages/show/${this.$route.params.id}`,
                mutation: 'SET_PACKAGE',
                variable: 'data',
            };
            let {data} = await this.getAll(params);
            this.surgeons  = data.data.surgeons;
            this.selected  = data.data.surgeons;
            this.pk    = data.data.package;
      
        },
       async update(data){
            let fd = new FormData(this.$refs.PackageEditForm);
            fd.append('id',data.id);
            fd.append('name',data.name);
            fd.append('amount',data.amount);
            fd.append('description',data.description)
            fd.append('surgeons',this.selected)
            let result = await axios.post(`api/packages/update/${this.$route.params.id}`,fd);
                    if (result.data.data) {
                        this.$snotify.success("package updated successfully", "package");
                        this.$router.push({name: 'admin.packages.index'});
                    } else {
                        this.$snotify.error(result.data.message[0]);
                    }
         }
    }

}
</script>
