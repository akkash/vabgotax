module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+/Rj":
/***/ (function(module, exports) {

module.exports = require("react-id-swiper");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "1/T7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Stars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("CIrI");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["a"] = (props => {
  const data = props.data;
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "h-100 border-0 shadow"
  }, __jsx("div", {
    style: {
      backgroundImage: `url(/content/img/photo/${data.image})`,
      minHeight: "200px"
    },
    className: "card-img-top overflow-hidden dark-overlay bg-cover"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: data.link
  }, __jsx("a", {
    className: "tile-link"
  })), __jsx("div", {
    className: "card-img-overlay-bottom z-index-20"
  }, __jsx("h4", {
    className: "text-white text-shadow"
  }, data.name), __jsx("p", {
    className: "mb-2 text-xs"
  }, __jsx(_components_Stars__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    stars: data.stars
  }))), __jsx("div", {
    className: "card-img-overlay-top d-flex justify-content-between align-items-center"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    pill: true,
    color: "transparent",
    className: "px-3 py-2"
  }, data.category), __jsx("a", {
    href: "#",
    className: "card-fav-icon position-relative z-index-40"
  }, __jsx("svg", {
    className: "svg-icon text-white"
  }, __jsx("use", {
    xlinkHref: "/content/svg/orion-svg-sprite.svg#heart-1"
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, __jsx("p", {
    className: "text-sm text-muted mb-3"
  }, data.about.substring(0, 115) + '...'), __jsx("p", {
    className: "text-sm text-muted text-uppercase mb-1"
  }, "By", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "user-profile"
  }, __jsx("a", {
    className: "text-dark ml-1"
  }, data.person))), __jsx("p", {
    className: "text-sm mb-0"
  }, data.tags.map((tag, index) => __jsx("a", {
    key: index,
    className: "mr-1",
    href: "#"
  }, tag, index < data.tags.length - 1 && ',')))));
});

/***/ }),

/***/ "1OuS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Stars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("CIrI");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["a"] = (props => {
  const data = props.data;
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "h-100 border-0 shadow"
  }, __jsx("div", {
    className: "card-img-top overflow-hidden gradient-overlay"
  }, __jsx("img", {
    src: `/content/img/photo/${data.image}`,
    alt: data.name,
    className: "img-fluid"
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "detail-rooms"
  }, __jsx("a", {
    className: "tile-link"
  })), __jsx("div", {
    className: "card-img-overlay-bottom z-index-20"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Media"], {
    className: "text-white text-sm align-items-center"
  }, __jsx("img", {
    src: `/content/${data.avatar}`,
    alt: data.person,
    className: "avatar avatar-border-white mr-2"
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Media"], {
    body: true
  }, data.person))), __jsx("div", {
    className: "card-img-overlay-top text-right"
  }, __jsx("a", {
    className: "card-fav-icon position-relative z-index-40",
    href: "#"
  }, __jsx("svg", {
    className: "svg-icon text-white"
  }, __jsx("use", {
    xlinkHref: "/content/svg/orion-svg-sprite.svg#heart-1"
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    className: "d-flex align-items-center"
  }, __jsx("div", {
    className: "w-100"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    tag: "h6"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "detail-rooms"
  }, __jsx("a", {
    className: "text-decoration-none text-dark"
  }, data.name))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardSubtitle"], {
    className: "d-flex mb-3"
  }, __jsx("p", {
    className: "flex-grow-1 mb-0 text-muted text-sm"
  }, data.subtitle), __jsx("p", {
    className: "flex-shrink-1 mb-0 card-stars text-xs text-right"
  }, __jsx(_Stars__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    stars: data.stars
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    className: "text-muted"
  }, __jsx("span", {
    className: "h4 text-primary"
  }, "$", data.price), "\xA0per night"))));
});

/***/ }),

