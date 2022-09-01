<template>
<div class="app-content content dashboard">
     <div class="content-wrapper">
          <div class="content-body">
               <!-- Basic form layout section start -->
               <section id="configuration">
                    <div class="row">
                         <div class="col-12">
                              <div class="card p-md-4 p-1">
                                   <div class="row mb-2">
                                        <div class="col-12">
                                             <div class="d-md-flex flex-wrap justify-content-between align-items-center">
                                                  <h1 class="fw-600 fc-black main-heading">
                                                       Content Management
                                                  </h1>
                                                  <!-- <a href="#" class="btn btn-purple sec-btn cms_bold">CMS Home</a> -->
                                             </div>
                                        </div>
                                   </div>
                                   <div class="row">
                                      <CMSTable />
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
const CMSTable = () => import('./components/CMSTable.vue');
import {mapActions, mapState} from 'vuex';
export default {
            computed: {
                ...mapState('admin', ['cmss']),
            },
            components: {
                CMSTable,
            },
                created() {
                this.fetch();
            },
            methods: {
                ...mapActions('admin', ['getAll']),
                async fetch() {
                    let params = {
                        route: 'api/cmss/index',
                        mutation: 'SET_CMSS',
                        variable: 'data',
                    };
                    let {data} = await this.getAll(params);
                }
            }

        }
    </script>
