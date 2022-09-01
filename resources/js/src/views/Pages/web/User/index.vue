<template>
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row">
                    <div class="col-12">
                        <div class="card rounded pad-20">
                            <div class="card-content collapse show">
                                <div class="card-body card-dashboard">
                                    <div class="row">
                                        <div class="col-12">
                                            <h1>User Listing</h1>
                                        </div>
                                        <div class="d-sm-flex mb-2 user-linkss">
                                        <router-link :to="{name:'admin.users.index'}"   class="active mr-1 py-0">Users</router-link>
                                        <router-link :to="{name:'admin.professionals.index'}" class="py-0">Professionals</router-link>
                                        </div>
                                    </div>
                                      <div class="row ml-0 mr-0">
                                        <div class="col-xl-1 col-lg-2 mt-3 col-12">
                                            <label  for="">Sort By:</label>
                                        </div>
                                        <div class="col-xl-2 col-lg-4 col-12">
                                            <label  for="">From:</label>
                                            <flat-pickr v-model="from" name="date" class="site-input border gj-textbox-md"
                                            placeholder="Select a date"></flat-pickr>
                                        </div>
                                        <div class="col-xl-2 col-lg-4 col-12">
                                         <label  for="">To:</label>
                                         <flat-pickr v-model="to" name="date" class="site-input border gj-textbox-md"
                                         placeholder="Select a date"></flat-pickr>
                                     </div>
                                     <div class="col-xl-2 col-lg-4 col-12 mt-2">
                                        <button @click="taskDateFilter()" type="button" class="site-btn login-btn py-1 px-3 mb-1">APPLY/CLEAR</button>
                                    </div>
                                </div>
                                    <div class="clearfix"></div>
                                    <div class="maain-tabble table-responsive">
                                        <table-search></table-search>
                                        <user-table></user-table>
                                        <template>
                                            <pagination class="float-right" :data="users"
                                            @pagination-change-page="fetch"></pagination>
                                        </template>
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
        const UserTable = () => import('./components/UserTable.vue');
        import {mapActions, mapState} from 'vuex';

        export default {

            data() {
            return {
                date: '',
                from: '',
                to: '',
                dateFilterCounter : 0,
              };
              },
              
            computed: {
                ...mapState('admin', ['users', 'search', 'entries']),
            },
            components: {
                UserTable,
            },
            created() {
                let {page} = this.$route.query;
                this.fetch(page);
            },
            watch: {
                search: function (val, oldVal) {
                    this.fetch();
                },
                entries: function (val, oldVal) {
                    this.fetch();
                },
            },
            methods: {
                ...mapActions('admin', ['getAll']),
                   taskDateFilter() {
                if(this.from !== '' && this.to !== '' && (this.dateFilterCounter % 2 == 0) ) {
                    this.fetch();
                } else {
                    this.from = '';
                    this.to = '';
                    this.fetch();
                }

                this.dateFilterCounter++;
            },
                async fetch(page = 1) {
                    let {type, status} = this.$route.params;
                    let params = {
                        route: 'api/auth/users',
                        mutation: 'SET_USERS',
                        variable: 'data',
                        data: {
                            page,
                            type,
                            status,
                            from:this.from,
                            to:this.to,
                            search: this.search,
                            entries: this.entries,
                        }
                    };
                    
                    let {data} = await this.getAll(params);

                    if (page != 1) {
                        this.addRouteQuery({page});
                    } else {

                        this.addRouteQuery({});

                    }
                }
            }

        }

    </script>

<style scoped>
.card-body.card-dashboard {
    margin-top: 4%;
}
</style>