/***/ "1qLE":
/***/ (function(module) {

module.exports = JSON.parse("[{\"link\":\"#\",\"img\":\"img/instagram/instagram-1.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-2.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-3.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-4.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-5.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-6.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-7.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-8.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-9.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-10.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-11.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-12.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-13.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-14.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-10.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-11.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-12.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-13.jpg\"},{\"link\":\"#\",\"img\":\"img/instagram/instagram-14.jpg\"}]");

/***/ }),

/***/ "26xf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["a"] = (props => {
  const data = props.data;
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "h-100 border-0 shadow"
  }, __jsx("div", {
    className: "card-img-top overflow-hidden gradient-overlay"
  }, __jsx("img", {
    src: `/content/${data.img}`,
    alt: data.title,
    className: "img-fluid"
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: data.link
  }, __jsx("a", {
    className: "tile-link"
  })), __jsx("div", {
    className: "card-img-overlay-top text-right"
  }, __jsx("a", {
    href: "#",
    className: "card-fav-icon position-relative z-index-40"
  }, __jsx("svg", {
    className: "svg-icon text-white"
  }, __jsx("use", {
    xlinkHref: "/content/svg/orion-svg-sprite.svg#heart-1"
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    className: "d-flex align-items-center"
  }, __jsx("div", {
    className: "w-100"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    tag: "h6"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: data.link
  }, __jsx("a", {
    className: "text-decoration-none text-dark"
  }, data.title))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardSubtitle"], {
    className: "text-sm text-secondary mb-2",
    tag: "p"
  }, __jsx("i", {
    className: "fa fa-map-marker text-secondary opacity-4 mr-1"
  }), data.location), __jsx("p", {
    className: "text-sm text-muted text-uppercase"
  }, data.type), __jsx("p", {
    className: "card-text d-flex justify-content-between text-gray-800 text-sm"
  }, __jsx("span", {
    className: "mr-1"
  }, __jsx("i", {
    className: "fa fa-ruler-combined text-primary opacity-4 text-xs mr-1"
  }), data.meters, " Sq Ft"), __jsx("span", null, __jsx("i", {
    className: "fa fa-rupee-sign text-primary opacity-4 text-xs mr-1"
  }), data.price, " Sq Ft")))));
});

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KCZ3");


