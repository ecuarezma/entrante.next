webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_utilities_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/utilities/images */ "./components/utilities/images.js");

var _jsxFileName = "/Users/ecuarezma/Desktop/WEB_DEV/PORTFOLIO/Entrantre.Next/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var style = {
  main: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    margin: "calc(75px + 4rem) 4rem"
  },
  image: {
    width: "100%"
  }
};

var Homepage = function Homepage() {
  var _useState = useState(true),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  useEffect(function () {
    setLoading(false);
  });
  var display = isLoading ? __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Loading") : __jsx("header", {
    style: style.main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Edgar Cuarezma"), __jsx("img", {
    style: style.image,
    src: "../images/home/".concat(_components_utilities_images__WEBPACK_IMPORTED_MODULE_2__["default"].home),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Fine Art Illustration"));
  return display;
};

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ })

})
//# sourceMappingURL=index.js.29722e9963f700579d07.hot-update.js.map