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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./mDOM/Synth.js":
/*!***********************!*\
  !*** ./mDOM/Synth.js ***!
  \***********************/
/*! exports provided: Synth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Synth\", function() { return Synth; });\nconst NODE = Symbol('node')\r\n\r\nclass Synth {\r\n  /**\r\n   * Creates a wrapper around the node\r\n   * @param {HTMLElement} node - source node\r\n   */\r\n  constructor(node) {\r\n    this[NODE] = node\r\n  }\r\n\r\n  /**\r\n   * Adds event listener\r\n   * @param {String} evt - event name\r\n   * @param {function} handler - handler function\r\n   * @returns {Synth}\r\n   */\r\n  on(evt, handler) {\r\n    this[NODE].addEventListener(evt, handler)\r\n    return this\r\n  }\r\n\r\n  /**\r\n   * Adds class names\r\n   * @param {String[]} list - list of class names\r\n   * @param {boolean} clean - should we clear classes first\r\n   * @returns {Synth}\r\n   */\r\n  cn(list = [], clean = false) {\r\n    if (clean) {\r\n      this[NODE].classList.clear()\r\n    }\r\n\r\n    list\r\n      .filter(c => !!c)\r\n      .forEach(c => this[NODE].classList.add(c)) \r\n    return this\r\n  }\r\n\r\n  /**\r\n   * Sets elements attributes\r\n   * @param {Object} list - list of parameters to be set\r\n   */\r\n  attr(list = {}) {\r\n    const map = new Map(list.entries())\r\n    map.forEach((val, key) => {\r\n      this[NODE][key] = val\r\n    })\r\n    return this\r\n  }\r\n\r\n  /**\r\n   * Adds sub-element\r\n   * @param {String} tag - tag name\r\n   * @param {String} NS - namespace (optional)\r\n   */\r\n  add(tag, NS) {\r\n    const res = NS \r\n      ? document.createElementNS(NS, tag)\r\n      : document.createElement(tag)\r\n\r\n    if (res) {\r\n      this[NODE].appendChild(res)\r\n      return new Synth(res)\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Sets element's id\r\n   * @param {String|number} id - id\r\n   */\r\n  id(id) { \r\n    this[NODE].id = id\r\n    return this\r\n  }\r\n\r\n  /**\r\n   * Sets element's text content\r\n   * @param {String|number} content - text content\r\n   */\r\n  text(content) {\r\n    this[NODE].textContent = content\r\n    return this\r\n  }\r\n\r\n  /**\r\n   * Returns element ref\r\n   * @returns {HTMLElement}\r\n   */\r\n  get node() {\r\n    return this[NODE]\r\n  }\r\n}\n\n//# sourceURL=webpack:///./mDOM/Synth.js?");

/***/ }),

/***/ "./mDOM/index.js":
/*!***********************!*\
  !*** ./mDOM/index.js ***!
  \***********************/
/*! exports provided: Mhu, build, mNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Mhu\", function() { return Mhu; });\n/* harmony import */ var _mNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mNode */ \"./mDOM/mNode.js\");\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages */ \"./mDOM/messages.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"build\", function() { return _mNode__WEBPACK_IMPORTED_MODULE_0__[\"build\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mNode\", function() { return _mNode__WEBPACK_IMPORTED_MODULE_0__[\"mNode\"]; });\n\n\r\n\r\n\r\nclass mhuVM extends _mNode__WEBPACK_IMPORTED_MODULE_0__[\"mNode\"] {\r\n\tconstructor(dev) {\r\n\t\tsuper()\r\n\t\tthis.$inst = new Map()\r\n\r\n\t\tif (dev) {\r\n\t\t\twindow['Mhu'] = this\r\n\t\t}\r\n\t}\r\n\r\n\tcreate(component, destination) {\r\n\t\tlet root = null\r\n\t\tswitch(typeof destination) {\r\n\t\t\tcase 'string':\r\n\t\t\t\troot = document.querySelector(destination)\r\n\t\t\t\tbreak\r\n\t\t\tcase 'object':\r\n\t\t\t\troot = destination\r\n\t\t\t\tbreak\r\n\t\t\tdefault:\r\n\t\t\t\tconsole.error(_messages__WEBPACK_IMPORTED_MODULE_1__[\"ERR\"].TARGET)\r\n\t\t\t\treturn\r\n\t\t}\r\n\r\n\t\tif (!root) {\r\n\t\t\tconsole.error()\r\n\t\t\treturn\r\n\t\t}\r\n\r\n\t\tconst node = Object(_mNode__WEBPACK_IMPORTED_MODULE_0__[\"build\"])(component, root)\r\n\t\tif (!!node) {\r\n\t\t\tnode.create()\r\n\t\t\tthis.$inst.set(root, node)\r\n\t\t\treturn node\r\n\t\t}\r\n\t}\r\n}\r\n\r\nconst Mhu = new mhuVM(true)\r\n\r\n\n\n//# sourceURL=webpack:///./mDOM/index.js?");

