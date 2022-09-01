<template>
   <div class="app-content content">
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-12 col-12 mb-2">
          <h3 class="content-header-title mb-0">Edit User</h3>
        </div>
      </div>
      <div class="content-body">
        <section id="basic-form-layouts">
          <div class="row match-height">
            <div class="col-md-12">
              <div class="card">
                <div class="card-content collapse show">
                  <div class="card-body">
                    <ValidationObserver v-slot="{handleSubmit}">
                    <form @submit.prevent="handleSubmit(update)" ref="UserEditForm">
                      <div class="form-body">
                        <h4 class="form-section">Edit User Details</h4>
                        <div class="form-group">
                          <label for="userinput5">Profile</label>
                           <div class="media-left pl-2 pt-2">
                            <a href="javascript:viod(0)" class="profile-image">
                              <img :src="user.image" class="rounded-circle img-border height-100" alt="Card image">
                            </a>
                            <input class="form-control border-primary" ref="image" type="file">
                          </div>
                        </div>
                         <div class="form-group">
                          <label for="userinput5">Full Name</label>
						               <ValidationProvider  name="First Name" rules="required" v-slot="{errors}">
                            <input class="form-control border-primary" v-model="user.name" name="first_name" type="text" placeholder="First Name" id="userinput5">
                           <span class="text-danger">{{ errors[0] }}</span>
                            </ValidationProvider>
                               <span class="text-danger" v-if="errors.first_name">{{ errors.first_name[0] }}</span>
                          </div>
                        <div class="form-group">
                          <label for="userinput5">Email Address</label>
						              <p>{{user.email}}</p>
                          </div>
                           <div class="form-group">
                          <label for="userinput5">Contact No</label>
						                <p>{{user.phone_number}}</p>
                          </div>
                          <button type="submit" class="btn btn-primary">
                          <i class="fa fa-check-square-o"></i> update
                        </button>
                      </div>
                    </form>
				           </ValidationObserver>
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
        ...mapState('admin',['user']),
    },
    data() {
        return {
            date: '',
            errors:[]
        };
    },
    created() {
        this.fetch();
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
        async fetch() {
            let {type, status} = this.$route.params;
            let params = {
                route: `api/auth/user/view/${this.$route.params.id}`,
                mutation: 'SET_USER',
                variable: 'data',
            };
            let {data} = await this.getAll(params); 
        },
      async update(){
            let data = new FormData(this.$refs.UserEditForm);
            data.append('image',this.$refs.image.files[0]);
            let result = await axios.post(`api/auth/user/update/${this.$route.params.id}`,data);
                if (result.data.data) {
                 this.$snotify.success(result.data.message);
                 this.$router.push({name: 'admin.users.index'});
                 } else {
                 this.errors   = result.data.errors;    
                 this.$snotify.error(result.data.message[0]);
                }
         }
    }

};
</script>