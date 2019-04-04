/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _shered_app_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shered/app/main */ \"./src/shered/app/main.js\");\n/* harmony import */ var _shered_app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shered/app/routes */ \"./src/shered/app/routes.js\");\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.static('public')); // make everything in the public folder available for us\n\napp.get('*', function (req, res, next) {\n  var activeRoute = _shered_app_routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"].find(function (route) {\n    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"matchPath\"])(req.url, route);\n  }) || {};\n  var promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path) : Promise.resolve();\n  promise.then(function (data) {\n    var context = {\n      data: data\n    };\n    var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"StaticRouter\"], {\n      location: req.url,\n      context: context\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shered_app_main__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)));\n    res.send(\"\\n            <!DOCTYPE html>\\n            <html dir=\\\"rtl\\\">\\n                <head>\\n                    <meta charset=\\\"UTF-8\\\">\\n                    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n                    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\">\\n                    <link href=\\\"https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900\\\" rel=\\\"stylesheet\\\">\\n                    <script src=\\\"https://unpkg.com/ionicons@4.5.5/dist/ionicons.js\\\"></script>\\n                    <script src='/bundle.js' defer></script>\\n                    <script>window.__INITIAL_DATA__ = \".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_4___default()(data), \"</script>\\n                    <title>SSR</title>\\n                </head>\\n                <body>\\n                    <div id=\\\"root\\\">\").concat(markup, \"</div>\\n                </body>\\n            </html>\\n        \"));\n  }).catch(next);\n});\nvar port = process.env.PORT || 5000;\napp.listen(port, function () {\n  console.log(\"Server start at \".concat(port));\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/shered/app/components/homePage/header/header.js":
/*!*************************************************************!*\
  !*** ./src/shered/app/components/homePage/header/header.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar */ \"./src/shered/app/components/homePage/header/navbar/navbar.js\");\n/* harmony import */ var _mainContent_mainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainContent/mainContent */ \"./src/shered/app/components/homePage/header/mainContent/mainContent.js\");\n\n\n\n\nvar header = function header(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header\",\n    style: props.translateValue\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mainContent_mainContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (header);\n\n//# sourceURL=webpack:///./src/shered/app/components/homePage/header/header.js?");

/***/ }),

/***/ "./src/shered/app/components/homePage/header/mainContent/mainContent.js":
/*!******************************************************************************!*\
  !*** ./src/shered/app/components/homePage/header/mainContent/mainContent.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar mainContent = function mainContent() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mainContent\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"mainContent-new\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\u05D7\\u05D3\\u05E9\"), \"\\u05D1\\u05D9\\u05D3\\u05E7\\u05D5 \\u05DE\\u05D4\\u05D5 \\u05E7\\u05D5\\u05DC\\u05D8 \\u05D4\\u05D0\\u05D3\\u05D9\\u05DD \\u05D4\\u05D8\\u05E8\\u05E0\\u05D3\\u05D9 \\u05D1\\u05D9\\u05D5\\u05EA\\u05E8 \\u05E9\\u05DC\\u05E0\\u05D5 >\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mainContent-paragraph\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"mainContent-paragraph-title\"\n  }, \"\\u05D8\\u05D5\\u05E8\\u05D1\\u05D5 \\u05D0\\u05D9\\u05D9\\u05E8 \\u05DB\\u05D9 \\u05DE\\u05D2\\u05D9\\u05E2 \\u05DC\\u05DA \\u05D9\\u05D5\\u05EA\\u05E8\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"mainContent-paragraph-text\"\n  }, \"\\u05E9\\u05DC\\u05E0\\u05D5 \\u05D1\\u05D9\\u05D3\\u05E7\\u05D5 \\u05DE\\u05D4\\u05D5 \\u05E7\\u05D5\\u05DC\\u05D8 \\u05D4\\u05D0\\u05D3\\u05D9\\u05DD \\u05D4\\u05D8\\u05E8\\u05E0\\u05D3\\u05D9 \\u05D1\\u05D9\\u05D5\\u05EA\\u05E8 \\u05E9\\u05DC\\u05E0\\u05D5 \\u05D1\\u05D9\\u05D3\\u05E7\\u05D5 \\u05DE\\u05D4\\u05D5 \\u05E7\\u05D5\\u05DC\\u05D8 \\u05D4\\u05D0\\u05D3\\u05D9\\u05DD \\u05D4\\u05D8\\u05E8\\u05E0\\u05D3\\u05D9 \\u05D1\\u05D9\\u05D5\\u05EA\\u05E8 \\u05E9\\u05DC\\u05E0\\u05D5\\u05E9\\u05DC\\u05E0\\u05D5 \\u05D1\\u05D9\\u05D3\\u05E7\\u05D5 \\u05DE\\u05D4\\u05D5 \\u05E7\\u05D5\\u05DC\\u05D8 \\u05D4\\u05D0\\u05D3\\u05D9\\u05DD \\u05D4\\u05D8\\u05E8\\u05E0\\u05D3\\u05D9 \\u05D1\\u05D9\\u05D5\\u05EA\\u05E8 \\u05E9\\u05DC\\u05E0\\u05D5 \\u05D1\\u05D9\\u05D3\\u05E7\\u05D5 \\u05DE\\u05D4\\u05D5 \\u05E7\\u05D5\\u05DC\\u05D8 \\u05D4\\u05D0\\u05D3\\u05D9\\u05DD \\u05D4\\u05D8\\u05E8\\u05E0\\u05D3\\u05D9 \\u05D1\\u05D9\\u05D5\\u05EA\\u05E8 \\u05E9\\u05DC\\u05E0\\u05D5\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mainContent-buttons\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\",\n    id: \"Link\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"mainContent-buttons-right\"\n  }, \"\\u05DE\\u05D5\\u05E6\\u05E8\\u05D9\\u05DD\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\",\n    id: \"Link\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"mainContent-buttons-left\"\n  }, \"\\u05D4\\u05E8\\u05E9\\u05DE\\u05D4\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mainContent);\n\n//# sourceURL=webpack:///./src/shered/app/components/homePage/header/mainContent/mainContent.js?");

/***/ }),

