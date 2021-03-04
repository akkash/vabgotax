module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		25: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../" + ({}[chunkId]||chunkId) + "." + {"0":"a0ddf30515dd61661b80"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+/Rj":
/***/ (function(module, exports) {

module.exports = require("react-id-swiper");

/***/ }),

/***/ "/NLt":
/***/ (function(module) {

module.exports = JSON.parse("{\"hero\":\"https://omatchar.sirv.com/Images/warehouse.jpeg\",\"title\":\"Locate Your Warehouse\",\"subTitle\":\"Uncover the best Warehouses in the Market.\",\"searchTabs\":{\"tabs\":[{\"title\":\"Rent\"}],\"locationOptions\":[{\"value\":\"city_0\",\"label\":\"Chennai\"},{\"value\":\"city_1\",\"label\":\"Salem\"},{\"value\":\"city_2\",\"label\":\"Trichy\"},{\"value\":\"city_3\",\"label\":\"Madurai\"},{\"value\":\"city_4\",\"label\":\"Erode\"},{\"value\":\"city_5\",\"label\":\"Tuticorin\"}],\"typeOptions\":[{\"value\":\"type_0\",\"label\":\"Warehouse\"},{\"value\":\"type_1\",\"label\":\"Cold Storage\"},{\"value\":\"type_2\",\"label\":\"Industrial Shed\"},{\"value\":\"type_3\",\"label\":\"Land\"},{\"value\":\"type_4\",\"label\":\"Other\"}],\"sqftOptions\":[{\"value\":\"sqft_0\",\"label\":\"0 - 1000 Sq Ft\"},{\"value\":\"sqft_1\",\"label\":\"1000 - 10,000 Sq Ft\"},{\"value\":\"sqft_2\",\"label\":\"10,000 - 50,000 Sq Ft\"},{\"value\":\"sqft_3\",\"label\":\"50,000 Sq Ft > \"}]},\"featured\":{\"subTitle\":\"Find your Warehouse today\",\"title\":\"Featured listings around you\",\"button\":\"See all featured listings\",\"buttonLink\":\"category-rooms\",\"swiper\":[{\"title\":\"Spacious Warehouse - Chennai\",\"location\":\"Chennai\",\"type\":\"Warehouse\",\"link\":\"/detail-rooms\",\"img\":\"img/photo/IMG_20200808_104505.jpg\",\"meters\":\"35000\",\"bedrooms\":\"3\",\"bathrooms\":\"2\",\"price\":\"15\"},{\"title\":\"Spacious Warehouse - Erode\",\"location\":\"Erode\",\"type\":\"Warehouse\",\"link\":\"/detail-rooms-1\",\"img\":\"img/photo/IMG_20200808_104826.jpg\",\"meters\":\"85000\",\"bedrooms\":\"2\",\"bathrooms\":\"1\",\"price\":\"10\"},{\"title\":\"Spacious Warehouse - Coimbatore\",\"location\":\"Coimbatore\",\"type\":\"Warehouse\",\"link\":\"/detail-rooms-2\",\"img\":\"img/photo/IMG_20200808_104913.jpg\",\"meters\":\"35000\",\"bedrooms\":\"3\",\"bathrooms\":\"2\",\"price\":\"15\"},{\"title\":\"Spacious Warehouse - Chennai\",\"location\":\"Chennai\",\"type\":\"Warehouse\",\"link\":\"/detail-rooms-3\",\"img\":\"img/photo/IMG_20200808_104828.jpg\",\"meters\":\"85000\",\"bedrooms\":\"2\",\"bathrooms\":\"1\",\"price\":\"8\"},{\"title\":\"Spacious Warehouse - Madurai\",\"location\":\"Madurai\",\"type\":\"Warehouse\",\"link\":\"/detail-rooms-4\",\"img\":\"img/photo/IMG_20200808_104916.jpg\",\"meters\":\"35000\",\"bedrooms\":\"2\",\"bathrooms\":\"1\",\"price\":\"12\"},{\"title\":\"Spacious Warehouse - Trichy\",\"location\":\"Trichy\",\"type\":\"Warehouse\",\"link\":\"/detail-rooms\",\"img\":\"img/photo/IMG_20200808_104434.jpg\",\"meters\":\"85000\",\"bedrooms\":\"2\",\"bathrooms\":\"1\",\"price\":\"5\"}]},\"popularCities\":{\"title\":\"Locations under our Radar\",\"subTitle\":\"Most popular cities\"},\"discover\":{\"title\":\"Discover the best Warehouses, Cold Storage around you\",\"subTitle\":\"Why us?\",\"blocks\":[{\"title\":\"Find the best warehouse in required area\",\"content\":\"Reduce your time spent hunting for the warehouse and cold storage which fullfills your requirements by ging through the listed spaces details\",\"icon\":\"#destination-map-1\",\"color\":\"primary\"},{\"title\":\"Purchase a property\",\"content\":\"The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit\",\"icon\":\"#real-estate-1\",\"color\":\"secondary\"},{\"title\":\"Profit\",\"content\":\"His room, a proper human room although a little too small, lay peacefully between its four familiar \",\"icon\":\"#pay-1\",\"color\":\"primary\"}]},\"divider\":{\"title\":\"Vabgo is the best way to find & discover Warehouse, Commercial Space, Used Machinery\",\"subTitle\":\"Start using Vabgo today\",\"content\":\"Browse through our listings and make your search easier.\",\"button\":\"Create Your Account\",\"buttonLink\":\"#\",\"small\":\"Cheaper than a Month YOUR Net Pack\"}}");

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

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

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("crp/");


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

/***/ "2cVP":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Our guides\",\"subTitle\":\"Stay and eat like a local\",\"button\":\"See all guides\",\"buttonLink\":\"/category-2-rooms\",\"swiperItems\":[{\"title\":\"New York\",\"subtitle\":\"The big apple\",\"img\":\"img/photo/new-york.jpg\",\"link\":\"/category-2-rooms\"},{\"title\":\"Paris\",\"subtitle\":\"Artist capital of Europe\",\"img\":\"img/photo/paris.jpg\",\"link\":\"/category-2-rooms\"},{\"title\":\"Barcelona\",\"subtitle\":\"Dalí, Gaudí, Barrio Gotico\",\"img\":\"img/photo/barcelona.jpg\",\"link\":\"/category-2-rooms\"},{\"title\":\"Prague\",\"subtitle\":\"City of hundred towers\",\"img\":\"img/photo/prague.jpg\",\"link\":\"/category-2-rooms\"}]}");

/***/ }),

/***/ "3Jpc":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Meat our team\",\"subtitle\":\"Team\",\"content\":\"One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections\",\"founders\":{\"title\":\"Our founders\",\"items\":[{\"title\":\"Meredith Goodwin\",\"content\":\"CEO & Founder\",\"img\":\"agent-0.png\",\"link\":\"#\"},{\"title\":\"Weeks Garrett\",\"content\":\"Co-founder\",\"img\":\"agent-1.png\",\"link\":\"#\"},{\"title\":\"Fisher Bauer\",\"content\":\"CTO\",\"img\":\"agent-2.png\",\"link\":\"#\"}]},\"quote\":{\"title\":\"Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.\",\"author\":\"Meredith Goodwin, Founder\",\"avatar\":\"avatar-0.jpg\"},\"sales\":{\"title\":\"Sales\",\"items\":[{\"title\":\"Meredith Goodwin\",\"content\":\"CEO & Founder\",\"img\":\"agent-0.png\",\"link\":\"#\"},{\"title\":\"Weeks Garrett\",\"content\":\"Co-founder\",\"img\":\"agent-1.png\",\"link\":\"#\"},{\"title\":\"Fisher Bauer\",\"content\":\"CTO\",\"img\":\"agent-2.png\",\"link\":\"#\"},{\"title\":\"Aguilar Webb\",\"content\":\"Community\",\"img\":\"agent-3.png\",\"link\":\"#\"}]},\"marketing\":{\"title\":\"Marketing\",\"items\":[{\"title\":\"Meredith Goodwin\",\"content\":\"CEO & Founder\",\"img\":\"agent-0.png\",\"link\":\"#\"},{\"title\":\"Weeks Garrett\",\"content\":\"Co-founder\",\"img\":\"agent-1.png\",\"link\":\"#\"},{\"title\":\"Fisher Bauer\",\"content\":\"CTO\",\"img\":\"agent-2.png\",\"link\":\"#\"},{\"title\":\"Aguilar Webb\",\"content\":\"Community\",\"img\":\"agent-3.png\",\"link\":\"#\"}]}}");

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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "88KH":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism");

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

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "AuoD":
/***/ (function(module, exports) {

module.exports = require("react-leaflet");

/***/ }),

