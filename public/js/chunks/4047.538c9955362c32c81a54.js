(self.webpackChunk=self.webpackChunk||[]).push([[4047],{4047:(s,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>i});var e=t(7757),r=t.n(e);function o(s,a,t,e,r,o,n){try{var i=s[o](n),l=i.value}catch(s){return void t(s)}i.done?a(l):Promise.resolve(l).then(e,r)}const n={data:function(){return{password:"",password_confirmation:"",passwordClass:"far fa-eye-slash",passwordEye:"password",passwordClasss:"far fa-eye-slash",passwordEyee:"password",base_url:baseUrl}},methods:{togglePasswordEye:function(s,a){this[s]="password"==this[s]?"text":"password",this[a]="password"==this[s]?"far fa-eye-slash":"far fa-eye"},togglePasswordEyee:function(s,a){this[s]="password"==this[s]?"text":"password",this[a]="password"==this[s]?"far fa-eye-slash":"far fa-eye"},onSubmit:function(s){var a,t=this;return(a=r().mark((function s(){var a,e;return r().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a=new FormData,t.buildFormData(a,t.$data),a.append("email",localStorage.getItem("email")),s.next=5,axios.post("api/auth/changePassword",a);case 5:e=s.sent,console.log(e.data),"Failed"!=e.data.status?(t.$snotify.success(e.data.message),t.$router.push({name:"admin.auth.login"})):t.$snotify.error(e.data.message);case 8:case"end":return s.stop()}}),s)})),function(){var s=this,t=arguments;return new Promise((function(e,r){var n=a.apply(s,t);function i(s){o(n,e,r,i,l,"next",s)}function l(s){o(n,e,r,i,l,"throw",s)}i(void 0)}))})()}}};const i=(0,t(1900).Z)(n,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",{staticClass:"loginMain"},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-lg-11"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-5"},[t("div",{staticClass:"loginCard px-lg-4 px-2 py-5 my-5"},[s._m(0),s._v(" "),t("ValidationObserver",{scopedSlots:s._u([{key:"default",fn:function(a){var e=a.handleSubmit;return[t("form",{on:{submit:function(a){return a.preventDefault(),e(s.onSubmit)}}},[t("div",{staticClass:"form-group position-relative mt-3"},[t("label",{attrs:{for:""}},[s._v("New Password"),t("span",{staticClass:"fc-orange"},[s._v("*")])]),s._v(" "),t("div",{staticClass:"position-relative"},[t("ValidationProvider",{attrs:{tag:"div",name:"New Password",rules:"required"},scopedSlots:s._u([{key:"default",fn:function(a){var e=a.errors;return["checkbox"===s.passwordEye?t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"form-control enter-input",attrs:{placeholder:"Enter New Password",type:"checkbox"},domProps:{checked:Array.isArray(s.password)?s._i(s.password,null)>-1:s.password},on:{change:function(a){var t=s.password,e=a.target,r=!!e.checked;if(Array.isArray(t)){var o=s._i(t,null);e.checked?o<0&&(s.password=t.concat([null])):o>-1&&(s.password=t.slice(0,o).concat(t.slice(o+1)))}else s.password=r}}}):"radio"===s.passwordEye?t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"form-control enter-input",attrs:{placeholder:"Enter New Password",type:"radio"},domProps:{checked:s._q(s.password,null)},on:{change:function(a){s.password=null}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"form-control enter-input",attrs:{placeholder:"Enter New Password",type:s.passwordEye},domProps:{value:s.password},on:{input:function(a){a.target.composing||(s.password=a.target.value)}}}),s._v(" "),t("button",{staticClass:"modal-eye-btns  position-absolute",attrs:{type:"button"}},[t("i",{staticClass:"enter-icon-1 right-icon",class:s.passwordClass,attrs:{"aria-hidden":"true"},on:{click:function(a){return s.togglePasswordEye("passwordEye","passwordClass")}}})]),s._v(" "),t("span",{staticClass:"text-danger"},[s._v(s._s(e[0]))])]}}],null,!0)})],1)]),s._v(" "),t("div",{staticClass:"form-group position-relative"},[t("label",{attrs:{for:""}},[s._v("Confirm Password"),t("span",{staticClass:"fc-orange"},[s._v("*")])]),s._v(" "),t("div",{staticClass:"position-relative"},[t("ValidationProvider",{attrs:{tag:"div",name:"New Password",rules:"required"},scopedSlots:s._u([{key:"default",fn:function(a){var e=a.errors;return["checkbox"===s.passwordEyee?t("input",{directives:[{name:"model",rawName:"v-model",value:s.password_confirmation,expression:"password_confirmation"}],staticClass:"form-control enter-input",attrs:{placeholder:"Enter New Password",type:"checkbox"},domProps:{checked:Array.isArray(s.password_confirmation)?s._i(s.password_confirmation,null)>-1:s.password_confirmation},on:{change:function(a){var t=s.password_confirmation,e=a.target,r=!!e.checked;if(Array.isArray(t)){var o=s._i(t,null);e.checked?o<0&&(s.password_confirmation=t.concat([null])):o>-1&&(s.password_confirmation=t.slice(0,o).concat(t.slice(o+1)))}else s.password_confirmation=r}}}):"radio"===s.passwordEyee?t("input",{directives:[{name:"model",rawName:"v-model",value:s.password_confirmation,expression:"password_confirmation"}],staticClass:"form-control enter-input",attrs:{placeholder:"Enter New Password",type:"radio"},domProps:{checked:s._q(s.password_confirmation,null)},on:{change:function(a){s.password_confirmation=null}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:s.password_confirmation,expression:"password_confirmation"}],staticClass:"form-control enter-input",attrs:{placeholder:"Enter New Password",type:s.passwordEyee},domProps:{value:s.password_confirmation},on:{input:function(a){a.target.composing||(s.password_confirmation=a.target.value)}}}),s._v(" "),t("button",{staticClass:"modal-eye-btns  position-absolute",attrs:{type:"button"}},[t("i",{staticClass:"enter-icon-1 right-icon",class:s.passwordClasss,attrs:{"aria-hidden":"true"},on:{click:function(a){return s.togglePasswordEyee("passwordEyee","passwordClasss")}}})]),s._v(" "),t("span",{staticClass:"text-danger"},[s._v(s._s(e[0]))])]}}],null,!0)})],1)]),s._v(" "),t("div",{staticClass:"text-center mt-3 mb-3"},[t("button",{staticClass:"btn btn-primary btn-large",attrs:{type:"submit"}},[s._v("\n                                        update\n                                    ")])])])]}}])})],1)])])])])])])}),[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-lg-12 text-center mt-2"},[t("h2",[s._v("Forgot Password")])]),s._v(" "),t("div",{staticClass:"col-lg-8 text-center"},[t("p",[s._v("Kindly enter the new password")])])])}],!1,null,null,null).exports}}]);