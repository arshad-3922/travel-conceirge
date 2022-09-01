(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_Pages_admin_Account_Password_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Account/Password.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Account/Password.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        old_password: '',
        new_password: '',
        password_confirmation: ''
      },
      passwordClass: 'far fa-eye-slash',
      passwordEye: 'password',
      passwordClasss: 'far fa-eye-slash',
      passwordEyee: 'password',
      passwordClassss: 'far fa-eye-slash',
      passwordEyeee: 'password'
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
    togglePasswordEyeee: function togglePasswordEyeee(passwordVar, classVar) {
      this[passwordVar] = this[passwordVar] == 'password' ? "text" : "password";
      this[classVar] = this[passwordVar] == 'password' ? "far fa-eye-slash" : "far fa-eye";
    },
    onSubmit: function onSubmit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var fd, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fd = new FormData();

                _this.buildFormData(fd, _this.form);

                _context.next = 4;
                return axios.post('api/auth/AdminChangePassword', fd);

              case 4:
                response = _context.sent;

                if (response.data.data == true) {
                  setTimeout(function () {
                    window.location.reload();
                  }, 2000);

                  _this.$router.push({
                    name: 'admin.account.index'
                  });

                  _this.$snotify.success(response.data.message);
                } else if (response.data.data == false) {
                  _this.$snotify.error(response.data.message);
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

/***/ "./resources/js/src/views/Pages/admin/Account/Password.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/Pages/admin/Account/Password.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Password_vue_vue_type_template_id_3166a7dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Password.vue?vue&type=template&id=3166a7dc& */ "./resources/js/src/views/Pages/admin/Account/Password.vue?vue&type=template&id=3166a7dc&");
/* harmony import */ var _Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Password.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Pages/admin/Account/Password.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Password_vue_vue_type_template_id_3166a7dc___WEBPACK_IMPORTED_MODULE_0__.render,
  _Password_vue_vue_type_template_id_3166a7dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Pages/admin/Account/Password.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Pages/admin/Account/Password.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/Pages/admin/Account/Password.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Password.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Account/Password.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/views/Pages/admin/Account/Password.vue?vue&type=template&id=3166a7dc&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/Pages/admin/Account/Password.vue?vue&type=template&id=3166a7dc& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_template_id_3166a7dc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_template_id_3166a7dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_template_id_3166a7dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Password.vue?vue&type=template&id=3166a7dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Account/Password.vue?vue&type=template&id=3166a7dc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Account/Password.vue?vue&type=template&id=3166a7dc&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Account/Password.vue?vue&type=template&id=3166a7dc& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: {
        id: "change-password-modal",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "exampleModalCenterTitle",
        "aria-hidden": "true"
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "modal-dialog modal-dialog-centered",
          attrs: { role: "document" }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "modal-body " },
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
                              _c("div", { staticClass: "text-center mb-2" }, [
                                _c(
                                  "h4",
                                  {
                                    staticClass: "fw-600 modal-primary-heading"
                                  },
                                  [_vm._v("Change Password")]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "mb-1" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "primary_heading fw-400",
                                    attrs: { for: "packageName*" }
                                  },
                                  [_vm._v("Current Password* ")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "position-relative form-group passwordWrapper"
                                  },
                                  [
                                    _c("ValidationProvider", {
                                      attrs: {
                                        tag: "div",
                                        name: "Current Password",
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
                                                            _vm.form
                                                              .old_password,
                                                          expression:
                                                            "form.old_password"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "w-100 primary-input-filed confirm-input",
                                                      attrs: {
                                                        placeholder:
                                                          "Enter Current Password",
                                                        type: "checkbox"
                                                      },
                                                      domProps: {
                                                        checked: Array.isArray(
                                                          _vm.form.old_password
                                                        )
                                                          ? _vm._i(
                                                              _vm.form
                                                                .old_password,
                                                              null
                                                            ) > -1
                                                          : _vm.form
                                                              .old_password
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          var $$a =
                                                              _vm.form
                                                                .old_password,
                                                            $$el =
                                                              $event.target,
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
                                                                  "old_password",
                                                                  $$a.concat([
                                                                    $$v
                                                                  ])
                                                                )
                                                            } else {
                                                              $$i > -1 &&
                                                                _vm.$set(
                                                                  _vm.form,
                                                                  "old_password",
                                                                  $$a
                                                                    .slice(
                                                                      0,
                                                                      $$i
                                                                    )
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
                                                              "old_password",
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
                                                            _vm.form
                                                              .old_password,
                                                          expression:
                                                            "form.old_password"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "w-100 primary-input-filed confirm-input",
                                                      attrs: {
                                                        placeholder:
                                                          "Enter Current Password",
                                                        type: "radio"
                                                      },
                                                      domProps: {
                                                        checked: _vm._q(
                                                          _vm.form.old_password,
                                                          null
                                                        )
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          return _vm.$set(
                                                            _vm.form,
                                                            "old_password",
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
                                                              .old_password,
                                                          expression:
                                                            "form.old_password"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "w-100 primary-input-filed confirm-input",
                                                      attrs: {
                                                        placeholder:
                                                          "Enter Current Password",
                                                        type: _vm.passwordEye
                                                      },
                                                      domProps: {
                                                        value:
                                                          _vm.form.old_password
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            _vm.form,
                                                            "old_password",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    }),
                                                _vm._v(" "),
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "modal-eye-btns  position-absolute",
                                                    attrs: { type: "button" }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass:
                                                        "enter-icon-1 right-icon",
                                                      class: _vm.passwordClass,
                                                      attrs: {
                                                        "aria-hidden": "true"
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
                                                    staticClass: "text-danger"
                                                  },
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
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "mb-1" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "primary_heading fw-400",
                                    attrs: { for: "packageName*" }
                                  },
                                  [_vm._v("New Password* ")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "position-relative passwordWrapper"
                                  },
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
                                                _vm.passwordEyee === "checkbox"
                                                  ? _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.form
                                                              .new_password,
                                                          expression:
                                                            "form.new_password"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "w-100 primary-input-filed current-input",
                                                      attrs: {
                                                        placeholder:
                                                          "Enter New Password",
                                                        type: "checkbox"
                                                      },
                                                      domProps: {
                                                        checked: Array.isArray(
                                                          _vm.form.new_password
                                                        )
                                                          ? _vm._i(
                                                              _vm.form
                                                                .new_password,
                                                              null
                                                            ) > -1
                                                          : _vm.form
                                                              .new_password
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          var $$a =
                                                              _vm.form
                                                                .new_password,
                                                            $$el =
                                                              $event.target,
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
                                                                  "new_password",
                                                                  $$a.concat([
                                                                    $$v
                                                                  ])
                                                                )
                                                            } else {
                                                              $$i > -1 &&
                                                                _vm.$set(
                                                                  _vm.form,
                                                                  "new_password",
                                                                  $$a
                                                                    .slice(
                                                                      0,
                                                                      $$i
                                                                    )
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
                                                              "new_password",
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
                                                              .new_password,
                                                          expression:
                                                            "form.new_password"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "w-100 primary-input-filed current-input",
                                                      attrs: {
                                                        placeholder:
                                                          "Enter New Password",
                                                        type: "radio"
                                                      },
                                                      domProps: {
                                                        checked: _vm._q(
                                                          _vm.form.new_password,
                                                          null
                                                        )
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          return _vm.$set(
                                                            _vm.form,
                                                            "new_password",
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
                                                              .new_password,
                                                          expression:
                                                            "form.new_password"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "w-100 primary-input-filed current-input",
                                                      attrs: {
                                                        placeholder:
                                                          "Enter New Password",
                                                        type: _vm.passwordEyee
                                                      },
                                                      domProps: {
                                                        value:
                                                          _vm.form.new_password
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            _vm.form,
                                                            "new_password",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    }),
                                                _vm._v(" "),
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "modal-eye-btns  position-absolute",
                                                    attrs: { type: "button" }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass:
                                                        "enter-icon-1 right-icon",
                                                      class: _vm.passwordClass,
                                                      attrs: {
                                                        "aria-hidden": "true"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.togglePasswordEye(
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
                                                    staticClass: "text-danger"
                                                  },
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
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "mb-1" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "primary_heading fw-400",
                                    attrs: { for: "packageName*" }
                                  },
                                  [_vm._v("Confirm Password ")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "position-relative passwordWrapper"
                                  },
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
                                                _vm.passwordEyeee === "checkbox"
                                                  ? _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.form
                                                              .password_confirmation,
                                                          expression:
                                                            "form.password_confirmation"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "w-100 primary-input-filed enter-input",
                                                      attrs: {
                                                        placeholder:
                                                          "Confirm Password",
                                                        type: "checkbox"
                                                      },
                                                      domProps: {
                                                        checked: Array.isArray(
                                                          _vm.form
                                                            .password_confirmation
                                                        )
                                                          ? _vm._i(
                                                              _vm.form
                                                                .password_confirmation,
                                                              null
                                                            ) > -1
                                                          : _vm.form
                                                              .password_confirmation
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          var $$a =
                                                              _vm.form
                                                                .password_confirmation,
                                                            $$el =
                                                              $event.target,
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
                                                                  "password_confirmation",
                                                                  $$a.concat([
                                                                    $$v
                                                                  ])
                                                                )
                                                            } else {
                                                              $$i > -1 &&
                                                                _vm.$set(
                                                                  _vm.form,
                                                                  "password_confirmation",
                                                                  $$a
                                                                    .slice(
                                                                      0,
                                                                      $$i
                                                                    )
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
                                                              "password_confirmation",
                                                              $$c
                                                            )
                                                          }
                                                        }
                                                      }
                                                    })
                                                  : _vm.passwordEyeee ===
                                                    "radio"
                                                  ? _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.form
                                                              .password_confirmation,
                                                          expression:
                                                            "form.password_confirmation"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "w-100 primary-input-filed enter-input",
                                                      attrs: {
                                                        placeholder:
                                                          "Confirm Password",
                                                        type: "radio"
                                                      },
                                                      domProps: {
                                                        checked: _vm._q(
                                                          _vm.form
                                                            .password_confirmation,
                                                          null
                                                        )
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          return _vm.$set(
                                                            _vm.form,
                                                            "password_confirmation",
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
                                                              .password_confirmation,
                                                          expression:
                                                            "form.password_confirmation"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "w-100 primary-input-filed enter-input",
                                                      attrs: {
                                                        placeholder:
                                                          "Confirm Password",
                                                        type: _vm.passwordEyeee
                                                      },
                                                      domProps: {
                                                        value:
                                                          _vm.form
                                                            .password_confirmation
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            _vm.form,
                                                            "password_confirmation",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    }),
                                                _vm._v(" "),
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "modal-eye-btns  position-absolute",
                                                    attrs: { type: "button" }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass:
                                                        "enter-icon-1 right-icon",
                                                      class: _vm.passwordClass,
                                                      attrs: {
                                                        "aria-hidden": "true"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.togglePasswordEye(
                                                            "passwordEyeee",
                                                            "passwordClassss"
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
                                                    staticClass: "text-danger"
                                                  },
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
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "text-center mt-3" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-purple modal-primary-btn",
                                    attrs: { type: "submit" }
                                  },
                                  [_vm._v("Update")]
                                )
                              ])
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
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn-close close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true



/***/ })

}]);