/***/ "Bq+u":
/***/ (function(module) {

module.exports = JSON.parse("{\"hero\":{\"title\":\"Stay like a local\",\"subTitle\":\"The best holiday experience\"},\"swiperPoster\":\"photo-1501621965065-c6e1cf6b53e2-lowres.jpg\",\"swiperImages\":[\"photo-1501621965065-c6e1cf6b53e2.jpg\",\"photo-1519974719765-e6559eac2575.jpg\",\"photo-1490578474895-699cd4e2cf59.jpg\",\"photo-1534850336045-c6c6d287f89e.jpg\"],\"searchOptions\":[{\"value\":\"small\",\"label\":\"Restaurants\"},{\"value\":\"medium\",\"label\":\"Hotels\"},{\"value\":\"large\",\"label\":\"Cafes\"},{\"value\":\"x-large\",\"label\":\"Garages\"}],\"topBlocks\":{\"title\":\"Booking with us is easy\",\"subTitle\":\"One-of-a-kind vacation rentals\",\"blocks\":[{\"title\":\"Find the perfect rental\",\"content\":\"One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in\",\"icon\":\"#destination-map-1\"},{\"title\":\"Book with confidence\",\"content\":\"The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit\",\"icon\":\"#pay-by-card-1\"},{\"title\":\"Enjoy your vacation\",\"content\":\"His room, a proper human room although a little too small, lay peacefully between its four familiar\",\"icon\":\"#heart-1\"}]},\"jumbotron\":{\"title\":\"Ready for your next holidays?\",\"button\":\"Get started\",\"link\":\"category-rooms\",\"img\":\"img/photo/photo-1497436072909-60f360e1d4b1.jpg\"},\"testimonials\":{\"title\":\"Our dear customers said about us\",\"subTitle\":\"Testimonials\",\"swiperItems\":[{\"title\":\"Jessica Watson\",\"content\":\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever\",\"avatar\":\"img/avatar/avatar-3.jpg\"},{\"title\":\"Jessica Watson\",\"content\":\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever\",\"avatar\":\"img/avatar/avatar-3.jpg\"},{\"title\":\"Jessica Watson\",\"content\":\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever\",\"avatar\":\"img/avatar/avatar-3.jpg\"},{\"title\":\"Jessica Watson\",\"content\":\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever\",\"avatar\":\"img/avatar/avatar-3.jpg\"},{\"title\":\"Jessica Watson\",\"content\":\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever\",\"avatar\":\"img/avatar/avatar-3.jpg\"},{\"title\":\"Jessica Watson\",\"content\":\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever\",\"avatar\":\"img/avatar/avatar-3.jpg\"}]},\"blogPosts\":{\"title\":\"From our travel blog\",\"subTitle\":\"Stories from around the globe\",\"button\":\"See all articles\",\"buttonLink\":\"blog\"}}");

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

/***/ "D1rN":
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
  const post = props.data;
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "border-0 h-100 shadow"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog/[slug]",
    as: `/blog/${post.slug}`
  }, __jsx("a", null, __jsx("img", {
    src: `/content/${post.img}`,
    alt: "...",
    className: "card-img-top"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, __jsx("a", {
    href: "#",
    className: "text-uppercase text-muted text-sm letter-spacing-2"
  }, post.category), __jsx("h5", {
    className: "my-2"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog/[slug]",
    as: `/blog/${post.slug}`
  }, __jsx("a", {
    className: "text-dark"
  }, post.title))), __jsx("p", {
    className: "text-gray-500 text-sm my-3"
  }, __jsx("i", {
    className: "far fa-clock mr-2"
  }), post.date), __jsx("p", {
    className: "my-2 text-muted text-sm"
  }, post.content), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog/[slug]",
    as: `/blog/${post.slug}`
  }, __jsx("a", {
    className: "pl-0 btn btn-link"
  }, "Continue reading ", __jsx("i", {
    className: "fa fa-long-arrow-alt-right"
  })))));
});

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "I/1N":
/***/ (function(module, exports) {

module.exports = require("react-scroll");

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

/***/ "Rsnp":
/***/ (function(module) {

module.exports = JSON.parse("{\"posts\":[{\"id\":\"11\",\"title\":\"Escape the city today\",\"slug\":\"escape-city-today\",\"subtitle\":\"Featured\",\"category\":\"Travel\",\"date\":\"January 16, 2016\",\"content\":\"Is am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world...\",\"link\":\"post\",\"img\":\"img/photo/photo-1467987506553-8f3916508521.jpg\"},{\"id\":\"1\",\"title\":\"Autumn fashion tips and tricks\",\"slug\":\"autumn-fashion-tips-and-tricks\",\"category\":\"Travel\",\"date\":\"January 16, 2016\",\"content\":\"Pellentesque habitant morbi tristique senectus. Vestibulum tortor quam, feugiat vitae, ultricies ege...\",\"link\":\"post\",\"img\":\"img/photo/photo-1512917774080-9991f1c4c750.jpg\"},{\"id\":\"2\",\"title\":\"Newest photo apps\",\"slug\":\"newest-photo-apps\",\"category\":\"Living\",\"date\":\"January 16, 2016\",\"content\":\"ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibu...\",\"link\":\"post\",\"img\":\"img/photo/photo-1522771739844-6a9f6d5f14af.jpg\"},{\"id\":\"3\",\"title\":\"Best books about Photography\",\"slug\":\"best-books-about-photography\",\"category\":\"Travel\",\"date\":\"January 16, 2016\",\"content\":\"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.  Mauris placerat eleif...\",\"link\":\"post\",\"img\":\"img/photo/photo-1482463084673-98272196658a.jpg\"},{\"id\":\"4\",\"title\":\"Pellentesque habitant morbi\",\"slug\":\"pellentesque-habitant-morbi\",\"category\":\"Living\",\"date\":\"January 16, 2016\",\"content\":\"Pellentesque habitant morbi tristique senectus. Vestibulum tortor quam, feugiat vitae, ultricies ege...\",\"link\":\"post\",\"img\":\"img/photo/photo-1499695867787-121ffb7950bf.jpg\"},{\"id\":\"5\",\"title\":\"10 Free things to do in Venice\",\"slug\":\"10-free-things-to-do-in-venice\",\"category\":\"Travel\",\"date\":\"January 16, 2016\",\"content\":\"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.  Mauris placerat eleif.\",\"link\":\"post\",\"img\":\"img/photo/photo-1495562569060-2eec283d3391.jpg\"},{\"id\":\"6\",\"title\":\"Best of this year's Biennale\",\"slug\":\"best-of-this-years-biennale\",\"category\":\"Guides\",\"date\":\"January 16, 2016\",\"content\":\"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestib...\",\"link\":\"post\",\"img\":\"img/photo/photo-1514890547357-a9ee288728e0.jpg\"}]}");

/***/ }),

/***/ "RyM3":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "UiHR":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Near Highway Warehouse Perundurai\",\"category\":\"Warehouse\",\"img\":\"restaurant-1515164783716-8e6920f3e77c.jpg\",\"location\":\"Erode\",\"price\":\"45\",\"tags\":[{\"icon\":\"users\",\"value\":\"4 guests\"},{\"icon\":\"door-open\",\"value\":\"1 bedroom\"},{\"icon\":\"bed\",\"value\":\"3 beds\"},{\"icon\":\"bath\",\"value\":\"1 bath\"}],\"swiper\":[{\"img\":\"photo-1426122402199-be02db90eb90.jpg\",\"title\":\"Our street\",\"alt\":\"Our street\"},{\"img\":\"photo-1512917774080-9991f1c4c750.jpg\",\"title\":\"Outside\",\"alt\":\"Outside\"},{\"img\":\"photo-1494526585095-c41746248156.jpg\",\"title\":\"Rear entrance\",\"alt\":\"Rear entrance\"},{\"img\":\"photo-1484154218962-a197022b5858.jpg\",\"title\":\"Kitchen\",\"alt\":\"Kitchen\"},{\"img\":\"photo-1522771739844-6a9f6d5f14af.jpg\",\"title\":\"Bedroom\",\"alt\":\"Bedroom\"},{\"img\":\"photo-1488805990569-3c9e1d76d51c.jpg\",\"title\":\"Bedroom\",\"alt\":\"Bedroom\"}],\"amenities\":[{\"icon\":\"wifi\",\"value\":\"Wifi\"},{\"icon\":\"tv\",\"value\":\"Cable TV\"},{\"icon\":\"snowflake\",\"value\":\"Air conditioning\"},{\"icon\":\"thermometer-three-quarters\",\"value\":\"Heating\"},{\"icon\":\"bath\",\"value\":\"Toiletteries\"},{\"icon\":\"utensils\",\"value\":\"Equipped Kitchen\"},{\"icon\":\"laptop\",\"value\":\"Desk for work\"},{\"icon\":\"tshirt\",\"value\":\"Washing machine\"}],\"author\":{\"name\":\"Jack London\",\"content\":\"<p class='text-muted text-sm mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p><p class='text-muted text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>\",\"avatar\":\"avatar-10.jpg\"},\"reviews\":[{\"title\":\"Padmé Amidala\",\"content\":\"One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections\",\"date\":\"Dec 2018\",\"avatar\":\"avatar-8.jpg\",\"stars\":\"5\"},{\"title\":\"Luke Skywalker\",\"content\":\"The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. 'What's happened to me?' he thought. It wasn't a dream.\",\"date\":\"Dec 2018\",\"avatar\":\"avatar-2.jpg\",\"stars\":\"4\"},{\"title\":\"Princess Leia\",\"content\":\"His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.\",\"date\":\"Dec 2018\",\"avatar\":\"avatar-3.jpg\",\"stars\":\"3\"},{\"title\":\"Jabba Hut\",\"content\":\"Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.\",\"date\":\"Dec 2018\",\"avatar\":\"avatar-4.jpg\",\"stars\":\"5\"}],\"similar\":{\"title\":\"Similar places\",\"subtitle\":\"You may also like\",\"items\":[{\"properties\":{\"name\":\"Modern, Well-Appointed Room\",\"subtitle\":\"Private room\",\"image\":\"photo-1484154218962-a197022b5858.jpg\",\"link\":\"detail-rooms\",\"avatar\":\"img/avatar/avatar-0.jpg\",\"person\":\"Pamela\",\"stars\":\"4\",\"price\":\"80\"}},{\"properties\":{\"name\":\"Cute Quirky Garden apt, NYC adjacent\",\"subtitle\":\"Entire apartment\",\"image\":\"photo-1484154218962-a197022b5858.jpg\",\"link\":\"detail-rooms\",\"avatar\":\"img/avatar/avatar-7.jpg\",\"person\":\"John\",\"stars\":\"5\",\"price\":\"121\"}},{\"properties\":{\"name\":\"Modern Apt - Vibrant Neighborhood!\",\"subtitle\":\"Entire apartment\",\"image\":\"photo-1512917774080-9991f1c4c750.jpg\",\"link\":\"detail-rooms\",\"avatar\":\"img/avatar/avatar-8.jpg\",\"person\":\"Julie\",\"stars\":\"3\",\"price\":\"75\"}},{\"properties\":{\"name\":\"Sunny Private Studio-Apartment\",\"subtitle\":\"Private room\",\"image\":\"photo-1484154218962-a197022b5858.jpg\",\"link\":\"detail-rooms\",\"avatar\":\"img/avatar/avatar-9.jpg\",\"person\":\"Barbora\",\"stars\":\"4\",\"price\":\"93\"}},{\"properties\":{\"name\":\"Mid-Century Modern Garden Paradise\",\"subtitle\":\"Private room\",\"image\":\"photo-1522771739844-6a9f6d5f14af.jpg\",\"link\":\"detail-rooms\",\"avatar\":\"img/avatar/avatar-10.jpg\",\"person\":\"Jack\",\"stars\":\"5\",\"price\":\"115\"}},{\"properties\":{\"name\":\"Brooklyn Life, Easy to Manhattan\",\"subtitle\":\"Private room\",\"image\":\"photo-1488805990569-3c9e1d76d51c.jpg\",\"link\":\"detail-rooms\",\"avatar\":\"img/avatar/avatar-11.jpg\",\"person\":\"Stuart\",\"stars\":\"4\",\"price\":\"123\"}},{\"properties\":{\"name\":\"Modern, Well-Appointed Room\",\"subtitle\":\"Private room\",\"image\":\"photo-1484154218962-a197022b5858.jpg\",\"link\":\"detail-rooms\",\"avatar\":\"img/avatar/avatar-0.jpg\",\"person\":\"Pamela\",\"stars\":\"4\",\"price\":\"80\"}},{\"properties\":{\"name\":\"Cute Quirky Garden apt, NYC adjacent\",\"subtitle\":\"Entire apartment\",\"image\":\"photo-1484154218962-a197022b5858.jpg\",\"link\":\"detail-rooms\",\"avatar\":\"img/avatar/avatar-7.jpg\",\"person\":\"John\",\"stars\":\"5\",\"price\":\"121\"}},{\"properties\":{\"name\":\"Modern Apt - Vibrant Neighborhood!\",\"subtitle\":\"Entire apartment\",\"image\":\"photo-1512917774080-9991f1c4c750.jpg\",\"link\":\"detail-rooms\",\"avatar\":\"img/avatar/avatar-8.jpg\",\"person\":\"Julie\",\"stars\":\"3\",\"price\":\"75\"}},{\"properties\":{\"name\":\"Sunny Private Studio-Apartment\",\"subtitle\":\"Private room\",\"image\":\"photo-1484154218962-a197022b5858.jpg\",\"link\":\"detail-rooms\",\"avatar\":\"img/avatar/avatar-9.jpg\",\"person\":\"Barbora\",\"stars\":\"4\",\"price\":\"93\"}}]}}");

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

/***/ "blVf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("re7B");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["a"] = (() => {
  return __jsx("div", {
    style: {
      top: "120px"
    },
    className: "sticky-top mb-5"
  }, __jsx("div", {
    className: "sidebar-block"
  }, __jsx("h6", {
    className: "sidebar-heading ml-3"
  }, "Documentation"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    tag: "nav",
    pills: true,
    className: "flex-column"
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    activeClassName: "active",
    href: "/docs/docs-introduction",
    passHref: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "mb-2"
  }, "Introduction")), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    activeClassName: "active",
    href: "/docs/docs-directory-structure",
    passHref: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "mb-2"
  }, "Directory structure")), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    activeClassName: "active",
    href: "/docs/docs-next",
    passHref: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "mb-2"
  }, "Next.js")), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    activeClassName: "active",
    href: "/docs/docs-customizing-css",
    passHref: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "mb-2"
  }, "Customizing CSS")), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    activeClassName: "active",
    href: "/docs/docs-credits",
    passHref: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "mb-2"
  }, "Credits")), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    activeClassName: "active",
    href: "/docs/docs-changelog",
    passHref: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "mb-2"
  }, "Changelog")))), __jsx("div", {
    className: "sidebar-block"
  }, __jsx("h6", {
    className: "sidebar-heading ml-3"
  }, "Components"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    tag: "nav",
    pills: true,
    className: "flex-column"
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    activeClassName: "active",
    href: "/docs/components-bootstrap",
    passHref: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "mb-2"
  }, "Bootstrap")), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    activeClassName: "active",
    href: "/docs/components-directory",
    passHref: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "mb-2"
  }, "Theme")))));
});

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cHt3":
/***/ (function(module, exports) {

module.exports = require("react-image-lightbox");

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

/***/ "crp/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__("I/1N");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: ./src/components/Docs/DocsNav.js
var DocsNav = __webpack_require__("blVf");

// EXTERNAL MODULE: external "react-syntax-highlighter"
var external_react_syntax_highlighter_ = __webpack_require__("RyM3");

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/styles/prism"
var prism_ = __webpack_require__("88KH");

// CONCATENATED MODULE: ./src/components/Docs/Theme/Accordion.js
var __jsx = external_react_default.a.createElement;




/* harmony default export */ var Accordion = (() => {
  const [collapse, setCollapse] = external_react_default.a.useState(1);
  return __jsx("div", {
    id: "accordion",
    className: "docs-item element"
  }, __jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Accordion"), __jsx("div", {
    className: "docs-desc"
  }, __jsx("p", {
    className: "lead"
  }, "Block components used to create an Accordion using Bootstrap' collapse plugin.")), __jsx("div", {
    className: "mt-5"
  }, __jsx("div", {
    role: "tablist"
  }, __jsx(external_reactstrap_["Card"], {
    className: "border-0 shadow mb-3"
  }, __jsx(external_reactstrap_["CardHeader"], {
    onClick: () => setCollapse(1),
    id: "headingOne",
    role: "tab",
    className: "bg-primary-100 border-0 py-0"
  }, __jsx("span", {
    style: {
      cursor: "pointer"
    },
    className: "text-primary accordion-link"
  }, "Option one")), __jsx(external_reactstrap_["Collapse"], {
    isOpen: collapse === 1
  }, __jsx(external_reactstrap_["CardBody"], {
    className: "py-5"
  }, __jsx("p", {
    className: "text-muted"
  }, "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. "), __jsx("p", {
    className: "text-muted mb-0"
  }, "Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus")))), __jsx(external_reactstrap_["Card"], {
    className: "border-0 shadow mb-3"
  }, __jsx(external_reactstrap_["CardHeader"], {
    onClick: () => setCollapse(2),
    id: "headingOne",
    role: "tab",
    className: "bg-primary-100 border-0 py-0"
  }, __jsx("span", {
    style: {
      cursor: "pointer"
    },
    className: "text-primary accordion-link"
  }, "Paypal")), __jsx(external_reactstrap_["Collapse"], {
    isOpen: collapse === 2
  }, __jsx(external_reactstrap_["CardBody"], {
    className: "py-5 d-flex align-items-center"
  }, __jsx("input", {
    type: "radio",
    name: "shippping",
    id: "payment-method-1"
  }), __jsx(external_reactstrap_["Label"], {
    for: "payment-method-1",
    className: "ml-3"
  }, __jsx("strong", {
    className: "d-block text-uppercase mb-2"
  }, " Pay with PayPal"), __jsx("span", {
    className: "text-muted text-sm"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit."))))), __jsx(external_reactstrap_["Card"], {
    className: "border-0 shadow mb-3"
  }, __jsx(external_reactstrap_["CardHeader"], {
    onClick: () => setCollapse(3),
    id: "headingOne",
    role: "tab",
    className: "bg-primary-100 border-0 py-0"
  }, __jsx("span", {
    style: {
      cursor: "pointer"
    },
    className: "text-primary accordion-link"
  }, "Pay on delivery")), __jsx(external_reactstrap_["Collapse"], {
    isOpen: collapse === 3
  }, __jsx(external_reactstrap_["CardBody"], {
    className: "py-5 d-flex align-items-center"
  }, __jsx("input", {
    type: "radio",
    name: "shippping",
    id: "payment-method-2"
  }), __jsx(external_reactstrap_["Label"], {
    for: "payment-method-2",
    className: "ml-3"
  }, __jsx("strong", {
    className: "d-block text-uppercase mb-2"
  }, " Pay with PayPal"), __jsx("span", {
    className: "text-muted text-sm"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit."))))))), __jsx("div", {
    className: "mt-5"
  }, __jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Accordion_highlightCode)));
});
const Accordion_highlightCode = `const [collapse, setCollapse] = React.useState(1)

return (
<div role="tablist">
    <Card className="border-0 shadow mb-3">
        <CardHeader onClick={() => setCollapse(1)} id="headingOne" role="tab" className="bg-primary-100 border-0 py-0">
            <span style={{ cursor: "pointer" }} className="text-primary accordion-link">Option one</span>
        </CardHeader>
        <Collapse isOpen={collapse === 1}>
            <CardBody className="py-5">
                <p className="text-muted">...</p>
                <p className="text-muted mb-0">...</p>
            </CardBody>
        </Collapse>
    </Card>
    <Card className="border-0 shadow mb-3">
        <CardHeader onClick={() => setCollapse(2)} id="headingOne" role="tab" className="bg-primary-100 border-0 py-0">
            <span style={{ cursor: "pointer" }} className="text-primary accordion-link">Option one</span>
        </CardHeader>
        <Collapse isOpen={collapse === 2}>
            <CardBody className="py-5">
                <p className="text-muted">...</p>
                <p className="text-muted mb-0">...</p>
            </CardBody>
        </Collapse>
    </Card>
</div>
        )`;
// CONCATENATED MODULE: ./src/components/Docs/Theme/Avatar.js
var Avatar_jsx = external_react_default.a.createElement;


/* harmony default export */ var Avatar = (() => {
  return Avatar_jsx("div", {
    id: "avatar",
    className: "docs-item element"
  }, Avatar_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Avatar"), Avatar_jsx("div", {
    className: "docs-desc"
  }, Avatar_jsx("p", {
    className: "lead"
  }, "Custom classes to format your user images. You can combine avatar classes with padding utility class to give to the image a nice white border.")), Avatar_jsx("div", {
    className: "mt-5"
  }, Avatar_jsx(external_reactstrap_["Row"], {
    className: "align-items-center text-center mb-5"
  }, Avatar_jsx(external_reactstrap_["Col"], {
    xs: "auto"
  }, Avatar_jsx("img", {
    alt: "Image",
    src: "/content/img/avatar/avatar-0.jpg",
    className: "avatar mb-3 avatar-xxl p-2"
  }), Avatar_jsx("code", {
    className: "d-block"
  }, ".avatar-xxl p-2")), Avatar_jsx(external_reactstrap_["Col"], {
    xs: "auto"
  }, Avatar_jsx("img", {
    alt: "Image",
    src: "/content/img/avatar/avatar-1.jpg",
    className: "avatar mb-3 avatar-xxl"
  }), Avatar_jsx("code", {
    className: "d-block"
  }, ".avatar-xxl")), Avatar_jsx(external_reactstrap_["Col"], {
    xs: "auto"
  }, Avatar_jsx("img", {
    alt: "Image",
    src: "/content/img/avatar/avatar-2.jpg",
    className: "avatar mb-3 avatar-xl"
  }), Avatar_jsx("code", {
    className: "d-block"
  }, ".avatar-xl")), Avatar_jsx(external_reactstrap_["Col"], {
    xs: "auto"
  }, Avatar_jsx("img", {
    alt: "Image",
    src: "/content/img/avatar/avatar-3.jpg",
    className: "avatar mb-3 avatar-lg"
  }), Avatar_jsx("code", {
    className: "d-block"
  }, ".avatar-lg")), Avatar_jsx(external_reactstrap_["Col"], {
    xs: "auto"
  }, Avatar_jsx("img", {
    alt: "Image",
    src: "/content/img/avatar/avatar-4.jpg",
    className: "avatar mb-3 avatar"
  }), Avatar_jsx("code", {
    className: "d-block"
  }, ".avatar")), Avatar_jsx(external_reactstrap_["Col"], {
    xs: "auto"
  }, Avatar_jsx("img", {
    alt: "Image",
    src: "/content/img/avatar/avatar-5.jpg",
    className: "avatar mb-3 avatar-sm"
  }), Avatar_jsx("code", {
    className: "d-block"
  }, ".avatar-sm")))));
});
// EXTERNAL MODULE: ./src/data/restaurants-geojson.json
var restaurants_geojson = __webpack_require__("osud");

// EXTERNAL MODULE: ./src/data/rooms-geojson.json
var rooms_geojson = __webpack_require__("rDWQ");

// EXTERNAL MODULE: ./src/data/guides.json
var guides = __webpack_require__("2cVP");

// EXTERNAL MODULE: ./src/data/index4.json
var index4 = __webpack_require__("/NLt");

// EXTERNAL MODULE: ./src/data/blog.json
var blog = __webpack_require__("Rsnp");

// EXTERNAL MODULE: ./src/data/detail-rooms.json
var detail_rooms = __webpack_require__("UiHR");

// EXTERNAL MODULE: ./src/data/team.json
var team = __webpack_require__("3Jpc");

// EXTERNAL MODULE: ./src/data/index.json
var src_data = __webpack_require__("Bq+u");

// EXTERNAL MODULE: ./src/components/CardRestaurant.js
var CardRestaurant = __webpack_require__("1/T7");

// EXTERNAL MODULE: ./src/components/CardRoom.js
var CardRoom = __webpack_require__("1OuS");

// EXTERNAL MODULE: ./src/components/CardPoster.js
var CardPoster = __webpack_require__("pIS+");

// EXTERNAL MODULE: ./src/components/CardProperty.js
var CardProperty = __webpack_require__("26xf");

// EXTERNAL MODULE: ./src/components/CardPost.js
var CardPost = __webpack_require__("D1rN");

// EXTERNAL MODULE: ./src/components/CardReview.js
var CardReview = __webpack_require__("oTrj");

// EXTERNAL MODULE: ./src/components/CardTeam.js
var CardTeam = __webpack_require__("xA2X");

// CONCATENATED MODULE: ./src/components/CardTestimonial.js
var CardTestimonial_jsx = external_react_default.a.createElement;


/* harmony default export */ var CardTestimonial = (props => {
  const data = props.data;
  return CardTestimonial_jsx(external_reactstrap_["Card"], {
    className: "testimonial rounded-lg shadow border-0"
  }, CardTestimonial_jsx("div", {
    className: "testimonial-avatar"
  }, CardTestimonial_jsx("img", {
    src: `/content/${data.avatar}`,
    alt: data.title,
    className: "img-fluid"
  })), CardTestimonial_jsx("div", {
    className: "text"
  }, CardTestimonial_jsx("div", {
    className: "testimonial-quote"
  }, CardTestimonial_jsx("i", {
    className: "fas fa-quote-right"
  })), CardTestimonial_jsx("p", {
    className: "testimonial-text"
  }, data.content), CardTestimonial_jsx("strong", null, data.title)));
});
// CONCATENATED MODULE: ./src/components/Docs/Theme/Cards.js
var Cards_jsx = external_react_default.a.createElement;




















/* harmony default export */ var Cards = (() => {
  return Cards_jsx("div", {
    id: "cards",
    className: "docs-item element"
  }, Cards_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Cards"), Cards_jsx("div", {
    className: "docs-desc"
  }, Cards_jsx("p", {
    className: "lead"
  }, "This theme comes with a variety of card styles useful for directory and marketplace websites.")), Cards_jsx("div", {
    className: "mt-5"
  }, Cards_jsx("h6", {
    className: "mb-4"
  }, "Restaurant"), Cards_jsx(external_reactstrap_["Row"], null, Cards_jsx(external_reactstrap_["Col"], {
    md: "6",
    lg: "4"
  }, Cards_jsx(CardRestaurant["a" /* default */], {
    data: restaurants_geojson.features[0].properties
  })), Cards_jsx(external_reactstrap_["Col"], {
    md: "6",
    lg: "4",
    className: "d-none d-md-block"
  }, Cards_jsx(CardRestaurant["a" /* default */], {
    data: restaurants_geojson.features[1].properties
  })), Cards_jsx(external_reactstrap_["Col"], {
    md: "6",
    lg: "4",
    className: "d-none d-lg-block"
  }, Cards_jsx(CardRestaurant["a" /* default */], {
    data: restaurants_geojson.features[2].properties
  }))), Cards_jsx("div", {
    className: "my-5"
  }, Cards_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Cards_highlightCode.restaurant))), Cards_jsx("div", {
    className: "mt-5"
  }, Cards_jsx("h6", {
    className: "mb-4"
  }, "Room"), Cards_jsx(external_reactstrap_["Row"], null, Cards_jsx(external_reactstrap_["Col"], {
    md: "6",
    lg: "4"
  }, Cards_jsx(CardRoom["a" /* default */], {
    data: rooms_geojson.features[0].properties
  })), Cards_jsx(external_reactstrap_["Col"], {
    md: "6",
    lg: "4",
    className: "d-none d-md-block"
  }, Cards_jsx(CardRoom["a" /* default */], {
    data: rooms_geojson.features[1].properties
  })), Cards_jsx(external_reactstrap_["Col"], {
    md: "6",
    lg: "4",
    className: "d-none d-lg-block"
  }, Cards_jsx(CardRoom["a" /* default */], {
    data: rooms_geojson.features[2].properties
  }))), Cards_jsx("div", {
    className: "my-5"
  }, Cards_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Cards_highlightCode.room))), Cards_jsx("div", {
    className: "mt-5"
  }, Cards_jsx("h6", {
    className: "mb-4"
  }, "Property"), Cards_jsx(external_reactstrap_["Row"], null, Cards_jsx(external_reactstrap_["Col"], {
    md: "6",
    lg: "4"
  }, Cards_jsx(CardProperty["a" /* default */], {
    data: index4.featured.swiper[0]
  })), Cards_jsx(external_reactstrap_["Col"], {
    md: "6",
    lg: "4",
    className: "d-none d-md-block"
  }, Cards_jsx(CardProperty["a" /* default */], {
    data: index4.featured.swiper[1]
  })), Cards_jsx(external_reactstrap_["Col"], {
    md: "6",
    lg: "4",
    className: "d-none d-lg-block"
  }, Cards_jsx(CardProperty["a" /* default */], {
    data: index4.featured.swiper[2]
  }))), Cards_jsx("div", {
    className: "my-5"
  }, Cards_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Cards_highlightCode.property))), Cards_jsx("div", {
    className: "mt-5"
  }, Cards_jsx("h6", {
    className: "mb-4"
  }, "Card with a background image"), Cards_jsx(external_reactstrap_["Row"], null, Cards_jsx(external_reactstrap_["Col"], {
    md: "6",
    lg: "4"
  }, Cards_jsx(CardPoster["a" /* default */], {
    data: guides.swiperItems[0]
  })), Cards_jsx(external_reactstrap_["Col"], {
    md: "6",
    lg: "4",
    className: "d-none d-md-block"
  }, Cards_jsx(CardPoster["a" /* default */], {
    data: guides.swiperItems[1]
  })), Cards_jsx(external_reactstrap_["Col"], {
    md: "6",
    lg: "4",
    className: "d-none d-lg-block"
  }, Cards_jsx(CardPoster["a" /* default */], {
    data: guides.swiperItems[2]
  }))), Cards_jsx("div", {
    className: "my-5"
  }, Cards_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Cards_highlightCode.poster))), Cards_jsx("div", {
    className: "mt-5"
  }, Cards_jsx("h6", {
    className: "mb-4"
  }, "Blog Post"), Cards_jsx(external_reactstrap_["Row"], null, Cards_jsx(external_reactstrap_["Col"], {
    md: "6",
    lg: "4"
  }, Cards_jsx(CardPost["a" /* default */], {
    data: blog.posts[0]
  })), Cards_jsx(external_reactstrap_["Col"], {
    md: "6",
    lg: "4",
    className: "d-none d-md-block"
  }, Cards_jsx(CardPost["a" /* default */], {
    data: blog.posts[1]
  })), Cards_jsx(external_reactstrap_["Col"], {
    md: "6",
    lg: "4",
    className: "d-none d-lg-block"
  }, Cards_jsx(CardPost["a" /* default */], {
    data: blog.posts[2]
  }))), Cards_jsx("div", {
    className: "my-5"
  }, Cards_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Cards_highlightCode.post))), Cards_jsx("div", {
    className: "mt-5"
  }, Cards_jsx("h6", {
    className: "mb-4"
  }, "Review"), Cards_jsx(external_reactstrap_["Row"], null, Cards_jsx(external_reactstrap_["Col"], {
    xs: "12"
  }, Cards_jsx(CardReview["a" /* default */], {
    data: detail_rooms.reviews[0]
  })), Cards_jsx(external_reactstrap_["Col"], {
    xs: "12",
    className: "d-none d-md-block"
  }, Cards_jsx(CardReview["a" /* default */], {
    data: detail_rooms.reviews[1]
  })), Cards_jsx(external_reactstrap_["Col"], {
    xs: "12",
    className: "d-none d-lg-block"
  }, Cards_jsx(CardReview["a" /* default */], {
    data: detail_rooms.reviews[2]
  }))), Cards_jsx("div", {
    className: "my-5"
  }, Cards_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Cards_highlightCode.review))), Cards_jsx("div", {
    className: "mt-5"
  }, Cards_jsx("h6", {
    className: "mb-4"
  }, "Team member"), Cards_jsx(external_reactstrap_["Row"], null, Cards_jsx(external_reactstrap_["Col"], {
    md: "6",
    lg: "4"
  }, Cards_jsx(CardTeam["a" /* default */], {
    data: team.sales.items[0]
  })), Cards_jsx(external_reactstrap_["Col"], {
    md: "6",
    lg: "4",
    className: "d-none d-md-block"
  }, Cards_jsx(CardTeam["a" /* default */], {
    data: team.sales.items[1]
  })), Cards_jsx(external_reactstrap_["Col"], {
    md: "6",
    lg: "4",
    className: "d-none d-lg-block"
  }, Cards_jsx(CardTeam["a" /* default */], {
    data: team.sales.items[2]
  }))), Cards_jsx("div", {
    className: "my-5"
  }, Cards_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Cards_highlightCode.team))), Cards_jsx("div", {
    className: "mt-5"
  }, Cards_jsx("h6", {
    className: "mb-4"
  }, "Testimonial"), Cards_jsx(external_reactstrap_["Row"], null, Cards_jsx(external_reactstrap_["Col"], {
    md: "6"
  }, Cards_jsx(CardTestimonial, {
    data: src_data.testimonials.swiperItems[0]
  })), Cards_jsx(external_reactstrap_["Col"], {
    md: "6",
    className: "d-none d-md-block"
  }, Cards_jsx(CardTestimonial, {
    data: src_data.testimonials.swiperItems[1]
  }))), Cards_jsx("div", {
    className: "my-5"
  }, Cards_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Cards_highlightCode.testimonial))));
});
const Cards_highlightCode = {
  "restaurant": `import CardRestaurant from '../../CardRestaurant'

import geoJSON from './public/content/restaurants-geojson.json'

export default () => {
    return (
        geoJSON.features.map(restaurant => 
            <CardRestaurant data={restaurant.properties} />
        )
    )
}`,
  "room": `import CardRoom from '../../CardRoom'

import geoJSON from './public/content/rooms-geojson.json'

export default () => {
    return (
        geoJSON.features.map(room => 
            <CardRestaurant data={room.properties} />
        )
    )
}`,
  "property": `import CardProperty from '../../CardProperty'

import properties from './public/content/properties.json'

export default () => {
    return (
        properties.map(property => 
            <CardProperty data={property} />
        )
    )
}`,
  "poster": `import CardPoster from '../../CardPoster'

import posters from './public/content/posters.json'

export default () => {
    return (
        posters.map(poster => 
            <CardPoster data={poster} />
        )
    )
}`,
  "post": `import CardPost from '../../CardPost'

import posts from './public/content/posts.json'

export default () => {
    return (
        posts.map(post => 
            <CardPost data={post} />
        )
    )
}`,
  "review": `import CardReview from '../../CardReview'

import reviews from './public/content/reviews.json'

export default () => {
    return (
        reviews.map(review => 
            <CardReview data={review} />
        )
    )
}`,
  "team": `import CardTeam from '../../CardTeam'

import teams from './public/content/teams.json'

export default () => {
    return (
        teams.map(team => 
            <CardTeam data={team} />
        )
    )
}`,
  "testimonial": `import CardTestimonial from '../../CardTestimonial'

import testimonials from './public/content/testimonials.json'

export default () => {
    return (
        testimonials.map(testimonial => 
            <CardTestimonial data={testimonial} />
        )
    )
}`
};
// EXTERNAL MODULE: ./src/components/Gallery.js
var Gallery = __webpack_require__("unmI");