/***/ "./src/shered/app/components/homePage/header/navbar/hamburger/hamburger.js":
/*!*********************************************************************************!*\
  !*** ./src/shered/app/components/homePage/header/navbar/hamburger/hamburger.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar hamburger = function hamburger() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"hamburger hamburger--squeeze\",\n    type: \"button\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"hamburger-box\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"hamburger-inner\"\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (hamburger);\n\n//# sourceURL=webpack:///./src/shered/app/components/homePage/header/navbar/hamburger/hamburger.js?");

/***/ }),

/***/ "./src/shered/app/components/homePage/header/navbar/navbar.js":
/*!********************************************************************!*\
  !*** ./src/shered/app/components/homePage/header/navbar/navbar.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _toolTip_tooTip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolTip/tooTip */ \"./src/shered/app/components/homePage/header/navbar/toolTip/tooTip.js\");\n/* harmony import */ var _hamburger_hamburger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hamburger/hamburger */ \"./src/shered/app/components/homePage/header/navbar/hamburger/hamburger.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar navbar =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(navbar, _Component);\n\n  function navbar() {\n    var _this;\n\n    _classCallCheck(this, navbar);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(navbar).call(this));\n    _this.state = {\n      transform: \"scale(1)\",\n      transform2: \"scale(0)\",\n      transition: '0.3s',\n      translate: \"translateX(60px)\",\n      visibility: 'hidden',\n      opacity: '0'\n    };\n    return _this;\n  }\n\n  _createClass(navbar, [{\n    key: \"onClickSearch\",\n    value: function onClickSearch() {\n      if (this.state.transform === 'scale(1)') {\n        this.setState({\n          transform: 'scale(0)'\n        });\n        this.setState({\n          transform2: 'scale(1)'\n        });\n      } else {\n        this.setState({\n          transform: 'scale(1)'\n        });\n        this.setState({\n          transform2: 'scale(0)'\n        });\n      }\n    }\n  }, {\n    key: \"onMouseEnter\",\n    value: function onMouseEnter(e) {\n      if (e.target.id === 'nav-1') this.setState({\n        translate: 'translateX(65px)'\n      });\n      if (e.target.id === 'nav-2') this.setState({\n        translate: 'translateX(-70px)'\n      });\n      if (e.target.id === 'nav-3') this.setState({\n        translate: 'translateX(-200px)'\n      });\n      if (e.target.id === 'nav-4') this.setState({\n        translate: 'translateX(-330px)'\n      });\n      this.setState({\n        visibility: 'visible',\n        opacity: '1'\n      });\n    }\n  }, {\n    key: \"onMouseLeave\",\n    value: function onMouseLeave(e) {\n      this.setState({\n        visibility: 'hidden',\n        opacity: '0'\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var style = {\n        transform: this.state.transform,\n        transition: this.state.transition\n      };\n      var style2 = {\n        transform: this.state.transform2,\n        transition: this.state.transition\n      };\n      var style3 = {\n        transform: this.state.translate,\n        visibility: this.state.visibility,\n        opacity: this.state.opacity\n      };\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"navbar\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"navbar__inner\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hamburger_hamburger__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"navbar__inner-right\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        style: style,\n        onClick: function onClick() {\n          return _this2.onClickSearch();\n        },\n        className: \"navbar__inner-right-drop\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ion-icon\", {\n        name: \"search\",\n        id: \"search\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        style: style,\n        className: \"navbar__inner-right-drop\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"navbar__inner-right-drop-quantity\"\n      }, \"0\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ion-icon\", {\n        name: \"cart\",\n        id: \"cart\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        style: style2,\n        onClick: function onClick() {\n          return _this2.onClickSearch();\n        },\n        className: \"navbar__inner-right-drop\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ion-icon\", {\n        name: \"close\",\n        id: \"close\"\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: style2,\n        className: \"navbar__inner-searchFiled\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"navbar__inner-right-drop \"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ion-icon\", {\n        name: \"search\",\n        id: \"search2\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        name: \"search-filed\",\n        placeholder: \"\\u05D7\\u05D9\\u05E4\\u05D5\\u05E9...\",\n        type: \"text\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"navbar__inner-middle\",\n        onMouseLeave: function onMouseLeave(e) {\n          return _this2.onMouseLeave(e);\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        onMouseEnter: function onMouseEnter(e) {\n          return _this2.onMouseEnter(e);\n        },\n        style: {\n          transform: this.state.transform\n        },\n        id: \"nav-1\",\n        className: \"navbar__inner-middle-drop\"\n      }, \"\\u05DE\\u05D5\\u05E6\\u05E8\\u05D9\\u05DD\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        onMouseEnter: function onMouseEnter(e) {\n          return _this2.onMouseEnter(e);\n        },\n        style: {\n          transform: this.state.transform\n        },\n        id: \"nav-2\",\n        className: \"navbar__inner-middle-drop\"\n      }, \"\\u05DE\\u05D5\\u05E6\\u05E8\\u05D9\\u05DD\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        onMouseEnter: function onMouseEnter(e) {\n          return _this2.onMouseEnter(e);\n        },\n        style: {\n          transform: this.state.transform\n        },\n        id: \"nav-3\",\n        className: \"navbar__inner-middle-drop\"\n      }, \"\\u05D0\\u05D5\\u05D3\\u05D5\\u05EA\\u05D9\\u05E0\\u05D5\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        onMouseEnter: function onMouseEnter(e) {\n          return _this2.onMouseEnter(e);\n        },\n        style: {\n          transform: this.state.transform\n        },\n        id: \"nav-4\",\n        className: \"navbar__inner-middle-drop\"\n      }, \"\\u05EA\\u05DE\\u05D9\\u05DB\\u05D4\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_toolTip_tooTip__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        translateValue: style3,\n        onMouseLeave: function onMouseLeave(e) {\n          return _this2.onMouseLeave(e);\n        }\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"navbar__inner-left\"\n      }, \"turboair\")));\n    }\n  }]);\n\n  return navbar;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navbar);\n\n//# sourceURL=webpack:///./src/shered/app/components/homePage/header/navbar/navbar.js?");