/***/ }),

/***/ "./mDOM/mNode.js":
/*!***********************!*\
  !*** ./mDOM/mNode.js ***!
  \***********************/
/*! exports provided: build, mNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"build\", function() { return build; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mNode\", function() { return mNode; });\n/* harmony import */ var _Synth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Synth */ \"./mDOM/Synth.js\");\n\r\n\r\nconst build = (comp, parent) => {\r\n\tlet node\r\n\tswitch(typeof comp) {\r\n\t\tcase 'string':\r\n\t\t\tnode = new mNode(parent)\r\n\t\t\tnode.$is(comp)\r\n\t\t\tbreak\r\n\t\tcase 'function':\r\n\t\t\tnode = new comp(parent)\r\n\t\t\tbreak\r\n\t\tdefault:\r\n\t\t\tconsole.error('failed to create node', comp)\r\n\t\t\treturn\r\n\t}\r\n\treturn node\r\n}\r\n\r\nconst EL = Symbol('EL')\r\n\r\nclass mNode {\r\n\tconstructor(host) {\r\n\t\tthis.$host = host\r\n\t\tthis[EL] = null\r\n\t\tthis.$ch = new Set()\r\n\t}\r\n\r\n\tcreate(props) {}\r\n\r\n\tupdate(props) {}\r\n\r\n\t$is(tag) {\r\n\t\tconst node = document.createElement(tag)\r\n\r\n\t\tif (!!node) {\r\n\t\t\tif (!!this[EL]) {\r\n\t\t\t\tthis[EL].remove()\r\n\t\t\t}\r\n\t\t\tthis[EL] = node\r\n\t\t\tthis.$host.appendChild(node)\r\n\t\t} else {\r\n\t\t\tconsole.error('failed to create an element \"%s\"', tag)\r\n\t\t}\r\n\r\n\t\treturn this.$el\r\n\t}\r\n\r\n\tchild(comp = 'div', props = {}) {\r\n\t\tconst res = build(comp, this[EL])\r\n\t\tif (!!res) {\r\n\t\t\tthis.$ch.add(res)\r\n\t\t\tres.create(props)\r\n\t\t\treturn res\r\n\t\t}\r\n\t\treturn null\r\n\t}\r\n\r\n\t/**\r\n\t * @returns {Synth}\r\n\t */\r\n\tget $el() {\r\n\t\treturn new _Synth__WEBPACK_IMPORTED_MODULE_0__[\"Synth\"](this[EL])\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./mDOM/mNode.js?");

/***/ }),

/***/ "./mDOM/messages.js":
/*!**************************!*\
  !*** ./mDOM/messages.js ***!
  \**************************/
/*! exports provided: ERR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERR\", function() { return ERR; });\nconst ERR = {\r\n\tTARGET: 'Target should be either selector string or HTMLElement'\r\n}\n\n//# sourceURL=webpack:///./mDOM/messages.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body, html {\\n  padding: 0;\\n  margin: 0; }\\n\\n* {\\n  box-sizing: border-box;\\n  font-size: 4vmin;\\n  line-height: 4vmin;\\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; }\\n\\n.container {\\n  max-width: 960px;\\n  margin: 0px auto;\\n  min-height: 100%;\\n  display: flex; }\\n\\n.bar {\\n  padding: 4vmin; }\\n\\n.content {\\n  flex-grow: 1; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! DOM */ \"./mDOM/index.js\");\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container */ \"./src/Container.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/Header.js\");\n\r\n\r\n\r\n\r\n\r\nclass App extends DOM__WEBPACK_IMPORTED_MODULE_0__[\"mNode\"] {\r\n\tcreate() {\r\n\t\tconst cont = this\r\n\t\t\t.child(_Container__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n\r\n\t\tcont.child(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\n\t}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Container.js":
/*!**************************!*\
  !*** ./src/Container.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! DOM */ \"./mDOM/index.js\");\n\r\n\r\nclass Container extends DOM__WEBPACK_IMPORTED_MODULE_0__[\"mNode\"] {\r\n\tcreate() {\r\n\t\tthis\r\n\t\t\t.$is('div')\r\n\t\t\t.cn(['container'])\r\n\t}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\n//# sourceURL=webpack:///./src/Container.js?");

/***/ }),

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! DOM */ \"./mDOM/index.js\");\n\r\n\r\nclass Header extends DOM__WEBPACK_IMPORTED_MODULE_0__[\"mNode\"] {\r\n\tcreate() {\r\n\t\tthis\r\n\t\t\t.$is('div')\r\n\t\t\t.cn(['block'])\r\n\t\t\t.text('Header')\r\n\t}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/Header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! DOM */ \"./mDOM/index.js\");\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\r\n\r\n\r\n\r\n\r\nconst inst = DOM__WEBPACK_IMPORTED_MODULE_0__[\"Mhu\"].create(\r\n\t_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n\t'body'\r\n)\r\n\r\nconsole.log(inst.$el)\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style/index.scss?");

/***/ })

/******/ });