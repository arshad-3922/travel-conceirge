(self.webpackChunk=self.webpackChunk||[]).push([[774],{774:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>f});var a=r(7757),s=r.n(a),n=r(629);function i(t,e,r,a,s,n,i){try{var o=t[n](i),c=o.value}catch(t){return void r(t)}o.done?e(c):Promise.resolve(c).then(a,s)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(a,s){var n=t.apply(e,r);function o(t){i(n,a,s,o,c,"next",t)}function c(t){i(n,a,s,o,c,"throw",t)}o(void 0)}))}}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const d={computed:u({},(0,n.rn)("admin",["user"])),data:function(){return{date:"",errors:[]}},created:function(){this.fetch()},watch:{search:function(t,e){this.fetch()},entries:function(t,e){this.fetch()}},methods:u(u({},(0,n.nv)("admin",["getAll"])),{},{fetch:function(){var t=this;return o(s().mark((function e(){var r,a,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route.params,r.type,r.status,a={route:"api/auth/user/view/".concat(t.$route.params.id),mutation:"SET_USER",variable:"data"},e.next=4,t.getAll(a);case 4:n=e.sent,n.data;case 6:case"end":return e.stop()}}),e)})))()},update:function(){var t=this;return o(s().mark((function e(){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData(t.$refs.UserEditForm)).append("image",t.$refs.image.files[0]),e.next=4,axios.post("api/auth/user/update/".concat(t.$route.params.id),r);case 4:(a=e.sent).data.data?(t.$snotify.success(a.data.message),t.$router.push({name:"admin.users.index"})):(t.errors=a.data.errors,t.$snotify.error(a.data.message[0]));case 6:case"end":return e.stop()}}),e)})))()}})};const f=(0,r(1900).Z)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-content content"},[r("div",{staticClass:"content-wrapper"},[t._m(0),t._v(" "),r("div",{staticClass:"content-body"},[r("section",{attrs:{id:"basic-form-layouts"}},[r("div",{staticClass:"row match-height"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-content collapse show"},[r("div",{staticClass:"card-body"},[r("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.handleSubmit;return[r("form",{ref:"UserEditForm",on:{submit:function(e){return e.preventDefault(),a(t.update)}}},[r("div",{staticClass:"form-body"},[r("h4",{staticClass:"form-section"},[t._v("Edit User Details")]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"userinput5"}},[t._v("Profile")]),t._v(" "),r("div",{staticClass:"media-left pl-2 pt-2"},[r("a",{staticClass:"profile-image",attrs:{href:"javascript:viod(0)"}},[r("img",{staticClass:"rounded-circle img-border height-100",attrs:{src:t.user.image,alt:"Card image"}})]),t._v(" "),r("input",{ref:"image",staticClass:"form-control border-primary",attrs:{type:"file"}})])]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"userinput5"}},[t._v("Full Name")]),t._v(" "),r("ValidationProvider",{attrs:{name:"First Name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control border-primary",attrs:{name:"first_name",type:"text",placeholder:"First Name",id:"userinput5"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),t._v(" "),r("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)}),t._v(" "),t.errors.first_name?r("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first_name[0]))]):t._e()],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"userinput5"}},[t._v("Email Address")]),t._v(" "),r("p",[t._v(t._s(t.user.email))])]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"userinput5"}},[t._v("Contact No")]),t._v(" "),r("p",[t._v(t._s(t.user.phone_number))])]),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[r("i",{staticClass:"fa fa-check-square-o"}),t._v(" update\n                        ")])])])]}}])})],1)])])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-header row"},[r("div",{staticClass:"content-header-left col-md-12 col-12 mb-2"},[r("h3",{staticClass:"content-header-title mb-0"},[t._v("Edit User")])])])}],!1,null,null,null).exports}}]);