(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_Pages_admin_User_show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/User/show.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/User/show.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)('admin', ['user', 'users'])),
  data: function data() {
    return {
      base_url: baseUrl
    };
  },
  created: function created() {
    this.fetch();
    this.getBookings();
  },
  watch: {
    search: function search(val, oldVal) {
      this.fetch();
    },
    entries: function entries(val, oldVal) {
      this.fetch();
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('admin', ['getAll'])), {}, {
    fetch: function fetch() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var params, _yield$_this$getAll, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = {
                  route: "api/auth/user/view/".concat(_this.$route.params.id),
                  mutation: 'SET_USER',
                  variable: 'data'
                };
                _context.next = 3;
                return _this.getAll(params);

              case 3:
                _yield$_this$getAll = _context.sent;
                data = _yield$_this$getAll.data;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getBookings: function getBookings() {
      var _arguments = arguments,
          _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var page, params, _yield$_this2$getAll, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
                params = {
                  route: 'api/bookings/getUserBooking',
                  mutation: 'SET_USERS',
                  variable: 'data',
                  data: {
                    page: page,
                    entries: 10,
                    id: _this2.$route.params.id
                  }
                };
                _context2.next = 4;
                return _this2.getAll(params);

              case 4:
                _yield$_this2$getAll = _context2.sent;
                data = _yield$_this2$getAll.data;

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  })
});

/***/ }),

