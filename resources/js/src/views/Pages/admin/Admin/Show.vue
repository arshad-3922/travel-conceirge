<template>
    <div class="app-content content">
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-6 col-12 mb-2">
          <router-link :to="{name:'admin.users.index'}"><h3 class="content-header-title mb-0">View User Details</h3></router-link>
        </div>
      </div>
      <div class="content-body">
        <section class="card">
          <div id="invoice-template" class="card-body">
              <div id="invoice-company-details" class="row">
              <div class="col-md-6 col-sm-12 text-center text-md-left">
                <div class="media">
                   <img :src="user.image" alt="user profile" class="rounded-circle img-border height-100"
                  />
                  <div class="media-body">
                    <ul class="ml-2 px-0 list-unstyled">
                      <li><b>Name : </b>{{admin.name}}</li>
                      <li><b>Email : </b>{{admin.email}}</li>
                      <li><b>Contact Number : </b>{{admin.phone_number}}</li>
                      <li><b>Registration Date : </b>{{formatDate(admin.created_at)}}</li>
                    </ul>
                  </div>
                </div>
                <router-link :to="{name:'admin.account.edit' ,params:{id:admin.id}}" type="button" class="btn btn-success round btn-min-width mr-1 mb-1">Edit</router-link>
              </div>
              <div class="col-md-6 col-sm-12 text-center text-md-right">
                   <span><b>Status :</b></span> <span v-if="user.status == 1">Active</span> <span v-else>Inactive</span>
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
    data() {
        return {
            form: {
                permissions: [],
            }
        };
    },
    created() {
        this.fetch();
    },
    computed: {
        ...mapState('admin', ['admin']),
    },
    methods: {
        ...mapActions('admin', ['store', 'get']),
        async fetch() {
        	let {admin} = this.$route.params;
            let params = {
                route: route('admin.admin.show',{admin}),
                mutation: 'SET_ADMIN',
                variable: 'admin',
                data: {}
            };
            let { data } = await this.get(params);
            let {permissions} = this.form; 
            this.form = this.admin;
            this.form.permissions = (this.admin.permissions)?this.admin.permissions:permissions;
        },
    }
}
</script>