// CONCATENATED MODULE: ./src/components/Docs/Theme/Gallery.js
var Gallery_jsx = external_react_default.a.createElement;




/* harmony default export */ var Theme_Gallery = (() => {
  const highlightCode = `import Gallery from '../components/Gallery'

import data from 'data.json'

export default () => {
    return (
        <Gallery
            rowClasses="ml-n1 mr-n1"
            lg="4"
            xs="6"
            colClasses="px-1 mb-2"
            data={data.gallery}
                                
        />
    )
}`;
  return Gallery_jsx("div", {
    id: "gallerywithlightbox",
    className: "docs-item element"
  }, Gallery_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Gallery with lightbox"), Gallery_jsx("div", {
    className: "docs-desc"
  }, Gallery_jsx("p", {
    className: "lead"
  }, "A simple gallery using the React Image Lightbox as the lightbox."), Gallery_jsx("p", null, "React Image Lightbox is a responsive lightbox & dialog script with focus on performance and providing best experience for user with any device."), Gallery_jsx("p", null, Gallery_jsx("a", {
    href: "https://frontend-collective.github.io/react-image-lightbox/"
  }, "Visit plugin website")), Gallery_jsx("p", {
    className: "mt-4"
  }, Gallery_jsx("b", null, "Supported props for Gallery component:")), Gallery_jsx("ul", null, Gallery_jsx("li", null, Gallery_jsx("b", null, "rowClasses"), " - classes for ", Gallery_jsx("code", null, "Row"), " element"), Gallery_jsx("li", null, Gallery_jsx("b", null, "colClasses"), " - classes for ", Gallery_jsx("code", null, "Col"), " element"), Gallery_jsx("li", null, Gallery_jsx("b", null, "data"), " - images object"), Gallery_jsx("li", null, Gallery_jsx("b", null, "xs"), " - extra small column size"), Gallery_jsx("li", null, Gallery_jsx("b", null, "sm"), " - small column size"), Gallery_jsx("li", null, Gallery_jsx("b", null, "md"), " - medium column size"), Gallery_jsx("li", null, Gallery_jsx("b", null, "lg"), " - large column size"), Gallery_jsx("li", null, Gallery_jsx("b", null, "xl"), " - extra large column size"))), Gallery_jsx("div", {
    className: "col-12 mt-5"
  }, Gallery_jsx(Gallery["a" /* default */], {
    rowClasses: "align-items-center text-center mb-5",
    lg: "4",
    xs: "6",
    colClasses: "px-1 mb-2",
    data: Gallery_images
  })), Gallery_jsx("div", {
    className: "mt-3"
  }, Gallery_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    className: "rounded shadow p-4",
    style: prism_["tomorrow"]
  }, highlightCode)));
});
const Gallery_images = [{
  "img": "restaurant-1515164783716-8e6920f3e77c.jpg",
  "title": ""
}, {
  "img": "restaurant-1466978913421-dad2ebd01d17.jpg",
  "title": ""
}, {
  "img": "restaurant-1477763858572-cda7deaa9bc5.jpg",
  "title": ""
}, {
  "img": "restaurant-1505275350441-83dcda8eeef5.jpg",
  "title": ""
}, {
  "img": "restaurant-1508766917616-d22f3f1eea14.jpg",
  "title": ""
}, {
  "img": "restaurant-1430931071372-38127bd472b8.jpg",
  "title": ""
}];
// CONCATENATED MODULE: ./src/components/Docs/Theme/IconsDirectory.js
var IconsDirectory_jsx = external_react_default.a.createElement;