/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3mPS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vtRj");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["a"] = (props => {
  const customSelectStyles = {
    control: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
      borderStyle: 'transparent'
    }),
    indicatorSeparator: (provided, state) => ({
      display: 'none'
    }),
    menu: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
      color: 'red',
      border: '0 solid #fff',
      boxShadow: '0 0 1.2rem rgba(0, 0, 0, .15)'
    })
  };
  return __jsx("div", {
    className: `search-bar ${props.className}`
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "4",
    className: "d-flex align-items-center form-group"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    name: "search",
    placeholder: "What are you searching for?",
    className: "border-0 shadow-0"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "3",
    md: props.halfInputs ? "6" : "12",
    className: "d-flex align-items-center form-group"
  }, __jsx("div", {
    className: "input-label-absolute input-label-absolute-right w-100"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    for: "location",
    className: "label-absolute"
  }, __jsx("i", {
    className: "fa fa-crosshairs"
  }), __jsx("span", {
    className: "sr-only"
  }, "City")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    name: "location",
    placeholder: "Location",
    id: "location",
    className: "border-0 shadow-0"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "3",
    md: props.halfInputs ? "6" : "12",
    className: "d-flex align-items-center form-group no-divider"
  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "reactselect",
    options: props.options,
    placeholder: "Categories",
    className: "selectpicker",
    classNamePrefix: "selectpicker",
    styles: customSelectStyles
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "2",
    className: props.btnMb ? `mb-${props.btnMb}` : ``
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    color: "primary",
    className: `btn-block h-100 ${props.btnClassName ? props.btnClassName : ""}`
  }, "Search")))));
});

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "9cbB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardRestaurant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1/T7");
/* harmony import */ var _CardRoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1OuS");
/* harmony import */ var _CardPoster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("pIS+");
/* harmony import */ var _CardProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("26xf");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("+/Rj");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/* harmony default export */ __webpack_exports__["a"] = (props => {
  const breakpoints = [];

  if (props.sm) {
    breakpoints[565] = {
      slidesPerView: props.sm
    };
  }

  if (props.md) {
    breakpoints[768] = {
      slidesPerView: props.md
    };
  }

  if (props.lg) {
    breakpoints[991] = {
      slidesPerView: props.lg
    };
  }

  if (props.xl) {
    breakpoints[1200] = {
      slidesPerView: props.xl
    };
  }

  if (props.xxl) {
    breakpoints[1400] = {
      slidesPerView: props.xxl
    };
  }

  if (props.xxxl) {
    breakpoints[1600] = {
      slidesPerView: props.xxxl
    };
  }

  const params = {
    containerClass: `swiper-container ${props.className}`,
    slidesPerView: props.perView,
    effect: props.effect,
    allowTouchMove: props.allowTouchMove === false ? false : true,
    spaceBetween: props.spaceBetween,
    centeredSlides: props.centeredSlides,
    roundLengths: props.roundLengths,
    loop: props.loop,
    speed: props.speed ? props.speed : 400,
    parallax: props.parallax,
    breakpoints: breakpoints,
    autoplay: props.autoplay ? {
      delay: props.delay
    } : false,
    pagination: props.pagination !== false ? {
      el: `.swiper-pagination.${props.paginationClass}`,
      clickable: true,
      dynamicBullets: true
    } : false,
    navigation: {
      nextEl: props.navigation ? '.swiper-button-next' : '',
      prevEl: props.navigation ? '.swiper-button-prev' : ''
    },
    wrapperClass: `swiper-wrapper ${props.wrapperClass ? props.wrapperClass : ''}`
  };
  return props.data ? __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_5___default.a, params, props.data.map((slide, index) => props.simple ? __jsx("div", {
    key: slide,
    style: {
      backgroundImage: `url(/content/img/photo/${slide})`
    }
  }) : __jsx("div", {
    key: index,
    className: "h-auto px-2"
  }, props.cards && __jsx("div", {
    className: "w-100 h-100 hover-animate"
  }, __jsx(_CardRoom__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    data: slide.properties
  })), props.propertyCards && __jsx("div", {
    className: "w-100 h-100 hover-animate"
  }, __jsx(_CardProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    data: slide
  })), props.imgCards && __jsx(_CardPoster__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    data: slide
  }), props.restaurantCards && __jsx("div", {
    className: "w-100 h-100 hover-animate"
  }, __jsx(_CardRestaurant__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    data: slide.properties
  }))))) : 'loading';
});

/***/ }),

