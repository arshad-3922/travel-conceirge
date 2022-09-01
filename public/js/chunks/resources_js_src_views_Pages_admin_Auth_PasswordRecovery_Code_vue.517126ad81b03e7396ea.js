(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_Pages_admin_Auth_PasswordRecovery_Code_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/Code.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/Code.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isSending: false,
      code: '',
      base_url: baseUrl
    };
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
                return axios.post(route('admin.password.verify'), fd);

              case 6:
                response = _context.sent;

                if (response.data.status) {
                  self = _this;
                  _this.isSending = false;
                  setTimeout(function () {
                    self.$snotify.success(response.data.msg);
                  }, 1000);
                } else {
                  _this.$snotify.error(response.data.msg);
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
        var fd, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                localStorage.setItem('code', _this2.code);
                fd = new FormData(_this2.$refs.validateCode);
                fd.append('email', localStorage.getItem('email'));
                fd.append('code', _this2.code);
                _context2.prev = 4;
                _context2.next = 7;
                return axios.post('api/auth/verify/code', fd);

              case 7:
                response = _context2.sent;

                if (response.data.status) {
                  _this2.$snotify.success(response.data.message);

                  _this2.$router.push({
                    name: 'admin.passwordRecovery.changePassword'
                  });
                } else {
                  _this2.$snotify.error(response.data.message, 'Invalid Code');
                }

                _context2.next = 15;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](4);

                if (_context2.t0.response) {
                  _this2.$refs.codeObserver.setErrors(_context2.t0.response.data.errors);
                }

                console.log(_context2.t0);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 11]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/Code.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/Code.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Code_vue_vue_type_template_id_20c8c39a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Code.vue?vue&type=template&id=20c8c39a& */ "./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/Code.vue?vue&type=template&id=20c8c39a&");
/* harmony import */ var _Code_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Code.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/Code.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Code_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Code_vue_vue_type_template_id_20c8c39a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Code_vue_vue_type_template_id_20c8c39a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Pages/admin/Auth/PasswordRecovery/Code.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/Code.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/Code.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Code_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Code.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/Code.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Code_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/Code.vue?vue&type=template&id=20c8c39a&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/Code.vue?vue&type=template&id=20c8c39a& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Code_vue_vue_type_template_id_20c8c39a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Code_vue_vue_type_template_id_20c8c39a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Code_vue_vue_type_template_id_20c8c39a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Code.vue?vue&type=template&id=20c8c39a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/Code.vue?vue&type=template&id=20c8c39a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/Code.vue?vue&type=template&id=20c8c39a&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Auth/PasswordRecovery/Code.vue?vue&type=template&id=20c8c39a& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "loginMain" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row justify-content-center" }, [
          _c("div", { staticClass: "col-lg-11" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-5" }, [
                _c("div", { staticClass: "loginCard px-lg-4 px-2 py-5 my-5" }, [
                  _c("div", { staticClass: "row justify-content-center" }, [
                    _c("div", { staticClass: "col-lg-12 text-center mt-2" }, [
                      _c("h2", [_vm._v("Forgot Password")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-8 text-center" }, [
                      _c("p", [_vm._v("Kindly enter your verification code")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "form",
                    { attrs: { action: "forgot-password3.php", id: "" } },
                    [
                      _c("div", { staticClass: "form-group mt-3" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("Verification Code"),
                          _c("span", { staticClass: "fc-orange" }, [
                            _vm._v("*")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Enter Verification Code"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-right" }, [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("u", [_vm._v("Resend Code")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center mt-3" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary btn-large",
                            attrs: { type: "submit" }
                          },
                          [
                            _vm._v(
                              "\n                                        Continue\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center mt-5 mb-4" }, [
                        _c(
                          "a",
                          {
                            staticClass: "fc-black",
                            attrs: { href: "login.php" }
                          },
                          [_c("u", [_vm._v("Back To Login")])]
                        )
                      ])
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);