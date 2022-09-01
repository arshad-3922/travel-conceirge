(self.webpackChunk=self.webpackChunk||[]).push([[4857],{4857:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>v});var s=r(7757),a=r.n(s),n=r(629);function i(t,e,r,s,a,n,i){try{var o=t[n](i),c=o.value}catch(t){return void r(t)}o.done?e(c):Promise.resolve(c).then(s,a)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(s,a){var n=t.apply(e,r);function o(t){i(n,s,a,o,c,"next",t)}function c(t){i(n,s,a,o,c,"throw",t)}o(void 0)}))}}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const f={data:function(){return{date:"",from:"",to:"",role:2,status:1,isActive:!1,dateFilterCounter:0}},computed:l({},(0,n.rn)("admin",["users","search","entries"])),components:{UserTable:function(){return r.e(646).then(r.bind(r,646))}},created:function(){var t=this.$route.query.page;this.fetch(t)},watch:{search:function(t,e){this.fetch()},entries:function(t,e){this.fetch()}},methods:l(l({},(0,n.nv)("admin",["getAll"])),{},{taskDateFilter:function(){""!==this.from&&""!==this.to&&this.dateFilterCounter%2==0||(this.from="",this.to=""),this.fetch(),this.dateFilterCounter++},getInactiveUsers:function(t){this.status=t,this.isActive=!this.isActive,this.fetch()},fetch:function(){var t=arguments,e=this;return o(a().mark((function r(){var s,n,i;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=t.length>0&&void 0!==t[0]?t[0]:1,n={route:"api/auth/users",mutation:"SET_USERS",variable:"data",data:{page:s,status:e.status,from:e.from,to:e.to,search:e.search,entries:e.entries,role:e.role}},r.next=4,e.getAll(n);case 4:i=r.sent,i.data;case 6:case"end":return r.stop()}}),r)})))()}})};const v=(0,r(1900).Z)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-content content dashboard"},[r("div",{staticClass:"content-wrapper"},[r("div",{staticClass:"content-body"},[r("section",{attrs:{id:"configuration"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card p-md-4 p-1"},[t._m(0),t._v(" "),r("div",{staticClass:"row mt-3 align-items-center"},[r("div",{staticClass:"col-lg-6 my-1"},[r("div",{staticClass:"d-flex"},[r("div",{staticClass:"my-1"},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"ml-2",attrs:{for:""}},[t._v("To")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.from,expression:"from"}],staticClass:"form-control inputCstm bg-transparent",attrs:{type:"date"},domProps:{value:t.from},on:{input:function(e){e.target.composing||(t.from=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"ml-lg-1 my-1"},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"ml-2",attrs:{for:""}},[t._v("From")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.to,expression:"to"}],staticClass:"form-control inputCstm bg-transparent",attrs:{type:"date"},domProps:{value:t.to},on:{input:function(e){e.target.composing||(t.to=e.target.value)}}})])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("table-search"),t._v(" "),r("user-table")],1),t._v(" "),r("div",{staticClass:"row mt-5"},[[r("pagination",{staticClass:"float-right",attrs:{data:t.users},on:{"pagination-change-page":t.fetch}})]],2)])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-12"},[r("h1",{staticClass:"fw-600"},[t._v("User Management")])])])}],!1,null,null,null).exports}}]);