/***/ "Aof9":
/***/ (function(module) {

module.exports = JSON.parse("{\"hero\":{\"title\":\"Discover Directory\",\"subTitle\":\"Uncover the best places to eat, drink, and shop nearest to you.\",\"img\":\"img/photo/photo-1525610553991-2bede1a236e2.jpg\"},\"searchOptions\":[{\"value\":\"small\",\"label\":\"Restaurants\"},{\"value\":\"medium\",\"label\":\"Hotels\"},{\"value\":\"large\",\"label\":\"Cafes\"},{\"value\":\"x-large\",\"label\":\"Garages\"}],\"popularCities\":{\"title\":\"What's trending\",\"subTitle\":\"Most popular cities\"},\"discover\":{\"title\":\"Discover great local businesses around you\",\"subTitle\":\"One-of-a-kind directory app\",\"blocks\":[{\"title\":\"Find the perfect place\",\"content\":\"One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in\",\"icon\":\"#love-pin-1\",\"color\":\"secondary\"},{\"title\":\"Book your seats\",\"content\":\"The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit\",\"icon\":\"#pay-by-card-1\",\"color\":\"primary\"},{\"title\":\"Enjoy your evening\",\"content\":\"His room, a proper human room although a little too small, lay peacefully between its four familiar\",\"icon\":\"#food-1\",\"color\":\"secondary\"},{\"title\":\"Earn points\",\"content\":\"Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of\",\"icon\":\"#pay-1\",\"color\":\"primary\"}]},\"popular\":{\"title\":\"Popular places around you\",\"subTitle\":\"Try something new today\",\"button\":\"See all places\",\"buttonLink\":\"category-2\"},\"travel\":{\"title\":\"Travel & Explore\",\"subtitle\":\"Find the best spots\",\"content\":\"One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections\",\"button\":\"Get started\",\"buttonLink\":\"category-rooms\",\"img\":\"photo-1507915135761-41a0a222c709.jpg\"},\"brands\":{\"title\":\"Our brands\",\"brands\":[{\"title\":\"Brand 1\",\"img\":\"img/brand/brand-1.svg\"},{\"title\":\"Brand 2\",\"img\":\"img/brand/brand-2.svg\"},{\"title\":\"Brand 3\",\"img\":\"img/brand/brand-3.svg\"},{\"title\":\"Brand 4\",\"img\":\"img/brand/brand-4.svg\"},{\"title\":\"Brand 5\",\"img\":\"img/brand/brand-5.svg\"},{\"title\":\"Brand 6\",\"img\":\"img/brand/brand-6.svg\"},{\"title\":\"Brand 1\",\"img\":\"img/brand/brand-1.svg\"},{\"title\":\"Brand 2\",\"img\":\"img/brand/brand-2.svg\"},{\"title\":\"Brand 3\",\"img\":\"img/brand/brand-3.svg\"},{\"title\":\"Brand 4\",\"img\":\"img/brand/brand-4.svg\"}]},\"bottomBlock\":{\"title\":\"Start using Directory today\",\"subTitle\":\"Directory is the best way to find & discover great local businesses\",\"content\":\"One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in\",\"button\":\"Create Your Account\",\"buttonLink\":\"#\",\"small\":\"It's free!\"}}");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "BhOx":
/***/ (function(module) {

module.exports = JSON.parse("{\"button\":\"See all cities\",\"buttonLink\":\"category\",\"cities\":[{\"title\":\"Chennai\",\"img\":\"img/photo/CH_city.jpg\",\"link\":\"category-3\"},{\"title\":\"Coimbatore\",\"img\":\"img/photo/cbe_isha.jpg\",\"link\":\"category-3\"},{\"title\":\"Madurai\",\"img\":\"img/photo/md_city.jpg\",\"link\":\"category-3\"},{\"title\":\"Erode\",\"img\":\"img/photo/ed_city.jpg\",\"link\":\"category-3\"},{\"title\":\"Trichy\",\"img\":\"img/photo/tr_city.jpg\",\"link\":\"category-3\"}]}");

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "CIrI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["a"] = (props => {
  const starsArray = [];

  for (let i = 1; i <= 5; i++) {
    i <= props.stars ? starsArray.push(__jsx("i", {
      key: i,
      className: `fa ${props.size ? `fa-` + props.size : ""} fa-star ${props.color ? props.color : "text-warning"}`
    })) : starsArray.push(__jsx("i", {
      key: i,
      className: `fa fa-star ${props.size ? `fa-` + props.size : ""} text-gray-300`
    }));
  }

  return starsArray;
});

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "KCZ3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9cbB");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("3mPS");
/* harmony import */ var _components_PopularCities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("RBRr");
/* harmony import */ var _components_Discover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("t7JC");
/* harmony import */ var _components_Instagram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("LUFw");
/* harmony import */ var _components_Brands__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("pB4U");
/* harmony import */ var _data_index2_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Aof9");
var _data_index2_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t("Aof9", 1);
/* harmony import */ var _data_restaurants_geojson_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("osud");
var _data_restaurants_geojson_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t("osud", 1);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white"
      },
      title: 'Restaurants'
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.hero && __jsx("section", {
    style: {
      backgroundImage: `url(content/${_data_index2_json__WEBPACK_IMPORTED_MODULE_9__.hero.img})`
    },
    className: "d-flex align-items-center dark-overlay bg-cover"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "py-6 py-lg-7 text-white overlay-content text-center"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xl: "10",
    className: "mx-auto"
  }, __jsx("h1", {
    className: "display-3 font-weight-bold text-shadow"
  }, _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.hero.title), __jsx("p", {
    className: "text-lg text-shadow"
  }, _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.hero.subTitle))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    options: _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.searchOptions,
    className: "rounded p-3 p-lg-4 position-relative mt-n5 z-index-20",
    halfInputs: true,
    btnMb: "0"
  })), _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.popularCities && __jsx(_components_PopularCities__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    title: _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.popularCities.title,
    subTitle: _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.popularCities.subTitle
  }), _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.discover && __jsx(_components_Discover__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    className: "pt-4 pb-6",
    title: _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.discover.title,
    subTitle: _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.discover.subTitle,
    blocks: _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.discover.blocks
  }), _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.popular && __jsx("section", {
    className: "py-6 bg-gray-100"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx("div", {
    className: "text-center pb-lg-4"
  }, __jsx("p", {
    className: "subtitle text-secondary"
  }, _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.popular.subTitle), __jsx("h2", {
    className: "mb-5"
  }, _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.popular.title))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true
  }, __jsx(_components_Swiper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    className: "swiper-container-mx-negative items-slider-full px-lg-5 pt-3 pb-5",
    perView: 1,
    spaceBetween: 20,
    loop: true,
    roundLengths: true,
    md: 2,
    lg: 3,
    xl: 4,
    xxl: 5,
    xxxl: 6,
    data: _data_restaurants_geojson_json__WEBPACK_IMPORTED_MODULE_10__.features,
    restaurantCards: true
  }), __jsx("div", {
    className: "text-center mt-5"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.popular.buttonLink
  }, __jsx("a", {
    className: "btn btn-outline-primary"
  }, _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.popular.button))))), _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.travel && __jsx("section", {
    className: "py-6 py-lg-7 position-relative dark-overlay"
  }, __jsx("img", {
    src: `/content/img/photo/${_data_index2_json__WEBPACK_IMPORTED_MODULE_9__.travel.img}`,
    alt: _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.travel.title,
    className: "bg-image"
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx("div", {
    className: "overlay-content text-white py-lg-5 text-center"
  }, __jsx("p", {
    className: "subtitle text-white letter-spacing-4 mb-4"
  }, _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.travel.subtitle), __jsx("h3", {
    className: "display-3 font-weight-bold text-serif text-shadow mb-5"
  }, _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.travel.title), __jsx("p", {
    className: "lead text-shadow mb-5"
  }, _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.travel.content), __jsx("a", {
    href: _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.travel.buttonLink,
    className: "btn btn-primary"
  }, _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.travel.button)))), _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.brands && __jsx(_components_Brands__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    title: _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.brands.title,
    brands: _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.brands.brands
  }), _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.bottomBlock && __jsx("section", {
    className: "py-6 bg-gray-100"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "6",
    className: "mb-5 mb-lg-0 text-center text-lg-left"
  }, __jsx("p", {
    className: "subtitle text-secondary"
  }, _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.bottomBlock.title), __jsx("p", {
    className: "text-lg"
  }, _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.bottomBlock.subTitle), __jsx("p", {
    className: "text-muted mb-0"
  }, _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.bottomBlock.content)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "6",
    className: "d-flex align-items-center justify-content-center"
  }, __jsx("div", {
    className: "text-center"
  }, __jsx("p", {
    className: "mb-2"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.bottomBlock.buttonLink
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    href: _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.bottomBlock.buttonLink,
    color: "primary",
    size: "lg"
  }, _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.bottomBlock.button))), __jsx("p", {
    className: "text-muted text-small"
  }, _data_index2_json__WEBPACK_IMPORTED_MODULE_9__.bottomBlock.small)))))), __jsx(_components_Instagram__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null));
});

