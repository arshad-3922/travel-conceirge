import web from './web/public';
import admin from './admin/public';
import adminAuthenticate from './admin/authenticate';
// building routes & injecting components
const routes = [
    web,
    admin,
    adminAuthenticate
];

export default routes;
