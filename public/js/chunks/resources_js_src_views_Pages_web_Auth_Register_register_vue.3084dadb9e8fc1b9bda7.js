(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_Pages_web_Auth_Register_register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/web/Auth/Register/register.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/web/Auth/Register/register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      passwordClass: 'far fa-eye-slash',
      passwordEye: 'password',
      passwordClasss: 'far fa-eye-slash',
      passwordEyee: 'password',
      response: {},
      form: {
        role: 'user'
      },
      base_url: base_url
    };
  },
  methods: {
    togglePasswordEye: function togglePasswordEye(passwordVar, classVar) {
      this[passwordVar] = this[passwordVar] == 'password' ? "text" : "password";
      this[classVar] = this[passwordVar] == 'password' ? "far fa-eye-slash" : "far fa-eye";
    },
    togglePasswordEyee: function togglePasswordEyee(passwordVar, classVar) {
      this[passwordVar] = this[passwordVar] == 'password' ? "text" : "password";
      this[classVar] = this[passwordVar] == 'password' ? "far fa-eye-slash" : "far fa-eye";
    },
    signup: function signup() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var fd, response, data, self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fd = new FormData();

                _this.buildFormData(fd, _this.form);

                _context.prev = 2;
                _context.next = 5;
                return axios.post('api/auth/register', fd);

              case 5:
                response = _context.sent;

                if (response.data.data) {
                  data = response.data.data;

                  _this.$snotify.success(response.data.message);

                  self = _this;
                  setTimeout(function () {
                    //window.location.reload();
                    self.$router.push({
                      name: 'web.auth.login'
                    });
                  }, 2000);
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

/***/ "./resources/js/src/views/Pages/web/Auth/Register/register.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/Pages/web/Auth/Register/register.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _register_vue_vue_type_template_id_2432a458___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=2432a458& */ "./resources/js/src/views/Pages/web/Auth/Register/register.vue?vue&type=template&id=2432a458&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Pages/web/Auth/Register/register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _register_vue_vue_type_template_id_2432a458___WEBPACK_IMPORTED_MODULE_0__.render,
  _register_vue_vue_type_template_id_2432a458___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Pages/web/Auth/Register/register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Pages/web/Auth/Register/register.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/Pages/web/Auth/Register/register.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/web/Auth/Register/register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/views/Pages/web/Auth/Register/register.vue?vue&type=template&id=2432a458&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/Pages/web/Auth/Register/register.vue?vue&type=template&id=2432a458& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_2432a458___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_2432a458___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_2432a458___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=template&id=2432a458& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/web/Auth/Register/register.vue?vue&type=template&id=2432a458&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/web/Auth/Register/register.vue?vue&type=template&id=2432a458&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/web/Auth/Register/register.vue?vue&type=template&id=2432a458& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
                              return handleSubmit(_vm.signup)
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "form-div" },
                            [
                              _c("h1", { staticClass: "login-heading" }, [
                                _vm._v("Become A User")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "login-p mt-2" }, [
                                _vm._v(
                                  "If You Are New Here, We Are Glad To Have You Here."
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "login-lbl mt-lg-5 mt-3 mb-2",
                                  attrs: { for: "" }
                                },
                                [_vm._v("First Name*")]
                              ),
                              _vm._v(" "),
                              _c("ValidationProvider", {
                                attrs: {
                                  tag: "div",
                                  name: "First Name",
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
                                                value: _vm.form.first_name,
                                                expression: "form.first_name"
                                              }
                                            ],
                                            staticClass: "all-input w-100",
                                            attrs: {
                                              type: "text",
                                              placeholder: "Enter First Name"
                                            },
                                            domProps: {
                                              value: _vm.form.first_name
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.form,
                                                  "first_name",
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
                                [_vm._v("Last Name*")]
                              ),
                              _vm._v(" "),
                              _c("ValidationProvider", {
                                attrs: {
                                  tag: "div",
                                  name: "Last Name",
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
                                                value: _vm.form.last_name,
                                                expression: "form.last_name"
                                              }
                                            ],
                                            staticClass: "all-input w-100",
                                            attrs: {
                                              type: "text",
                                              placeholder: "Enter Last Name"
                                            },
                                            domProps: {
                                              value: _vm.form.last_name
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.form,
                                                  "last_name",
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
                                      tag: "div",
                                      name: "Confirm Password",
                                      rules: "required"
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function(ref) {
                                            var errors = ref.errors
                                            return [
                                              _vm.passwordEyee === "checkbox"
                                                ? _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.form
                                                            .passwordConfirmation,
                                                        expression:
                                                          "form.passwordConfirmation"
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
                                                        _vm.form
                                                          .passwordConfirmation
                                                      )
                                                        ? _vm._i(
                                                            _vm.form
                                                              .passwordConfirmation,
                                                            null
                                                          ) > -1
                                                        : _vm.form
                                                            .passwordConfirmation
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        var $$a =
                                                            _vm.form
                                                              .passwordConfirmation,
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
                                                                "passwordConfirmation",
                                                                $$a.concat([
                                                                  $$v
                                                                ])
                                                              )
                                                          } else {
                                                            $$i > -1 &&
                                                              _vm.$set(
                                                                _vm.form,
                                                                "passwordConfirmation",
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
                                                            "passwordConfirmation",
                                                            $$c
                                                          )
                                                        }
                                                      }
                                                    }
                                                  })
                                                : _vm.passwordEyee === "radio"
                                                ? _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.form
                                                            .passwordConfirmation,
                                                        expression:
                                                          "form.passwordConfirmation"
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
                                                        _vm.form
                                                          .passwordConfirmation,
                                                        null
                                                      )
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        return _vm.$set(
                                                          _vm.form,
                                                          "passwordConfirmation",
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
                                                          _vm.form
                                                            .passwordConfirmation,
                                                        expression:
                                                          "form.passwordConfirmation"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "all-input w-100 enter-input-2 pr-5",
                                                    attrs: {
                                                      placeholder:
                                                        "Confirm Password",
                                                      type: _vm.passwordEyee
                                                    },
                                                    domProps: {
                                                      value:
                                                        _vm.form
                                                          .passwordConfirmation
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
                                                          "passwordConfirmation",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "enter-icon right-icon",
                                                class: _vm.passwordClasss,
                                                attrs: {
                                                  "aria-hidden": "true"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.togglePasswordEyee(
                                                      "passwordEyee",
                                                      "passwordClasss"
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
                                  attrs: { type: "submit" }
                                },
                                [_vm._v("Sign Up")]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "register-link mt-lg-5 mt-3" },
                                [
                                  _vm._v("Already Have An Account? "),
                                  _c(
                                    "span",
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          attrs: {
                                            to: { name: "web.auth.login" }
                                          }
                                        },
                                        [_vm._v("Log In")]
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