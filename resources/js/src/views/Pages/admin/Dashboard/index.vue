<template>
<div class="app-content content dashboard">
  <div class="content-wrapper">
    <div class="content-body">
      <section id="configuration">
        <div class="row">
          <div class="col-12">
            <div class="card p-md-4 p-1">
              <div class="row">
                <div class="col-lg-12">
                  <h1 class="fw-600">Dashboard</h1>
                </div>
              </div>
              <div class="row my-2">
                <div class="col-lg-4 my-2">
                  <div class="cardYellow px-3 py-2 bg-transparent">
                    <div class="d-flex justify-content-between">
                      <div class="">
                        <h3>Total Users</h3>
                        <h1 class="bold display-4">{{users.length}}</h1>
                        <h4 class="bold fc-blue">100.0%</h4>
                      </div>
                      <div class="">
                        <img :src="base_url+`/assets/admin/img/dashboard/user.png`" alt="" class="img-fluid">
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 my-2">
                  <div class="cardYellow px-3 py-2 bg-transparent">
                    <div class="d-flex justify-content-between">
                      <div class="">
                        <h3>Total booking</h3>
                        <h1 class="bold display-4">{{users.length}}</h1>
                        <h4 class="bold fc-blue">100.0%</h4>
                      </div>
                      <div class="">
                        <img :src="base_url+`/assets/admin/img/dashboard/shop.png`" alt="" class="img-fluid">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row my-2">
                <div class="col-lg-12">
                  <div class="cardYellow px-3 py-2 bg-transparent">
                    <div class="d-lg-flex justify-content-between">
                      <div class="">
                        <h2>Users</h2>
                      </div>
                      <div class="">
                        <div class="form-group">
                       <select name="" id="" class="form-control" v-model="selectedYear" @change="getDashboardData">
                        <option :key="year" v-for="year in years" :value="year">{{ year }}</option>
                      </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                     <BarChart :label="`Revenue Analytics`" v-if="dashboardGraph.length" :data="dashboardGraph"/>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 text-center py-2">
                  <h4>MONTHS</h4>
                </div>
              </div>

              <div class="row my-2">
                <div class="col-lg-12">
                  <div class="cardYellow px-3 py-2  bg-transparent">
                    <div class="d-lg-flex justify-content-between">
                      <div class="">
                        <h2>TOTAL BOOKING ONLINE</h2>
                      </div>
                      <div class="">
                        <div class="form-group">
                        <select name="" id="" class="form-control" v-model="selectedYear" @change="getDashboardData">
                        <option :key="year" v-for="year in years" :value="year">{{ year }}</option>
                      </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                     <BarChart :label="`Revenue Analytics`" v-if="dashboardGraph.length" :data="dashboardGraph"/>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 text-center py-2">
                  <h4>MONTHS</h4>
                </div>
              </div>
              <div class="row my-2">
                <div class="col-lg-12">
                  <div class="cardYellow px-3 py-2  bg-transparent">
                    <div class="d-lg-flex justify-content-between">
                      <div class="">
                        <h2>TOTAL BOOKING ON THE SPOT</h2>
                      </div>
                      <div class="">
                        <div class="form-group">
                        <select name="" id="" class="form-control" v-model="selectedYear" @change="getDashboardData">
                        <option :key="year" v-for="year in years" :value="year">{{ year }}</option>
                       </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                     <BarChart :label="`Revenue Analytics`" v-if="dashboardGraph.length" :data="dashboardGraph"/>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 text-center py-2">
                  <h4>MONTHS</h4>
                </div>
              </div>
              <div class="row my-2">
                <div class="col-lg-12">
                  <h1 class="">
                    New Users
                  </h1>
                </div>
                <div class="col-lg-12">
                  <div class="table-responsive">
                    <RecentUsers  :users="recent_users"/>
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
const RecentUsers = () => import('./components/RecentUsers.vue');
const BarChart  = () => import('./components/BarChart.vue');
export default {
  data(){
    return{
      base_url:baseUrl,
      selectedYear: '2022',
      recent_users:[],
	  activityLogs:[],
	  dashboardGraph: [],
      users:[],
      business:[],
      shop:[],
      sale:[]
    }
  },
  components: {
    BarChart,
    RecentUsers
  },
  async created(){
    this.getDashboardData();
  },
  computed:{
	  years: () => {
      let today = new Date();
      let currentYear = today.getFullYear();
      let last10Years = new Date(today.setFullYear(today.getFullYear() - 5)).getFullYear();
      let years = [];
      for (var i = currentYear; i >= last10Years; i--) {
        years.push(i);
      }
      return years;
    },
	},
  methods:{
             async getDashboardData(){		
                let response = 	await axios.get('api/auth/dashboardData');
                if(response){
                   var data  = response.data.data.users;
                    for(let i=0; i<data.length; i++)
                    {
                       if(data[i].user_role.role_id == 5)
                       {
                           this.users.push(data[i]);
                       }
                       if(data[i].user_role.role_id == 4)
                       {
                           this.sale.push(data[i]);
                       }
                       if(data[i].user_role.role_id == 3)
                       {
                           this.shop.push(data[i]);
                       }
                       if(data[i].user_role.role_id == 2)
                       {
                           this.business.push(data[i]);
                       }
                    }
                    
                this.recent_users = response.data.data.recent_users;
                this.dashboardGraph = response.data.data.graphdata;
                }else{
                this.$toasted.error('No Data Found!...');	
                }
                },  
          }
   
}

</script>
    