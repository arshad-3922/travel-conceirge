import Vue from 'vue';
window.Vue = Vue;
import App from '@core/App.vue';
import router from './routes/index.js';
import  VueSlickCarousel from 'vue-slick-carousel'
import VueFormWizard from 'vue-form-wizard';
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

require('./routes/guard.js');
require('@core/axios.js');

window.moment = require('moment');

const pagination = require('laravel-vue-pagination');
require('@core/mixins.js');
import store from '@/store/index.js';

// form Validation components
import { ValidationObserver, ValidationProvider, extend,localize } from 'vee-validate';
import vSelect from 'vue-select'
import Echarts from 'vue-echarts';
import 'echarts/lib/chart/bar';

import * as rules from 'vee-validate/dist/rules';
import en from 'vee-validate/dist/locale/en.json';
// importing snotify for alert notifications
import Snotify, { SnotifyPosition } from 'vue-snotify';
import flatPickr from 'vue-flatpickr-component';
import VueTimepicker from 'vue2-timepicker';
import ReadMore from 'vue-read-more';
import carousel from 'vue-owl-carousel';
import VueQuillEditor from 'vue-quill-editor';
import VueFileAgent from 'vue-file-agent';
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css';

const TableSearch = ()=> import('@core/components/TableSearch.vue');


const options = {
    toast: {
        position: SnotifyPosition.rightTop
    }
};
// installing plugins
Vue.use(Snotify, options);


Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});
// Install English and Arabic locales.
localize({
  en
});

axios.defaults.baseURL = window.baseUrl; 
var token = localStorage.getItem('access-token');
if(token != null){
window.axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
}


// global components
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('pagination', pagination);
Vue.component('table-search',TableSearch)
Vue.component('flatPickr',flatPickr);
Vue.component('VueTimepicker',VueTimepicker);
Vue.component('chart', Echarts);
Vue.component('v-select', vSelect)
Vue.component('VueSlickCarousel', VueSlickCarousel)

 Vue.use(ReadMore);
 Vue.use(carousel);
 Vue.use(VueQuillEditor, /* { default global options } */)



Vue.use(VueFormWizard);
Vue.use(VueSlickCarousel);
Vue.use(VueFileAgent);
Vue.use(vSelect);
Vue.prototype.$_ = _;
Vue.prototype.$user = token;
Vue.prototype.$moment = moment;
Vue.prototype.base_url = window.base_url;


new Vue({
	store,
	router,
	render : h => h(App),
}).$mount('#app');


