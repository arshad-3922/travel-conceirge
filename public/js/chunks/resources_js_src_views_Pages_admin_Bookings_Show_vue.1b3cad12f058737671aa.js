(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_Pages_admin_Bookings_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Bookings/Show.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Bookings/Show.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)('admin', ['booking'])),
  data: function data() {
    return {
      base_url: baseUrl
    };
  },
  created: function created() {
    this.fetch();
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
                  route: "api/bookings/show/".concat(_this.$route.params.id),
                  mutation: 'SET_BOOKING',
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
    }
  })
});

/***/ }),

/***/ "./resources/js/src/views/Pages/admin/Bookings/Show.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/Pages/admin/Bookings/Show.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_2f819fed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=2f819fed& */ "./resources/js/src/views/Pages/admin/Bookings/Show.vue?vue&type=template&id=2f819fed&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Pages/admin/Bookings/Show.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Show_vue_vue_type_template_id_2f819fed___WEBPACK_IMPORTED_MODULE_0__.render,
  _Show_vue_vue_type_template_id_2f819fed___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Pages/admin/Bookings/Show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Pages/admin/Bookings/Show.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/Pages/admin/Bookings/Show.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Bookings/Show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/views/Pages/admin/Bookings/Show.vue?vue&type=template&id=2f819fed&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/Pages/admin/Bookings/Show.vue?vue&type=template&id=2f819fed& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_2f819fed___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_2f819fed___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_2f819fed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=template&id=2f819fed& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Bookings/Show.vue?vue&type=template&id=2f819fed&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Bookings/Show.vue?vue&type=template&id=2f819fed&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Bookings/Show.vue?vue&type=template&id=2f819fed& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
              _c("div", { staticClass: "card p-md-4 p-1" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12" }, [
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center" },
                      [
                        _c(
                          "router-link",
                          { attrs: { to: { name: "admin.bookings.index" } } },
                          [
                            _c("img", {
                              staticClass: "go_back_link mr-1",
                              attrs: {
                                src:
                                  _vm.base_url +
                                  "/assets/admin/images/go-back.png",
                                alt: "goBack"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "h1",
                              { staticClass: "fw-600 fc-black main-heading" },
                              [
                                _vm._v(
                                  "\n                                                       Booking Details\n                                                  "
                                )
                              ]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mt-4" }, [
                  _c("div", { staticClass: "col-lg-3 col-md-6 mb-2" }, [
                    _c(
                      "label",
                      { staticClass: "cms-lable", attrs: { for: "" } },
                      [_vm._v("Reference Number")]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "cms-value" }, [
                      _vm._v(_vm._s(_vm.booking.id))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-3 col-md-6 mb-2" }, [
                    _c(
                      "label",
                      { staticClass: "cms-lable", attrs: { for: "" } },
                      [_vm._v("Booking Date")]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "cms-value" }, [
                      _vm._v(_vm._s(_vm.formatDate(_vm.booking.created_at)))
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("h4", { staticClass: "cms-site-heading mb-3" }, [
                  _vm._v("Account Information")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-3 col-md-6 mb-2" }, [
                    _c(
                      "label",
                      { staticClass: "cms-lable", attrs: { for: "" } },
                      [_vm._v("Full Name")]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "cms-value" }, [
                      _vm._v(_vm._s(_vm.booking.user.name))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-3 col-md-6 mb-2" }, [
                    _c(
                      "label",
                      { staticClass: "cms-lable", attrs: { for: "" } },
                      [_vm._v("Email Address")]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "cms-value" }, [
                      _vm._v(_vm._s(_vm.booking.user.email))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-3 col-md-6 mb-2" }, [
                    _c(
                      "label",
                      { staticClass: "cms-lable", attrs: { for: "" } },
                      [_vm._v("Mobile Number")]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "cms-value" }, [
                      _vm._v(_vm._s(_vm.booking.user.phone_number))
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("h4", { staticClass: "cms-site-heading mb-3" }, [
                  _vm._v("Booking Information")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _vm._m(4),
                  _vm._v(" "),
                  _vm._m(5),
                  _vm._v(" "),
                  _vm._m(6),
                  _vm._v(" "),
                  _vm._m(7),
                  _vm._v(" "),
                  _vm._m(8),
                  _vm._v(" "),
                  _vm._m(9),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-10" }, [
                    _c(
                      "label",
                      { staticClass: "cms-lable", attrs: { for: "" } },
                      [_vm._v("Special Requests")]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "cms-value" }, [
                      _vm._v(_vm._s(_vm.booking.spacial_request))
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("h4", { staticClass: "cms-site-heading mb-3 mt-5" }, [
                  _vm._v("Payment Information")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-10" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4 mb-2" }, [
                        _c(
                          "label",
                          { staticClass: "cms-lable", attrs: { for: "" } },
                          [_vm._v("Payment Method")]
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "cms-value" }, [
                          _vm._v(_vm._s(_vm.booking.payment))
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(10),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4 mb-2" }, [
                        _c(
                          "label",
                          { staticClass: "cms-lable", attrs: { for: "" } },
                          [_vm._v("Total Amount Paid")]
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "cms-value" }, [
                          _vm._v(_vm._s(_vm.booking.subscription.amount))
                        ])
                      ])
                    ])
                  ])
                ])
              ])
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
    return _c("div", { staticClass: "col-lg-3 col-md-6 mb-2" }, [
      _c("label", { staticClass: "cms-lable", attrs: { for: "" } }, [
        _vm._v("Hotel Name")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "cms-value" }, [_vm._v("Hotel Quartier Latin")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-6 mb-2" }, [
      _c("label", { staticClass: "cms-lable", attrs: { for: "" } }, [
        _vm._v("Hotel Country")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "cms-value" }, [_vm._v("Paris")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-6 mb-2" }, [
      _c("label", { staticClass: "cms-lable", attrs: { for: "" } }, [
        _vm._v("Number Of Rooms")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "cms-value" }, [_vm._v("2 Rooms")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-6 mb-2" }, [
      _c("label", { staticClass: "cms-lable", attrs: { for: "" } }, [
        _vm._v("Name Of Guests")
      ]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [_vm._v(" mark carson")]),
        _vm._v(" "),
        _c("li", [_vm._v(" mark carson")]),
        _vm._v(" "),
        _c("li", [_vm._v(" mark carson")]),
        _vm._v(" "),
        _c("li", [_vm._v(" mark carson")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-6 mb-2" }, [
      _c("label", { staticClass: "cms-lable", attrs: { for: "" } }, [
        _vm._v("Room Type")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "cms-value" }, [_vm._v("Standard Double Room")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-6 mb-2" }, [
      _c("label", { staticClass: "cms-lable", attrs: { for: "" } }, [
        _vm._v("Number Of Adults")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "cms-value" }, [_vm._v("5 Adults")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-6 mb-2" }, [
      _c("label", { staticClass: "cms-lable", attrs: { for: "" } }, [
        _vm._v("Number Of Child")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "cms-value" }, [_vm._v("0 Child")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-6 mb-2" }, [
      _c("label", { staticClass: "cms-lable", attrs: { for: "" } }, [
        _vm._v("Meal Type")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "cms-value" }, [
        _vm._v("Breakfast, Lunch & Dinner Included")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-6 mb-2" }, [
      _c("label", { staticClass: "cms-lable", attrs: { for: "" } }, [
        _vm._v("VAT")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "cms-value" }, [_vm._v("Not Applicable")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-6 mb-2" }, [
      _c("label", { staticClass: "cms-lable", attrs: { for: "" } }, [
        _vm._v("Check-In Time")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "cms-value" }, [_vm._v("August 21, 2021, 13:00")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4 mb-2" }, [
      _c("label", { staticClass: "cms-lable", attrs: { for: "" } }, [
        _vm._v("Currency")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "cms-value" }, [_vm._v("USD")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);