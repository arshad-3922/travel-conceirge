import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

// importing modules
import admin from './admin/index.js';
export default new Vuex.Store({
	modules : {
		admin
	}
});
