(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_Pages_admin_Dashboard_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Dashboard/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Dashboard/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var RecentUsers = function RecentUsers() {
  return __webpack_require__.e(/*! import() */ "resources_js_src_views_Pages_admin_Dashboard_components_RecentUsers_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./components/RecentUsers.vue */ "./resources/js/src/views/Pages/admin/Dashboard/components/RecentUsers.vue"));
};

var BarChart = function BarChart() {
  return __webpack_require__.e(/*! import() */ "resources_js_src_views_Pages_admin_Dashboard_components_BarChart_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./components/BarChart.vue */ "./resources/js/src/views/Pages/admin/Dashboard/components/BarChart.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      base_url: baseUrl,
      selectedYear: '2022',
      recent_users: [],
      activityLogs: [],
      dashboardGraph: [],
      users: [],
      business: [],
      shop: [],
      sale: []
    };
  },
  components: {
    BarChart: BarChart,
    RecentUsers: RecentUsers
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.getDashboardData();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    years: function years() {
      var today = new Date();
      var currentYear = today.getFullYear();
      var last10Years = new Date(today.setFullYear(today.getFullYear() - 5)).getFullYear();
      var years = [];

      for (var i = currentYear; i >= last10Years; i--) {
        years.push(i);
      }

      return years;
    }
  },
  methods: {
    getDashboardData: function getDashboardData() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var response, data, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get('api/auth/dashboardData');

              case 2:
                response = _context2.sent;

                if (response) {
                  data = response.data.data.users;

                  for (i = 0; i < data.length; i++) {
                    if (data[i].user_role.role_id == 5) {
                      _this2.users.push(data[i]);
                    }

                    if (data[i].user_role.role_id == 4) {
                      _this2.sale.push(data[i]);
                    }

                    if (data[i].user_role.role_id == 3) {
                      _this2.shop.push(data[i]);
                    }

                    if (data[i].user_role.role_id == 2) {
                      _this2.business.push(data[i]);
                    }
                  }

                  _this2.recent_users = response.data.data.recent_users;
                  _this2.dashboardGraph = response.data.data.graphdata;
                } else {
                  _this2.$toasted.error('No Data Found!...');
                }

              case 4:
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

/***/ "./resources/js/src/views/Pages/admin/Dashboard/index.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/Pages/admin/Dashboard/index.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_99af2d1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=99af2d1c& */ "./resources/js/src/views/Pages/admin/Dashboard/index.vue?vue&type=template&id=99af2d1c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Pages/admin/Dashboard/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_99af2d1c___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_99af2d1c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Pages/admin/Dashboard/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Pages/admin/Dashboard/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/Pages/admin/Dashboard/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Dashboard/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/views/Pages/admin/Dashboard/index.vue?vue&type=template&id=99af2d1c&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/Pages/admin/Dashboard/index.vue?vue&type=template&id=99af2d1c& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_99af2d1c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_99af2d1c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_99af2d1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=99af2d1c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Dashboard/index.vue?vue&type=template&id=99af2d1c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Dashboard/index.vue?vue&type=template&id=99af2d1c&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/admin/Dashboard/index.vue?vue&type=template&id=99af2d1c& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "row my-2" }, [
                  _c("div", { staticClass: "col-lg-4 my-2" }, [
                    _c(
                      "div",
                      { staticClass: "cardYellow px-3 py-2 bg-transparent" },
                      [
                        _c(
                          "div",
                          { staticClass: "d-flex justify-content-between" },
                          [
                            _c("div", {}, [
                              _c("h3", [_vm._v("Total Users")]),
                              _vm._v(" "),
                              _c("h1", { staticClass: "bold display-4" }, [
                                _vm._v(_vm._s(_vm.users.length))
                              ]),
                              _vm._v(" "),
                              _c("h4", { staticClass: "bold fc-blue" }, [
                                _vm._v("100.0%")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", {}, [
                              _c("img", {
                                staticClass: "img-fluid",
                                attrs: {
                                  src:
                                    _vm.base_url +
                                    "/assets/admin/img/dashboard/user.png",
                                  alt: ""
                                }
                              })
                            ])
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-4 my-2" }, [
                    _c(
                      "div",
                      { staticClass: "cardYellow px-3 py-2 bg-transparent" },
                      [
                        _c(
                          "div",
                          { staticClass: "d-flex justify-content-between" },
                          [
                            _c("div", {}, [
                              _c("h3", [_vm._v("Total booking")]),
                              _vm._v(" "),
                              _c("h1", { staticClass: "bold display-4" }, [
                                _vm._v(_vm._s(_vm.users.length))
                              ]),
                              _vm._v(" "),
                              _c("h4", { staticClass: "bold fc-blue" }, [
                                _vm._v("100.0%")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", {}, [
                              _c("img", {
                                staticClass: "img-fluid",
                                attrs: {
                                  src:
                                    _vm.base_url +
                                    "/assets/admin/img/dashboard/shop.png",
                                  alt: ""
                                }
                              })
                            ])
                          ]
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row my-2" }, [
                  _c("div", { staticClass: "col-lg-12" }, [
                    _c(
                      "div",
                      { staticClass: "cardYellow px-3 py-2 bg-transparent" },
                      [
                        _c(
                          "div",
                          { staticClass: "d-lg-flex justify-content-between" },
                          [
                            _vm._m(1),
                            _vm._v(" "),
                            _c("div", {}, [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.selectedYear,
                                        expression: "selectedYear"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { name: "", id: "" },
                                    on: {
                                      change: [
                                        function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.selectedYear = $event.target
                                            .multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        },
                                        _vm.getDashboardData
                                      ]
                                    }
                                  },
                                  _vm._l(_vm.years, function(year) {
                                    return _c(
                                      "option",
                                      { key: year, domProps: { value: year } },
                                      [_vm._v(_vm._s(year))]
                                    )
                                  }),
                                  0
                                )
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-lg-12" },
                          [
                            _vm.dashboardGraph.length
                              ? _c("BarChart", {
                                  attrs: {
                                    label: "Revenue Analytics",
                                    data: _vm.dashboardGraph
                                  }
                                })
                              : _vm._e()
                          ],
                          1
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(2)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row my-2" }, [
                  _c("div", { staticClass: "col-lg-12" }, [
                    _c(
                      "div",
                      { staticClass: "cardYellow px-3 py-2  bg-transparent" },
                      [
                        _c(
                          "div",
                          { staticClass: "d-lg-flex justify-content-between" },
                          [
                            _vm._m(3),
                            _vm._v(" "),
                            _c("div", {}, [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.selectedYear,
                                        expression: "selectedYear"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { name: "", id: "" },
                                    on: {
                                      change: [
                                        function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.selectedYear = $event.target
                                            .multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        },
                                        _vm.getDashboardData
                                      ]
                                    }
                                  },
                                  _vm._l(_vm.years, function(year) {
                                    return _c(
                                      "option",
                                      { key: year, domProps: { value: year } },
                                      [_vm._v(_vm._s(year))]
                                    )
                                  }),
                                  0
                                )
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-lg-12" },
                          [
                            _vm.dashboardGraph.length
                              ? _c("BarChart", {
                                  attrs: {
                                    label: "Revenue Analytics",
                                    data: _vm.dashboardGraph
                                  }
                                })
                              : _vm._e()
                          ],
                          1
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(4)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row my-2" }, [
                  _c("div", { staticClass: "col-lg-12" }, [
                    _c(
                      "div",
                      { staticClass: "cardYellow px-3 py-2  bg-transparent" },
                      [
                        _c(
                          "div",
                          { staticClass: "d-lg-flex justify-content-between" },
                          [
                            _vm._m(5),
                            _vm._v(" "),
                            _c("div", {}, [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.selectedYear,
                                        expression: "selectedYear"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { name: "", id: "" },
                                    on: {
                                      change: [
                                        function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.selectedYear = $event.target
                                            .multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        },
                                        _vm.getDashboardData
                                      ]
                                    }
                                  },
                                  _vm._l(_vm.years, function(year) {
                                    return _c(
                                      "option",
                                      { key: year, domProps: { value: year } },
                                      [_vm._v(_vm._s(year))]
                                    )
                                  }),
                                  0
                                )
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-lg-12" },
                          [
                            _vm.dashboardGraph.length
                              ? _c("BarChart", {
                                  attrs: {
                                    label: "Revenue Analytics",
                                    data: _vm.dashboardGraph
                                  }
                                })
                              : _vm._e()
                          ],
                          1
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(6)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row my-2" }, [
                  _vm._m(7),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-12" }, [
                    _c(
                      "div",
                      { staticClass: "table-responsive" },
                      [
                        _c("RecentUsers", {
                          attrs: { users: _vm.recent_users }
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
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("h1", { staticClass: "fw-600" }, [_vm._v("Dashboard")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [_c("h2", [_vm._v("Users")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-12 text-center py-2" }, [
      _c("h4", [_vm._v("MONTHS")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [_c("h2", [_vm._v("TOTAL BOOKING ONLINE")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-12 text-center py-2" }, [
      _c("h4", [_vm._v("MONTHS")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [_c("h2", [_vm._v("TOTAL BOOKING ON THE SPOT")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-12 text-center py-2" }, [
      _c("h4", [_vm._v("MONTHS")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-12" }, [
      _c("h1", {}, [
        _vm._v("\n                    New Users\n                  ")
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);