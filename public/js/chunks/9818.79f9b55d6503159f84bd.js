(self.webpackChunk=self.webpackChunk||[]).push([[9818],{9818:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>d});var a=s(7757),r=s.n(a),i=s(629);function n(t,e,s,a,r,i,n){try{var o=t[i](n),c=o.value}catch(t){return void s(t)}o.done?e(c):Promise.resolve(c).then(a,r)}function o(t){return function(){var e=this,s=arguments;return new Promise((function(a,r){var i=t.apply(e,s);function o(t){n(i,a,r,o,c,"next",t)}function c(t){n(i,a,r,o,c,"throw",t)}o(void 0)}))}}function c(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?c(Object(s),!0).forEach((function(e){u(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function u(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const p={data:function(){return{base_url:baseUrl}},computed:l({},(0,i.rn)("admin",["subscription"])),created:function(){var t=this;return o(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.fetch();case 1:case"end":return e.stop()}}),e)})))()},methods:l(l({},(0,i.nv)("admin",["getAll","store"])),{},{fetch:function(){var t=this;return o(r().mark((function e(){var s,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={route:"api/subscriptions/edit/".concat(t.$route.params.id),mutation:"SET_SUBSCRIPTION",variable:"data"},e.next=3,t.getAll(s);case 3:a=e.sent,a.data;case 5:case"end":return e.stop()}}),e)})))()},update:function(){var t=this;return o(r().mark((function e(){var s,a,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={route:"api/subscriptions/update",method:"POST",data:t.subscription},e.prev=1,e.next=4,t.store(s);case 4:a=e.sent,(i=a.data).data?(t.$snotify.success(i.message),t.$router.push({name:"admin.subscriptions.index"})):t.$snotify.error("something went wrong"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),e.t0.response&&t.$refs.adminObserver.setErrors(e.t0.response.data.errors);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()}})};const d=(0,s(1900).Z)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-content content dashboard"},[s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"content-body"},[s("section",{attrs:{id:"configuration"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card p-xl-4 p-2"},[s("div",{staticClass:"row mb-2"},[s("div",{staticClass:"col-xl-12"},[s("div",{staticClass:"d-flex align-items-center"},[s("img",{staticClass:"go_back_link mr-1",attrs:{src:t.base_url+"/assets/admin/images/go-back.png",alt:"goBack"}}),t._v(" "),s("h1",{staticClass:"fw-600 fc-black main-heading"},[t._v("\n                                                       Edit Subscription Packages\n                                                  ")])])])]),t._v(" "),s("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.handleSubmit;return[s("form",{ref:"PackageEditForm",on:{submit:function(e){return e.preventDefault(),a(t.update)}}},[s("div",{staticClass:"main-box px-md-5 primaryBorder primaryBorderRadius"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"mb-3"},[s("label",{staticClass:"primary_heading pl-md-2 mb-1",attrs:{for:"packageName*"}},[t._v("Package Name "),s("span",{staticClass:"req-color"},[t._v("*")])]),t._v(" "),s("ValidationProvider",{attrs:{name:"Package Name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("input",{directives:[{name:"model",rawName:"v-model",value:t.subscription.name,expression:"subscription.name"}],staticClass:"w-100 primary-input-filed",attrs:{type:"text"},domProps:{value:t.subscription.name},on:{input:function(e){e.target.composing||t.$set(t.subscription,"name",e.target.value)}}}),t._v(" "),s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1)]),t._v(" "),s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"mb-3"},[s("label",{staticClass:"primary_heading pl-md-2 mb-1",attrs:{for:"amount"}},[t._v("Amount"),s("span",{staticClass:"req-color"},[t._v("*")])]),t._v(" "),s("ValidationProvider",{attrs:{name:"Amount",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("input",{directives:[{name:"model",rawName:"v-model",value:t.subscription.amount,expression:"subscription.amount"}],staticClass:"w-100 primary-input-filed",attrs:{type:"number"},domProps:{value:t.subscription.amount},on:{input:function(e){e.target.composing||t.$set(t.subscription,"amount",e.target.value)}}}),t._v(" "),s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1)]),t._v(" "),s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"mb-3"},[s("label",{staticClass:"primary_heading pl-md-2 mb-1",attrs:{for:"amount"}},[t._v("Select "),s("span",{staticClass:"req-color"},[t._v("*")])]),t._v(" "),s("input",{staticClass:"w-100 primary-input-filed",attrs:{type:"text",placeholder:"Package Name"}})])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"mb-3 position-relative"},[s("label",{staticClass:"primary_heading pl-md-2 mb-1",attrs:{for:"amount"}},[t._v("Add Features "),s("span",{staticClass:"req-color"},[t._v("*")])]),t._v(" "),s("input",{staticClass:"w-100 primary-input-filed",attrs:{type:"text",placeholder:"Enter Amount"}}),t._v(" "),s("button",{staticClass:"no_btn"},[s("i",{staticClass:"fas fa-plus-circle"})])])]),t._v(" "),s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"mb-3"},[s("label",{staticClass:"primary_heading pl-md-2 mb-1",attrs:{for:"subscription"}},[t._v("Subscription Note (Optional)")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.subscription.description,expression:"subscription.description"}],staticClass:"d-block w-100 p-2  primary-input-filed",attrs:{placeholder:"Enter Subscription Note",name:"text",rows:"5"},domProps:{value:t.subscription.description},on:{input:function(e){e.target.composing||t.$set(t.subscription,"description",e.target.value)}}})])]),t._v(" "),s("button",{staticClass:"btn btn-purple sec-btn",attrs:{type:"submit"}},[t._v("ADD")])])])])]}}])})],1)])])])])])])}),[],!1,null,null,null).exports}}]);