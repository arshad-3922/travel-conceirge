(self.webpackChunk=self.webpackChunk||[]).push([[1664],{1664:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>f});var a=n(7757),i=n.n(a),r=n(629);function s(t,e,n,a,i,r,s){try{var o=t[r](s),c=o.value}catch(t){return void n(t)}o.done?e(c):Promise.resolve(c).then(a,i)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var r=t.apply(e,n);function o(t){s(r,a,i,o,c,"next",t)}function c(t){s(r,a,i,o,c,"throw",t)}o(void 0)}))}}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const d={data:function(){return{base_url}},computed:l({},(0,r.rn)("admin",["notifications","search","bell_notifications"])),components:{},created:function(){var t=this.$route.query.page;this.fetch(t)},watch:{search:function(t,e){this.fetch()},bell_notifications:function(t,e){this.fetch()}},methods:l(l({},(0,r.nv)("admin",["getAll"])),{},{fetch:function(){var t=arguments,e=this;return o(i().mark((function n(){var a,r,s,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:1,r=e.$route.params.status,s={route:route("admin.notification.index"),mutation:"SET_NOTIFICATIONS",variable:"notifications",data:{page:a,status:r,search:e.search}},n.next=5,e.getAll(s);case 5:o=n.sent,o.data,1!=a?e.addRouteQuery({page:a}):e.addRouteQuery({});case 8:case"end":return n.stop()}}),n)})))()}})};const f=(0,n(1900).Z)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-content content dashboard"},[n("div",{staticClass:"content-wrapper content-wrapper-2"},[n("div",{staticClass:"content-body"},[n("section",{attrs:{id:"configuration"}},[n("div",{staticClass:"row white-div px-3"},[n("div",{staticClass:"col-12"},[t._m(0),t._v(" "),n("div",{staticClass:"row mt-2"},[t._l(t.notifications.data,(function(e){return n("div",{key:e.id,staticClass:"col-12"},[n("div",{staticClass:"noti-div px-lg-3 px-1"},[n("div",{staticClass:"d-lg-flex justify-content-between align-items-center"},[n("div",{staticClass:"d-lg-flex align-items-start"},[n("img",{staticClass:"mr-3 img-fluid mb-lg-0 mb-2",attrs:{src:t.base_url+"/assets/admin/images/noti-icon.png",alt:""}}),t._v(" "),n("div",[n("h3",{staticClass:"noitfication-p"},[t._v(t._s(e.data.title))]),t._v(" "),n("div",{staticClass:"d-lg-flex justify-content-between mt-2"},[n("div",[n("h6",{staticClass:"noti-small noti-date"},[t._v(t._s(t.formatDate(e.created_at)))])])])])]),t._v(" "),n("router-link",{attrs:{to:e.data.route}},[t._v("View")])],1)])])})),t._v(" "),n("no-record",{staticClass:"noti-inner-cards mb-3",attrs:{tag:"div",data:t.notifications.data}},[t._v("No Data Available")]),t._v(" "),n("pagination",{attrs:{data:t.notifications},on:{"pagination-change-page":t.fetch}})],2)])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6"},[n("h1",{staticClass:"ml-1 main-heading"},[t._v("Notifications")])])])}],!1,null,null,null).exports}}]);