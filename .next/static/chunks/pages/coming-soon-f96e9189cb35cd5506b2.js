_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[33],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery,i=void 0!==a&&a;return n||o&&i}},"/GRZ":function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},"1Yj4":function(t,e,n){"use strict";var r=n("wx14"),o=n("zLVn"),a=n("q1tI"),i=n.n(a),u=n("17x9"),c=n.n(u),f=n("TSYQ"),s=n.n(f),l=n("33Jr"),d={tag:l.q,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},p=function(t){var e=t.className,n=t.cssModule,a=t.fluid,u=t.tag,c=Object(o.a)(t,["className","cssModule","fluid","tag"]),f="container";!0===a?f="container-fluid":a&&(f="container-"+a);var d=Object(l.m)(s()(e,f),n);return i.a.createElement(u,Object(r.a)({},c,{className:d}))};p.propTypes=d,p.defaultProps={tag:"div"},e.a=p},"33Jr":function(t,e,n){"use strict";n.d(e,"p",(function(){return i})),n.d(e,"i",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"m",(function(){return f})),n.d(e,"n",(function(){return s})),n.d(e,"o",(function(){return l})),n.d(e,"t",(function(){return p})),n.d(e,"a",(function(){return y})),n.d(e,"r",(function(){return h})),n.d(e,"q",(function(){return b})),n.d(e,"e",(function(){return v})),n.d(e,"c",(function(){return g})),n.d(e,"d",(function(){return x})),n.d(e,"l",(function(){return w})),n.d(e,"b",(function(){return O})),n.d(e,"f",(function(){return _})),n.d(e,"s",(function(){return E})),n.d(e,"k",(function(){return S})),n.d(e,"j",(function(){return C})),n.d(e,"h",(function(){return A}));var r,o=n("17x9"),a=n.n(o);function i(t){document.body.style.paddingRight=t>0?t+"px":null}function u(){var t=window.getComputedStyle(document.body,null);return parseInt(t&&t.getPropertyValue("padding-right")||0,10)}function c(){var t=function(){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e}(),e=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=e?parseInt(e.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&i(n+t)}function f(t,e){return void 0===t&&(t=""),void 0===e&&(e=r),e?t.split(" ").map((function(t){return e[t]||t})).join(" "):t}function s(t,e){var n={};return Object.keys(t).forEach((function(r){-1===e.indexOf(r)&&(n[r]=t[r])})),n}function l(t,e){for(var n,r=Array.isArray(e)?e:[e],o=r.length,a={};o>0;)a[n=r[o-=1]]=t[n];return a}var d={};function p(t){d[t]||("undefined"!==typeof console&&console.error(t),d[t]=!0)}var m="object"===typeof window&&window.Element||function(){};function y(t,e,n){if(!(t[e]instanceof m))return new Error("Invalid prop `"+e+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var h=a.a.oneOfType([a.a.string,a.a.func,y,a.a.shape({current:a.a.any})]),b=a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func}),a.a.arrayOf(a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func})]))]),v={Fade:150,Collapse:350,Modal:300,Carousel:600},g=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],x={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},w={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},O=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],_=!("undefined"===typeof window||!window.document||!window.document.createElement);function j(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}function E(t){var e=typeof t;if("number"===e)return t;if("symbol"===e||"object"===e&&"[object Symbol]"===j(t))return NaN;if(S(t)){var n="function"===typeof t.valueOf?t.valueOf():t;t=S(n)?""+n:n}if("string"!==e)return 0===t?t:+t;t=t.replace(/^\s+|\s+$/g,"");var r=/^0b[01]+$/i.test(t);return r||/^0o[0-7]+$/i.test(t)?parseInt(t.slice(2),r?2:8):/^[-+]0x[0-9a-f]+$/i.test(t)?NaN:+t}function S(t){var e=typeof t;return null!=t&&("object"===e||"function"===e)}function M(t){if(function(t){return!(!t||"object"!==typeof t)&&"current"in t}(t))return t.current;if(function(t){if(!S(t))return!1;var e=j(t);return"[object Function]"===e||"[object AsyncFunction]"===e||"[object GeneratorFunction]"===e||"[object Proxy]"===e}(t))return t();if("string"===typeof t&&_){var e=document.querySelectorAll(t);if(e.length||(e=document.querySelectorAll("#"+t)),!e.length)throw new Error("The target '"+t+"' could not be identified in the dom, tip: check spelling");return e}return t}function k(t){return null!==t&&(Array.isArray(t)||_&&"number"===typeof t.length)}function C(t,e){var n=M(t);return e?k(n)?n:null===n?[]:[n]:k(n)?n[0]:n}var A=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},"48fX":function(t,e,n){var r=n("qhzo");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"5fIB":function(t,e,n){var r=n("7eYB");t.exports=function(t){if(Array.isArray(t))return r(t)}},"7eYB":function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},"8Kt/":function(t,e,n){"use strict";n("oI91");e.__esModule=!0,e.defaultHead=s,e.default=void 0;var r,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=f();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=r?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function f(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return f=function(){return t},t}function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var d=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var u=o.key.slice(o.key.indexOf("$")+1);t.has(u)?a=!1:t.add(u)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var c=0,f=d.length;c<f;c++){var s=d[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=o.props[s],p=r[s]||new Set;"name"===s&&i||!p.has(l)?(p.add(l),r[s]=p):a=!1}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}function m(t){var e=t.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},e)}m.rewind=function(){};var y=m;e.default=y},"C+bE":function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},F4LA:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return u}));var r=n("q1tI"),o=n.n(r),a=n("1Yj4"),i=(n("g4pe"),o.a.createElement),u=!0;e.default=function(){var t=[{icon:"twitter",link:"#"},{icon:"facebook",link:"#"},{icon:"instagram",link:"#"}];return i("div",{className:"mh-full-screen d-flex align-items-center dark-overlay"},i("img",{src:"content/img/photo/photo-1490578474895-699cd4e2cf59.jpg",alt:"Coming Soon",className:"bg-image"}),i(a.a,{className:"text-white text-center text-lg overlay-content py-6 py-lg-0"},i("h1",{className:"text-hide mx-auto mb-6"},"Coming soon",i("img",{src:"content/img/coming-soon.png",alt:"Coming Soon",className:"img-fluid"})),i("h3",{className:"mb-5 text-shadow"},"Our Vabgo directory is coming to you soon."),i("p",{className:"font-weight-light mb-4"},i("i",{className:"fas fa-map-marker-alt mr-2"})," Vabgo | Startup from Erode, Tamil Nadu, India."),i("ul",{className:"list-inline"},t&&t.map((function(t){return i("li",{key:t.icon,className:"list-inline-item"},i("a",{href:t.link,target:"_blank",title:t.icon,className:"text-white"},i("i",{className:"fab fa-".concat(t.icon)})))})))))}},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.HeadManagerContext=o},KckH:function(t,e,n){var r=n("7eYB");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},T0f4:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},TSYQ:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&t.push(i)}else if("object"===a)for(var u in r)n.call(r,u)&&r[u]&&t.push(u)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},Xuae:function(t,e,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),i=(n("qXWd"),n("48fX")),u=n("tCBg"),c=n("T0f4");function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}e.__esModule=!0,e.default=void 0;var s=n("q1tI"),l=function(t){i(n,t);var e=f(n);function n(t){var a;return o(this,n),(a=e.call(this,t))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);e.default=l},g4pe:function(t,e,n){t.exports=n("8Kt/")},grO0:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/coming-soon",function(){return n("F4LA")}])},i2R6:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},mPvQ:function(t,e,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");t.exports=function(t){return r(t)||o(t)||a(t)||i()}},oI91:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},qXWd:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},qhzo:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},rlHP:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},tCBg:function(t,e,n){var r=n("C+bE"),o=n("qXWd");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},wx14:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},zLVn:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,"a",(function(){return r}))}},[["grO0",1,0]]]);