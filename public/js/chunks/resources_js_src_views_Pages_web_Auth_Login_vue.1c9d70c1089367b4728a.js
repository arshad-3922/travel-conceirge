(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_Pages_web_Auth_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/web/Auth/Login.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/web/Auth/Login.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      passwordClass: 'far fa-eye-slash',
      passwordEye: 'password',
      response: {},
      form: {
        email: '',
        password: '',
        role: 'user'
      },
      base_url: base_url,
      checkisLogin: ''
    };
  },
  created: function created() {
    this.checkisLogin = localStorage.getItem('isLogin');

    if (this.checkisLogin == 0) {
      this.$snotify.success(localStorage.getItem('message'));
    }
  },
  methods: {
    togglePasswordEye: function togglePasswordEye(passwordVar, classVar) {
      this[passwordVar] = this[passwordVar] == 'password' ? "text" : "password";
      this[classVar] = this[passwordVar] == 'password' ? "far fa-eye-slash" : "far fa-eye";
    },
    login: function login(e) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var fd, response, data, self, serviceId;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fd = new FormData();

                _this.buildFormData(fd, _this.form);

                _context.prev = 2;
                _context.next = 5;
                return axios.post('api/auth/login', fd);

              case 5:
                response = _context.sent;

                if (response.data.data) {
                  data = response.data.data;

                  _this.$snotify.success(response.data.message);

                  self = _this;
                  localStorage.setItem('isLoggedIn', '1');
                  localStorage.setItem('userType', 'web');
                  localStorage.setItem('access-token', data.token);
                  localStorage.setItem('name', data.name);
                  localStorage.setItem('id', data.id);
                  localStorage.setItem('image', data.image);
                  setTimeout(function () {
                    window.location.reload();
                  }, 500);

                  if (localStorage.getItem('isLogin') == 0) {
                    serviceId = localStorage.getItem('service_id');

                    _this.$router.push({
                      name: 'web.booking.bookappointment',
                      params: {
                        id: serviceId
                      }
                    });
                  } else {
                    _this.$router.push({
                      name: 'web.account.index'
                    });
                  }
                } else {
                  _this.$snotify.error(response.data.message);
                }

                _this.response = {};
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);

                if (_context.t0.response) {
                  _this.response = _context.t0.response.data;
                }

                console.log(_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/Pages/web/Auth/Login.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/Pages/web/Auth/Login.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_2e992fb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=2e992fb2& */ "./resources/js/src/views/Pages/web/Auth/Login.vue?vue&type=template&id=2e992fb2&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Pages/web/Auth/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Login_vue_vue_type_template_id_2e992fb2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_2e992fb2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Pages/web/Auth/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Pages/web/Auth/Login.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/Pages/web/Auth/Login.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/web/Auth/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/views/Pages/web/Auth/Login.vue?vue&type=template&id=2e992fb2&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/Pages/web/Auth/Login.vue?vue&type=template&id=2e992fb2& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_2e992fb2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_2e992fb2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_2e992fb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=2e992fb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/web/Auth/Login.vue?vue&type=template&id=2e992fb2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/web/Auth/Login.vue?vue&type=template&id=2e992fb2&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/web/Auth/Login.vue?vue&type=template&id=2e992fb2& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "login" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-6" },
          [
            _c("ValidationObserver", {
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var handleSubmit = ref.handleSubmit
                    return [
                      _c(
                        "form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return handleSubmit(_vm.login)
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "form-div" },
                            [
                              _c("h1", { staticClass: "login-heading" }, [
                                _vm._v("User Login")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "login-p mt-2" }, [
                                _vm._v(
                                  "If You Have An Account, Sign In With Your Email Address."
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "login-lbl mt-lg-5 mt-3 mb-2",
                                  attrs: { for: "" }
                                },
                                [_vm._v("Email Address*")]
                              ),
                              _vm._v(" "),
                              _c("ValidationProvider", {
                                attrs: {
                                  tag: "div",
                                  name: "Email",
                                  rules: "required"
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function(ref) {
                                        var errors = ref.errors
                                        return [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.form.email,
                                                expression: "form.email"
                                              }
                                            ],
                                            staticClass: "all-input w-100",
                                            attrs: {
                                              type: "email",
                                              name: "email",
                                              placeholder: "Enter Email Address"
                                            },
                                            domProps: { value: _vm.form.email },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.form,
                                                  "email",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [_vm._v(_vm._s(errors[0]))]
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  true
                                )
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "login-lbl mt-lg-5 mt-3 mb-2",
                                  attrs: { for: "" }
                                },
                                [_vm._v("Password*")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "position-relative" },
                                [
                                  _c("ValidationProvider", {
                                    attrs: {
                                      tag: "div",
                                      name: "Password",
                                      rules: "required"
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function(ref) {
                                            var errors = ref.errors
                                            return [
                                              _vm.passwordEye === "checkbox"
                                                ? _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.form.password,
                                                        expression:
                                                          "form.password"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "all-input w-100 enter-input pr-5",
                                                    attrs: {
                                                      name: "password",
                                                      placeholder:
                                                        "Enter Password",
                                                      type: "checkbox"
                                                    },
                                                    domProps: {
                                                      checked: Array.isArray(
                                                        _vm.form.password
                                                      )
                                                        ? _vm._i(
                                                            _vm.form.password,
                                                            null
                                                          ) > -1
                                                        : _vm.form.password
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        var $$a =
                                                            _vm.form.password,
                                                          $$el = $event.target,
                                                          $$c = $$el.checked
                                                            ? true
                                                            : false
                                                        if (
                                                          Array.isArray($$a)
                                                        ) {
                                                          var $$v = null,
                                                            $$i = _vm._i(
                                                              $$a,
                                                              $$v
                                                            )
                                                          if ($$el.checked) {
                                                            $$i < 0 &&
                                                              _vm.$set(
                                                                _vm.form,
                                                                "password",
                                                                $$a.concat([
                                                                  $$v
                                                                ])
                                                              )
                                                          } else {
                                                            $$i > -1 &&
                                                              _vm.$set(
                                                                _vm.form,
                                                                "password",
                                                                $$a
                                                                  .slice(0, $$i)
                                                                  .concat(
                                                                    $$a.slice(
                                                                      $$i + 1
                                                                    )
                                                                  )
                                                              )
                                                          }
                                                        } else {
                                                          _vm.$set(
                                                            _vm.form,
                                                            "password",
                                                            $$c
                                                          )
                                                        }
                                                      }
                                                    }
                                                  })
                                                : _vm.passwordEye === "radio"
                                                ? _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.form.password,
                                                        expression:
                                                          "form.password"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "all-input w-100 enter-input pr-5",
                                                    attrs: {
                                                      name: "password",
                                                      placeholder:
                                                        "Enter Password",
                                                      type: "radio"
                                                    },
                                                    domProps: {
                                                      checked: _vm._q(
                                                        _vm.form.password,
                                                        null
                                                      )
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        return _vm.$set(
                                                          _vm.form,
                                                          "password",
                                                          null
                                                        )
                                                      }
                                                    }
                                                  })
                                                : _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.form.password,
                                                        expression:
                                                          "form.password"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "all-input w-100 enter-input pr-5",
                                                    attrs: {
                                                      name: "password",
                                                      placeholder:
                                                        "Enter Password",
                                                      type: _vm.passwordEye
                                                    },
                                                    domProps: {
                                                      value: _vm.form.password
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.form,
                                                          "password",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "enter-icon right-icon",
                                                class: _vm.passwordClass,
                                                attrs: {
                                                  "aria-hidden": "true"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.togglePasswordEye(
                                                      "passwordEye",
                                                      "passwordClass"
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                { staticClass: "text-danger" },
                                                [_vm._v(_vm._s(errors[0]))]
                                              )
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      true
                                    )
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-sm-flex justify-content-between mt-2"
                                },
                                [
                                  _c("p", [
                                    _c("input", {
                                      attrs: {
                                        type: "checkbox",
                                        id: "c1",
                                        name: "cb"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      {
                                        staticClass: "login-links",
                                        attrs: { for: "c1" }
                                      },
                                      [_vm._v("Remember Me")]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "router-link",
                                    {
                                      staticClass:
                                        "login-links mt-sm-0 mt-2 d-inline-block",
                                      attrs: {
                                        to: { name: "web.password.email" }
                                      }
                                    },
                                    [_c("u", [_vm._v("Forgot Password?")])]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "yellow-btn mt-lg-5 mt-3",
                                  attrs: { type: "submit" }
                                },
                                [_vm._v("Login")]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "register-link mt-lg-5 mt-3" },
                                [
                                  _vm._v("New Here? "),
                                  _c(
                                    "span",
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          attrs: {
                                            to: { name: "web.auth.register" }
                                          }
                                        },
                                        [_vm._v("Register Your Account")]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  }
                }
              ])
            })
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);