/* harmony default export */ var IconsDirectory = (() => {
  return IconsDirectory_jsx("div", {
    id: "icons-directory",
    className: "docs-item"
  }, IconsDirectory_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Icons - Directory"), IconsDirectory_jsx("div", {
    className: "docs-desc"
  }, IconsDirectory_jsx("p", {
    className: "lead"
  }, "This theme also comes with a ", IconsDirectory_jsx("strong", null, "150+ Premium SVG icons"), ". Icons included cover mostly e-commerce, restaurant and travel niches."), IconsDirectory_jsx("p", {
    className: "text-muted text-large"
  }, "For a complete icon reference, see ", IconsDirectory_jsx("a", {
    href: "https://demo.bootstrapious.com/directory/1-4/icons/demo.html"
  }, "here"), ".")), IconsDirectory_jsx("div", {
    className: "mt-5"
  }, IconsDirectory_jsx(external_reactstrap_["Row"], null, IconsDirectory_jsx(external_reactstrap_["Col"], {
    xs: "3",
    md: "2",
    className: "d-flex justify-content-center"
  }, IconsDirectory_jsx("svg", {
    className: "svg-icon w-3rem h-3rem mb-5 svg-icon-light"
  }, IconsDirectory_jsx("use", {
    xlinkHref: "/content/svg/orion-svg-sprite.svg#smartphone-1"
  }))), IconsDirectory_jsx(external_reactstrap_["Col"], {
    xs: "3",
    md: "2",
    className: "d-flex justify-content-center"
  }, IconsDirectory_jsx("svg", {
    className: "svg-icon w-3rem h-3rem mb-5 svg-icon-light"
  }, IconsDirectory_jsx("use", {
    xlinkHref: "/content/svg/orion-svg-sprite.svg#telephone-operator-1"
  }))), IconsDirectory_jsx(external_reactstrap_["Col"], {
    xs: "3",
    md: "2",
    className: "d-flex justify-content-center"
  }, IconsDirectory_jsx("svg", {
    className: "svg-icon w-3rem h-3rem mb-5 svg-icon-light"
  }, IconsDirectory_jsx("use", {
    xlinkHref: "/content/svg/orion-svg-sprite.svg#airplane-mode-1"
  }))), IconsDirectory_jsx(external_reactstrap_["Col"], {
    xs: "3",
    md: "2",
    className: "d-flex justify-content-center"
  }, IconsDirectory_jsx("svg", {
    className: "svg-icon w-3rem h-3rem mb-5 svg-icon-light"
  }, IconsDirectory_jsx("use", {
    xlinkHref: "/content/svg/orion-svg-sprite.svg#destination-map-1"
  }))), IconsDirectory_jsx(external_reactstrap_["Col"], {
    xs: "3",
    md: "2",
    className: "d-flex justify-content-center"
  }, IconsDirectory_jsx("svg", {
    className: "svg-icon w-3rem h-3rem mb-5 svg-icon-light"
  }, IconsDirectory_jsx("use", {
    xlinkHref: "/content/svg/orion-svg-sprite.svg#beach-1"
  }))), IconsDirectory_jsx(external_reactstrap_["Col"], {
    xs: "3",
    md: "2",
    className: "d-flex justify-content-center"
  }, IconsDirectory_jsx("svg", {
    className: "svg-icon w-3rem h-3rem mb-5 svg-icon-light"
  }, IconsDirectory_jsx("use", {
    xlinkHref: "/content/svg/orion-svg-sprite.svg#dollar-sign-1"
  }))), IconsDirectory_jsx(external_reactstrap_["Col"], {
    xs: "3",
    md: "2",
    className: "d-flex justify-content-center"
  }, IconsDirectory_jsx("svg", {
    className: "svg-icon w-3rem h-3rem mb-5 svg-icon-light"
  }, IconsDirectory_jsx("use", {
    xlinkHref: "/content/svg/orion-svg-sprite.svg#open-box-1"
  }))), IconsDirectory_jsx(external_reactstrap_["Col"], {
    xs: "3",
    md: "2",
    className: "d-flex justify-content-center"
  }, IconsDirectory_jsx("svg", {
    className: "svg-icon w-3rem h-3rem mb-5 svg-icon-light"
  }, IconsDirectory_jsx("use", {
    xlinkHref: "/content/svg/orion-svg-sprite.svg#pen-1"
  }))), IconsDirectory_jsx(external_reactstrap_["Col"], {
    xs: "3",
    md: "2",
    className: "d-flex justify-content-center"
  }, IconsDirectory_jsx("svg", {
    className: "svg-icon w-3rem h-3rem mb-5 svg-icon-light"
  }, IconsDirectory_jsx("use", {
    xlinkHref: "/content/svg/orion-svg-sprite.svg#pay-1"
  }))), IconsDirectory_jsx(external_reactstrap_["Col"], {
    xs: "3",
    md: "2",
    className: "d-flex justify-content-center"
  }, IconsDirectory_jsx("svg", {
    className: "svg-icon w-3rem h-3rem mb-5 svg-icon-light"
  }, IconsDirectory_jsx("use", {
    xlinkHref: "/content/svg/orion-svg-sprite.svg#giftbox-1"
  }))), IconsDirectory_jsx(external_reactstrap_["Col"], {
    xs: "3",
    md: "2",
    className: "d-flex justify-content-center"
  }, IconsDirectory_jsx("svg", {
    className: "svg-icon w-3rem h-3rem mb-5 svg-icon-light"
  }, IconsDirectory_jsx("use", {
    xlinkHref: "/content/svg/orion-svg-sprite.svg#store-1"
  }))), IconsDirectory_jsx(external_reactstrap_["Col"], {
    xs: "3",
    md: "2",
    className: "d-flex justify-content-center"
  }, IconsDirectory_jsx("svg", {
    className: "svg-icon w-3rem h-3rem mb-5 svg-icon-light"
  }, IconsDirectory_jsx("use", {
    xlinkHref: "/content/svg/orion-svg-sprite.svg#bank-cards-1"
  }))))));
});
// CONCATENATED MODULE: ./src/components/Docs/Theme/IconsFontAwesome.js
var IconsFontAwesome_jsx = external_react_default.a.createElement;

/* harmony default export */ var IconsFontAwesome = (() => {
  return IconsFontAwesome_jsx("div", {
    id: "icons-fontawesome",
    className: "docs-item"
  }, IconsFontAwesome_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Icons - Font Awesome"), IconsFontAwesome_jsx("div", {
    className: "docs-desc"
  }, IconsFontAwesome_jsx("p", {
    className: "lead"
  }, "Vector icons and social logos on your website with Font Awesome, the web\u2019s most popular icon set and toolkit."), IconsFontAwesome_jsx("p", {
    className: "text-muted text-large"
  }, "These icons are mostly used in buttons or for social network links. For a complete icon reference, see ", IconsFontAwesome_jsx("a", {
    href: "https://fontawesome.com/icons?d=gallery"
  }, "here"), ".")), IconsFontAwesome_jsx("div", {
    className: "mt-5"
  }, IconsFontAwesome_jsx("ul", {
    className: "list-unstyled"
  }, IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "fas fa-address-book"
  })), IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "far fa-address-book"
  })), IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "fas fa-address-card"
  })), IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "far fa-address-card"
  })), IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "fas fa-adjust"
  })), IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "fas fa-align-center"
  })), IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "fas fa-align-justify"
  })), IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "fas fa-align-left"
  })), IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "fas fa-align-right"
  })), IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "fas fa-allergies"
  })), IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "fas fa-ambulance"
  })), IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "fas fa-american-sign-language-interpreting"
  })), IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "fas fa-anchor"
  })), IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "fas fa-angle-double-down"
  })), IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "fas fa-angle-double-left"
  })), IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "fas fa-angle-double-right"
  })), IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "fas fa-angle-double-up"
  })), IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "fas fa-angle-down"
  })), IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "fas fa-angle-left"
  })), IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "fas fa-angle-right"
  })), IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "fas fa-angle-up"
  })), IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "fas fa-archive"
  })), IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "fas fa-arrow-alt-circle-down"
  })), IconsFontAwesome_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, IconsFontAwesome_jsx("i", {
    className: "far fa-arrow-alt-circle-down"
  }, "       ")))));
});
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// CONCATENATED MODULE: ./src/components/Docs/Theme/Maps.js
var Maps_jsx = external_react_default.a.createElement;






