(self.webpackChunk=self.webpackChunk||[]).push([[7419],{7419:(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>o});var a=e(7757),r=e.n(a);function i(t,s,e,a,r,i,n){try{var o=t[i](n),l=o.value}catch(t){return void e(t)}o.done?s(l):Promise.resolve(l).then(a,r)}const n={data:function(){return{email:""}},methods:{openLoginPopup:function(){$(".auth-popup").modal("show"),bus.$emit("show-login","Login")},changeVerificationType:function(){},submit:function(t){var s,e=this;return(s=r().mark((function t(){var s,a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(s=new FormData).append("email",e.email),t.prev=2,t.next=5,axios.post("api/auth/send/email",s);case 5:(a=t.sent).data.status?(e.$snotify.success(a.data.message),e.$emit("change-forget-preview",{component:"Code",email:e.email})):e.$snotify.error(a.data.message),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),t.t0.response&&e.$refs.verifyObserver.setErrors(t.t0.response.data.errors),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,9]])})),function(){var t=this,e=arguments;return new Promise((function(a,r){var n=s.apply(t,e);function o(t){i(n,a,r,o,l,"next",t)}function l(t){i(n,a,r,o,l,"throw",t)}o(void 0)}))})()}}};const o=(0,e(1900).Z)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ValidationObserver",{ref:"verifyObserver",staticClass:"modal-content",attrs:{tag:"div"},scopedSlots:t._u([{key:"default",fn:function(s){s.handleSubmit;return[e("div",{staticClass:"app-content content"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"content-header row"}),t._v(" "),e("div",{staticClass:"content-body"},[e("section",{staticClass:"flexbox-container"},[e("div",{staticClass:"col-12 d-flex align-items-center justify-content-center"},[e("div",{staticClass:"col-md-4 col-10 box-shadow-2 p-0"},[e("div",{staticClass:"card border-grey border-lighten-3 px-2 py-2 m-0"},[e("div",{staticClass:"card-header border-0 pb-0"},[e("div",{staticClass:"card-title text-center"},[e("img",{attrs:{src:t.base_url+"/assets/admin/app-assets/images/logo/stack-logo-dark.png",alt:"branding logo"}})]),t._v(" "),e("h6",{staticClass:"card-subtitle line-on-side text-muted text-center font-small-3 pt-2"},[e("span",[t._v("We will send you a link to reset password.")])])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"card-body"},[e("form",{staticClass:"form-horizontal",attrs:{action:"login-simple.html",novalidate:""}},[e("fieldset",{staticClass:"form-group position-relative has-icon-left"},[e("input",{staticClass:"form-control form-control-lg",attrs:{type:"email",id:"user-email",placeholder:"Your Email Address",required:""}}),t._v(" "),e("div",{staticClass:"form-control-position"},[e("i",{staticClass:"ft-mail"})])]),t._v(" "),e("button",{staticClass:"btn btn-outline-primary btn-lg btn-block",attrs:{type:"submit"}},[e("i",{staticClass:"ft-unlock"}),t._v(" Recover Password")])])])]),t._v(" "),e("div",{staticClass:"card-footer border-0"},[e("p",{staticClass:"float-sm-left text-center"},[e("a",{staticClass:"card-link",attrs:{href:"login-simple.html"}},[t._v("Login")])]),t._v(" "),e("p",{staticClass:"float-sm-right text-center"},[t._v("New to Stack ? "),e("a",{staticClass:"card-link",attrs:{href:"register-simple.html"}},[t._v("Create Account")])])])])])])])])])])]}}])})}),[],!1,null,null,null).exports}}]);