/***/ "./resources/js/src/views/Pages/admin/User/show.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/Pages/admin/User/show.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _show_vue_vue_type_template_id_eaacc048___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=eaacc048& */ "./resources/js/src/views/Pages/admin/User/show.vue?vue&type=template&id=eaacc048&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Pages/admin/User/show.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _show_vue_vue_type_template_id_eaacc048___WEBPACK_IMPORTED_MODULE_0__.render,
  _show_vue_vue_type_template_id_eaacc048___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Pages/admin/User/show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Pages/admin/User/show.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/Pages/admin/User/show.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/User/show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/views/Pages/admin/User/show.vue?vue&type=template&id=eaacc048&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/Pages/admin/User/show.vue?vue&type=template&id=eaacc048& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_eaacc048___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_eaacc048___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_eaacc048___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=template&id=eaacc048& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/User/show.vue?vue&type=template&id=eaacc048&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/User/show.vue?vue&type=template&id=eaacc048&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/User/show.vue?vue&type=template&id=eaacc048& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "app-content content dashboard" }, [
    _c("div", { staticClass: "content-wrapper" }, [
      _c("div", { staticClass: "content-body" }, [
        _c("section", { attrs: { id: "configuration" } }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c(
                "div",
                { staticClass: "card py-xl-4 py-2 pl-xl-4 pl-2 pr-0" },
                [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-xl-6" },
                      [
                        _c(
                          "router-link",
                          { attrs: { to: { name: "admin.users.index" } } },
                          [
                            _c(
                              "h1",
                              { staticClass: "fw-600 fc-black main-heading" },
                              [
                                _c("img", {
                                  staticClass: "img-fluid",
                                  attrs: {
                                    src:
                                      _vm.base_url +
                                      "/assets/admin/images/go-back.png",
                                    alt: ""
                                  }
                                }),
                                _vm._v(" User Details")
                              ]
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._m(0)
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row my-2" }, [
                    _c(
                      "div",
                      { staticClass: "col-lg-10 mx-auto text-center" },
                      [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: {
                            src:
                              _vm.base_url +
                              "/assets/admin/images/user-detail-image.png",
                            alt: ""
                          }
                        }),
                        _vm._v(" "),
                        _c("h4", { staticClass: "user-title mt-2 fc-black" }, [
                          _vm._v(_vm._s(_vm.user.name))
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "row my-4 text-left pb-xl-5 border-bottom border-grey"
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "col-xl-3 col-md-6 mb-md-3 mb-2" },
                              [
                                _c("p", { staticClass: "grey-mini-title" }, [
                                  _vm._v("Email")
                                ]),
                                _vm._v(" "),
                                _c("h5", { staticClass: "dark-mini-text" }, [
                                  _vm._v(_vm._s(_vm.user.email))
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _vm._m(1),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-xl-3 col-md-6 mb-md-3 mb-2" },
                              [
                                _c("p", { staticClass: "grey-mini-title" }, [
                                  _vm._v("Phone")
                                ]),
                                _vm._v(" "),
                                _c("h5", { staticClass: "dark-mini-text" }, [
                                  _vm._v(_vm._s(_vm.user.phone_number))
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-xl-3 col-md-6 mb-md-3 mb-2" },
                              [
                                _c("p", { staticClass: "grey-mini-title" }, [
                                  _vm._v("Date Registered")
                                ]),
                                _vm._v(" "),
                                _c("h5", { staticClass: "dark-mini-text" }, [
                                  _vm._v(
                                    _vm._s(_vm.formatDate(_vm.user.created_at))
                                  )
                                ])
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-xl-10 col-11 mx-auto" }, [
                      _c(
                        "h1",
                        { staticClass: "fw-600 fc-black main-heading mb-3" },
                        [_vm._v("All Trips")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-xl-4 col-md-6 mb-3" }, [
                          _c("h3", { staticClass: "trip-type" }, [
                            _vm._v("Family Trip")
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "trip-card text-center cardYellow p-2"
                            },
                            [
                              _c("img", {
                                staticClass: "img-fluid w-100",
                                attrs: {
                                  src:
                                    _vm.base_url +
                                    "/assets/admin/images/family-trip.jpg",
                                  alt: ""
                                }
                              }),
                              _vm._v(" "),
                              _c("h4", { staticClass: "trip-title mt-2" }, [
                                _vm._v("Universal Studios, Japan")
                              ]),
                              _vm._v(" "),
                              _c("h5", { staticClass: "mb-2" }, [
                                _vm._v("Direct Attraction Transfer From Osaka")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "price-from mb-0" }, [
                                _vm._v("From ")
                              ]),
                              _vm._v(" "),
                              _vm._m(2)
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-xl-4 col-md-6 mb-3" }, [
                          _c("h3", { staticClass: "trip-type" }, [
                            _vm._v("Friends Trip")
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "trip-card text-center cardYellow p-2"
                            },
                            [
                              _c("img", {
                                staticClass: "img-fluid w-100",
                                attrs: {
                                  src:
                                    _vm.base_url +
                                    "/assets/admin/images/friends-trip.jpg",
                                  alt: ""
                                }
                              }),
                              _vm._v(" "),
                              _c("h4", { staticClass: "trip-title mt-2" }, [
                                _vm._v("Universal Studios, Japan")
                              ]),
                              _vm._v(" "),
                              _c("h5", { staticClass: "mb-2" }, [
                                _vm._v("Direct Attraction Transfer From Osaka")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "price-from mb-0" }, [
                                _vm._v("From ")
                              ]),
                              _vm._v(" "),
                              _vm._m(3)
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-xl-4 col-md-6 mb-3" }, [
                          _c("h3", { staticClass: "trip-type" }, [
                            _vm._v("Office Trip")
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "trip-card text-center cardYellow p-2"
                            },
                            [
                              _c("img", {
                                staticClass: "img-fluid w-100",
                                attrs: {
                                  src:
                                    _vm.base_url +
                                    "/assets/admin/images/office-trip.jpg",
                                  alt: ""
                                }
                              }),
                              _vm._v(" "),
                              _c("h4", { staticClass: "trip-title mt-2" }, [
                                _vm._v("Universal Studios, Japan")
                              ]),
                              _vm._v(" "),
                              _c("h5", { staticClass: "mb-2" }, [
                                _vm._v("Direct Attraction Transfer From Osaka")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "price-from mb-0" }, [
                                _vm._v("From ")
                              ]),
                              _vm._v(" "),
                              _vm._m(4)
                            ]
                          )
                        ])
                      ])
                    ])
                  ])
                ]
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
    return _c("div", { staticClass: "col-xl-6 text-right" }, [
      _c(
        "div",
        { staticClass: "d-flex justify-content-end align-items-center" },
        [
          _c(
            "button",
            { staticClass: "btn btn-purple", attrs: { id: "markInactive" } },
            [_vm._v("Mark In-Active")]
          ),
          _vm._v(" "),
          _c("p", { staticClass: "status-label active mb-0" }, [
            _vm._v("Status Active")
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-3 col-md-6 mb-md-3 mb-2" }, [
      _c("p", { staticClass: "grey-mini-title" }, [_vm._v("User")]),
      _vm._v(" "),
      _c("h5", { staticClass: "dark-mini-text" }, [_vm._v("Narmal")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "trip-price" }, [
      _vm._v("US "),
      _c("span", [_vm._v("100")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "trip-price" }, [
      _vm._v("US "),
      _c("span", [_vm._v("100")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "trip-price" }, [
      _vm._v("US "),
      _c("span", [_vm._v("100")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);