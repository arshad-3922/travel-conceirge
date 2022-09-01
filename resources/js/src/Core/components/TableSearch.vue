<template>
    <div class="d-flex align-items-end col-md-12 col-sm-12">
        <div  class="col-sm-12 col-md-6">
            <div v-if="showEntries" class="dataTables_length" id="DataTables_Table_0_length">
                <label class="d-flex">Show
                  <select class="form-control input1 bg-transparent" v-model="entries">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        </select>
                       <label class="d-inline-block ml-1">Entries</label>
                </label></div>
        </div>
        <div class="col-md-6 col-sm-12">
            <div id="DataTables_Table_0_filter" class="dataTables_filter for-search w-100">
                <label>Search:<input v-model="searchValue" spellcheck="true" type="search" class="form-control" :placeholder="placeholder" aria-controls="DataTables_Table_0"></label>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
    props: {
        placeholder: {
            type: String, // String, Number, Boolean, Function, Object, Array
            required: false,
            default: 'Search...'
        },
        showEntries: {
            type: Boolean, // String, Number, Boolean, Function, Object, Array
            required: false,
            default: true,
        }
    },
    data() {
        return {
            searchValue: '',
            entries : 10,
        };
    },
    watch: {
        searchValue: function(val, oldVal) {
            this.handleSearch();
        },
        entries(val){
            this.SET_ENTRIES(val);
        }
    },
    created() {
        this.handleSearch = _.debounce(this.handleSearch, 500);
    },
    computed: {
        // ...mapState('admin',['search']),
    },
    methods: {
        ...mapMutations('admin', ['SET_SEARCH','SET_ENTRIES']),
        handleSearch() {
            this.SET_SEARCH(this.searchValue);
        },
    }

}

</script>
<style type="text/css">
.custom-datatable-vue{
    width: 75px;
    display: inline-block;
    border-radius: 50px;
    height: 30px !important;
}
.dataTables_filter {
    text-align: right;
}
.custom-search-vue{

    margin-left: 0.5em;
    display: inline-block;
    width: auto!important;

}
#configuration input.site-input[readonly]{
    padding: 0 20px !important;
}
</style>