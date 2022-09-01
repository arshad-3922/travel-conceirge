window._ = require('lodash');
const url = require('url');
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// window.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf_token"]').getAttribute('content');
window.axios.defaults.baseURL = window.base_url;

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    document.body.classList.add('loading-indicator');

    return config;
}, function (error) {
    document.body.classList.remove('loading-indicator');
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    setTimeout(function(){

    document.body.classList.remove('loading-indicator');
    },1000);
    return response;
}, function (error) {

     document.body.classList.remove('loading-indicator');
    // var error = Promise.reject(error.response.data.message);
     var error1 = JSON.parse(JSON.stringify(error.response.data));
     // console.log(error1);

    // this.$snotify.error(error1);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error.response;
});
