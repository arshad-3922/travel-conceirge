(self.webpackChunk=self.webpackChunk||[]).push([[8180,3455],{2073:(s,e,t)=>{"use strict";t.d(e,{Z:()=>o});var a=t(3645),r=t.n(a)()((function(s){return s[1]}));r.push([s.id,"li.footer-a-margin p[data-v-06183a26]{color:#fff!important}",""]);const o=r},3455:(s,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>i});var a=t(7757),r=t.n(a);function o(s,e,t,a,r,o,n){try{var i=s[o](n),l=i.value}catch(s){return void t(s)}i.done?e(l):Promise.resolve(l).then(a,r)}const n={data:function(){return{passwordClass:"far fa-eye-slash",passwordEye:"password",response:{},form:{email:"",password:"",role:"user"},base_url,checkisLogin:""}},created:function(){this.checkisLogin=localStorage.getItem("isLogin"),0==this.checkisLogin&&this.$snotify.success(localStorage.getItem("message"))},methods:{togglePasswordEye:function(s,e){this[s]="password"==this[s]?"text":"password",this[e]="password"==this[s]?"far fa-eye-slash":"far fa-eye"},login:function(s){var e,t=this;return(e=r().mark((function s(){var e,a,o,n;return r().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return e=new FormData,t.buildFormData(e,t.form),s.prev=2,s.next=5,axios.post("api/auth/login",e);case 5:(a=s.sent).data.data?(o=a.data.data,t.$snotify.success(a.data.message),localStorage.setItem("isLoggedIn","1"),localStorage.setItem("userType","web"),localStorage.setItem("access-token",o.token),localStorage.setItem("name",o.name),localStorage.setItem("id",o.id),localStorage.setItem("image",o.image),setTimeout((function(){window.location.reload()}),500),0==localStorage.getItem("isLogin")?(n=localStorage.getItem("service_id"),t.$router.push({name:"web.booking.bookappointment",params:{id:n}})):t.$router.push({name:"web.account.index"})):t.$snotify.error(a.data.message),t.response={},s.next=14;break;case 10:s.prev=10,s.t0=s.catch(2),s.t0.response&&(t.response=s.t0.response.data),console.log(s.t0);case 14:case"end":return s.stop()}}),s,null,[[2,10]])})),function(){var s=this,t=arguments;return new Promise((function(a,r){var n=e.apply(s,t);function i(s){o(n,a,r,i,l,"next",s)}function l(s){o(n,a,r,i,l,"throw",s)}i(void 0)}))})()}}};const i=(0,t(1900).Z)(n,(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("section",{staticClass:"login"},[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-6"},[t("ValidationObserver",{scopedSlots:s._u([{key:"default",fn:function(e){var a=e.handleSubmit;return[t("form",{on:{submit:function(e){return e.preventDefault(),a(s.login)}}},[t("div",{staticClass:"form-div"},[t("h1",{staticClass:"login-heading"},[s._v("User Login")]),s._v(" "),t("p",{staticClass:"login-p mt-2"},[s._v("If You Have An Account, Sign In With Your Email Address.")]),s._v(" "),t("label",{staticClass:"login-lbl mt-lg-5 mt-3 mb-2",attrs:{for:""}},[s._v("Email Address*")]),s._v(" "),t("ValidationProvider",{attrs:{tag:"div",name:"Email",rules:"required"},scopedSlots:s._u([{key:"default",fn:function(e){var a=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:s.form.email,expression:"form.email"}],staticClass:"all-input w-100",attrs:{type:"email",name:"email",placeholder:"Enter Email Address"},domProps:{value:s.form.email},on:{input:function(e){e.target.composing||s.$set(s.form,"email",e.target.value)}}}),s._v(" "),t("span",{staticClass:"text-danger"},[s._v(s._s(a[0]))])]}}],null,!0)}),s._v(" "),t("label",{staticClass:"login-lbl mt-lg-5 mt-3 mb-2",attrs:{for:""}},[s._v("Password*")]),s._v(" "),t("div",{staticClass:"position-relative"},[t("ValidationProvider",{attrs:{tag:"div",name:"Password",rules:"required"},scopedSlots:s._u([{key:"default",fn:function(e){var a=e.errors;return["checkbox"===s.passwordEye?t("input",{directives:[{name:"model",rawName:"v-model",value:s.form.password,expression:"form.password"}],staticClass:"all-input w-100 enter-input pr-5",attrs:{name:"password",placeholder:"Enter Password",type:"checkbox"},domProps:{checked:Array.isArray(s.form.password)?s._i(s.form.password,null)>-1:s.form.password},on:{change:function(e){var t=s.form.password,a=e.target,r=!!a.checked;if(Array.isArray(t)){var o=s._i(t,null);a.checked?o<0&&s.$set(s.form,"password",t.concat([null])):o>-1&&s.$set(s.form,"password",t.slice(0,o).concat(t.slice(o+1)))}else s.$set(s.form,"password",r)}}}):"radio"===s.passwordEye?t("input",{directives:[{name:"model",rawName:"v-model",value:s.form.password,expression:"form.password"}],staticClass:"all-input w-100 enter-input pr-5",attrs:{name:"password",placeholder:"Enter Password",type:"radio"},domProps:{checked:s._q(s.form.password,null)},on:{change:function(e){return s.$set(s.form,"password",null)}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:s.form.password,expression:"form.password"}],staticClass:"all-input w-100 enter-input pr-5",attrs:{name:"password",placeholder:"Enter Password",type:s.passwordEye},domProps:{value:s.form.password},on:{input:function(e){e.target.composing||s.$set(s.form,"password",e.target.value)}}}),s._v(" "),t("i",{staticClass:"enter-icon right-icon",class:s.passwordClass,attrs:{"aria-hidden":"true"},on:{click:function(e){return s.togglePasswordEye("passwordEye","passwordClass")}}}),s._v(" "),t("span",{staticClass:"text-danger"},[s._v(s._s(a[0]))])]}}],null,!0)})],1),s._v(" "),t("div",{staticClass:"d-sm-flex justify-content-between mt-2"},[t("p",[t("input",{attrs:{type:"checkbox",id:"c1",name:"cb"}}),s._v(" "),t("label",{staticClass:"login-links",attrs:{for:"c1"}},[s._v("Remember Me")])]),s._v(" "),t("router-link",{staticClass:"login-links mt-sm-0 mt-2 d-inline-block",attrs:{to:{name:"web.password.email"}}},[t("u",[s._v("Forgot Password?")])])],1),s._v(" "),t("button",{staticClass:"yellow-btn mt-lg-5 mt-3",attrs:{type:"submit"}},[s._v("Login")]),s._v(" "),t("p",{staticClass:"register-link mt-lg-5 mt-3"},[s._v("New Here? "),t("span",[t("router-link",{attrs:{to:{name:"web.auth.register"}}},[s._v("Register Your Account")])],1)])],1)])]}}])})],1)])])])}),[],!1,null,null,null).exports},8180:(s,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>m});var a=t(7757),r=t.n(a);function o(s,e,t,a,r,o,n){try{var i=s[o](n),l=i.value}catch(s){return void t(s)}i.done?e(l):Promise.resolve(l).then(a,r)}function n(s){return function(){var e=this,t=arguments;return new Promise((function(a,r){var n=s.apply(e,t);function i(s){o(n,a,r,i,l,"next",s)}function l(s){o(n,a,r,i,l,"throw",s)}i(void 0)}))}}const i={data:function(){return{base_url,currentDate:new Date,email:"",code:"",password:"",password_confirmation:"",passwordClass:"fa-eye",passwordEye:"password",passwordClasss:"fa-eye",passwordEyee:"password"}},components:{Login:t(3455).default},methods:{togglePasswordEye:function(s,e){this[s]="password"==this[s]?"text":"password",this[e]="password"==this[s]?"fa-eye":"fa-eye-slash"},togglePasswordEyee:function(s,e){this[s]="password"==this[s]?"text":"password",this[e]="password"==this[s]?"fa-eye":"fa-eye-slash"},submit:function(s){var e=this;return n(r().mark((function s(){var t,a;return r().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return(t=new FormData).append("email",e.email),s.prev=2,s.next=5,axios.post("api/auth/send/email",t);case 5:(a=s.sent).data.status?($(".forgotPassword").hide(),$(".verifyCode").modal({modal:!0}),e.$snotify.success(a.data.message)):e.$snotify.error(a.data.message),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(2),e.$snotify.error(response.data.message);case 12:case"end":return s.stop()}}),s,null,[[2,9]])})))()},verifyCode:function(s){var e=this;return n(r().mark((function s(){var t,a;return r().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return(t=new FormData(e.$refs.verifyCode)).append("email",e.email),t.append("code",e.code),s.prev=3,s.next=6,axios.post("api/auth/verify/code",t);case 6:(a=s.sent).data.status?(e.$snotify.success(a.data.message),$(".verifyCode").hide(),$(".newPassword").modal({modal:!0})):e.$snotify.error(a.data.message,"Invalid Code"),s.next=13;break;case 10:s.prev=10,s.t0=s.catch(3),s.t0.response&&e.$snotify.error(response.data.message,"Invalid Code");case 13:case"end":return s.stop()}}),s,null,[[3,10]])})))()},newPassword:function(s){var e=this;return n(r().mark((function s(){var t,a;return r().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return(t=new FormData).append("password",e.password),t.append("password_confirmation",e.password_confirmation),t.append("email",e.email),s.next=6,axios.post("api/auth/new-password",t);case 6:(a=s.sent).data.status?(e.$snotify.success(a.data.msg,"Updated!"),$(".newPassword").hide(),$("body").removeClass("modal-open"),$(".modal-backdrop").remove()):e.$snotify.error(a.data.msg,"Oops!");case 8:case"end":return s.stop()}}),s)})))()}}};var l=t(3379),c=t.n(l),d=t(2073),u={insert:"head",singleton:!1};c()(d.Z,u);d.Z.locals;const m=(0,t(1900).Z)(i,(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("footer",{},[t("div",{staticClass:"footer-top"},[t("div",{staticClass:"container"},[t("div",{staticClass:"row mt-2"},[t("div",{staticClass:"col-lg-3 mb-lg-0 mb-3"},[t("router-link",{attrs:{to:{name:"web.home.index"}}},[t("img",{staticClass:"img-fluid",attrs:{src:s.base_url+"/assets/web/images/footer-logo.png",alt:""}})])],1),s._v(" "),t("div",{staticClass:"col-lg-3 mb-lg-0 mb-3"},[t("h2",{staticClass:"f-26 white f-sp mb-2"},[s._v("Useful Links")]),s._v(" "),t("ul",[t("li",[t("router-link",{staticClass:"footer-a-margin",attrs:{to:{name:"web.home.index"}}},[s._v("Home")])],1),s._v(" "),t("li",[t("router-link",{staticClass:"footer-a-margin",attrs:{to:{name:"web.services.index"}}},[s._v("Our Treatments\n                            ")])],1),s._v(" "),t("li",[t("router-link",{attrs:{to:{name:"web.technology.index"}}},[s._v("Technology")])],1)])]),s._v(" "),t("div",{staticClass:"col-lg-3 mb-lg-0 mb-3"},[t("h2",{staticClass:"f-26 white f-sp mb-2"},[s._v("Quick Links")]),s._v(" "),t("ul",[t("li",[t("router-link",{staticClass:"footer-a-margin",attrs:{to:{name:"web.home.pricing"}}},[s._v("Pricing")])],1),s._v(" "),t("li",[t("router-link",{attrs:{to:{name:"web.home.aboutus"}}},[s._v("About Us")])],1),s._v(" "),t("li",[t("router-link",{attrs:{to:{name:"web.home.contact"}}},[s._v("Contact Us")])],1)])]),s._v(" "),t("div",{staticClass:"col-lg-3"},[t("h2",{staticClass:"f-26 white f-sp mb-2"},[s._v("Quick Contact")]),s._v(" "),t("ul",{staticClass:"last-menu"},[s._m(0),s._v(" "),t("li",[t("span",{staticClass:"phone-li"},[t("a",{staticClass:"white",attrs:{href:"tel:01612808799"}},[t("img",{staticClass:"mr-3",attrs:{src:s.base_url+"/assets/web/images/phone-number.png"}}),s._v(" 0161 2808799")])])])])])])])]),s._v(" "),s._m(1)])}),[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("li",{staticClass:"footer-a-margin"},[t("p",{staticClass:"fotter-33"},[s._v("If You Have Question Please Use Our 24 - Hours Helpline Service")]),s._v(" "),t("p",{staticClass:"fotter-33"},[t("strong",[s._v("Address : ")]),s._v("344 Wellington Road North, Stockport, SK45DA")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"footer-bottom"},[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 text-center"},[t("p",[s._v("© 2022 Apto Beauty..All Rights Reserved.")])])])])])}],!1,null,"06183a26",null).exports}}]);