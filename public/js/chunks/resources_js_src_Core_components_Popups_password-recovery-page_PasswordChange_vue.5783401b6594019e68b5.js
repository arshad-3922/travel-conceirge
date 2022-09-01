(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_Core_components_Popups_password-recovery-page_PasswordChange_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/Core/components/Popups/password-recovery-page/PasswordChange.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/Core/components/Popups/password-recovery-page/PasswordChange.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      passwordClass: 'far fa-eye-slash',
      passwordEye: 'password',
      passwordEyeConfirmation: 'password',
      passwordClassConfirmation: 'far fa-eye-slash',
      password: '',
      confirmation: ''
    };
  },
  created: function created() {
    var email = localStorage.getItem('email');

    if (!email) {
      this.$snotify.error('Please Follow step by step to change new password', 'Forbidden!');
      this.$router.push({
        name: 'admin.passwordRecovery.email'
      });
    }
  },
  methods: {
    togglePasswordEye: function togglePasswordEye(passwordVar, classVar) {
      this[passwordVar] = this[passwordVar] == 'password' ? "text" : "password";
      this[classVar] = this[passwordVar] == 'password' ? "far fa-eye-slash" : "far fa-eye";
    },
    onSubmit: function onSubmit(e) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var fd, response, self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fd = new FormData(_this.$refs.newPassword);
                fd.append('code', localStorage.getItem('code'));
                _context.next = 4;
                return axios.post('/api/auth/new-password', fd);

              case 4:
                response = _context.sent;

                if (response.data.status) {
                  localStorage.removeItem('code');
                  localStorage.removeItem('email');
                  self = _this;

                  _this.$router.push({
                    name: 'web.auth.login'
                  });

                  _this.$snotify.success(response.data.msg, 'Updated!');
                } else {
                  _this.$snotify.error(response.data.msg, 'Oops!');
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/src/Core/components/Popups/password-recovery-page/PasswordChange.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/Core/components/Popups/password-recovery-page/PasswordChange.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PasswordChange_vue_vue_type_template_id_2e2e532f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordChange.vue?vue&type=template&id=2e2e532f& */ "./resources/js/src/Core/components/Popups/password-recovery-page/PasswordChange.vue?vue&type=template&id=2e2e532f&");
/* harmony import */ var _PasswordChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordChange.vue?vue&type=script&lang=js& */ "./resources/js/src/Core/components/Popups/password-recovery-page/PasswordChange.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PasswordChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PasswordChange_vue_vue_type_template_id_2e2e532f___WEBPACK_IMPORTED_MODULE_0__.render,
  _PasswordChange_vue_vue_type_template_id_2e2e532f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/Core/components/Popups/password-recovery-page/PasswordChange.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/Core/components/Popups/password-recovery-page/PasswordChange.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/Core/components/Popups/password-recovery-page/PasswordChange.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PasswordChange.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/Core/components/Popups/password-recovery-page/PasswordChange.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/Core/components/Popups/password-recovery-page/PasswordChange.vue?vue&type=template&id=2e2e532f&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/Core/components/Popups/password-recovery-page/PasswordChange.vue?vue&type=template&id=2e2e532f& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_template_id_2e2e532f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_template_id_2e2e532f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_template_id_2e2e532f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PasswordChange.vue?vue&type=template&id=2e2e532f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/Core/components/Popups/password-recovery-page/PasswordChange.vue?vue&type=template&id=2e2e532f&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/Core/components/Popups/password-recovery-page/PasswordChange.vue?vue&type=template&id=2e2e532f&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/Core/components/Popups/password-recovery-page/PasswordChange.vue?vue&type=template&id=2e2e532f& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
                          ref: "newPassword",
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return handleSubmit(_vm.onSubmit)
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "form-div" },
                            [
                              _c("h1", { staticClass: "login-heading" }, [
                                _vm._v("Password Recovery")
                              ]),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "login-lbl mt-lg-5 mt-3 mb-2",
                                  attrs: { for: "" }
                                },
                                [_vm._v("New Password*")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "position-relative" },
                                [
                                  _c("ValidationProvider", {
                                    attrs: {
                                      name: "Password",
                                      rules:
                                        "required|confirmed:password_confirmation"
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
                                                        value: _vm.password,
                                                        expression: "password"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "all-input w-100 enter-input pr-5",
                                                    attrs: {
                                                      placeholder:
                                                        "Enter New Password",
                                                      type: "checkbox"
                                                    },
                                                    domProps: {
                                                      checked: Array.isArray(
                                                        _vm.password
                                                      )
                                                        ? _vm._i(
                                                            _vm.password,
                                                            null
                                                          ) > -1
                                                        : _vm.password
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        var $$a = _vm.password,
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
                                                              (_vm.password = $$a.concat(
                                                                [$$v]
                                                              ))
                                                          } else {
                                                            $$i > -1 &&
                                                              (_vm.password = $$a
                                                                .slice(0, $$i)
                                                                .concat(
                                                                  $$a.slice(
                                                                    $$i + 1
                                                                  )
                                                                ))
                                                          }
                                                        } else {
                                                          _vm.password = $$c
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
                                                        value: _vm.password,
                                                        expression: "password"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "all-input w-100 enter-input pr-5",
                                                    attrs: {
                                                      placeholder:
                                                        "Enter New Password",
                                                      type: "radio"
                                                    },
                                                    domProps: {
                                                      checked: _vm._q(
                                                        _vm.password,
                                                        null
                                                      )
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        _vm.password = null
                                                      }
                                                    }
                                                  })
                                                : _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: _vm.password,
                                                        expression: "password"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "all-input w-100 enter-input pr-5",
                                                    attrs: {
                                                      placeholder:
                                                        "Enter New Password",
                                                      type: _vm.passwordEye
                                                    },
                                                    domProps: {
                                                      value: _vm.password
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.password =
                                                          $event.target.value
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
                                  _c("i", {
                                    staticClass:
                                      "far fa-eye enter-icon right-icon",
                                    class: _vm.passwordClass,
                                    on: {
                                      click: function($event) {
                                        return _vm.togglePasswordEye(
                                          "passwordEye",
                                          "passwordClass"
                                        )
                                      }
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "login-lbl mt-lg-5 mt-3 mb-2",
                                  attrs: { for: "" }
                                },
                                [_vm._v("Confirm Password*")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "position-relative" },
                                [
                                  _c("ValidationProvider", {
                                    attrs: {
                                      name: "Confirm Password",
                                      rules: "required",
                                      vid: "password_confirmation"
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function(ref) {
                                            var errors = ref.errors
                                            return [
                                              _vm.passwordEyeConfirmation ===
                                              "checkbox"
                                                ? _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: _vm.confirmation,
                                                        expression:
                                                          "confirmation"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "all-input w-100 enter-input-2 pr-5",
                                                    attrs: {
                                                      placeholder:
                                                        "Confirm Password",
                                                      type: "checkbox"
                                                    },
                                                    domProps: {
                                                      checked: Array.isArray(
                                                        _vm.confirmation
                                                      )
                                                        ? _vm._i(
                                                            _vm.confirmation,
                                                            null
                                                          ) > -1
                                                        : _vm.confirmation
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        var $$a =
                                                            _vm.confirmation,
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
                                                              (_vm.confirmation = $$a.concat(
                                                                [$$v]
                                                              ))
                                                          } else {
                                                            $$i > -1 &&
                                                              (_vm.confirmation = $$a
                                                                .slice(0, $$i)
                                                                .concat(
                                                                  $$a.slice(
                                                                    $$i + 1
                                                                  )
                                                                ))
                                                          }
                                                        } else {
                                                          _vm.confirmation = $$c
                                                        }
                                                      }
                                                    }
                                                  })
                                                : _vm.passwordEyeConfirmation ===
                                                  "radio"
                                                ? _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: _vm.confirmation,
                                                        expression:
                                                          "confirmation"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "all-input w-100 enter-input-2 pr-5",
                                                    attrs: {
                                                      placeholder:
                                                        "Confirm Password",
                                                      type: "radio"
                                                    },
                                                    domProps: {
                                                      checked: _vm._q(
                                                        _vm.confirmation,
                                                        null
                                                      )
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        _vm.confirmation = null
                                                      }
                                                    }
                                                  })
                                                : _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: _vm.confirmation,
                                                        expression:
                                                          "confirmation"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "all-input w-100 enter-input-2 pr-5",
                                                    attrs: {
                                                      placeholder:
                                                        "Confirm Password",
                                                      type:
                                                        _vm.passwordEyeConfirmation
                                                    },
                                                    domProps: {
                                                      value: _vm.confirmation
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.confirmation =
                                                          $event.target.value
                                                      }
                                                    }
                                                  }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "far fa-eye enter-icon-2 right-icon",
                                                class:
                                                  _vm.passwordClassConfirmation,
                                                on: {
                                                  click: function($event) {
                                                    return _vm.togglePasswordEye(
                                                      "passwordEyeConfirmation",
                                                      "passwordClassConfirmation"
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
                                "button",
                                {
                                  staticClass: "yellow-btn mt-lg-5 mt-3",
                                  attrs: {
                                    type: "submit",
                                    "data-toggle": "modal",
                                    "data-target": "#pwd-update"
                                  }
                                },
                                [_vm._v("Update")]
                              ),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  staticClass:
                                    "register-link mt-lg-5 mt-3 d-block",
                                  attrs: { to: { name: "web.auth.login" } }
                                },
                                [_vm._v("Back To Log In")]
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