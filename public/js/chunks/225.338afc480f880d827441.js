(self.webpackChunk=self.webpackChunk||[]).push([[225],{225:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>v});var a=s(7757),i=s.n(a);function r(t,e,s,a,i,r,n){try{var c=t[r](n),l=c.value}catch(t){return void s(t)}c.done?e(l):Promise.resolve(l).then(a,i)}function n(t){return function(){var e=this,s=arguments;return new Promise((function(a,i){var n=t.apply(e,s);function c(t){r(n,a,i,c,l,"next",t)}function l(t){r(n,a,i,c,l,"throw",t)}c(void 0)}))}}function c(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?c(Object(s),!0).forEach((function(e){o(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function o(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const u={data:function(){return{base_url,services:{},images:{}}},created:function(){this.fetch()},methods:l(l({},(0,s(629).nv)("web",["getAll"])),{},{fetch:function(){var t=arguments,e=this;return n(i().mark((function s(){var a,r,n,c;return i().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:1,r={route:"api/web/services",mutation:"SET_SERVICES",variable:"data",data:{page:a,entries:10}},s.next=4,e.getAll(r);case 4:n=s.sent,c=n.data,e.services=c.data.category,e.images=c.data.images;case 8:case"end":return s.stop()}}),s)})))()}})};const v=(0,s(1900).Z)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("section",{staticClass:"inner-banner"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 position-rlative"},[s("img",{staticClass:"img-fluid w-100",attrs:{src:t.base_url+"/assets/web/images/inner-banner.png",alt:""}}),t._v(" "),s("h1",{staticClass:"inner-banner-heading"},[t._v("Our Treatments")])])])])]),t._v(" "),s("section",{staticClass:"position-relative my-lg-5 my-4"},[s("img",{staticClass:"experienced-right img-fluid",attrs:{src:t.base_url+"/assets/web/images/about-right.png",alt:""}}),t._v(" "),s("img",{staticClass:"experienced-left img-fluid",attrs:{src:t.base_url+"/assets/web/images/about-left.png",alt:""}}),t._v(" "),t._m(0)]),t._v(" "),s("section",{staticClass:"intersting treatment-page"},[s("div",{staticClass:"container-fluid"},[t._m(1),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-9 mx-auto mt-lg-5 mt-3"},[t.services?s("div",{staticClass:"row"},t._l(t.services,(function(e,a){return s("div",{key:a,staticClass:"col-lg-6 text-center mt-4"},[s("img",{staticClass:"team-img",attrs:{src:t.images[a],alt:""}}),t._v(" "),s("div",{staticClass:"interesting-div"},[s("h3",{staticClass:"interesting-heading"},[t._v(t._s(e.category_data.name))]),t._v(" "),s("router-link",{staticClass:"my-3 d-inline-block yellow-btn",attrs:{to:{name:"web.services.show",params:{id:e.id,name:e.category_data.name}}}},[t._v("More Info")])],1)])})),0):t._e()])])])])])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 text-center"},[s("h2",{staticClass:"main-heading-two-line-2"},[t._v("We Are Experienced")]),t._v(" "),s("h2",{staticClass:"main-heading"},[t._v("In Making You More Beautiful")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 text-center"},[s("h2",{staticClass:"main-heading-two-line-2"},[t._v("Our Treatments Services")])])])}],!1,null,null,null).exports}}]);