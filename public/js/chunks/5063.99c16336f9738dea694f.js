(self.webpackChunk=self.webpackChunk||[]).push([[5063],{5063:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var a=s(7757),r=s.n(a);function n(t,e,s,a,r,n,i){try{var o=t[n](i),c=o.value}catch(t){return void s(t)}o.done?e(c):Promise.resolve(c).then(a,r)}function i(t){return function(){var e=this,s=arguments;return new Promise((function(a,r){var i=t.apply(e,s);function o(t){n(i,a,r,o,c,"next",t)}function c(t){n(i,a,r,o,c,"throw",t)}o(void 0)}))}}const o={data:function(){return{isSending:!1,code:"",base_url:baseUrl}},methods:{onResend:function(t){var e=this;return i(r().mark((function t(){var s,a,n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((s=new FormData).append("email",localStorage.getItem("email")),e.isSending){t.next=10;break}return e.isSending=!0,t.next=6,axios.post(route("admin.password.verify"),s);case 6:(a=t.sent).data.status?(n=e,e.isSending=!1,setTimeout((function(){n.$snotify.success(a.data.msg)}),1e3)):e.$snotify.error(a.data.msg),t.next=11;break;case 10:e.$snotify.error("already sending","Please Wait!");case 11:case"end":return t.stop()}}),t)})))()},onSubmit:function(t){var e=this;return i(r().mark((function t(){var s,a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return localStorage.setItem("code",e.code),(s=new FormData(e.$refs.validateCode)).append("email",localStorage.getItem("email")),s.append("code",e.code),t.prev=4,t.next=7,axios.post("api/auth/verify/code",s);case 7:(a=t.sent).data.status?(e.$snotify.success(a.data.message),e.$router.push({name:"admin.passwordRecovery.changePassword"})):e.$snotify.error(a.data.message,"Invalid Code"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(4),t.t0.response&&e.$refs.codeObserver.setErrors(t.t0.response.data.errors),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[4,11]])})))()}}};const c=(0,s(1900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"login-bg position-relative"},[s("img",{staticClass:"d-lg-block d-none login-top-right img-fluid",attrs:{src:t.base_url+"/assets/admin/images/top-right.png",alt:""}}),t._v(" "),s("img",{staticClass:"d-lg-block d-none login-bottom-right img-fluid",attrs:{src:t.base_url+"/assets/admin/imagesimages/bottom-right.png",alt:""}}),t._v(" "),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 px-0"},[s("img",{staticClass:"img-fluid h-100 d-lg-block d-none",attrs:{src:t.base_url+"/assets/admin/images/left-col-image.png",alt:""}})]),t._v(" "),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"login-form"},[s("div",{staticClass:"text-lg-left text-center mb-3"},[s("img",{staticClass:"img-fluid",attrs:{src:t.base_url+"/assets/admin/images/logo-2.png",alt:""}}),t._v(" "),s("h1",{staticClass:"shark-color my-3"},[t._v("Password Recovery")])]),t._v(" "),s("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.handleSubmit;return[s("form",{on:{submit:function(e){return e.preventDefault(),a(t.onSubmit)}}},[s("div",{staticClass:"form-group position-relative mb-0"},[s("label",{attrs:{for:""}},[t._v("Verification Code "),s("span",{staticClass:"red-sapn"},[t._v("*")])]),t._v(" "),s("ValidationProvider",{attrs:{tag:"div",name:"Verification Code",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-control w-90",attrs:{type:"number",placeholder:"Enter Verification Code"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),t._v(" "),s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1),t._v(" "),s("div",{staticClass:"text-right w-90"},[s("a",{staticClass:"forgot-pwdd d-inline-block mt-2",attrs:{href:"javascript:void(0)"},on:{click:t.onResend}},[t._v("Resend Code")])]),t._v(" "),s("div",{staticClass:"text-center pb-md-0 pb-2"},[s("button",{staticClass:"aqua-btn my-2 w-100",attrs:{type:"submit"}},[t._v("Continue")])]),t._v(" "),s("div",{staticClass:"form-group form-check text-center go-back pl-0"},[s("router-link",{staticClass:"aqua f-20",attrs:{to:{name:"admin.auth.login"}}},[s("i",{staticClass:"fas fa-arrow-left mr-2"}),t._v("Back To Website")])],1)])]}}])})],1)])])])])}),[],!1,null,null,null).exports}}]);