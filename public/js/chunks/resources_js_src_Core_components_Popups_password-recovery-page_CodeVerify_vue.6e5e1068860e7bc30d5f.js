(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_Core_components_Popups_password-recovery-page_CodeVerify_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/Core/components/Popups/password-recovery-page/CodeVerify.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/Core/components/Popups/password-recovery-page/CodeVerify.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isSending: false,
      code: '',
      email: ''
    };
  },
  created: function created() {
    var email = localStorage.getItem('email');

    if (!email) {
      this.$snotify.error('Please Follow the first step & verify your email', 'Forbidden!');
      this.$router.push({
        name: 'ForgetPassword'
      });
    }
  },
  methods: {
    onResend: function onResend(e) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var fd, response, self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fd = new FormData();
                fd.append('email', localStorage.getItem('email'));

                if (_this.isSending) {
                  _context.next = 10;
                  break;
                }

                _this.isSending = true;
                _context.next = 6;
                return axios.post('/api/auth/send/email', fd);

              case 6:
                response = _context.sent;

                if (response.data.data) {
                  self = _this;
                  _this.isSending = false;
                  setTimeout(function () {
                    self.$snotify.success(response.data.message);
                  }, 1000);
                } else {
                  _this.$snotify.error(response.data.message);
                }

                _context.next = 11;
                break;

              case 10:
                _this.$snotify.error('already sending', 'Please Wait!');

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onSubmit: function onSubmit(e) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var fd, response, self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fd = new FormData();
                fd.append('code', _this2.code);
                _context2.next = 4;
                return axios.post('/api/auth/verify/code', fd);

              case 4:
                response = _context2.sent;

                if (response.data.data) {
                  localStorage.setItem('code', _this2.code);
                  self = _this2;

                  _this2.$router.push({
                    name: 'web.password.newpassword'
                  });

                  _this2.$snotify.success(response.data.message, 'Verified');
                } else {
                  _this2.$snotify.error(response.data.message, 'Invalid Code');
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/src/Core/components/Popups/password-recovery-page/CodeVerify.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/Core/components/Popups/password-recovery-page/CodeVerify.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CodeVerify_vue_vue_type_template_id_f9c0f36c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeVerify.vue?vue&type=template&id=f9c0f36c& */ "./resources/js/src/Core/components/Popups/password-recovery-page/CodeVerify.vue?vue&type=template&id=f9c0f36c&");
/* harmony import */ var _CodeVerify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CodeVerify.vue?vue&type=script&lang=js& */ "./resources/js/src/Core/components/Popups/password-recovery-page/CodeVerify.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CodeVerify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CodeVerify_vue_vue_type_template_id_f9c0f36c___WEBPACK_IMPORTED_MODULE_0__.render,
  _CodeVerify_vue_vue_type_template_id_f9c0f36c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/Core/components/Popups/password-recovery-page/CodeVerify.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/Core/components/Popups/password-recovery-page/CodeVerify.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/Core/components/Popups/password-recovery-page/CodeVerify.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeVerify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CodeVerify.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/Core/components/Popups/password-recovery-page/CodeVerify.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeVerify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/Core/components/Popups/password-recovery-page/CodeVerify.vue?vue&type=template&id=f9c0f36c&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/Core/components/Popups/password-recovery-page/CodeVerify.vue?vue&type=template&id=f9c0f36c& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeVerify_vue_vue_type_template_id_f9c0f36c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeVerify_vue_vue_type_template_id_f9c0f36c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeVerify_vue_vue_type_template_id_f9c0f36c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CodeVerify.vue?vue&type=template&id=f9c0f36c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/Core/components/Popups/password-recovery-page/CodeVerify.vue?vue&type=template&id=f9c0f36c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/Core/components/Popups/password-recovery-page/CodeVerify.vue?vue&type=template&id=f9c0f36c&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/Core/components/Popups/password-recovery-page/CodeVerify.vue?vue&type=template&id=f9c0f36c& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
                                [_vm._v("Verification Code*")]
                              ),
                              _vm._v(" "),
                              _c("ValidationProvider", {
                                attrs: { name: "code", rules: "required" },
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
                                                value: _vm.code,
                                                expression: "code"
                                              }
                                            ],
                                            staticClass: "all-input w-100",
                                            attrs: {
                                              type: "number",
                                              placeholder:
                                                "Enter Verification Code"
                                            },
                                            domProps: { value: _vm.code },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.code = $event.target.value
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
                              _c("div", { staticClass: "text-right mt-2" }, [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "login-links mt-sm-0 mt-2 d-inline-block",
                                    attrs: { href: "javascript:void(0)" },
                                    on: { click: _vm.onResend }
                                  },
                                  [_c("u", [_vm._v("Resend Code")])]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "button",
                                { staticClass: "yellow-btn mt-lg-5 mt-3" },
                                [_vm._v("Continue")]
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