let Map;
/* harmony default export */ var Maps = (() => {
  const [mapLoaded, setMapLoaded] = external_react_default.a.useState(false);
  external_react_default.a.useEffect(() => {
    Map = dynamic_default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "SVAT")), {
      ssr: false,
      loadableGenerated: {
        webpack: () => [/*require.resolve*/("SVAT")],
        modules: ['../../Map']
      }
    });
    setMapLoaded(true);
  }, []);
  return Maps_jsx("div", {
    id: "maps",
    className: "docs-item element"
  }, Maps_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Maps"), Maps_jsx("div", {
    className: "docs-desc"
  }, Maps_jsx("p", {
    className: "lead"
  }, "Maps inside this theme use React Leaflet and tiles from ", Maps_jsx("a", {
    href: "https://carto.com/"
  }, "Carto Maps"), "."), Maps_jsx("p", null, "A big advantage compared to Google Maps is that these maps are free to use. For the map tiles, you can also use maps from Mapbox or OpenStreet maps."), Maps_jsx("p", null, Maps_jsx("a", {
    href: "https://react-leaflet.js.org/",
    className: "btn btn-outline-dark btn-sm"
  }, "React Leaflet website")), Maps_jsx("p", null, "Since Next.js doesn't support JavaScript ", Maps_jsx("code", null, "window"), " function, we have to load the ", Maps_jsx("code", null, "Map"), " component dynamically using Next.js dynamic feature. Read more about dynamic importing ", Maps_jsx("a", {
    href: "https://nextjs.org/docs/advanced-features/dynamic-import"
  }, "here"), "."), Maps_jsx("h6", {
    className: "text-dark"
  }, "Supported props for Map component:"), Maps_jsx("ul", null, Maps_jsx("li", null, Maps_jsx("b", null, "className"), " - classes for ", Maps_jsx("code", null, "Map"), " element"), Maps_jsx("li", null, Maps_jsx("b", null, "center"), " - map center"), Maps_jsx("li", null, Maps_jsx("b", null, "zoom"), " - zoom level"), Maps_jsx("li", null, Maps_jsx("b", null, "geoJSON"), " - geoJSON data import"), Maps_jsx("li", null, Maps_jsx("b", null, "popupVenue"), " - if true, the map will use ", Maps_jsx("code", null, "Venues"), " style (for markers and popups) instead of ", Maps_jsx("code", null, "Rentals")), Maps_jsx("li", null, Maps_jsx("b", null, "hoverCard"), " - here you define which listing is hovered to show hover effect on according map marker (used at /category listing pages)"))), Maps_jsx("div", {
    className: "mt-5"
  }, Maps_jsx("h6", null, "Maps with multiple points"), Maps_jsx("p", {
    className: "text-muted"
  }, "Maps that are used in the category listings show multiple points/markers. Also, popup windows are automatically attached to these points. To display this type of map, you need to provide your list of points in a ", Maps_jsx("a", {
    href: "http://geojson.org/"
  }, "GeoJSON file"), ". These files will contain location data and accompanying data like title, description, image path, etc. See below the links to the particular GeoJSON files used in this theme."), Maps_jsx("h6", {
    className: "text-muted text-uppercase"
  }, "Venues"), Maps_jsx("p", {
    className: "text-muted text-sm mb-4"
  }, "GeoJSON file used to generate markers: ", Maps_jsx("a", {
    href: "/content/restaurants-geojson.json"
  }, "restaurants-geojson.json")), Maps_jsx("div", {
    className: "map-wrapper-450 mb-2"
  }, mapLoaded && Maps_jsx(Map, {
    className: "h-100",
    center: [51.505, -0.09],
    zoom: 14,
    geoJSON: restaurants_geojson,
    dragging: "true",
    popupVenue: true
  })), Maps_jsx("div", {
    className: "mt-4 mb-5"
  }, Maps_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Maps_highlightCode.venues)), Maps_jsx("h6", {
    className: "text-muted text-uppercase"
  }, "Rentals"), Maps_jsx("p", {
    className: "text-muted text-sm mb-4"
  }, "GeoJSON file used to generate markers: ", Maps_jsx("a", {
    href: "/content/rooms-geojson.json"
  }, "rooms-geojson.json")), Maps_jsx("div", {
    className: "map-wrapper-450 mb-2"
  }, mapLoaded && Maps_jsx(Map, {
    className: "h-100",
    center: [51.505, -0.09],
    zoom: 14,
    geoJSON: rooms_geojson,
    dragging: "true"
  })), Maps_jsx("div", {
    className: "mt-4 mb-5"
  }, Maps_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Maps_highlightCode.rentals)), Maps_jsx("h6", null, "Maps with a single marker"), Maps_jsx("p", {
    className: "text-muted"
  }, "Maps used on the detail pages do not contain popups and do not use a GeoJSON file. You pass all the data to the JavaScript function."), Maps_jsx("h6", {
    className: "text-muted mb-4"
  }, "Single-marker map"), Maps_jsx("div", {
    className: "map-wrapper-300 mb-3"
  }, mapLoaded && Maps_jsx(Map, {
    className: "h-100",
    center: [40.732346, -74.0014247],
    markerPosition: [40.732346, -74.0014247],
    zoom: 16,
    dragging: "true"
  })), Maps_jsx("div", {
    className: "mt-4 mb-5"
  }, Maps_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Maps_highlightCode.single)), Maps_jsx("h6", {
    className: "text-muted mb-4"
  }, "Single-marker map, circle instead of the marker"), Maps_jsx("div", {
    className: "map-wrapper-300 mb-3"
  }, mapLoaded && Maps_jsx(Map, {
    className: "h-100",
    center: [40.732346, -74.0014247],
    circlePosition: [40.732346, -74.0014247],
    circleRadius: 500,
    zoom: 14,
    dragging: "true"
  })), Maps_jsx("div", {
    className: "mt-4 mb-5"
  }, Maps_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Maps_highlightCode.circle))));
});
const Maps_highlightCode = {
  "venues": `import dynamic from 'next/dynamic'

import geoJSON from './public/content/rooms-geojson.json'

let Map
export default () => {
    const [mapLoaded, setMapLoaded] = React.useState(false)

    React.useEffect(() => {
        Map = dynamic(
            () => import('../components/Map'),
            { ssr: false }
        )

        setMapLoaded(true)

    }, [])
    return (
        div className="map-wrapper-300 mb-3">
            {mapLoaded &&
                <Map
                    className="h-100"
                    center={[51.505, -0.09]}
                    zoom={14}
                    popupVenue
                    geoJSON={geoJSON}
                />
            }
        </div>
    )
}`,
  "rentals": `import dynamic from 'next/dynamic'

import geoJSON from './public/content/rooms-geojson.json'

let Map
export default () => {
    const [mapLoaded, setMapLoaded] = React.useState(false)

    React.useEffect(() => {
        Map = dynamic(
            () => import('../components/Map'),
            { ssr: false }
        )

        setMapLoaded(true)

    }, [])
    return (
        div className="map-wrapper-300 mb-3">
            {mapLoaded &&
                <Map
                    className="h-100"
                    center={[51.505, -0.09]}
                    zoom={14}
                    geoJSON={geoJSON}
                />
            }
        </div>
    )
}`,
  "single": `import dynamic from 'next/dynamic'

import geoJSON from './public/content/rooms-geojson.json'

let Map
export default () => {
    const [mapLoaded, setMapLoaded] = React.useState(false)

    React.useEffect(() => {
        Map = dynamic(
            () => import('../components/Map'),
            { ssr: false }
        )

        setMapLoaded(true)

    }, [])
    return (
        div className="map-wrapper-300 mb-3">
            {mapLoaded &&
                <Map
                    className="h-100"
                    center={[40.732346, -74.0014247]}
                    zoom={14}
                    geoJSON={geoJSON}
                />
            }
        </div>
    )
}`,
  "circle": `import dynamic from 'next/dynamic'

import geoJSON from './public/content/rooms-geojson.json'

let Map
export default () => {
    const [mapLoaded, setMapLoaded] = React.useState(false)

    React.useEffect(() => {
        Map = dynamic(
            () => import('../components/Map'),
            { ssr: false }
        )

        setMapLoaded(true)

    }, [])
    return (
        div className="map-wrapper-300 mb-3">
            {mapLoaded &&
                <Map
                    className="h-100"
                    center={[40.732346, -74.0014247]}
                    circlePosition={[40.732346, -74.0014247]}
                    circleRadius={500}
                    zoom={14}
                    geoJSON={geoJSON}
                />
            }
        </div>
    )
}`
};
// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__("vtRj");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// CONCATENATED MODULE: ./src/components/Docs/Theme/ReactSelect.js
var ReactSelect_jsx = external_react_default.a.createElement;



/* harmony default export */ var ReactSelect = (() => {
  return ReactSelect_jsx("div", {
    id: "react-select",
    className: "docs-item element"
  }, ReactSelect_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "React Select"), ReactSelect_jsx("div", {
    className: "docs-desc"
  }, ReactSelect_jsx("p", {
    className: "lead"
  }, "Directory Theme uses React Select plugin for showing select input. You can customize it using props."), ReactSelect_jsx("p", null, ReactSelect_jsx("a", {
    href: "https://react-select.com/",
    className: "btn btn-outline-dark btn-sm"
  }, "Visit plugin website"))), ReactSelect_jsx("div", {
    className: "mt-5"
  }, ReactSelect_jsx(external_react_select_default.a, {
    instanceId: "sortBySelect",
    options: selectOptions,
    defaultValue: selectOptions[0],
    className: "bootstrap-select",
    classNamePrefix: "selectpicker"
  })));
});
const selectOptions = [{
  "value": "popular",
  "label": "Most popular"
}, {
  "value": "recommended",
  "label": "Recommended"
}, {
  "value": "newest",
  "label": "Newest"
}, {
  "value": "oldest",
  "label": "Oldest"
}, {
  "value": "closest",
  "label": "Closest"
}];
// CONCATENATED MODULE: ./src/components/Docs/Theme/Ribbon.js
var Ribbon_jsx = external_react_default.a.createElement;


/* harmony default export */ var Ribbon = (() => {
  return Ribbon_jsx("div", {
    id: "ribbon",
    className: "docs-item element"
  }, Ribbon_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Ribbon"), Ribbon_jsx("div", {
    className: "docs-desc"
  }, Ribbon_jsx("p", {
    className: "lead"
  }, "Ribbons can be used in the venue component, venue carousels but also separately. Its parent needs a ", Ribbon_jsx("code", null, "position: relative;"), " and you can use theme colours for ribbon backgrounds.")), Ribbon_jsx("div", {
    className: "mt-5"
  }, Ribbon_jsx(external_reactstrap_["Card"], {
    className: "bg-gray-100 w-50 position-relative py-6 border-0 shadow"
  }, Ribbon_jsx("div", {
    className: "ribbon ribbon-primary"
  }, "Primary"), Ribbon_jsx("div", {
    className: "ribbon ribbon-secondary"
  }, "Secondary"), Ribbon_jsx("div", {
    className: "ribbon ribbon-info"
  }, "Info"))));
});
// EXTERNAL MODULE: ./src/components/Swiper.js
var Swiper = __webpack_require__("9cbB");

// CONCATENATED MODULE: ./src/components/Docs/Theme/Swiper.js
var Swiper_jsx = external_react_default.a.createElement;









