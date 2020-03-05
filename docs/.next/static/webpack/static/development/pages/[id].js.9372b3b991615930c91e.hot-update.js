webpackHotUpdate("static/development/pages/[id].js",{

/***/ "./components/Gallery/Gallery.module.css":
/*!***********************************************!*\
  !*** ./components/Gallery/Gallery.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/postcss-loader/src??__nextjs_postcss!./Gallery.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./components/Gallery/Gallery.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/postcss-loader/src??__nextjs_postcss!./Gallery.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./components/Gallery/Gallery.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/postcss-loader/src??__nextjs_postcss!./Gallery.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./components/Gallery/Gallery.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/Gallery/index.js":
/*!*************************************!*\
  !*** ./components/Gallery/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_imageLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/imageLoader */ "./components/utilities/imageLoader.js");
/* harmony import */ var _Gallery_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gallery.module.css */ "./components/Gallery/Gallery.module.css");
/* harmony import */ var _Gallery_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Gallery_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ecuarezma/Desktop/WEB_DEV/PORTFOLIO/Entrantre.Next/components/Gallery/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Gallery = function Gallery(_ref) {
  var page = _ref.page;
  return __jsx("div", {
    className: _Gallery_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Gallery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, Object(_utilities_imageLoader__WEBPACK_IMPORTED_MODULE_1__["default"])(page));
};

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./components/Gallery/Gallery.module.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/src??__nextjs_postcss!./components/Gallery/Gallery.module.css ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Gallery_Gallery__2Ol_r {\n  display: flex;\n  flex-flow: column nowrap;\n}\n\n@media (min-width: 600px) {\n  .Gallery_Galery__3vdua {\n    flex-flow: row wrap;\n  }\n}\n", "",{"version":3,"sources":["Gallery.module.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF","file":"Gallery.module.css","sourcesContent":[".Gallery {\n  display: flex;\n  flex-flow: column nowrap;\n}\n\n@media (min-width: 600px) {\n  .Galery {\n    flex-flow: row wrap;\n  }\n}\n"]}]);
// Exports
exports.locals = {
	"Gallery": "Gallery_Gallery__2Ol_r",
	"Galery": "Gallery_Galery__3vdua"
};

/***/ })

})
//# sourceMappingURL=[id].js.9372b3b991615930c91e.hot-update.js.map