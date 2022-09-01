import meta from '../meta';
const web = {
    layout: {
        fullPage: () => import('@views/Layout/web/Full-page.vue').then(m => m.default),
    },
    home:{
        index: () => import('@views/Pages/web/Home/index.vue'),
        aboutus:() => import('@views/Pages/web/Home/about.vue'),
        pricing:() => import('@views/Pages/web/Home/pricing.vue'),
        contact : () => import('@views/Pages/web/Home/contact.vue'),

    },
    services: {
        index:() => import('@views/Pages/web/Services/index.vue'),
        show:() => import('@views/Pages/web/Services/show.vue'),
        servicepackagedetails:() => import('@views/Pages/web/Services/packagedetails.vue'),
        servicesurgeondetails:() => import('@views/Pages/web/Services/surgeondetails.vue'),

    },

    technology: {
        index:() => import('@views/Pages/web/Technology/index.vue'),
        cavitation:() => import('@views/Pages/web/Technology/cavitation.vue'),
        fatfreeze:() => import('@views/Pages/web/Technology/fatfreeze.vue'),
        hifu:() => import('@views/Pages/web/Technology/hifu.vue'),
        fatfreeze:() => import('@views/Pages/web/Technology/fatfreeze.vue'),
        radiofrequency:() => import('@views/Pages/web/Technology/radiofrequency.vue'),
        shockwave:() => import('@views/Pages/web/Technology/shockwave.vue'),
        prp:() => import('@views/Pages/web/Technology/prp.vue'),
    },

    body:{
        brazilianbum:() => import('@views/Pages/web/AestheticTreatments/Body/brazilianbum.vue'),
        skintightening:() => import('@views/Pages/web/AestheticTreatments/Body/skintightening.vue'),
        tummytightening:() => import('@views/Pages/web/AestheticTreatments/Body/tummytightening.vue'),
        shockwavetreatment:() => import('@views/Pages/web/AestheticTreatments/Body/shockwavetreatment.vue'),

    },

    aesthetictreatments:{
        index:() => import('@views/Pages/web/AestheticTreatments/index.vue'),
    },

    face:{
        cryolipolysis:() => import('@views/Pages/web/AestheticTreatments/Face/cryolipolysis.vue'),
        hifuface:() => import('@views/Pages/web/AestheticTreatments/Face/hifuface.vue'),
        necktightening:() => import('@views/Pages/web/AestheticTreatments/Face/necktightening.vue'),
        reduction:() => import('@views/Pages/web/AestheticTreatments/Face/reduction.vue'),
    },

    fatreduction:{
        cavitation:() => import('@views/Pages/web/AestheticTreatments/FatReduction/cavitation.vue'),
        fatfreeze:() => import('@views/Pages/web/AestheticTreatments/FatReduction/fatfreeze.vue'),
        fatmelting:() => import('@views/Pages/web/AestheticTreatments/FatReduction/fatmelting.vue'),
    },

    packages: {
        show:() => import('@views/Pages/web/Packages/show.vue'),
    },

    requestform: {
        index:() => import('@views/Pages/web/AestheticTreatments/request.vue'),
    },

    auth: {
        login: () => import('@views/Pages/web/Auth/Login.vue'),
        register: () => import('@views/Pages/web/Auth/Register/register.vue'),
    },

    error404 : ()=> import('@views/Pages/web/Errors/404.vue'),

    passwordRecovery:{
        email: () => import('@core/components/Popups/password-recovery-page/Email.vue'),
        codeVerify: () => import('@core/components/Popups/password-recovery-page/CodeVerify.vue'),
        changePassword: () => import('@core/components/Popups/password-recovery-page/PasswordChange.vue'),
    }
};