/* harmony default export */ var Theme_Swiper = (() => {
  const [propsCollapse, setPropsCollapse] = external_react_default.a.useState(false);
  return Swiper_jsx("div", {
    id: "swiper",
    className: "docs-item element"
  }, Swiper_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Swiper"), Swiper_jsx("div", {
    className: "docs-desc"
  }, Swiper_jsx("p", {
    className: "lead"
  }, "Touch-enabled React plugin that lets you create beautiful responsive carousel sliders."), Swiper_jsx("p", null, "Used for the single-item carousels and also for the card carousels. You can use Swiper templates included in this template or import and customize on your own using docs for this plugin."), Swiper_jsx("p", null, Swiper_jsx("a", {
    href: "https://github.com/kidjp85/react-id-swiper#readme",
    className: "btn btn-outline-dark btn-sm"
  }, "Visit plugin website")), Swiper_jsx(external_reactstrap_["Button"], {
    "aria-expanded": propsCollapse,
    onClick: () => setPropsCollapse(!propsCollapse),
    color: "link",
    className: "btn-collapse pl-0 text-secondary"
  }, "Supported props"), Swiper_jsx(external_reactstrap_["Collapse"], {
    isOpen: propsCollapse
  }, Swiper_jsx("ul", null, Swiper_jsx("li", null, Swiper_jsx("b", null, "simple"), " - if true, simple style will be used"), Swiper_jsx("li", null, Swiper_jsx("b", null, "cards"), " - if true, room cards style will be used"), Swiper_jsx("li", null, Swiper_jsx("b", null, "propertyCards"), " - if true, property cards style will be used"), Swiper_jsx("li", null, Swiper_jsx("b", null, "imgCards"), " - if true, image cards style will be used"), Swiper_jsx("li", null, Swiper_jsx("b", null, "restaurantCards"), " - if true, restaurant cards style will be used"), Swiper_jsx("li", null, Swiper_jsx("b", null, "className"), " - classes for ", Swiper_jsx("code", null, "Swiper"), " container"), Swiper_jsx("li", null, Swiper_jsx("b", null, "wrapperClass"), " - classes for ", Swiper_jsx("code", null, "Swiper"), " wrapper"), Swiper_jsx("li", null, Swiper_jsx("b", null, "slidesPerView"), " - slides per view at smallest size"), Swiper_jsx("li", null, Swiper_jsx("b", null, "effect"), " - ", Swiper_jsx("code", null, "Swiper"), " effect"), Swiper_jsx("li", null, Swiper_jsx("b", null, "allowTouchMove"), " - if false, touch moves are disabled otherways enabled"), Swiper_jsx("li", null, Swiper_jsx("b", null, "spaceBetween"), " - space between slides"), Swiper_jsx("li", null, Swiper_jsx("b", null, "centeredSlides"), " - slides centering"), Swiper_jsx("li", null, Swiper_jsx("b", null, "roundLengths"), " - if true, round values of slides width and height to prevent blurry texts on usual resolutions"), Swiper_jsx("li", null, Swiper_jsx("b", null, "loop"), " - endless loop through slides"), Swiper_jsx("li", null, Swiper_jsx("b", null, "speed"), " - speed of animation"), Swiper_jsx("li", null, Swiper_jsx("b", null, "parallax"), " - parallax effect"), Swiper_jsx("li", null, Swiper_jsx("b", null, "breakpoints"), " - pass breakpoints object for different behaviour on different screen sizes"), Swiper_jsx("li", null, Swiper_jsx("b", null, "xs"), " - slides per view at extra small size"), Swiper_jsx("li", null, Swiper_jsx("b", null, "sm"), " - slides per view at small size"), Swiper_jsx("li", null, Swiper_jsx("b", null, "md"), " - slides per view at medium size"), Swiper_jsx("li", null, Swiper_jsx("b", null, "lg"), " - slides per view at large size"), Swiper_jsx("li", null, Swiper_jsx("b", null, "xl"), " - slides per view at extra large size"), Swiper_jsx("li", null, Swiper_jsx("b", null, "xxl"), " - slides per view at at width over 1400px"), Swiper_jsx("li", null, Swiper_jsx("b", null, "xxxl"), " - slides per view at at width over 1600px"), Swiper_jsx("li", null, Swiper_jsx("b", null, "autoplay"), " - enables/disables autoplay"), Swiper_jsx("li", null, Swiper_jsx("b", null, "delay"), " - delay for autoplay"), Swiper_jsx("li", null, Swiper_jsx("b", null, "pagiantion"), " - if true, pagination bullets will shop up"), Swiper_jsx("li", null, Swiper_jsx("b", null, "pagiantionClass"), " - class for pagination"), Swiper_jsx("li", null, Swiper_jsx("b", null, "navigation"), " - if true, navigation arrows will shop up"), Swiper_jsx("li", null, Swiper_jsx("b", null, "data"), " - pass slides object")))), Swiper_jsx("div", {
    className: "mt-5"
  }, Swiper_jsx("h6", null, "Rooms Swiper"), Swiper_jsx("p", {
    className: "mb-4 text-muted"
  }, "GeoJSON file used to generate slides: ", Swiper_jsx("a", {
    href: "/content/rooms-geojson.json"
  }, "rooms-geojson.json")), Swiper_jsx("div", {
    className: "mb-3"
  }, Swiper_jsx(Swiper["a" /* default */], {
    className: "swiper-container-mx-negative pt-3 pb-5",
    perView: 1,
    spaceBetween: 20,
    loop: true,
    roundLengths: true,
    md: 2,
    lg: 3,
    data: rooms_geojson.features,
    cards: true
  }))), Swiper_jsx("div", {
    class: "mt-4"
  }, Swiper_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Swiper_highlightCode.cards)), Swiper_jsx("div", {
    className: "mt-5"
  }, Swiper_jsx("h6", null, "Restaurants Swiper"), Swiper_jsx("p", {
    className: "mb-4 text-muted"
  }, "GeoJSON file used to generate slides: ", Swiper_jsx("a", {
    href: "/content/restaurants-geojson.json"
  }, "restaurants-geojson.json")), Swiper_jsx("div", {
    className: "mb-3"
  }, Swiper_jsx(Swiper["a" /* default */], {
    className: "swiper-container-mx-negative pt-3 pb-5",
    perView: 1,
    spaceBetween: 20,
    loop: true,
    roundLengths: true,
    md: 2,
    lg: 3,
    data: restaurants_geojson.features,
    restaurantCards: true
  }))), Swiper_jsx("div", null, Swiper_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Swiper_highlightCode.restaurantCards)), Swiper_jsx("div", {
    className: "mt-5"
  }, Swiper_jsx("h6", {
    className: "mb-4"
  }, "Swiper property cards style"), Swiper_jsx("div", {
    className: "mb-3"
  }, Swiper_jsx(Swiper["a" /* default */], {
    className: "swiper-container-mx-negative pt-3 pb-5",
    perView: 1,
    spaceBetween: 20,
    loop: true,
    roundLengths: true,
    md: 2,
    lg: 3,
    data: index4.featured.swiper,
    propertyCards: true
  }))), Swiper_jsx("div", null, Swiper_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Swiper_highlightCode.propertyCards)), Swiper_jsx("div", {
    className: "mt-5"
  }, Swiper_jsx("h6", {
    className: "mb-4"
  }, "Swiper image cards style"), Swiper_jsx("div", {
    className: "mb-4"
  }, Swiper_jsx(Swiper["a" /* default */], {
    className: "mx-n2 pt-3 pb-5",
    perView: 1,
    spaceBetween: 20,
    imgCards: true,
    loop: true,
    roundLengths: true,
    md: 2,
    lg: 4,
    data: guides.swiperItems
  }))), Swiper_jsx("div", null, Swiper_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Swiper_highlightCode.imgCards)), Swiper_jsx("div", {
    className: "mt-5"
  }, Swiper_jsx("h6", null, "Background Images Hero Slider"), Swiper_jsx("p", {
    className: "mb-4"
  }, "Parent element must have ", Swiper_jsx("code", null, ".position-relative"), " and height set"), Swiper_jsx("div", {
    style: {
      height: "300px"
    },
    className: "position-relative mb-3"
  }, Swiper_jsx(Swiper["a" /* default */], {
    className: "hero-slider",
    wrapperClasses: "dark-overlay",
    data: swiper.simple,
    simple: true,
    effect: "fade",
    speed: 2000,
    allowTouchMove: false,
    pagination: false,
    autoplay: true,
    delay: 2000
  }))), Swiper_jsx("div", null, Swiper_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Swiper_highlightCode.simple)));
});
const swiper = {
  "simple": ["photo-1501621965065-c6e1cf6b53e2.jpg", "photo-1519974719765-e6559eac2575.jpg", "photo-1490578474895-699cd4e2cf59.jpg", "photo-1534850336045-c6c6d287f89e.jpg"]
};
const Swiper_highlightCode = {
  "simple": `import Swiper from '../../Swiper'

export default () => {

    const slides = [
            "photo-1501621965065-c6e1cf6b53e2.jpg",
            "photo-1519974719765-e6559eac2575.jpg",
            "photo-1490578474895-699cd4e2cf59.jpg",
            "photo-1534850336045-c6c6d287f89e.jpg"
    ]
    
    return (
        <Swiper
            className="hero-slider"
            wrapperClasses="dark-overlay"
            data={slides}
            simple={true}
            effect='fade'
            speed={2000}
            allowTouchMove={false}
            pagination={false}
            autoplay={true}
            delay={2000}
        />
    )
}`,
  "cards": `import Swiper from '../../Swiper'

import geoJSON from './public/content/rooms-geojson.json'

export default () => {
    return (
        <Swiper
            className="swiper-container-mx-negative pt-3 pb-5"
            perView={1}
            spaceBetween={20}
            loop
            roundLengths
            md={2}
            lg={3}
            data={geoJSONRooms.features}
            cards
        />
    )
}`,
  "restaurantCards": `import Swiper from '../../Swiper'

import geoJSON from './public/content/restaurants-geojson.json'

export default () => {
    return (
        <Swiper
            className="swiper-container-mx-negative pt-3 pb-5"
            perView={1}
            spaceBetween={20}
            loop
            roundLengths
            md={2}
            lg={3}
            xl={4}
            data={geoJSONfeatures}
            restaurantCards
        />
    )
}
`,
  "propertyCards": `import Swiper from '../../Swiper'

export default () => {
    "slides": [
        {
            "title": "Modern, Well-Appointed Room",
            "location": "San Francisco",
            "type": "House",
            "link": "detail-rooms",
            "img": "img/photo/photo-1484154218962-a197022b5858.jpg",
            "meters": "350",
            "bedrooms": "3",
            "bathrooms": "2",
            "price": "$150k"
        },
        {
            "title": "Cute Quirky Garden apt, NYC adjacent",
            "location": "San Francisco",
            "type": "Apartment",
            "link": "detail-rooms",
            "img": "img/photo/photo-1426122402199-be02db90eb90.jpg",
            "meters": "85",
            "bedrooms": "2",
            "bathrooms": "1",
            "price": "$65k"
        }
        ...
        ...
    ]
    
    return (
        <Swiper
            className="swiper-container-mx-negative pt-3 pb-5"
            perView={1}
            spaceBetween={20}
            loop
            roundLengths
            md={2}
            lg={3}
            xl={4}
            data={slides}
            propertyCards
        />
    )
}`,
  "imgCards": `import Swiper from '../../Swiper'

export default () => {

    "slides": [
        {
            "title": "New York",
            "subtitle": "The big apple",
            "img": "img/photo/new-york.jpg",
            "link": "category"
        },
        {
            "title": "Paris",
            "subtitle": "Artist capital of Europe",
            "img": "img/photo/paris.jpg",
            "link": "category"
        },
        {
            "title": "Barcelona",
            "subtitle": "Dalí, Gaudí, Barrio Gotico",
            "img": "img/photo/barcelona.jpg",
            "link": "category"
        },
        {
            "title": "Prague",
            "subtitle": "City of hundred towers",
            "img": "img/photo/prague.jpg",
            "link": "category"
        }
    ]
    
    return (
        <Swiper
            className="mx-n2 pt-3 pb-5"
            perView={1}
            spaceBetween={20}
            imgCards
            loop
            roundLengths
            md={2}
            lg={4}
            data={slides}
        />
    )
}`
};
// CONCATENATED MODULE: ./src/components/Docs/Theme/BackgroundImage.js
var BackgroundImage_jsx = external_react_default.a.createElement;


/* harmony default export */ var BackgroundImage = (() => {
  return BackgroundImage_jsx("div", {
    id: "backgroundimage",
    className: "docs-item element"
  }, BackgroundImage_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Background image"), BackgroundImage_jsx("div", {
    className: "docs-desc"
  }, BackgroundImage_jsx("p", {
    className: "lead"
  }, "Utility class that turns a ", BackgroundImage_jsx("code", null, "<img className=\"bg-image\">"), " into a background image for its background. Useful e.g. for carousels. Make sure that image's parent container and the content that should be placed over the image are relatively positioned.")), BackgroundImage_jsx("div", {
    className: "mt-5"
  }, BackgroundImage_jsx(external_reactstrap_["Card"], {
    className: "border-0 position-relative py-6 overflow-hidden shadow"
  }, BackgroundImage_jsx("img", {
    src: "/content/img/photo/restaurant-1504087697492-238a6bf49ce8.jpg",
    alt: "",
    className: "bg-image"
  }), BackgroundImage_jsx(external_reactstrap_["CardBody"], {
    className: "text-center position-relative"
  }, BackgroundImage_jsx("h3", {
    className: "text-white text-uppercase mb-0"
  }, "I have a background image")))));
});
// CONCATENATED MODULE: ./src/components/Docs/Theme/ImageOverlay.js
var ImageOverlay_jsx = external_react_default.a.createElement;


/* harmony default export */ var ImageOverlay = (() => {
  return ImageOverlay_jsx("div", {
    id: "imageoverlay",
    className: "docs-item element"
  }, ImageOverlay_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Image overlay"), ImageOverlay_jsx("div", {
    className: "docs-desc"
  }, ImageOverlay_jsx("p", {
    className: "lead"
  }, "Utility class that darkens or lightens the backround image of the element to enhance the legibility. It can be used with cards, carousel slides, etc."), ImageOverlay_jsx("p", null, "Gradient overlay adds vertical gradient that's darkest on the bottom third of the element.")), ImageOverlay_jsx("div", {
    className: "mt-5"
  }, ImageOverlay_jsx(external_reactstrap_["Row"], null, ImageOverlay_jsx(external_reactstrap_["Col"], {
    lg: "6"
  }, ImageOverlay_jsx(external_reactstrap_["Card"], {
    className: "mb-5 border-0 text-white dark-overlay shadow-lg"
  }, ImageOverlay_jsx("img", {
    src: "/content/img/photo/photo-1467987506553-8f3916508521.jpg",
    alt: "",
    className: "card-img"
  }), ImageOverlay_jsx("a", {
    href: "/category",
    className: "tile-link"
  }), ImageOverlay_jsx("div", {
    className: "card-img-overlay d-flex align-items-center"
  }, ImageOverlay_jsx("div", {
    className: "w-100 overlay-content"
  }, ImageOverlay_jsx("h2", {
    className: "text-center mb-0"
  }, "Dark overlay"))))), ImageOverlay_jsx(external_reactstrap_["Col"], {
    lg: "6"
  }, ImageOverlay_jsx(external_reactstrap_["Card"], {
    className: "mb-5 border-0 text-center light-overlay shadow-lg"
  }, ImageOverlay_jsx("img", {
    src: "/content/img/photo/photo-1514890547357-a9ee288728e0.jpg",
    alt: "",
    className: "card-img"
  }), ImageOverlay_jsx("a", {
    href: "/category",
    className: "tile-link"
  }), ImageOverlay_jsx("div", {
    className: "card-img-overlay d-flex align-items-center"
  }, ImageOverlay_jsx("div", {
    className: "w-100 overlay-content"
  }, ImageOverlay_jsx("h2", {
    className: "text-center mb-0"
  }, "Light overlay "))))), ImageOverlay_jsx(external_reactstrap_["Col"], {
    lg: "6"
  }, ImageOverlay_jsx(external_reactstrap_["Card"], {
    className: "card mb-5 border-0 text-center gradient-overlay shadow-lg"
  }, ImageOverlay_jsx("img", {
    src: "/content/img/photo/photo-1514890547357-a9ee288728e0.jpg",
    alt: "",
    className: "card-img"
  }), ImageOverlay_jsx("a", {
    href: "/category",
    className: "tile-link"
  }), ImageOverlay_jsx("div", {
    className: "card-img-overlay-bottom z-index-20 text-white"
  }, ImageOverlay_jsx("h2", {
    className: "h5 card-text"
  }, "Gradient Overlay"))))), ImageOverlay_jsx(external_reactstrap_["Card"], {
    className: "bg-gray-100 border-0"
  }, ImageOverlay_jsx(external_reactstrap_["CardBody"], null, ImageOverlay_jsx("h6", {
    className: "text-muted text-uppercase font-weight-normal mb-3"
  }, "Class reference"), ImageOverlay_jsx(external_reactstrap_["CardText"], null, ImageOverlay_jsx("code", null, ".dark-overlay"), ", ", ImageOverlay_jsx("code", null, ".light-overlay"), ",  ", ImageOverlay_jsx("code", null, ".gradient-overlay"), "  - CSS class to be used on the element"), ImageOverlay_jsx(external_reactstrap_["CardText"], null, ImageOverlay_jsx("code", null, ".overlay-content"), " - use this class on the element's content to increase its Z-index and move it above the overlay layer")))));
});
// CONCATENATED MODULE: ./src/components/Docs/Theme/ResponsiveBorders.js
var ResponsiveBorders_jsx = external_react_default.a.createElement;