/***/ }),

/***/ "LUFw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+/Rj");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_instagram_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("1qLE");
var _data_instagram_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t("1qLE", 1);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["a"] = (() => {
  const params = {
    containerClass: `swiper-container instagram-slider`,
    slidesPerView: 4,
    breakpoints: {
      1900: {
        slidesPerView: 16
      },
      1500: {
        slidesPerView: 12
      },
      1200: {
        slidesPerView: 10
      },
      991: {
        slidesPerView: 8
      },
      768: {
        slidesPerView: 5
      }
    }
  };
  return __jsx("section", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: true,
    className: "px-0"
  }, __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default.a, params, _data_instagram_json__WEBPACK_IMPORTED_MODULE_4__ && _data_instagram_json__WEBPACK_IMPORTED_MODULE_4__.map((img, index) => __jsx("div", {
    key: index,
    className: "overflow-hidden"
  }, __jsx("a", {
    href: img.link
  }, __jsx("img", {
    src: `/content/${img.img}`,
    alt: "",
    className: "img-fluid hover-scale"
  })))))));
});

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RBRr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_popular_cities_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BhOx");
var _data_popular_cities_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t("BhOx", 1);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["a"] = (props => {
  return __jsx("section", {
    className: `py-6 ${props.greyBackground ? 'bg-gray-100' : ''}`
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "mb-5"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "8"
  }, __jsx("p", {
    className: "subtitle text-primary"
  }, props.subTitle), __jsx("h2", null, props.title)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "4",
    className: "d-md-flex align-items-center justify-content-end"
  }, _data_popular_cities_json__WEBPACK_IMPORTED_MODULE_3__.buttonLink && __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _data_popular_cities_json__WEBPACK_IMPORTED_MODULE_3__.buttonLink
  }, __jsx("a", {
    className: "text-muted text-sm"
  }, _data_popular_cities_json__WEBPACK_IMPORTED_MODULE_3__.button, __jsx("i", {
    className: "fas fa-angle-double-right ml-2"
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, _data_popular_cities_json__WEBPACK_IMPORTED_MODULE_3__.cities && _data_popular_cities_json__WEBPACK_IMPORTED_MODULE_3__.cities.map((city, index) => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    key: index,
    lg: index === 0 ? "8" : "4",
    className: "d-flex align-items-lg-stretch mb-4"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: {
      background: `url(content/${city.img}) no-repeat center`,
      backgroundSize: 'cover'
    },
    className: "shadow-lg border-0 w-100 border-0 hover-animate"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: city.link
  }, __jsx("a", {
    className: "tile-link"
  })), __jsx("div", {
    className: "d-flex align-items-center h-100 text-white justify-content-center py-6 py-lg-7"
  }, __jsx("h3", {
    className: "text-shadow text-uppercase mb-0"
  }, city.title))))))));
});

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "osud":
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"FeatureCollection\",\"features\":[{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-73.99967,40.73723]},\"properties\":{\"id\":\"59c0c8e33b1527bfe2abaf92\",\"index\":0,\"isActive\":true,\"logo\":\"http://placehold.it/32x32\",\"image\":\"restaurant-1430931071372-38127bd472b8.jpg\",\"link\":\"detail\",\"name\":\"Blue Hill\",\"category\":\"Restaurants\",\"person\":\"Bianca Briggs\",\"email\":\"biancabriggs@bluehill.com\",\"stars\":4,\"phone\":\"+1 (920) 407-3975\",\"address\":\"151 Karweg Place, Waumandee, Iowa, 5508\",\"about\":\"Cupidatat excepteur non dolore laborum et quis nostrud veniam dolore deserunt. Pariatur dolore ut in elit id nulla. Irure nostrud sint deserunt enim Lorem. Do eu esse consequat mollit labore commodo officia labore voluptate sit voluptate cupidatat.\\r\\n\",\"tags\":[\"Restaurant\",\"Contemporary\"]}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-73.9906951,40.7384555]},\"properties\":{\"id\":\"59c0c8e322f3375db4d89128\",\"index\":1,\"isActive\":true,\"logo\":\"http://placehold.it/32x32\",\"image\":\"restaurant-1436018626274-89acd1d6ec9d.jpg\",\"link\":\"detail\",\"name\":\"Plutorque\",\"category\":\"Restaurant\",\"person\":\"Bianca Briggs\",\"email\":\"biancabriggs@plutorque.com\",\"stars\":5,\"phone\":\"+1 (986) 599-2693\",\"address\":\"325 Seton Place, Castleton, Indiana, 3368\",\"about\":\"Proident irure eiusmod velit veniam consectetur id minim irure et nostrud mollit magna velit. Commodo amet proident aliqua qui enim exercitation ipsum laborum Lorem. Irure nostrud sint deserunt enim Lorem. Do eu esse consequat mollit labore commodo officia labore voluptate sit voluptate cupidatat.\\r\\n\",\"tags\":[\"Restaurant\",\"Fusion\"]}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-74.0014247,40.732346]},\"properties\":{\"id\":\"59c0c8e3a31e62979bf147c9\",\"index\":2,\"isActive\":true,\"logo\":\"http://placehold.it/32x32\",\"image\":\"restaurant-1466978913421-dad2ebd01d17.jpg\",\"link\":\"detail\",\"name\":\"Junipoor\",\"category\":\"Music club\",\"person\":\"Bianca Briggs\",\"email\":\"biancabriggs@junipoor.com\",\"stars\":5,\"phone\":\"+1 (863) 446-2211\",\"address\":\"397 Crystal Street, Idledale, Nebraska, 4692\",\"about\":\"Lorem amet ex duis in et fugiat consectetur laborum eiusmod labore. Quis cupidatat et do dolor in in magna. Eu sit quis cillum proident pariatur commodo consequat ea sunt mollit. Ad aliquip aliquip amet occaecat aute incididunt ex sit culpa adipisicing amet officia nisi. Commodo amet proident aliqua qui enim exercitation ipsum laborum Lorem.\\r\\n\",\"tags\":[\"Music\",\"Techno\",\"House\"]}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-73.9969277,40.7246413]},\"properties\":{\"id\":\"59c0c8e3503eb77d487e8082\",\"index\":3,\"isActive\":false,\"logo\":\"http://placehold.it/32x32\",\"image\":\"restaurant-1477763858572-cda7deaa9bc5.jpg\",\"link\":\"detail\",\"name\":\"Musix\",\"category\":\"Music club\",\"person\":\"Bianca Briggs\",\"email\":\"biancabriggs@musix.com\",\"stars\":3,\"phone\":\"+1 (862) 498-2322\",\"address\":\"828 Dewitt Avenue, Wyano, Nevada, 5082\",\"about\":\"Deserunt eiusmod Lorem proident consequat elit culpa laboris ea cupidatat. Consequat dolore proident ipsum qui sint enim id in non et duis sunt aute qui. Laboris deserunt enim exercitation do consequat irure dolor ipsum commodo est fugiat qui mollit.\\r\\n\",\"tags\":[\"Music\",\"Club\",\"Rock\"]}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-73.9893617,40.741726]},\"properties\":{\"id\":\"59c0c8e39aa2eed0626e485d\",\"index\":4,\"isActive\":false,\"logo\":\"http://placehold.it/32x32\",\"image\":\"restaurant-1504087697492-238a6bf49ce8.jpg\",\"link\":\"detail\",\"name\":\"Prosure\",\"category\":\"Restaurant\",\"person\":\"Bianca Briggs\",\"email\":\"biancabriggs@prosure.com\",\"stars\":5,\"phone\":\"+1 (831) 587-2089\",\"address\":\"942 Greenpoint Avenue, Northridge, Puerto Rico, 8248\",\"about\":\"Cillum sunt reprehenderit ea non irure veniam dolore commodo labore fugiat est consequat velit. Cupidatat nisi qui ad sit ut labore id esse tempor proident enim exercitation est aliquip. Ipsum deserunt dolor proident sunt ut proident esse do pariatur duis incididunt id ullamco. Dolore proident consectetur dolor irure mollit commodo sunt dolore.  \\r\\n\",\"tags\":[\"Nisi\",\"Ex\",\"Eiusmod\"]}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-73.96,40.741726]},\"properties\":{\"id\":\"59c0c8e39aa2edasd626e485d\",\"index\":5,\"isActive\":false,\"logo\":\"http://placehold.it/32x32\",\"image\":\"restaurant-1505275350441-83dcda8eeef5.jpg\",\"link\":\"detail\",\"name\":\"Take That\",\"category\":\"Café\",\"person\":\"Bianca Briggs\",\"email\":\"biancabriggs@prosure.com\",\"stars\":4,\"phone\":\"+1 (831) 587-2089\",\"address\":\"942 Greenpoint Avenue, Northridge, Puerto Rico, 8248\",\"about\":\"Cillum sunt reprehenderit ea non irure veniam dolore commodo labore fugiat est consequat velit. Cupidatat nisi qui ad sit ut labore id esse tempor proident enim exercitation est aliquip. Ipsum deserunt dolor proident sunt ut proident esse do pariatur duis incididunt id ullamco. Dolore proident consectetur dolor irure mollit commodo sunt dolore.  \\r\\n\",\"tags\":[\"Nisi\",\"Ex\",\"Eiusmod\"]}}]}");

