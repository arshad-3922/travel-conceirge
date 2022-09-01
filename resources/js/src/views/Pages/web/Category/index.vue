<template>
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row">
                    <div class="col-12">
                        <div class="card my-5 mx-2">
                            <div class="card-content collapse show">
                                <div class="card-dashboard">
                                    <div class="row justify-content-between align-items-center px-2">
                                        <h3 class="mb-2 d-blue-text bold">Category</h3>
                                        <router-link :to="{name: 'admin.categories.create'}" class="site-btn login-btn py-1 px-3 mb-1">Add Category</router-link>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                                <div class="clearfix"></div>
                                <div class="card-dashboard">
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
                                    <category-table></category-table>
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

    import {mapState, mapActions} from 'vuex';
    const CategoryTable = () => import('./components/CategoryTable.vue');
    export default {

        computed: {
            ...mapState('admin', ['users', 'search', 'entries']),
        },
        data() {
            return {
                date: '',
                from: '',
                to: '',
                dateFilterCounter : 0,
            };
        },
        components: {
            CategoryTable,
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
                if (this.from !== '' && this.to !== '' && (this.dateFilterCounter % 2 == 0) ) {
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
                    route: 'api/category/index',
                    mutation: 'SET_CATEGORY',
                    variable: 'data',
                    data: {
                        page,
                        type,
                        status,
                        from: this.from,
                        to: this.to,
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
