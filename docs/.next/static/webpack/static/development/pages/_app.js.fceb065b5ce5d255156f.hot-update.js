webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Navbar/index.js":
/*!************************************!*\
  !*** ./components/Navbar/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NavLink */ "./components/NavLink/index.js");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar.module.css */ "./components/Navbar/Navbar.module.css");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/ecuarezma/Desktop/WEB_DEV/PORTFOLIO/Entrantre.Next/components/Navbar/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // import { useRouter } from "next/router";




var Navbar = function Navbar() {
  // const router = useRouter();
  // const [isActive, setActive] = useState(false);
  // const handleToggle = id => {
  //   setActive(false);
  //   if (router.query.id === id) {
  //     setActive(true);
  //   }
  // };
  return __jsx("nav", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.Navbar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("li", {
    onClick: function onClick() {
      var links = document.querySelectorAll("li a");

      Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(links).map(function (link) {
        link.classList.remove("active");
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "home"))), __jsx(_NavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "paintings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_NavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "drawings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_NavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "studies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("a", {
    style: {
      textDecoration: "line-through",
      color: "rgba(0, 0, 0, 0.5)",
      cursor: "default"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "store"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("a", {
    style: {
      textDecoration: "line-through",
      color: "rgba(0, 0, 0, 0.5)",
      cursor: "default"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "blog")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=_app.js.fceb065b5ce5d255156f.hot-update.js.map