
import meta from '../meta';
const admin = {
    layout: {
        fullPage: () => import('@views/Layout/admin/Admin.vue').then(m => m.default),
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
    dashboard : ()=> import('@views/Pages/admin/Dashboard/index.vue'),


    users : {
        index : ()=> import('@views/Pages/admin/User/index.vue'),
        show : ()=> import('@views/Pages/admin/User/show.vue'),
        edit : ()=> import('@views/Pages/admin/User/edit.vue'),
    },

    payments:{
        index: () => import('@views/Pages/admin/Payments/index.vue')
    },

    bookings:{
        index: () => import('@views/Pages/admin/Bookings/index.vue'),
        show: () => import('@views/Pages/admin/Bookings/Show.vue')
    },

    subscriptions:{
        index: () => import('@views/Pages/admin/Subscription/index.vue'),
        create: () => import('@views/Pages/admin/Subscription/create.vue'),
        edit: () => import('@views/Pages/admin/Subscription/edit.vue'),
    },

    feedbacks:{
        index: () => import('@views/Pages/admin/Feedback/index.vue'),
        show: () => import('@views/Pages/admin/Feedback/Show.vue')
    },

    contactUs : {
        index : ()=> import('@views/Pages/admin/ContactUs/index.vue'),
        show : ()=> import('@views/Pages/admin/ContactUs/show.vue'),
    },

    cms:{
        index: () => import('@views/Pages/admin/CMS/index.vue'),
        show: () => import('@views/Pages/admin/CMS/show.vue'),
    },

    admins : {
        index : ()=> import('@views/Pages/admin/Admin/Index.vue'),
        create : ()=> import('@views/Pages/admin/Admin/Create.vue'),
        edit : ()=> import('@views/Pages/admin/Admin/Edit.vue'),
        show : ()=> import('@views/Pages/admin/Admin/Show.vue'),
    },
    notifications : {
        index : ()=> import('@views/Pages/admin/Notification/Index.vue'),
    },
};


const routes = {
    path: '/',
    components: {
        default: admin.layout.fullPage,
    },
    children: [
    {
        path: 'site-manager/admin/dashboard',
        component: admin.dashboard,
        name: 'admin.dashboard',
        meta: { ...meta, requiresAuth:true,permission : null},
    },

    {
        path: 'site-manager/admin/payments',
        component: admin.payments.index,
        name: 'admin.payments.index',
        meta: { ...meta, requiresAuth: true,permission : null },
    },

    {
        path: 'site-manager/admin/bookings',
        component: admin.bookings.index,
        name: 'admin.bookings.index',
        meta: { ...meta, requiresAuth: true,permission : null },
    },

    {
        path: 'site-manager/admin/bookings/show/:id',
        component: admin.bookings.show,
        name: 'admin.bookings.show',
        meta: { ...meta, requiresAuth: true,permission : null },
    },

    {
        path: 'site-manager/admin/subscriptions',
        component: admin.subscriptions.index,
        name: 'admin.subscriptions.index',
        meta: { ...meta, requiresAuth: true,permission : null },
    },

    {
        path: 'site-manager/admin/subscriptions/create',
        component: admin.subscriptions.create,
        name: 'admin.subscriptions.create',
        meta: { ...meta, requiresAuth: true,permission : null },
    },
    
    {
        path: 'site-manager/admin/subscriptions/:id',
        component: admin.subscriptions.edit,
        name: 'admin.subscriptions.edit',
        meta: { ...meta, requiresAuth: true,permission : null },
    },


    {
        path: 'site-manager/admin/feedback',
        component: admin.feedbacks.index,
        name: 'admin.feedbacks.index',
        meta: { ...meta, requiresAuth: true,permission : null },
    },

    {
        path: 'site-manager/admin/feedback/show/:id',
        component: admin.feedbacks.show,
        name: 'admin.feedbacks.show',
        meta: { ...meta, requiresAuth: true,permission : null },
    },

    {
        path: 'site-manager/admin/cms',
        component: admin.cms.index,
        name: 'admin.cms.index',
        meta: { ...meta, requiresAuth: true,permission : null },
    },

    {
        path: 'site-manager/admin/cms/show/:id',
        component: admin.cms.show,
        name: 'admin.cms.show',
        meta: { ...meta, requiresAuth: true,permission : null },
    },

    {
        path: 'site-manager/admin/contact-us',
        component: admin.contactUs.index,
        name: 'admin.contactUs.index',
        meta: { ...meta, requiresAuth: true,permission : null },
    },
    {
        path: 'site-manager/admin/contact-us/show/',
        component: admin.contactUs.show,
        name: 'admin.contactUs.show',
        meta: { ...meta, requiresAuth: true,permission : null },
    },

    {
        path: 'site-manager/admin/account',
        component: admin.account.index,
        name: 'admin.account.index',
        meta: { ...meta, requiresAuth: true,permission : null },
    },
    {
        path: 'site-manager/admin/account/edit',
        component: admin.account.edit,
        name: 'admin.account.edit',
        meta: { ...meta, requiresAuth: true,permission : null },
    },

    {
        path: 'site-manager/admin/account/password/change',
        component: admin.account.password,
        name: 'admin.account.password',
        meta: { ...meta, requiresAuth: true,permission : null },
    },


    {
        path: 'site-manager/admin/users/',
        component: admin.users.index,
        name: 'admin.users.index',
        meta: { ...meta, requiresAuth: true,permission : 'admin.users' },
    },

    {
        path: 'site-manager/admin/users/view/:id',
        component: admin.users.show,
        name: 'admin.users.show',
        meta: { ...meta, requiresAuth: true,permission : 'admin.users' },
    },
    {
        path: 'site-manager/admin/users/edit/:id',
        component: admin.users.edit,
        name: 'admin.users.edit',
        meta: { ...meta, requiresAuth: true,permission : 'admin.users' },
    },

    {
        path: 'admins',
        component: admin.admins.index,
        name: 'admin.admins.index',
        meta: { ...meta, requiresAuth: true,permission : 'admin.admins' }
    },
    {
        path: 'admins/create',
        component: admin.admins.create,
        name: 'admin.admins.create',
        meta: { ...meta, requiresAuth: true,permission : 'admin.admins' }
    },
    {
        path: 'admins/edit/:admin',
        component: admin.admins.edit,
        name: 'admin.admins.edit',
        meta: { ...meta, requiresAuth: true,permission : 'admin.admins' }
    },
    {
        path: 'admins/:admin',
        component: admin.admins.show,
        name: 'admin.admins.show',
        meta: { ...meta, requiresAuth: true,permission : 'admin.admins' }
    },
    {
        path: 'site-manager/admin/notifications/',
        component: admin.notifications.index,
        name: 'admin.notifications.index',
        meta: { ...meta, requiresAuth: true,permission : null }
    },
    // {
    //     path: '404',
    //     name: 'admin.404',
    //     component: admin.error404,
    //     meta: { ...meta, requiresAuth: true,permission : null },
    // },
    // {
    //     path: '*',
    //     redirect: { name: 'admin.404',permission : null }
    // },

    ],
}

export default routes;