/* harmony default export */ var ResponsiveBorders = (() => {
  return ResponsiveBorders_jsx("div", {
    id: "responsiveborders",
    className: "docs-item element"
  }, ResponsiveBorders_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Responsive borders"), ResponsiveBorders_jsx("div", {
    className: "docs-desc"
  }, ResponsiveBorders_jsx("p", {
    className: "lead"
  }, "Responsive borders as an addition to Bootstrap's ", ResponsiveBorders_jsx("a", {
    href: "https://getbootstrap.com/docs/4.1/utilities/borders/"
  }, "border utilities"), ".")), ResponsiveBorders_jsx("div", {
    className: "mt-5"
  }, ResponsiveBorders_jsx(external_reactstrap_["Card"], {
    className: "bg-gray-100 border-0"
  }, ResponsiveBorders_jsx(external_reactstrap_["CardBody"], null, ResponsiveBorders_jsx("h6", {
    className: "text-muted text-uppercase font-weight-normal mb-3"
  }, "Class reference"), ResponsiveBorders_jsx(external_reactstrap_["CardText"], null, ResponsiveBorders_jsx("code", null, ".border-sm"), ", ", ResponsiveBorders_jsx("code", null, ".border-md"), ", etc.")))));
});
// CONCATENATED MODULE: ./src/components/Docs/Theme/BlockUtilities.js
var BlockUtilities_jsx = external_react_default.a.createElement;


/* harmony default export */ var BlockUtilities = (() => {
  return BlockUtilities_jsx("div", {
    id: "blockutilities",
    className: "docs-item element"
  }, BlockUtilities_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Block utilities"), BlockUtilities_jsx("div", {
    className: "docs-desc"
  }, BlockUtilities_jsx("p", {
    className: "lead"
  }, "Additional utility classes, for block elements mostly.")), BlockUtilities_jsx("div", {
    className: "mt-5"
  }, BlockUtilities_jsx(external_reactstrap_["Card"], {
    className: "bg-gray-100 border-0"
  }, BlockUtilities_jsx(external_reactstrap_["CardBody"], null, BlockUtilities_jsx("h6", {
    className: "text-muted text-uppercase font-weight-normal mb-3"
  }, "Class reference"), BlockUtilities_jsx(external_reactstrap_["CardText"], null, BlockUtilities_jsx("code", null, ".bg-gray-100"), " to ", BlockUtilities_jsx("code", null, ".bg-gray-900"), " - grayscale backgrounds"), BlockUtilities_jsx(external_reactstrap_["CardText"], null, BlockUtilities_jsx("code", null, ".bg-primary-light"), ", ", BlockUtilities_jsx("code", null, ".bg-secondary-light"), " - lighter backgrounds for the theme colours"), BlockUtilities_jsx(external_reactstrap_["CardText"], null, BlockUtilities_jsx("code", null, ".opacity-1"), " to ", BlockUtilities_jsx("code", null, ".opacity-9"), " - opacity helper"), BlockUtilities_jsx(external_reactstrap_["CardText"], null, BlockUtilities_jsx("code", null, ".hover-scale"), " - scale element on hover"), BlockUtilities_jsx(external_reactstrap_["CardText"], null, BlockUtilities_jsx("code", null, ".hover-animate"), " - move element up by few pixels on hover"), BlockUtilities_jsx(external_reactstrap_["CardText"], null, BlockUtilities_jsx("code", null, ".hover-scale-bg-image"), " - scale element's background picture on hover")))));
});
// CONCATENATED MODULE: ./src/components/Docs/Theme/TextUtilities.js
var TextUtilities_jsx = external_react_default.a.createElement;


/* harmony default export */ var TextUtilities = (() => {
  return TextUtilities_jsx("div", {
    id: "textutilities",
    className: "docs-item element"
  }, TextUtilities_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Text utilities"), TextUtilities_jsx("div", {
    className: "docs-desc"
  }, TextUtilities_jsx("p", {
    className: "lead"
  }, "Additional utility classes, for block elements mostly.")), TextUtilities_jsx("div", {
    className: "mt-5"
  }, TextUtilities_jsx(external_reactstrap_["Card"], {
    className: "bg-gray-100 border-0"
  }, TextUtilities_jsx(external_reactstrap_["CardBody"], null, TextUtilities_jsx("h6", {
    className: "text-muted text-uppercase font-weight-normal mb-3"
  }, "Class reference"), TextUtilities_jsx(external_reactstrap_["CardText"], null, TextUtilities_jsx("code", null, ".text-gray-100"), " to ", TextUtilities_jsx("code", null, ".text-gray-900"), " - grayscale text colours"), TextUtilities_jsx(external_reactstrap_["CardText"], null, TextUtilities_jsx("code", null, ".text-sm"), ", ", TextUtilities_jsx("code", null, ".text-lg"), ", ", TextUtilities_jsx("code", null, ".text-xl"), " - text sizes"), TextUtilities_jsx(external_reactstrap_["CardText"], null, TextUtilities_jsx("code", null, ".letter-spacing-1"), " to ", TextUtilities_jsx("code", null, ".letter-spacing-5"), " - letter spacing 0.1em to 0.5em"), TextUtilities_jsx(external_reactstrap_["CardText"], null, TextUtilities_jsx("code", null, ".z-index-1"), " to ", TextUtilities_jsx("code", null, ".z-index-5"), " - z-index from 10 to 50"), TextUtilities_jsx(external_reactstrap_["CardText"], null, TextUtilities_jsx("code", null, ".text-hover-primary"), ", etc. - text colour on hover/focus for theme colours"), TextUtilities_jsx(external_reactstrap_["CardText"], null, TextUtilities_jsx("code", null, ".overflow-visible"), " and ", TextUtilities_jsx("code", null, ".overflow-hidden"), " - overflow control")))));
});
// CONCATENATED MODULE: ./src/pages/docs/components-directory.js
var components_directory_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





















async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white"
      },
      title: "Theme Components"
    }
  };
}
/* harmony default export */ var components_directory = __webpack_exports__["default"] = (() => {
  const ScrollLink = external_react_scroll_["Link"];
  const scrollLinkProps = {
    offset: -100,
    spy: true,
    smooth: true,
    activeClass: "active",
    className: "nav-link",
    href: "#"
  };
  return components_directory_jsx(external_react_default.a.Fragment, null, components_directory_jsx("section", {
    className: "hero py-5 py-lg-7"
  }, components_directory_jsx(external_reactstrap_["Container"], {
    className: "position-relative"
  }, components_directory_jsx(external_reactstrap_["Breadcrumb"], {
    listClassName: "justify-content-center pl-0"
  }, components_directory_jsx(external_reactstrap_["BreadcrumbItem"], null, components_directory_jsx(link_default.a, {
    href: "/"
  }, components_directory_jsx("a", null, "Home"))), components_directory_jsx(external_reactstrap_["BreadcrumbItem"], null, components_directory_jsx(link_default.a, {
    href: "/docs/docs-introduction"
  }, components_directory_jsx("a", null, "Documentation"))), components_directory_jsx(external_reactstrap_["BreadcrumbItem"], {
    active: true
  }, "Theme Components")), components_directory_jsx("h1", {
    className: "hero-heading"
  }, "Theme Components"), components_directory_jsx(external_reactstrap_["Row"], null, components_directory_jsx(external_reactstrap_["Col"], {
    xl: "8",
    className: "col-xl-8 mx-auto"
  }, components_directory_jsx("p", {
    className: "lead text-muted"
  }, "This is a quick showcase of some of the main Bootstrap components that come with this template."))))), components_directory_jsx("section", {
    className: "py-6"
  }, components_directory_jsx(external_reactstrap_["Container"], {
    fluid: true
  }, components_directory_jsx(external_reactstrap_["Row"], {
    className: "px-xl-5"
  }, components_directory_jsx(external_reactstrap_["Col"], {
    lg: "2"
  }, components_directory_jsx(DocsNav["a" /* default */], null)), components_directory_jsx(external_reactstrap_["Col"], {
    lg: "10",
    xl: "8",
    className: "docs-content position-relative"
  }, components_directory_jsx(Accordion, null), components_directory_jsx(Cards, null), components_directory_jsx(Theme_Gallery, null), components_directory_jsx(Maps, null), components_directory_jsx(ReactSelect, null), components_directory_jsx(Theme_Swiper, null), components_directory_jsx(Avatar, null), components_directory_jsx(BackgroundImage, null), components_directory_jsx(IconsDirectory, null), components_directory_jsx(IconsFontAwesome, null), components_directory_jsx(ImageOverlay, null), components_directory_jsx(Ribbon, null), components_directory_jsx(ResponsiveBorders, null), components_directory_jsx(BlockUtilities, null), components_directory_jsx(TextUtilities, null)), components_directory_jsx(external_reactstrap_["Col"], {
    lg: "2"
  }, components_directory_jsx(external_reactstrap_["Nav"], {
    pills: true,
    style: {
      top: "120px"
    },
    className: "flex-column sticky-top ml-1 p-3 mb-5 border-left"
  }, components_directory_jsx("h6", {
    className: "sidebar-heading ml-3"
  }, "React components"), sidebarMenu.map(item => item.divider ? components_directory_jsx("h6", {
    key: item.label,
    className: "sidebar-heading mt-3 ml-3"
  }, item.label) : components_directory_jsx(ScrollLink, _extends({
    key: item.label,
    to: item.to
  }, scrollLinkProps), item.label))))))));
});
const sidebarMenu = [{
  "label": "Accordion",
  "to": "accordion"
}, {
  "label": "Cards",
  "to": "cards"
}, {
  "label": "Gallery with lightbox",
  "to": "gallerywithlightbox"
}, {
  "label": "Maps",
  "to": "maps"
}, {
  "label": "React Select",
  "to": "react-select"
}, {
  "label": "Swiper",
  "to": "swiper"
}, {
  "label": "CSS components",
  "divider": true
}, {
  "label": "Avatar",
  "to": "avatar"
}, {
  "label": "Background image",
  "to": "backgroundimage"
}, {
  "label": "Icons - directory",
  "to": "icons-directory"
}, {
  "label": "Icons - Font Awesome",
  "to": "icons-fontawesome"
}, {
  "label": "Image overlay",
  "to": "imageoverlay"
}, {
  "label": "Ribbon",
  "to": "ribbon"
}, {
  "label": "Responsive borders",
  "to": "responsiveborders"
}, {
  "label": "Block utilities",
  "to": "blockutilities"
}, {
  "label": "Text utilities",
  "to": "textutilities"
}];

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

/***/ "oTrj":
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
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Media"], {
    className: "d-block d-sm-flex review"
  }, __jsx("div", {
    className: "text-md-center mr-4 mr-xl-5"
  }, __jsx("img", {
    src: `/content/img/avatar/${data.avatar}`,
    alt: data.title,
    className: "d-block avatar avatar-xl p-2 mb-2"
  }), __jsx("span", {
    className: "text-uppercase text-muted text-sm"
  }, data.date)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Media"], {
    body: true
  }, __jsx("h6", {
    className: "mt-2 mb-1"
  }, data.title), __jsx("div", {
    className: "mb-2"
  }, __jsx(_Stars__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    size: "xs",
    color: "text-primary",
    stars: data.stars
  })), __jsx("p", {
    className: "text-muted text-sm"
  }, data.content)));
});

/***/ }),

