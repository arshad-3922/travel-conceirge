(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_Pages_admin_Auth_PasswordRecovery_New_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/New.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/New.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
      password: '',
      password_confirmation: '',
      passwordClass: 'fa-eye',
      passwordEye: 'password',
      passwordClasss: 'fa-eye',
      passwordEyee: 'password',
      base_url: baseUrl
    };
  },
  methods: {
    togglePasswordEye: function togglePasswordEye(passwordVar, classVar) {
      this[passwordVar] = this[passwordVar] == 'password' ? "text" : "password";
      this[classVar] = this[passwordVar] == 'password' ? "fa-eye" : "fa-eye-slash";
    },
    togglePasswordEyee: function togglePasswordEyee(passwordVar, classVar) {
      this[passwordVar] = this[passwordVar] == 'password' ? "text" : "password";
      this[classVar] = this[passwordVar] == 'password' ? "fa-eye" : "fa-eye-slash";
    },
    onSubmit: function onSubmit(e) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var fd, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fd = new FormData();

                _this.buildFormData(fd, _this.$data);

                fd.append('email', localStorage.getItem('email'));
                _context.next = 5;
                return axios.post('api/auth/changePassword', fd);

              case 5:
                response = _context.sent;
                console.log(response.data);

                if (response.data.status != 'Failed') {
                  _this.$snotify.success(response.data.message);

                  _this.$router.push({
                    name: 'admin.auth.login'
                  });
                } else {
                  _this.$snotify.error(response.data.message);
                }

              case 8:
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

/***/ "./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/New.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/New.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _New_vue_vue_type_template_id_cc2137fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./New.vue?vue&type=template&id=cc2137fa& */ "./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/New.vue?vue&type=template&id=cc2137fa&");
/* harmony import */ var _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./New.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/New.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _New_vue_vue_type_template_id_cc2137fa___WEBPACK_IMPORTED_MODULE_0__.render,
  _New_vue_vue_type_template_id_cc2137fa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Pages/admin/Auth/PasswordRecovery/New.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/New.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/New.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./New.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/New.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/New.vue?vue&type=template&id=cc2137fa&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/New.vue?vue&type=template&id=cc2137fa& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_cc2137fa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_cc2137fa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_cc2137fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./New.vue?vue&type=template&id=cc2137fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/New.vue?vue&type=template&id=cc2137fa&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/New.vue?vue&type=template&id=cc2137fa&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/New.vue?vue&type=template&id=cc2137fa& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "loginMain" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-lg-11" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-5" }, [
              _c(
                "div",
                { staticClass: "loginCard px-lg-4 px-2 py-5 my-5" },
                [
                  _vm._m(0),
                  _vm._v(" "),
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
                                    return handleSubmit(_vm.onSubmit)
                                  }
                                }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "form-group position-relative mt-3"
                                  },
                                  [
                                    _c("label", { attrs: { for: "" } }, [
                                      _vm._v("New Password"),
                                      _c("span", { staticClass: "fc-orange" }, [
                                        _vm._v("*")
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "position-relative" },
                                      [
                                        _c("ValidationProvider", {
                                          attrs: {
                                            tag: "div",
                                            name: "New Password",
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
                                                      staticClass:
                                                        "form-control enter-input",
                                                      attrs: {
                                                        type: _vm.passwordEye,
                                                        placeholder:
                                                          "Enter New Password"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "modal-eye-btns  position-absolute",
                                                        attrs: {
                                                          type: "button"
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "far fa-eye-slash enter-icon right-icon",
                                                          attrs: {
                                                            "aria-hidden":
                                                              "true"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.togglePasswordEye(
                                                                "passwordEye",
                                                                "passwordClass"
                                                              )
                                                            }
                                                          }
                                                        })
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "text-danger"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(errors[0])
                                                        )
                                                      ]
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
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "form-group position-relative"
                                  },
                                  [
                                    _c("label", { attrs: { for: "" } }, [
                                      _vm._v("Confirm Password"),
                                      _c("span", { staticClass: "fc-orange" }, [
                                        _vm._v("*")
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "position-relative" },
                                      [
                                        _c("ValidationProvider", {
                                          attrs: {
                                            tag: "div",
                                            name: "New Password",
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
                                                      staticClass:
                                                        "form-control enter-input",
                                                      attrs: {
                                                        type: _vm.passwordEyee,
                                                        placeholder:
                                                          "Enter New Password"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "modal-eye-btns  position-absolute",
                                                        attrs: {
                                                          type: "button"
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "far fa-eye-slash enter-icon right-icon",
                                                          attrs: {
                                                            "aria-hidden":
                                                              "true"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.togglePasswordEyee(
                                                                "passwordEyee",
                                                                "passwordClasss"
                                                              )
                                                            }
                                                          }
                                                        })
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "text-danger"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(errors[0])
                                                        )
                                                      ]
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
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "text-center mt-3 mb-3" },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-primary btn-large",
                                        attrs: { type: "submit" }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        update\n                                    "
                                        )
                                      ]
                                    )
                                  ]
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
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-lg-12 text-center mt-2" }, [
        _c("h2", [_vm._v("Forgot Password")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-8 text-center" }, [
        _c("p", [_vm._v("Kindly enter the new password")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);