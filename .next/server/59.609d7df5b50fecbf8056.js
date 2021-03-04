exports.ids = [59,0];
exports.modules = {

/***/ "AZHt":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA0MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yMCAwQzE0LjY5NTcgMCA5LjYwODU5IDIuMTA3MTQgNS44NTc4NiA1Ljg1Nzg2QzIuMTA3MTQgOS42MDg1OSAwIDE0LjY5NTcgMCAyMEMwIDM4IDIwIDYwIDIwIDYwQzIwIDYwIDQwIDM4IDQwIDIwQzQwIDE0LjY5NTcgMzcuODkyOSA5LjYwODU5IDM0LjE0MjEgNS44NTc4NkMzMC4zOTE0IDIuMTA3MTQgMjUuMzA0MyAwIDIwIDBWMFpNMjAgMjhDMTguNDE3NyAyOCAxNi44NzEgMjcuNTMwOCAxNS41NTU0IDI2LjY1MThDMTQuMjM5OCAyNS43NzI3IDEzLjIxNDUgMjQuNTIzMyAxMi42MDkgMjMuMDYxNUMxMi4wMDM1IDIxLjU5OTcgMTEuODQ1IDE5Ljk5MTEgMTIuMTUzNyAxOC40MzkzQzEyLjQ2MjQgMTYuODg3NCAxMy4yMjQzIDE1LjQ2MiAxNC4zNDMxIDE0LjM0MzFDMTUuNDYyIDEzLjIyNDMgMTYuODg3NCAxMi40NjI0IDE4LjQzOTMgMTIuMTUzN0MxOS45OTExIDExLjg0NSAyMS41OTk3IDEyLjAwMzUgMjMuMDYxNSAxMi42MDlDMjQuNTIzMyAxMy4yMTQ1IDI1Ljc3MjcgMTQuMjM5OCAyNi42NTE4IDE1LjU1NTRDMjcuNTMwOCAxNi44NzEgMjggMTguNDE3NyAyOCAyMEMyOCAyMi4xMjE3IDI3LjE1NzEgMjQuMTU2NiAyNS42NTY5IDI1LjY1NjlDMjQuMTU2NiAyNy4xNTcxIDIyLjEyMTcgMjggMjAgMjhaIiBmaWxsPSIjNEU2NkY4Ii8+DQo8L3N2Zz4NCg=="

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

/***/ "SVAT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("AuoD");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_content_svg_marker_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("AZHt");
/* harmony import */ var _public_content_svg_marker_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_content_svg_marker_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_content_svg_marker_hover_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("fM/q");
/* harmony import */ var _public_content_svg_marker_hover_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_content_svg_marker_hover_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Stars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("CIrI");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (props => {
  let tileLayers = [];
  tileLayers[1] = {
    tiles: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd'
  };
  tileLayers[2] = {
    tiles: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  };
  tileLayers[3] = {
    tiles: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png',
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  };
  tileLayers[4] = {
    tiles: 'https://mapserver.mapy.cz/base-m/{z}-{x}-{y}',
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, <a href="https://seznam.cz">Seznam.cz, a.s.</a>'
  };
  tileLayers[5] = {
    tiles: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd'
  };
  tileLayers[6] = {
    tiles: 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia maps</a>'
  };
  const [hover, setHover] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [focus, setFocus] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const icon = L.icon({
    iconUrl: _public_content_svg_marker_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    shadowUrl: '',
    iconRetinaUrl: _public_content_svg_marker_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    iconSize: [25, 37.5],
    popupAnchor: [0, -18],
    tooltipAnchor: [0, 19]
  });
  const highlightIcon = L.icon({
    iconUrl: _public_content_svg_marker_hover_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    shadowUrl: '',
    iconRetinaUrl: _public_content_svg_marker_hover_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    iconSize: [25, 37.5],
    popupAnchor: [0, -18],
    tooltipAnchor: [0, 19]
  });
  const markers = props.geoJSON && props.geoJSON.features && props.geoJSON.features.map(feature => [feature.geometry.coordinates[1], feature.geometry.coordinates[0]]);
  return __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Map"], {
    center: props.center && props.center,
    zoom: props.zoom,
    scrollWheelZoom: focus,
    className: props.className,
    dragging: props.dragging,
    tap: props.tap,
    bounds: props.geoJSON ? markers : null,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["TileLayer"], {
    url: tileLayers[1].tiles,
    attribution: tileLayers[1].attribution
  }), props.geoJSON && props.geoJSON.features && props.geoJSON.features.map(feature => {
    const data = feature.properties;
    return props.popupVenue ? __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
      key: data.id,
      position: [feature.geometry.coordinates[1], feature.geometry.coordinates[0]],
      onMouseOver: () => {
        setHover(data.id);
      },
      onMouseOut: () => {
        setHover(false);
      },
      icon: hover === data.id || props.hoverCard === feature.properties.id ? highlightIcon : icon
    }, __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Popup"], {
      className: "map-custom-popup",
      maxWidth: "600",
      minWidth: "200"
    }, __jsx("div", {
      className: "popup-venue"
    }, data.image ? __jsx("div", {
      className: `image d-none d-md-block`,
      style: {
        backgroundImage: `url(/content/img/photo/${data.image})`
      }
    }) : __jsx("div", {
      className: "image"
    }), __jsx("div", {
      className: "text"
    }, data.name && __jsx("h6", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: data.link
    }, __jsx("a", null, data.name))), data.about && __jsx("p", null, data.about), data.adress && __jsx("p", {
      className: "text-muted mb-1"
    }, data.adress), data.email && __jsx("p", {
      className: "text-muted mb-1"
    }, __jsx("i", {
      className: "fas fa-envelope-open fa-fw text-dark mr-2"
    }), __jsx("a", {
      href: `mailto:${data.email}`
    }, data.email)), data.phone && __jsx("p", {
      className: "text-muted mb-1"
    }, __jsx("i", {
      className: "fa fa-phone fa-fw text-dark mr-2"
    }), data.phone))))) : __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
      key: data.id,
      icon: icon,
      opacity: 0,
      position: [feature.geometry.coordinates[1], feature.geometry.coordinates[0]],
      onMouseOver: () => {
        setHover(data.id);
      },
      onMouseOut: () => {
        setHover(false);
      }
    }, __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      permanent: true,
      interactive: true,
      direction: "top",
      className: `map-custom-tooltip ${hover === data.id || props.hoverCard === feature.properties.id ? 'active' : ''}`
    }, "$", data.price), __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Popup"], {
      className: "map-custom-popup",
      maxWidth: "600",
      minWidth: "200"
    }, __jsx("div", {
      className: "popup-rental"
    }, data.image ? __jsx("div", {
      className: `image d-none d-md-block`,
      style: {
        backgroundImage: `url(/content/img/photo/${data.image})`
      }
    }) : __jsx("div", {
      className: "image"
    }), __jsx("div", {
      className: "text"
    }, data.name && __jsx("h6", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: data.link
    }, __jsx("a", null, data.name))), __jsx("div", {
      className: "text-xs"
    }, __jsx(_Stars__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      stars: data.stars
    }))))));
  }), props.markerPosition && __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
    position: props.markerPosition,
    icon: icon
  }), props.circlePosition && __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Circle"], {
    center: props.circlePosition,
    color: '#4E66F8',
    fillColor: '#8798fa',
    opacity: .5,
    radius: props.circleRadius,
    weight: 2
  }));
});

