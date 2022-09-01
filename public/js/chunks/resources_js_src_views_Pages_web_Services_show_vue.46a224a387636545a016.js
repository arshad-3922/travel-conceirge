(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_Pages_web_Services_show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/web/Services/show.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/web/Services/show.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-slick-carousel */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.umd.js");
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-slick-carousel/dist/vue-slick-carousel.css */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.css");
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-slick-carousel/dist/vue-slick-carousel-theme.css */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css");


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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      service: {},
      base_url: base_url,
      categoryName: '',
      settings: {
        dots: true,
        focusOnSelect: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 1
      },
      isReadMore: true,
      isHide: false,
      iframeUrl: "https://squareup.com/appointments/buyer/widget/ee6om5x0vllf78/LBSNZD7101TRK?buttonTextColor=ffffff&amp;amp;color=006aff&amp;amp;locale=en&amp;amp;service_id="
    };
  },
  // computed: {
  // 	...mapState('web', ['service']),
  // },
  components: {
    VueSlickCarousel: (vue_slick_carousel__WEBPACK_IMPORTED_MODULE_1___default())
  },
  created: function created() {
    this.fetch();
    this.categoryName = this.$route.params.name;
    localStorage.setItem("service_id", this.$route.params.id);
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)("web", ["getAll"])), {}, {
    fetch: function fetch() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var serviceId, params, _yield$_this$getAll, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                serviceId = _this.$route.params.id;
                params = {
                  route: "api/web/serviceDetails",
                  mutation: "SET_SERVICE",
                  variable: "data",
                  data: {
                    id: serviceId
                  }
                };
                _context.next = 4;
                return _this.getAll(params);

              case 4:
                _yield$_this$getAll = _context.sent;
                data = _yield$_this$getAll.data;
                _this.service = data.data;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    bookAppointment: function bookAppointment(id) {
      $("#booking_container").attr("src", this.iframeUrl + id);
      $("iframe").on("load", function (e) {
        $(".loading").css("display", "none");
      });
    },
    readMore: function readMore(id, status) {
      var btn = document.getElementById("btn" + id).value;
      $("#" + id).toggleClass("interesting-para-custom pl-3");

      if (btn == 'Read More') {
        document.getElementById("btn" + id).setAttribute('value', 'Hide');
      }

      if (btn == 'Hide') {
        document.getElementById("btn" + id).setAttribute('value', 'Read More');
      }
    }
  })
});

/***/ }),

/***/ "./resources/js/src/views/Pages/web/Services/show.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/Pages/web/Services/show.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _show_vue_vue_type_template_id_aa07b6a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=aa07b6a4& */ "./resources/js/src/views/Pages/web/Services/show.vue?vue&type=template&id=aa07b6a4&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Pages/web/Services/show.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _show_vue_vue_type_template_id_aa07b6a4___WEBPACK_IMPORTED_MODULE_0__.render,
  _show_vue_vue_type_template_id_aa07b6a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Pages/web/Services/show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Pages/web/Services/show.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/Pages/web/Services/show.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/web/Services/show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/views/Pages/web/Services/show.vue?vue&type=template&id=aa07b6a4&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/Pages/web/Services/show.vue?vue&type=template&id=aa07b6a4& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_aa07b6a4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_aa07b6a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_aa07b6a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=template&id=aa07b6a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/web/Services/show.vue?vue&type=template&id=aa07b6a4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/web/Services/show.vue?vue&type=template&id=aa07b6a4&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/Pages/web/Services/show.vue?vue&type=template&id=aa07b6a4& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("section", { staticClass: "inner-banner" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12 position-rlative" }, [
            _c("img", {
              staticClass: "img-fluid w-100",
              attrs: {
                src: _vm.base_url + "/assets/web/images/inner-banner.png",
                alt: ""
              }
            }),
            _vm._v(" "),
            _c("h1", { staticClass: "inner-banner-heading" }, [
              _vm._v(_vm._s(_vm.categoryName))
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "intersting treatment-page" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12 text-center" }, [
            _c("h2", { staticClass: "main-heading-two-line-2" }, [
              _vm._v(_vm._s(_vm.categoryName) + " Services")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-9 mx-auto mt-lg-5 mt-3" }, [
            _vm.service.length > 0
              ? _c(
                  "div",
                  { staticClass: "row" },
                  _vm._l(_vm.service, function(item, index) {
                    return _c(
                      "div",
                      { key: index, staticClass: "col-lg-6 mt-4" },
                      [
                        _c("img", {
                          staticClass: "team-img pl-3",
                          attrs: {
                            src:
                              _vm.base_url +
                              "/assets/web/images/service-img.png",
                            alt: ""
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "interesting-div" }, [
                          _c(
                            "h3",
                            { staticClass: "interesting-heading2 pl-3" },
                            [_vm._v(_vm._s(item.item_data.name))]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "interesting-para-custom pl-3",
                              attrs: { id: item.id }
                            },
                            [_vm._v(_vm._s(item.item_data.description))]
                          ),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          item.item_data.description &&
                          item.item_data.description.length > 300
                            ? _c(
                                "a",
                                {
                                  staticClass: "custom-btn pl-3 pt-0",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("input", {
                                    staticClass: "custom-btn",
                                    attrs: {
                                      type: "button",
                                      id: "btn" + item.id,
                                      value: "Read More"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.readMore(item.id)
                                      }
                                    }
                                  })
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "yellow-btn mt-lg-5 mt-3 ml-3",
                              attrs: {
                                "data-toggle": "modal",
                                "data-target": "#inactive"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.bookAppointment(item.id)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                              Book an Appointment\n                            "
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  }),
                  0
                )
              : _c("div", { staticClass: "row" }, [_vm._m(0)])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-6 mt-4" }, [
      _c("div", { staticClass: "interesting-div" }, [
        _c("h3", { staticClass: "interesting-heading2 pl-3" }, [
          _vm._v("No Services Found!")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal fade bd-example-modal-lg",
        attrs: {
          id: "inactive",
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
            staticClass: "modal-dialog modal-dialog-centered modal-lg",
            attrs: { role: "document" }
          },
          [
            _c("div", { staticClass: "modal-content site-modal" }, [
              _c("i", {
                staticClass: "fas fa-times close modal-close",
                attrs: { "data-dismiss": "modal", "aria-label": "Close" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "text-center" }, [
                _c("div", { staticClass: "loading" }),
                _vm._v(" "),
                _c("iframe", {
                  staticStyle: {
                    "min-height": "500px",
                    width: "100%",
                    height: "100%",
                    border: "none"
                  },
                  attrs: { src: "", id: "booking_container" }
                })
              ])
            ])
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);