const routes = {
    path: '/',
    components: {
        default: web.layout.fullPage,
    },
    children: [
        
        {
            path: '/',
            component: web.home.index,
            name: 'web.home.index',
            meta: { ...meta, loggedInCan: true },
        }, 

    {
        path: 'login',
        component: web.auth.login,
        name: 'web.auth.login',
        meta: { ...meta, loggedInCan: true },
    }, 

    {
        path: 'register',
        component: web.auth.register,
        name: 'web.auth.register',
        meta: { ...meta, loggedInCan: true },
    },
    
    {
        path: 'about-us',
        component: web.home.aboutus,
        name: 'web.home.aboutus',
        meta: { ...meta, loggedInCan: true },
    },

    {
        path: 'contact',
        component: web.home.contact,
        name: 'web.home.contact',
        meta: { ...meta, loggedInCan: true },
    },

    {
        path: 'our-treatments',
        component: web.services.index,
        name: 'web.services.index',
        meta: { ...meta, loggedInCan: true },
    },
    
    {
        path: 'beauty-services/show/:id',
        component: web.services.show,
        name: 'web.services.show',
        meta: { ...meta, loggedInCan: true },
    },

    {
        path: 'beauty-services/servicepackagedetails/:id',
        component: web.services.servicepackagedetails,
        name: 'web.services.servicepackagedetails',
        meta: { ...meta, loggedInCan: true },
    },

    {
        path: 'treatments/aesthetictreatments',
        component: web.aesthetictreatments.index,
        name: 'web.aesthetictreatments.index',
        meta: { ...meta, loggedInCan: true },
    },

    {
        path: 'beauty-services/servicesurgeondetails/:id',
        component: web.services.servicesurgeondetails,
        name: 'web.services.servicesurgeondetails',
        meta: { ...meta, loggedInCan: true },
    },

    {
        path: 'aesthetictreatments/body/brazilianbum',
        component: web.body.brazilianbum,
        name: 'web.body.brazilianbum',
        meta: { ...meta, loggedInCan: true },
    }, 

    {
        path: 'aesthetictreatments/body/skintightening',
        component: web.body.skintightening,
        name: 'web.body.skintightening',
        meta: { ...meta, loggedInCan: true },
    }, 

    {
        path: 'aesthetictreatments/body/tummytightening',
        component: web.body.tummytightening,
        name: 'web.body.tummytightening',
        meta: { ...meta, loggedInCan: true },
    },


    {
        path: 'aesthetictreatments/body/shockwavetreatment',
        component: web.body.shockwavetreatment,
        name: 'web.body.shockwavetreatment',
        meta: { ...meta, loggedInCan: true },
    }, 


    
    {
        path: 'aesthetictreatments/face/cryolipolysis',
        component: web.face.cryolipolysis,
        name: 'web.face.cryolipolysis',
        meta: { ...meta, loggedInCan: true },
    },

    {
        path: 'aesthetictreatments/face/hifuface',
        component: web.face.hifuface,
        name: 'web.face.hifuface',
        meta: { ...meta, loggedInCan: true },
    },

    {
        path: 'aesthetictreatments/face/necktightening',
        component: web.face.necktightening,
        name: 'web.face.necktightening',
        meta: { ...meta, loggedInCan: true },
    },

    {
        path: 'aesthetictreatments/face/reduction',
        component: web.face.reduction,
        name: 'web.face.reduction',
        meta: { ...meta, loggedInCan: true },
    },

    {
        path: 'aesthetictreatments/fatreduction/cavitation',
        component: web.fatreduction.cavitation,
        name: 'web.fatreduction.cavitation',
        meta: { ...meta, loggedInCan: true },
    },

    {
        path: 'aesthetictreatments/fatreduction/fatfreeze',
        component: web.fatreduction.fatfreeze,
        name: 'web.fatreduction.fatfreeze',
        meta: { ...meta, loggedInCan: true },
    },

    {
        path: 'aesthetictreatments/fatreduction/fatmelting',
        component: web.fatreduction.fatmelting,
        name: 'web.fatreduction.fatmelting',
        meta: { ...meta, loggedInCan: true },
    },

    {
        path: 'aesthetictreatments/request',
        component: web.requestform.index,
        name: 'web.requestform.index',
        meta: { ...meta, loggedInCan: true },
    },


    {
        path: 'technology',
        component: web.technology.index,
        name: 'web.technology.index',
        meta: { ...meta, loggedInCan: true },
    }, 

    {
        path: 'technology/cavitation-technology',
        component: web.technology.cavitation,
        name: 'web.technology.cavitation',
        meta: { ...meta, loggedInCan: true },
    }, 

    {
        path: 'technology/fatfreeze-technology',
        component: web.technology.fatfreeze,
        name: 'web.technology.fatfreeze',
        meta: { ...meta, loggedInCan: true },
    }, 

    {
        path: 'technology/hifu-technology',
        component: web.technology.hifu,
        name: 'web.technology.hifu',
        meta: { ...meta, loggedInCan: true },
    }, 

    {
        path: 'technology/radiofrequency-technology',
        component: web.technology.radiofrequency,
        name: 'web.technology.radiofrequency',
        meta: { ...meta, loggedInCan: true },
    },

    {
        path: 'technology/shockwave-technology',
        component: web.technology.shockwave,
        name: 'web.technology.shockwave',
        meta: { ...meta, loggedInCan: true },
    },

    {
        path: 'technology/prp-technology',
        component: web.technology.prp,
        name: 'web.technology.prp',
        meta: { ...meta, loggedInCan: true },
    },
    
    {
        path: 'pricing',
        component: web.home.pricing,
        name: 'web.home.pricing',
        meta: { ...meta, loggedInCan: true },
    }, 

    {
        path: 'email',
        component: web.passwordRecovery.email,
        name: 'web.password.email',
        meta: { ...meta,loggedInCan: false },

    },

    {
        path: 'code',
        component: web.passwordRecovery.codeVerify,
        name: 'web.password.code',
        meta: { ...meta,loggedInCan: false },

    },
    {
        path: 'new-password',
        component: web.passwordRecovery.changePassword,
        name: 'web.password.newpassword',
        meta: { ...meta,loggedInCan: true },

    },

  ],
    
}

export default routes;