/***/ }),

/***/ "fM/q":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA0MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yMCAwQzE0LjY5NTcgMCA5LjYwODU5IDIuMTA3MTQgNS44NTc4NiA1Ljg1Nzg2QzIuMTA3MTQgOS42MDg1OSAwIDE0LjY5NTcgMCAyMEMwIDM4IDIwIDYwIDIwIDYwQzIwIDYwIDQwIDM4IDQwIDIwQzQwIDE0LjY5NTcgMzcuODkyOSA5LjYwODU5IDM0LjE0MjEgNS44NTc4NkMzMC4zOTE0IDIuMTA3MTQgMjUuMzA0MyAwIDIwIDBWMFpNMjAgMjhDMTguNDE3NyAyOCAxNi44NzEgMjcuNTMwOCAxNS41NTU0IDI2LjY1MThDMTQuMjM5OCAyNS43NzI3IDEzLjIxNDUgMjQuNTIzMyAxMi42MDkgMjMuMDYxNUMxMi4wMDM1IDIxLjU5OTcgMTEuODQ1IDE5Ljk5MTEgMTIuMTUzNyAxOC40MzkzQzEyLjQ2MjQgMTYuODg3NCAxMy4yMjQzIDE1LjQ2MiAxNC4zNDMxIDE0LjM0MzFDMTUuNDYyIDEzLjIyNDMgMTYuODg3NCAxMi40NjI0IDE4LjQzOTMgMTIuMTUzN0MxOS45OTExIDExLjg0NSAyMS41OTk3IDEyLjAwMzUgMjMuMDYxNSAxMi42MDlDMjQuNTIzMyAxMy4yMTQ1IDI1Ljc3MjcgMTQuMjM5OCAyNi42NTE4IDE1LjU1NTRDMjcuNTMwOCAxNi44NzEgMjggMTguNDE3NyAyOCAyMEMyOCAyMi4xMjE3IDI3LjE1NzEgMjQuMTU2NiAyNS42NTY5IDI1LjY1NjlDMjQuMTU2NiAyNy4xNTcxIDIyLjEyMTcgMjggMjAgMjhaIiBmaWxsPSIjMDkyYWYwIi8+DQo8L3N2Zz4NCg=="

/***/ })

};;