/***/ }),

/***/ "./src/shered/app/components/homePage/header/navbar/toolTip/tooTip.js":
/*!****************************************************************************!*\
  !*** ./src/shered/app/components/homePage/header/navbar/toolTip/tooTip.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar toolTip = function toolTip(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tooltip\",\n    style: props.translateValue\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tooltip-cube\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"\\u05E7\\u05D8\\u05E2 \\u05DE\\u05E1\\u05D5\\u05D9\\u05D9\\u05DD \\u05E9\\u05E6\\u05E8\\u05D9\\u05DA \\u05DC\\u05D4\\u05D9\\u05DB\\u05E0\\u05E1 \\u05E4\\u05D4\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"\\u05E7\\u05D8\\u05E2 \\u05DE\\u05E1\\u05D5\\u05D9\\u05D9\\u05DD \\u05E9\\u05E6\\u05E8\\u05D9\\u05DA \\u05DC\\u05D4\\u05D9\\u05DB\\u05E0\\u05E1 \\u05E4\\u05D4\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"\\u05E7\\u05D8\\u05E2 \\u05DE\\u05E1\\u05D5\\u05D9\\u05D9\\u05DD \\u05E9\\u05E6\\u05E8\\u05D9\\u05DA \\u05DC\\u05D4\\u05D9\\u05DB\\u05E0\\u05E1 \\u05E4\\u05D4\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"\\u05E7\\u05D8\\u05E2 \\u05DE\\u05E1\\u05D5\\u05D9\\u05D9\\u05DD \\u05E9\\u05E6\\u05E8\\u05D9\\u05DA \\u05DC\\u05D4\\u05D9\\u05DB\\u05E0\\u05E1 \\u05E4\\u05D4\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"\\u05E7\\u05D8\\u05E2 \\u05DE\\u05E1\\u05D5\\u05D9\\u05D9\\u05DD \\u05E9\\u05E6\\u05E8\\u05D9\\u05DA \\u05DC\\u05D4\\u05D9\\u05DB\\u05E0\\u05E1 \\u05E4\\u05D4\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"\\u05E7\\u05D8\\u05E2 \\u05DE\\u05E1\\u05D5\\u05D9\\u05D9\\u05DD \\u05E9\\u05E6\\u05E8\\u05D9\\u05DA \\u05DC\\u05D4\\u05D9\\u05DB\\u05E0\\u05E1 \\u05E4\\u05D4\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (toolTip);\n\n//# sourceURL=webpack:///./src/shered/app/components/homePage/header/navbar/toolTip/tooTip.js?");

/***/ }),

