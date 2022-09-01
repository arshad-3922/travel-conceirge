
import meta from '../meta';
const admin = {
    layout: {
        fullPage: () => import('@views/Layout/admin/Full-page.vue').then(m => m.default),
    },
    auth: {
        login: () => import('@views/Pages/admin/Auth/Login.vue'),
    },
    account: {
        index : ()=> import('@views/Pages/admin/Account/Index.vue'),
        edit : ()=> import('@views/Pages/admin/Account/Edit.vue'),
        password : ()=> import('@views/Pages/admin/Account/Password.vue'),
    },
    error404 : ()=> import('@views/Pages/admin/Errors/404.vue'),

    passwordRecovery:{
        email:          () => import('@views/Pages/admin/Auth/PasswordRecovery/Email.vue'),
        codeVerify:     () => import('@views/Pages/admin/Auth/PasswordRecovery/Code.vue'),
        changePassword: () => import('@views/Pages/admin/Auth/PasswordRecovery/New.vue'),
    }
};


const routes = {
        path: '/',
        components: {
            default: admin.layout.fullPage,
        },
        children: [
            {
                path: 'site-manager/admin/login',
                component: admin.auth.login,
                name: 'admin.auth.login',
                meta: { ...meta, loggedInCan: false },
            },
            {
                path: 'site-manager/admin/email',
                component: admin.passwordRecovery.email,
                name: 'admin.passwordRecovery.email',
                meta: { ...meta, loggedInCan: false },
            },
            {
                path: 'site-manager/admin/code/verify',
                component: admin.passwordRecovery.codeVerify,
                name: 'admin.passwordRecovery.codeVerify',
                meta: { ...meta, loggedInCan: false },
            },
            {
                path: 'site-manager/admin/change-password',
                component: admin.passwordRecovery.changePassword,
                name: 'admin.passwordRecovery.changePassword',
                meta: { ...meta, loggedInCan: false },
            },


        ],
    }

    export default routes;
