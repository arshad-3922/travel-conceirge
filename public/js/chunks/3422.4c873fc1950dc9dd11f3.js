(self.webpackChunk=self.webpackChunk||[]).push([[3422],{3422:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>u});var n=a(7757),i=a.n(n),r=a(629);function o(t,e,a,n,i,r,o){try{var s=t[r](o),c=s.value}catch(t){return void a(t)}s.done?e(c):Promise.resolve(c).then(n,i)}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const d={computed:c({},(0,r.rn)("admin",["bell_notifications","notification_count"])),methods:c(c({},(0,r.nv)("admin",["store"])),{},{markRead:function(t){var e,a=this;return(e=i().mark((function e(){var n,r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={route:route("admin.notification.markRead",{notification:t}),method:"PUT",mutation:"MARK_NOTIFICATION_READ",variable:"notification"},e.next=3,a.store(n);case 3:r=e.sent,(o=r.data).status&&a.$snotify.success(o.msg);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(n,i){var r=e.apply(t,a);function s(t){o(r,n,i,s,c,"next",t)}function c(t){o(r,n,i,s,c,"throw",t)}s(void 0)}))})()}})};const u=(0,a(1900).Z)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"dropdown dropdown-notification nav-item two-bell-icons"},[a("a",{staticClass:"nav-link nav-link-label",attrs:{href:"#","data-toggle":"dropdown"}},[a("i",{staticClass:"fas fa-bell notifications-bell"}),t._v(" "),a("span",{staticClass:"badge badge-pill badge-default badge-danger badge-default badge-up"},[t._v(t._s(t.notification_count)+" New")])]),t._v(" "),a("ul",{staticClass:"dropdown-menu dropdown-menu-media dropdown-menu-right"},[a("li",{staticClass:"scrollable-container media-list ps-container ps-theme-dark ps-active-y",attrs:{"data-ps-id":"75e644f2-605d-3ecc-f100-72d86e4a64d8"}},[a("a",{attrs:{href:"javascript:void(0)"}},t._l(t.bell_notifications,(function(e){return a("div",{key:e.id,staticClass:"media border-0"},[t._m(0,!0),t._v(" "),a("div",{staticClass:"media-body"},[a("router-link",{attrs:{to:e.data.route}},[a("p",{staticClass:"notification-text font-small-3 text-muted"},[a("span",[t._v(t._s(e.data.title))]),a("br"),t._v(t._s(t.formatDate(e.created_at,"hh:mm A"))),a("small",{staticClass:"float-right"},[t._v(t._s(t.formatDate(e.created_at)))])])])],1)])})),0)]),t._v(" "),a("li",{staticClass:"dropdown-menu-footer"},[a("router-link",{staticClass:"dropdown-item text-muted text-center",attrs:{to:{name:"admin.notifications.index"}}},[t._v("View all")])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media-left align-self-center"},[e("i",{staticClass:"fas fa-bell notifications-bell"})])}],!1,null,null,null).exports}}]);