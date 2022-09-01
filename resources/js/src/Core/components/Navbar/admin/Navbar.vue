<template>
<nav class="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-light navbar-border">
    <div class="navbar-wrapper">
        <div class="navbar-header">
            <ul class="nav navbar-nav flex-row">
                <li class="nav-item mobile-menu d-md-none mr-auto"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ft-menu font-large-1"></i></a></li>
                <li class="nav-item"> <router-link :to="{name:'admin.dashboard'}"> <img class="brand-logo img-fluid" alt="stack admin logo" :src="base_url+`/assets/admin/images/logo.png`"></router-link> </li>
                <li class="nav-item d-md-none"> <a class="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile"><i class="fa fa-ellipsis-v"></i></a> </li>
            </ul>
        </div>
        <div class="navbar-container content">
            <div class="collapse navbar-collapse" id="navbar-mobile">
                <ul class="nav navbar-nav mr-auto float-left">
                </ul>
                <ul class="nav navbar-nav float-right">
                    <bell-notification></bell-notification>
                    <li class="dropdown dropdown-user nav-item">
                        <a class="dropdown-toggle nav-link dropdown-user-link" href="javascript:void(0)" data-toggle="dropdown">
                            <span class="avatar avatar-online">
                                <img :src="profile.data.image" alt="avatar">
                            </span>
                            <span class="user-name">{{profile.data.name}}<br>
                            <span class="user-title">Admin</span>
                            </span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <router-link  :to="{name:'admin.account.index'}" class="dropdown-item"><i class="fas fa-user-circle"></i>Profile</router-link>
                            <a class="dropdown-item" data-toggle="modal" data-target="#logoutModal" @click="logout"><i class="fas fa-sign-out-alt"></i>Logout</a>
                        </div>
                    </li>
                    <li class="nav-item d-none d-md-block">
                        <a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#">
                            <i class="ft-menu greey-menu-icon color-purple-i"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>
</template>
<script>
import { mapState,mapActions} from 'vuex';
const BellNotification = () => import('@core/components/BellNotification.vue')
export default {
    data(){
        return{
            base_url:baseUrl
        }
    },
    computed:{
        ...mapState('admin',['profile'])
    },
    components: {
        BellNotification
    },
    created(){
        this.fetch();
    },
    methods: {
         ...mapActions('admin',['get']),
         async fetch() {
            let params = {
                route:'/api/auth/getProfile',
                mutation:'SET_PROFILE',
                variable:'data'
            } 
          let  data = await this.get(params);
        },
        toggleMenu() {
            let classes = document.body.classList;
            if (_.includes(classes, 'menu-expanded')) {
                classes.remove('menu-expanded');
                classes.add('menu-collapsed');
            } else {
                classes.add('menu-expanded');
                classes.remove('menu-collapsed');
            }
        },
        async logout() {
            await axios.post('admin/auth/logout');
               localStorage.removeItem('isLoggedIn');
               localStorage.removeItem('userType');
               localStorage.removeItem('auth-id');
               localStorage.removeItem('id');
               localStorage.removeItem('access-token');
               localStorage.removeItem('isLogin');
              this.$snotify.success('Logout Successfully');
              let self = this;
            setTimeout(function () {
                window.location.reload();
                // self.$router.push({ name: 'admin.dashboard' });
            }, 2000);
        }
    }
}

</script>
