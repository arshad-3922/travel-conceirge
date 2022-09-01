<template>
	<div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-content collapse show">
                                <div class="card-dashboard pb-1">
                                    <div class="row px-2">
                                        <h3 class="mb-2 d-blue-text bold">Contact Us</h3>
                                    </div>
                                </div>      
                                <div class="clearfix"></div>
                                <div class="clearfix"></div>
                                <div class="card-dashboard pt-0">
                                    <div class="clearfix"></div>
                                    <div class="maain-tabble table-responsive">
                                        <contact-table></contact-table>
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
    const ContactTable = () => import('./components/ContactTable.vue');

    import {mapActions, mapState} from 'vuex';

    export default {
        computed: {
            ...mapState('admin', ['users', 'search', 'entries']),
        },
        components: {
            ContactTable,
            
        },
        created() {
            // let {page} = this.$route.query;
            // this.fetch(page);
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
            // async fetch(page = 1) {
            //     let {type, status} = this.$route.params;
            //     let params = {
            //         route: 'api/order/pending',
            //         mutation: 'SET_PENDINGORDERS',
            //         variable: 'data',
            //         data: {
            //             page,
            //             type,
            //             status,
            //             search: this.search,
            //             entries: this.entries,
            //         }
            //     };
            //     let {data} = await this.getAll(params);

            //     if (page != 1) {
            //         this.addRouteQuery({page});
            //     } else {

            //         this.addRouteQuery({});

            //     }
            // }
        }

    }

</script>