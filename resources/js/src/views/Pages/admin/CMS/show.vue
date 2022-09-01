<template>
<div class="app-content content dashboard">
     <div class="content-wrapper">
          <div class="content-body">
               <section id="configuration">
                    <div class="row">
                         <div class="col-12">
                              <div class="card p-lg-4 p-1">
                                   <div class="row mb-5">
                                        <div class="col-xl-12">
                                             <div class="d-md-flex flex-wrap justify-content-between align-items-center">
                                                <router-link :to="{name:'admin.cms.index'}">
                                                  <div class="d-flex align-items-center mb-1">
                                                       <img :src="base_url+`/assets/admin/images/go-back.png`" class="go_back_link mr-1" alt="goBack">
                                                       <h1 class="fw-500 fc-black main-heading">
                                                            {{cms.name}}
                                                       </h1>
                                                  </div>
                                                </router-link>
                                             </div>
                                        </div>
                                   </div>
                                        <div class="d-flex flex-wrap" v-if="cms.images != ''">
                                             <div class="mainimg mb-1 mr-1" v-for="(media,index) in cms.images" :key="index">
                                                  <div class="image-wrapper primaryBorder mb-2">
                                                       <img :src="media.image" ref="image" class="img-fluid" alt="image">
                                                  </div>
                                                  <div class="d-flex flex-wrap">
                                                       <div class="d-flex align-items-center mb-1 mr-2">
                                                            <button class="btn-operations mr-1" type="button" :onclick="`document.getElementById('uploadFile`+index+`').click()`"><i class="fas fa-upload"></i></button>
                                                            <p class="mb-0">Upload Image</p>
                                                            <input type="file" :id="`uploadFile`+[index]" :data="index" class="d-none" @change="uploadImage($event,index,media.id)">
                                                       </div>
                                                       <div class="d-flex align-items-center mb-1">
                                                            <button class="btn-operations delete-operation mr-1"><i class="fas fa-trash" @click="removeImg(index,media.id)"></i></button>
                                                            <p class="mb-0">Delete Image</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div v-else class="d-flex-wrap">
                                            <p>No Images Found!</p>
                                        </div>
                                   <div class="row">
                                        <div class="col-lg-10">
                                             <div class="row mt-4">
                                                  <div class="col-lg-12 col-md-6  mt-3">
                                                       <label for="" class="cms-lable">Description</label>
                                                       <p class="cms-value">{{cms.description}}</p>
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
import {mapState, mapActions} from 'vuex';
export default {
    computed: {
        ...mapState('admin',['cms']),
    },
    data() {
        return {
            base_url:baseUrl,
            removeImage:[],
            replaceImage:[]
        };
    },
    created() {
        this.fetch();
    },
    methods: {
        ...mapActions('admin', ['getAll','store']),
        async fetch() {
            let params = {
                route: `api/cmss/show/${this.$route.params.id}`,
                mutation: 'SET_CMS',
                variable: 'data',
            };
            let {data} = await this.getAll(params); 
        },
        uploadImage(e,index,id){   
              const file  = e.target.files[0]; 
               if(!file.type.includes('image/')) {
                alert('Please select an image file')
               return
             }
            const reader = new FileReader()
             reader.onload = (event) => {
             this.cms.images[index].image =  event.target.result;
             this.replaceImage.push(this.cms.images[index].image);
               if(this.replaceImage != null)
               {
                    this.setImage(id);
               }
             }
            reader.readAsDataURL(file)

          },
           removeImg(index,id){
                this.cms.images.splice(index, 1);
                this.removeImage.push(id);
                this.deleteImage(id);
          },  

          async setImage(id){
               let fd = new FormData()
               fd.append('image',this.replaceImage)
                let params = {
                route: `api/cmss/update/${id}`,
                mutation: 'SET_CMS',
                variable: 'data',
                data:fd
            };
           try{
            let {data} = await this.store(params);
            if(data.status)
            {
               this.$snotify.success(data.message);
               setTimeout(function () {
                window.location.reload();
               this.$router.push({name:'admin.dashboard'});
               }, 500);
            } 
           }catch(error)
           {
               this.$snotify.error(error);
           } 
          },
           async deleteImage(id){
               let fd = new FormData()
               fd.append('image',this.removeImage)
                let params = {
                route: `api/cmss/delete/${id}`,
                mutation: 'SET_CMS',
                variable: 'data',
                data:fd
            };
           try{
            let {data} = await this.store(params);
            if(data.status)
            {
               this.$snotify.success(data.message);
               setTimeout(function () {
                window.location.reload();
               }, 500);
            } 
           }catch(error)
           {
               this.$snotify.error(error);
           } 
          },
            
    }

};
</script>