/***/ "osud":
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"FeatureCollection\",\"features\":[{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-73.99967,40.73723]},\"properties\":{\"id\":\"59c0c8e33b1527bfe2abaf92\",\"index\":0,\"isActive\":true,\"logo\":\"http://placehold.it/32x32\",\"image\":\"restaurant-1430931071372-38127bd472b8.jpg\",\"link\":\"detail\",\"name\":\"Blue Hill\",\"category\":\"Restaurants\",\"person\":\"Bianca Briggs\",\"email\":\"biancabriggs@bluehill.com\",\"stars\":4,\"phone\":\"+1 (920) 407-3975\",\"address\":\"151 Karweg Place, Waumandee, Iowa, 5508\",\"about\":\"Cupidatat excepteur non dolore laborum et quis nostrud veniam dolore deserunt. Pariatur dolore ut in elit id nulla. Irure nostrud sint deserunt enim Lorem. Do eu esse consequat mollit labore commodo officia labore voluptate sit voluptate cupidatat.\\r\\n\",\"tags\":[\"Restaurant\",\"Contemporary\"]}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-73.9906951,40.7384555]},\"properties\":{\"id\":\"59c0c8e322f3375db4d89128\",\"index\":1,\"isActive\":true,\"logo\":\"http://placehold.it/32x32\",\"image\":\"restaurant-1436018626274-89acd1d6ec9d.jpg\",\"link\":\"detail\",\"name\":\"Plutorque\",\"category\":\"Restaurant\",\"person\":\"Bianca Briggs\",\"email\":\"biancabriggs@plutorque.com\",\"stars\":5,\"phone\":\"+1 (986) 599-2693\",\"address\":\"325 Seton Place, Castleton, Indiana, 3368\",\"about\":\"Proident irure eiusmod velit veniam consectetur id minim irure et nostrud mollit magna velit. Commodo amet proident aliqua qui enim exercitation ipsum laborum Lorem. Irure nostrud sint deserunt enim Lorem. Do eu esse consequat mollit labore commodo officia labore voluptate sit voluptate cupidatat.\\r\\n\",\"tags\":[\"Restaurant\",\"Fusion\"]}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-74.0014247,40.732346]},\"properties\":{\"id\":\"59c0c8e3a31e62979bf147c9\",\"index\":2,\"isActive\":true,\"logo\":\"http://placehold.it/32x32\",\"image\":\"restaurant-1466978913421-dad2ebd01d17.jpg\",\"link\":\"detail\",\"name\":\"Junipoor\",\"category\":\"Music club\",\"person\":\"Bianca Briggs\",\"email\":\"biancabriggs@junipoor.com\",\"stars\":5,\"phone\":\"+1 (863) 446-2211\",\"address\":\"397 Crystal Street, Idledale, Nebraska, 4692\",\"about\":\"Lorem amet ex duis in et fugiat consectetur laborum eiusmod labore. Quis cupidatat et do dolor in in magna. Eu sit quis cillum proident pariatur commodo consequat ea sunt mollit. Ad aliquip aliquip amet occaecat aute incididunt ex sit culpa adipisicing amet officia nisi. Commodo amet proident aliqua qui enim exercitation ipsum laborum Lorem.\\r\\n\",\"tags\":[\"Music\",\"Techno\",\"House\"]}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-73.9969277,40.7246413]},\"properties\":{\"id\":\"59c0c8e3503eb77d487e8082\",\"index\":3,\"isActive\":false,\"logo\":\"http://placehold.it/32x32\",\"image\":\"restaurant-1477763858572-cda7deaa9bc5.jpg\",\"link\":\"detail\",\"name\":\"Musix\",\"category\":\"Music club\",\"person\":\"Bianca Briggs\",\"email\":\"biancabriggs@musix.com\",\"stars\":3,\"phone\":\"+1 (862) 498-2322\",\"address\":\"828 Dewitt Avenue, Wyano, Nevada, 5082\",\"about\":\"Deserunt eiusmod Lorem proident consequat elit culpa laboris ea cupidatat. Consequat dolore proident ipsum qui sint enim id in non et duis sunt aute qui. Laboris deserunt enim exercitation do consequat irure dolor ipsum commodo est fugiat qui mollit.\\r\\n\",\"tags\":[\"Music\",\"Club\",\"Rock\"]}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-73.9893617,40.741726]},\"properties\":{\"id\":\"59c0c8e39aa2eed0626e485d\",\"index\":4,\"isActive\":false,\"logo\":\"http://placehold.it/32x32\",\"image\":\"restaurant-1504087697492-238a6bf49ce8.jpg\",\"link\":\"detail\",\"name\":\"Prosure\",\"category\":\"Restaurant\",\"person\":\"Bianca Briggs\",\"email\":\"biancabriggs@prosure.com\",\"stars\":5,\"phone\":\"+1 (831) 587-2089\",\"address\":\"942 Greenpoint Avenue, Northridge, Puerto Rico, 8248\",\"about\":\"Cillum sunt reprehenderit ea non irure veniam dolore commodo labore fugiat est consequat velit. Cupidatat nisi qui ad sit ut labore id esse tempor proident enim exercitation est aliquip. Ipsum deserunt dolor proident sunt ut proident esse do pariatur duis incididunt id ullamco. Dolore proident consectetur dolor irure mollit commodo sunt dolore.  \\r\\n\",\"tags\":[\"Nisi\",\"Ex\",\"Eiusmod\"]}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-73.96,40.741726]},\"properties\":{\"id\":\"59c0c8e39aa2edasd626e485d\",\"index\":5,\"isActive\":false,\"logo\":\"http://placehold.it/32x32\",\"image\":\"restaurant-1505275350441-83dcda8eeef5.jpg\",\"link\":\"detail\",\"name\":\"Take That\",\"category\":\"Café\",\"person\":\"Bianca Briggs\",\"email\":\"biancabriggs@prosure.com\",\"stars\":4,\"phone\":\"+1 (831) 587-2089\",\"address\":\"942 Greenpoint Avenue, Northridge, Puerto Rico, 8248\",\"about\":\"Cillum sunt reprehenderit ea non irure veniam dolore commodo labore fugiat est consequat velit. Cupidatat nisi qui ad sit ut labore id esse tempor proident enim exercitation est aliquip. Ipsum deserunt dolor proident sunt ut proident esse do pariatur duis incididunt id ullamco. Dolore proident consectetur dolor irure mollit commodo sunt dolore.  \\r\\n\",\"tags\":[\"Nisi\",\"Ex\",\"Eiusmod\"]}}]}");

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

/***/ "rDWQ":
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"FeatureCollection\",\"features\":[{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-73.99967,40.73723]},\"properties\":{\"id\":\"59c0c8e33b1527bfe2abaf92\",\"index\":0,\"isActive\":true,\"logo\":\"http://placehold.it/32x32\",\"image\":\"photo-1484154218962-a197022b5858.jpg\",\"link\":\"detail-rooms\",\"url\":\"#\",\"name\":\"Modern, Well-Appointed Room\",\"subtitle\":\"Private room\",\"email\":\"biancabriggs@bluehill.com\",\"stars\":5,\"price\":80,\"person\":\"Pamela\",\"avatar\":\"img/avatar/avatar-0.jpg\",\"phone\":\"+1 (920) 407-3975\",\"address\":\"151 Karweg Place, Waumandee, Iowa, 5508\",\"about\":\"Cupidatat excepteur non dolore laborum et quis nostrud veniam dolore deserunt. Pariatur dolore ut in elit id nulla. Irure nostrud sint deserunt enim Lorem. Do eu esse consequat mollit labore commodo officia labore voluptate sit voluptate cupidatat.\\r\\n\",\"tags\":[\"et\",\"cupidatat\"]}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-73.9906951,40.7384555]},\"properties\":{\"id\":\"59c0c8e322f3375db4d89128\",\"index\":1,\"isActive\":true,\"logo\":\"http://placehold.it/32x32\",\"image\":\"photo-1426122402199-be02db90eb90.jpg\",\"link\":\"detail-rooms\",\"url\":\"#\",\"name\":\"Cute Quirky Garden apt, NYC adjacent\",\"subtitle\":\"Entire apartment\",\"email\":\"biancabriggs@plutorque.com\",\"stars\":4,\"price\":121,\"person\":\"John\",\"avatar\":\"img/avatar/avatar-7.jpg\",\"phone\":\"+1 (986) 599-2693\",\"address\":\"325 Seton Place, Castleton, Indiana, 3368\",\"about\":\"Proident irure eiusmod velit veniam consectetur id minim irure et nostrud mollit magna velit. Commodo amet proident aliqua qui enim exercitation ipsum laborum Lorem. Irure nostrud sint deserunt enim Lorem. Do eu esse consequat mollit labore commodo officia labore voluptate sit voluptate cupidatat.\\r\\n\",\"tags\":[\"magna\",\"culpa\"]}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-74.0014247,40.732346]},\"properties\":{\"id\":\"59c0c8e3a31e62979bf147c9\",\"index\":2,\"isActive\":true,\"logo\":\"http://placehold.it/32x32\",\"image\":\"photo-1512917774080-9991f1c4c750.jpg\",\"link\":\"detail-rooms\",\"url\":\"#\",\"name\":\"Modern Apt - Vibrant Neighborhood!\",\"subtitle\":\"Entire apartment\",\"email\":\"biancabriggs@junipoor.com\",\"stars\":3,\"price\":75,\"person\":\"Julie\",\"avatar\":\"img/avatar/avatar-8.jpg\",\"phone\":\"+1 (863) 446-2211\",\"address\":\"397 Crystal Street, Idledale, Nebraska, 4692\",\"about\":\"Lorem amet ex duis in et fugiat consectetur laborum eiusmod labore. Quis cupidatat et do dolor in in magna. Eu sit quis cillum proident pariatur commodo consequat ea sunt mollit. Ad aliquip aliquip amet occaecat aute incididunt ex sit culpa adipisicing amet officia nisi. Commodo amet proident aliqua qui enim exercitation ipsum laborum Lorem.\\r\\n\",\"tags\":[\"ex\",\"exercitation\"]}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-73.9969277,40.7246413]},\"properties\":{\"id\":\"59c0c8e3503eb77d487e8082\",\"index\":3,\"isActive\":false,\"logo\":\"http://placehold.it/32x32\",\"image\":\"photo-1494526585095-c41746248156.jpg\",\"link\":\"detail-rooms\",\"url\":\"#\",\"name\":\"Sunny Private Studio-Apartment\",\"subtitle\":\"Shared room\",\"email\":\"biancabriggs@musix.com\",\"stars\":4,\"price\":93,\"person\":\"Barbora\",\"avatar\":\"img/avatar/avatar-9.jpg\",\"phone\":\"+1 (862) 498-2322\",\"address\":\"828 Dewitt Avenue, Wyano, Nevada, 5082\",\"about\":\"Deserunt eiusmod Lorem proident consequat elit culpa laboris ea cupidatat. Consequat dolore proident ipsum qui sint enim id in non et duis sunt aute qui. Laboris deserunt enim exercitation do consequat irure dolor ipsum commodo est fugiat qui mollit.\\r\\n\",\"tags\":[\"eiusmod\"]}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-73.9893617,40.741726]},\"properties\":{\"id\":\"59c0c8e39aa2eed0626e485d\",\"index\":4,\"isActive\":false,\"logo\":\"http://placehold.it/32x32\",\"image\":\"photo-1522771739844-6a9f6d5f14af.jpg\",\"link\":\"detail-rooms\",\"url\":\"#\",\"name\":\"Mid-Century Modern Garden Paradise\",\"subtitle\":\"Entire house\",\"email\":\"biancabriggs@prosure.com\",\"stars\":5,\"price\":115,\"person\":\"Jack\",\"avatar\":\"img/avatar/avatar-10.jpg\",\"phone\":\"+1 (831) 587-2089\",\"address\":\"942 Greenpoint Avenue, Northridge, Puerto Rico, 8248\",\"about\":\"Cillum sunt reprehenderit ea non irure veniam dolore commodo labore fugiat est consequat velit. Cupidatat nisi qui ad sit ut labore id esse tempor proident enim exercitation est aliquip. Ipsum deserunt dolor proident sunt ut proident esse do pariatur duis incididunt id ullamco. Dolore proident consectetur dolor irure mollit commodo sunt dolore.  \\r\\n\",\"tags\":[\"nisi\",\"ex\",\"eiusmod\"]}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-73.96,40.741726]},\"properties\":{\"id\":\"59c0c8e39aa2edasd626e485d\",\"index\":5,\"isActive\":false,\"logo\":\"http://placehold.it/32x32\",\"image\":\"photo-1488805990569-3c9e1d76d51c.jpg\",\"link\":\"detail-rooms\",\"url\":\"#\",\"name\":\"Brooklyn Life, Easy to Manhattan\",\"subtitle\":\"Private room\",\"email\":\"biancabriggs@prosure.com\",\"stars\":4,\"price\":123,\"person\":\"Stuart\",\"avatar\":\"img/avatar/avatar-11.jpg\",\"phone\":\"+1 (831) 587-2089\",\"address\":\"942 Greenpoint Avenue, Northridge, Puerto Rico, 8248\",\"about\":\"Cillum sunt reprehenderit ea non irure veniam dolore commodo labore fugiat est consequat velit. Cupidatat nisi qui ad sit ut labore id esse tempor proident enim exercitation est aliquip. Ipsum deserunt dolor proident sunt ut proident esse do pariatur duis incididunt id ullamco. Dolore proident consectetur dolor irure mollit commodo sunt dolore.  \\r\\n\",\"tags\":[\"nisi\",\"ex\",\"eiusmod\"]}}]}");

/***/ }),

/***/ "re7B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/* harmony default export */ __webpack_exports__["a"] = ((_ref) => {
  let {
    children,
    activeClassName
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "activeClassName"]);

  const {
    asPath
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const child = react__WEBPACK_IMPORTED_MODULE_2__["Children"].only(children);
  const childClassName = child.props.className || '';
  const className = asPath === props.href ? `${childClassName} ${activeClassName}`.trim() : childClassName;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
    className: className || null
  }));
});

/***/ }),

/***/ "unmI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cHt3");
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["a"] = (props => {
  const data = props.data;
  const [lightBoxOpen, setLightBoxOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [activeImage, setActiveImage] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);

  const onClick = index => {
    setActiveImage(index);
    setLightBoxOpen(!lightBoxOpen);
  };

  const customStyles = {
    overlay: {
      zIndex: '1000'
    },
    bodyOpen: {
      position: 'fixed'
    }
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: props.rowClasses
  }, data.map((item, index) => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    key: index,
    xs: props.xs,
    sm: props.sm,
    md: props.md,
    lg: props.lg,
    xl: props.xl,
    className: props.colClasses
  }, __jsx("img", {
    src: `/content/img/photo/${item.img}`,
    alt: item.title,
    className: "img-fluid img-gallery",
    onClick: () => onClick(index)
  })))), lightBoxOpen && __jsx(react_image_lightbox__WEBPACK_IMPORTED_MODULE_2___default.a, {
    mainSrc: `/content/img/photo/${data[activeImage].img}`,
    nextSrc: `/content/img/photo/${data[(activeImage + 1) % data.length].img}`,
    prevSrc: `/content/img/photo/${data[(activeImage + data.length - 1) % data.length].img}`,
    onCloseRequest: () => setLightBoxOpen(false),
    imageCaption: data[activeImage].title,
    onMovePrevRequest: () => setActiveImage((activeImage + data.length - 1) % data.length),
    onMoveNextRequest: () => setActiveImage((activeImage + 1) % data.length),
    enableZoom: false,
    reactModalStyle: customStyles
  }));
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

/***/ }),

/***/ "xA2X":
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
    className: "border-0 hover-animate bg-transparent"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: data.link
  }, __jsx("a", {
    className: "position-relative"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardImg"], {
    top: true,
    src: `/content/img/avatar/${data.img}`,
    alt: data.title,
    className: "team-img"
  }), __jsx("div", {
    className: "team-circle false"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    className: "team-body text-center"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    tag: "h6"
  }, data.title), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardSubtitle"], {
    tag: "p",
    className: "text-muted text-xs text-uppercase"
  }, data.content)));
});

/***/ })

/******/ });