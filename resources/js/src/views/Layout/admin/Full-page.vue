<template>
   
            <div class="login-bg">
                <router-view></router-view>
                <vue-snotify></vue-snotify>
                <password-recovery></password-recovery>
            </div>


</template>
<script>
const Admin = () => import('@views/Layout/admin/Admin.vue');
const PasswordRecovery = () => import('@core/components/Popups/password-recovery/Popup.vue');
export default {
    components: {
        Admin,
        PasswordRecovery,
    },
}

</script>
