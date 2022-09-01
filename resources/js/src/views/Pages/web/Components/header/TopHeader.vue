<template>
<section>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-11 mx-auto">
        <nav class="navbar navbar-expand-xl navbar-light bg-light custom-nav">
          <router-link :to="{name:'web.home.index'}" class="navbar-brand">
            <img :src="base_url+`/assets/web/images/logo.png`" alt="" loading="lazy">
          </router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <router-link :to="{name:'web.home.index'}" class="nav-link"><span>Home</span></router-link>
              </li>

              <!-- <li class="nav-item dropdown">
                <router-link :to="{name:'web.aesthetictreatments.index'}" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Aesthetic Treatments
                </router-link>
                <ul class="dropdown-menu for-top" aria-labelledby="navbarDropdownMenuLink">
                  <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="javascript:void(0)"><i class="fas fa-long-arrow-alt-right mr-1"></i>Body</a>
                    <ul class="dropdown-menu">
                      <li><router-link :to="{name:'web.body.brazilianbum'}" class="dropdown-item">Non Surgical Brazilian Bum Lift</router-link></li>
                      <li><router-link :to="{name:'web.body.skintightening'}" class="dropdown-item">RF Skin Tightening </router-link></li>
                      <li><router-link :to="{name:'web.body.tummytightening'}" class="dropdown-item">RF Tummy Tightening</router-link></li>
                      <li><router-link :to="{name:'web.body.shockwavetreatment'}" class="dropdown-item">Shockwave Treatment</router-link></li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="javascript:void(0)"><i class="fas fa-long-arrow-alt-right mr-1"></i>Face</a>
                    <ul class="dropdown-menu">
                      <li><router-link :to="{name:'web.face.cryolipolysis'}" class="dropdown-item">3D Chin Cryolipolysis</router-link></li>
                      <li><router-link :to="{name:'web.face.hifuface'}" class="dropdown-item">3D Hifu Face Lift</router-link></li>
                      <li><router-link :to="{name:'web.face.reduction'}" class="dropdown-item">RF Double Chin Reduction</router-link></li>
                      <li><router-link :to="{name:'web.face.necktightening'}" class="dropdown-item">RF face and neck tightening</router-link></li>

                    </ul>
                  </li>
                  <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle"  href="javascript:void(0)"><i class="fas fa-long-arrow-alt-right mr-1"></i>Fat Reduction</a>
                    <ul class="dropdown-menu">
                      <li><router-link :to="{name:'web.fatreduction.fatfreeze'}"  class="dropdown-item">Cryolipolisis Fat Freeze</router-link></li>
                      <li><router-link :to="{name:'web.fatreduction.fatmelting'}"  class="dropdown-item">RF Fat Melting</router-link></li>
                      <li><router-link :to="{name:'web.fatreduction.cavitation'}"  class="dropdown-item">Ultrasound Cavitation</router-link></li>
                    </ul>
                  </li>
                </ul>
              </li> -->
              
              <li class="nav-item">
                <router-link :to="{name:'web.services.index'}" class="nav-link"><span>Our Treatments</span></router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name:'web.technology.index'}" class="nav-link"><span>Technology</span></router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name:'web.home.pricing'}" class="nav-link"><span>Pricing</span></router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name:'web.home.aboutus'}" class="nav-link"><span>About Us</span></router-link>
              </li> 
              <li class="nav-item" v-if="user">
                <router-link :to="{name:'web.home.contact'}" class="nav-link"><span>Contact Us</span></router-link>
              </li>
                    <li class="nav-item" v-if="isShowing">
                     <div class="dropdown login-nav">
                                    <!-- <button class="btn dropdown-toggle d-flex align-items-center pl-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-bell"></i>
                                    </button> -->
                             <ul>
                              <bell-notification></bell-notification>
                            </ul>
                      </div>
                            </li>
                            <!-- <li class="nav-item" v-if="isShowing">
                                <div class="dropdown">
                                    <button class="btn dropdown-toggle d-flex align-items-center pl-0 pt-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img :src="user.image" class="user-icon">{{user.name}}
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <router-link :to="{name:'web.account.index'}" class="dropdown-item"><i class="fas fa-user mr-2"></i>Profile</router-link>
                                        <router-link :to="{name:'web.booking.index'}" class="dropdown-item"><i class="fas fa-calendar-alt mr-2"></i>My Bookings</router-link>
                                        <a class="dropdown-item" href="javascript:void(0)" data-toggle="modal" data-target="#logout" @click="logout"><i class="fas fa-sign-out-alt mr-2"></i>Logout</a>
                                    </div>
                                </div>
                            </li>
         
                    <li class="nav-item" v-else>
                      <div class="d-xl-flex justify-content-between align-items-center">
                        <router-link :to="{name:'web.auth.login'}" class="nav-link">Login</router-link>
                        <span class="d-xl-inline-block d-none">|</span>
                        <router-link :to="{name:'web.auth.register'}" class="nav-link">Register</router-link>
                      </div>
                    </li> -->
            </ul>
          </div>
        </nav>

      </div>
    </div>
  </div>
</section>
</template>

    <script>
        import {mapState, mapActions} from 'vuex';
        export default {
        data(){
        return{
        base_url:base_url,
        user:{},
        isShowing:false
        }
        },
        created(){
        this.getProfile();
        },
        mounted() {
        this.$nextTick(() => {
        var links = document.querySelectorAll('.collapse.navbar-collapse ul li');
        links.forEach(function (element) {
        element.addEventListener('click', function (e) {
        e.preventDefault();
        links.forEach(function (element) {
        element.classList.remove('active');
        });
        this.classList.add('active');
        });
        });
        });
        },
        methods:{
        ...mapActions('user', ['getAll','store']),
        isLoggedIn(){
        return localStorage.getItem('access-token') && localStorage.getItem('userType') === 'user' && localStorage.getItem('siteManager') === 'user';
         },
        async logout() {
                let response =   await axios.post('api/auth/logout');
                  localStorage.removeItem('isLoggedIn');
                  localStorage.removeItem('userType');
                  localStorage.removeItem('auth-id');
                  localStorage.removeItem('id');
                  localStorage.removeItem('access-token');
                  localStorage.removeItem('isLogin');
                  localStorage.removeItem('service_id');
                  localStorage.removeItem('package_id');
                  localStorage.removeItem('surgeon_id');
                  localStorage.removeItem('message');
                  localStorage.removeItem('name');
                  localStorage.removeItem('image');
                  this.$snotify.success('Logout Successfully');
                  if(response.data){
                    this.isLogin = false
                    let self = this;
                    setTimeout(function () {
                    window.location.reload();
                  }, 2000);
                   this.$router.push({name:'web.home.index'});
                  }else{
                        this.$snotify.error('Something Successfully');
                  }
                },
                async getProfile() {
                let id = localStorage.getItem('id');  
                let response = await axios.get('/api/auth/getProfile',{params:{id:id}});
                if(response.data){
                this.user  = response.data
                if(response.status != 401){
                  this.isShowing = true;
                }
                }else{
                this.$snotify.error(response.data.message);
                }
                },
              }
            }
   </script>
