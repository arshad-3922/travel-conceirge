(self.webpackChunk=self.webpackChunk||[]).push([[9397],{9397:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var s=a(7757),n=a.n(s);function r(t,e,a,s,n,r,i){try{var l=t[r](i),o=l.value}catch(t){return void a(t)}l.done?e(o):Promise.resolve(o).then(s,n)}const i={data:function(){return{email:""}},methods:{sendEmail:function(){var t,e=this;return(t=n().mark((function t(){var a,s;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=new FormData).append("email",e.email),t.next=4,axios.post("/api/auth/send/email",a);case 4:(s=t.sent).data.data?(localStorage.setItem("email",e.email),e.$router.push({name:"web.password.code"}),e.$snotify.success(s.data.message)):e.$snotify.error(s.data.message);case 6:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(s,n){var i=t.apply(e,a);function l(t){r(i,s,n,l,o,"next",t)}function o(t){r(i,s,n,l,o,"throw",t)}l(void 0)}))})()}}};const l=(0,a(1900).Z)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"login"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.handleSubmit;return[a("form",{ref:"forgotEmail",on:{submit:function(e){return e.preventDefault(),s(t.sendEmail)}}},[a("div",{staticClass:"form-div"},[a("h1",{staticClass:"login-heading"},[t._v("Password Recovery")]),t._v(" "),a("label",{staticClass:"login-lbl mt-lg-5 mt-3 mb-2",attrs:{for:""}},[t._v("Email Address*")]),t._v(" "),a("ValidationProvider",{attrs:{name:"Email Address",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"all-input w-100",attrs:{type:"email",placeholder:"Enter Email Address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)}),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"yellow-btn mt-lg-5 mt-3"},[t._v("Continue")]),t._v(" "),a("router-link",{staticClass:"register-link mt-lg-5 mt-3 d-block",attrs:{to:{name:"web.auth.login"}}},[t._v("Back To Log In")])],1)])]}}])})],1)])])])}),[],!1,null,null,null).exports}}]);