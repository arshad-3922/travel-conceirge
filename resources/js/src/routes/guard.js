import router from './index.js';

function isAdminLoggedIn() {
     return localStorage.getItem('access-token') && localStorage.getItem('isLoggedIn') && localStorage.getItem('userType') === 'admin';
}

function isBusinessLoggedIn() {
    return localStorage.getItem('access-token') && localStorage.getItem('isLoggedIn') && localStorage.getItem('userType') === 'business';
}

function isSalesLoggedIn() {
    return localStorage.getItem('access-token') && localStorage.getItem('isLoggedIn') && localStorage.getItem('userType') === 'sales';
}

function isVendorLoggedIn() {
    return localStorage.getItem('access-token') && localStorage.getItem('isLoggedIn') && localStorage.getItem('userType') === 'vendor';
}

router.beforeEach((to, from, next) => {
    if(to.name.includes('admin.')){
        if (isAdminLoggedIn()) {
            if (to.meta.requiresAuth && to.meta.loggedInCan) {
                return next();
            } else if (!to.meta.requiresAuth && !to.meta.loggedInCan) {
                return next({ name: 'admin.dashboard'});
            } else {
            }
            return;
        }
        // validating access for actors as unauthenticated
        if (to.meta.requiresAuth) {
            return next({ name: 'admin.auth.login' });
        }
    }

    else if (to.name.includes('business.')){
        //alert('user'); 
        if (isBusinessLoggedIn()) {
            if (to.meta.requiresAuth && to.meta.loggedInCan) {
                return next();
            } else if (!to.meta.requiresAuth && !to.meta.loggedInCan) {
                return next();
            } else {
            // console.log(userPermissions,to.meta.permission);
                //return next({name : 'user.404'});
            }
            return;
        }
        //validating access for actors as unauthenticated
        if (to.meta.requiresAuth) {
            //alert('user');
            return next({ name:'business.auth.login'});
        }
    }


    else if (to.name.includes('sales.')){
        if (isSalesLoggedIn()) {
            if (to.meta.requiresAuth && to.meta.loggedInCan) {
                return next();
            } else if (!to.meta.requiresAuth && !to.meta.loggedInCan) {
                return next();
            } else {
            // console.log(userPermissions,to.meta.permission);
                //return next({name : 'user.404'});
            }
            return;
        }
        //validating access for actors as unauthenticated
        if (to.meta.requiresAuth) {
            //alert('user');
            return next({ name:'sales.auth.login'});
        }
    }

    else if (to.name.includes('vendor.')){
        if (isVendorLoggedIn()) {
            if (to.meta.requiresAuth && to.meta.loggedInCan) {
                return next();
            } else if (!to.meta.requiresAuth && !to.meta.loggedInCan) {
                return next();
            } else {
            // console.log(userPermissions,to.meta.permission);
                //return next({name : 'user.404'});
            }
            return;
        }
        //validating access for actors as unauthenticated
        if (to.meta.requiresAuth) {
            //alert('user');
            return next({ name:'vendor.auth.login'});
        }
    }
    return next();


});