/***/ "./src/shered/app/components/homePage/homePage.js":
/*!********************************************************!*\
  !*** ./src/shered/app/components/homePage/homePage.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header */ \"./src/shered/app/components/homePage/header/header.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar HomePage =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(HomePage, _Component);\n\n  function HomePage() {\n    _classCallCheck(this, HomePage);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(HomePage).apply(this, arguments));\n  }\n\n  _createClass(HomePage, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"homePage\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n    }\n  }]);\n\n  return HomePage;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\n//# sourceURL=webpack:///./src/shered/app/components/homePage/homePage.js?");

/***/ }),

/***/ "./src/shered/app/main.js":
/*!********************************!*\
  !*** ./src/shered/app/main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./src/shered/app/routes.js\");\n/* harmony import */ var _noMatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./noMatch */ \"./src/shered/app/noMatch.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n // import NAVBAR\n//import FOOTER\n\nvar Main =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Main, _Component);\n\n  function Main() {\n    _classCallCheck(this, Main);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Main).apply(this, arguments));\n  }\n\n  _createClass(Main, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"router-div\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, _routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map(function (_ref) {\n        var path = _ref.path,\n            exact = _ref.exact,\n            C = _ref.component,\n            rest = _objectWithoutProperties(_ref, [\"path\", \"exact\", \"component\"]);\n\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n          key: path,\n          path: path,\n          exact: exact,\n          render: function render(props) {\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(C, _extends({}, props, rest));\n          }\n        });\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n        render: function render(props) {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_noMatch__WEBPACK_IMPORTED_MODULE_3__[\"default\"], props);\n        }\n      })));\n    }\n  }]);\n\n  return Main;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\n//# sourceURL=webpack:///./src/shered/app/main.js?");

/***/ }),

/***/ "./src/shered/app/noMatch.js":
/*!***********************************!*\
  !*** ./src/shered/app/noMatch.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoMatch; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction NoMatch() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Four Oh Four\");\n}\n\n//# sourceURL=webpack:///./src/shered/app/noMatch.js?");

/***/ }),

/***/ "./src/shered/app/routes.js":
/*!**********************************!*\
  !*** ./src/shered/app/routes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_homePage_homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/homePage/homePage */ \"./src/shered/app/components/homePage/homePage.js\");\n\nvar routes = [{\n  path: '/',\n  exact: true,\n  component: _components_homePage_homePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"] //an example with route with fetching\n  // {\n  //     path: '/products',\n  //     component: Products,\n  //     fetchInitialDate: (path = '') => fetchPopularRepos(path.split('/').pop())\n  // }\n\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/shered/app/routes.js?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });