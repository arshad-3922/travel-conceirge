<template>
    <div>
        <navbar></navbar>
        <sidebar></sidebar>
        <router-view></router-view>
        <vue-snotify></vue-snotify>
    </div>
</template>
<script>
import Navbar  from '../../../Core/components/Navbar/admin/Navbar.vue';
import Sidebar from '../../../Core/components/Sidebar/admin/SidebarItems.vue';
import { mapMutations, mapActions } from 'vuex';
export default {
    components: {
        Navbar,
        Sidebar
    },
    methods : {
        ...mapActions('admin', ['getAll']),
        ...mapMutations('admin', ['SET_BELL_NOTIFICATIONS','PUSH_BELL_NOTIFICATIONS']),
        async fetch() {
            let { status } = this.$route.params;
            let params = {
                //route: route('admin.notification.bell'),
                mutation: 'SET_BELL_NOTIFICATIONS',
                variable: 'data',
                data: {}
            };
            let { data } = await this.getAll(params);

        }
    },
    created(){
        this.fetch();
    },
    mounted() {
            // Echo.private('App.Models.Admin.' + this.$user.id).notification((notification) => {
            //     // console.log();
            //     // this.fetch();
            //     this.PUSH_BELL_NOTIFICATIONS(notification);
            // });
    },
    destroy(){
        window.location.reload();
    }
}

</script>