/***/ }),

/***/ "pB4U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+/Rj");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["a"] = (props => {
  const params = {
    containerClass: `swiper-container brands-slider pb-5`,
    slidesPerView: 2,
    spaceBetween: 15,
    loop: true,
    roundLengths: true,
    pagination: {
      el: `.swiper-pagination`,
      clickable: true,
      dynamicBullets: true
    },
    breakpoints: {
      1200: {
        slidesPerView: 6
      },
      991: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 3
      }
    }
  };
  return __jsx("section", {
    className: `py-6 ${props.greyBackground ? 'bg-gray-100' : ''}`
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx("h5", {
    className: "text-center text-uppercase letter-spacing-3 mb-5"
  }, props.title), __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default.a, params, props.brands.map((brand, index) => __jsx("div", {
    key: index,
    className: "h-auto d-flex align-items-center justify-content-center"
  }, __jsx("img", {
    src: `/content/${brand.img}`,
    alt: brand.title,
    className: "img-fluid w-6rem opacity-7"
  }))))));
});

/***/ }),

/***/ "pIS+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["a"] = (props => {
  const data = props.data;
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "card-poster gradient-overlay hover-animate mb-4 mb-lg-0"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: data.link
  }, __jsx("a", {
    className: "tile-link"
  })), __jsx("img", {
    src: `/content/${data.img}`,
    alt: "Card image",
    className: "bg-image"
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    className: "card-body overlay-content"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    tag: "h6",
    className: "card-title text-shadow text-uppercase"
  }, data.title), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    className: "card-text text-sm"
  }, data.subtitle)));
});

/***/ }),

/***/ "t7JC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["a"] = (props => {
  return __jsx("section", {
    className: props.className
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx("div", {
    className: "pb-lg-4"
  }, __jsx("p", {
    className: "subtitle text-secondary"
  }, props.subTitle), __jsx("h2", {
    className: "mb-5"
  }, props.title)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, props.blocks.map(block => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    key: block.title,
    sm: "6",
    lg: 12 / props.blocks.length,
    className: "mb-3 mb-lg-0"
  }, __jsx("div", {
    className: "px-0 pr-lg-3"
  }, __jsx("div", {
    className: `icon-rounded mb-3 bg-${block.color}-light`
  }, __jsx("svg", {
    className: `svg-icon w-2rem h-2rem text-${block.color}`
  }, __jsx("use", {
    xlinkHref: `content/svg/orion-svg-sprite.svg${block.icon}`
  }))), __jsx("h3", {
    className: "h6 text-uppercase"
  }, block.title), __jsx("p", {
    className: "text-muted text-sm"
  }, block.content)))))));
});

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "vtRj":
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ })

/******/ });