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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(array) {\n    this.array = array;\n  }\n\n  html(string) {\n    if (typeof string === 'string') {\n      for (let i = 0; i < this.array.length; i++) {\n        this.array[i].innerHTML = string;\n      }\n    } else {\n      return this.array[0].innerHTML;\n    }\n  }\n\n  empty() {\n    this.html(\"\");\n  }\n\n  append(arg) {\n    if (arg instanceof DOMNodeCollection) {\n      for (let i = 0; i < this.array.length; i++) {\n        for (let j = 0; j < arg.array.length; j++) {\n          this.array[i].innerHTML += arg.array[j].outerHTML ;\n        }\n      }\n    } else if (arg instanceof HTMLElement){\n      for (let i = 0; i < this.array.length; i++) {\n        this.array[i].innerHTML += arg.outerHTML;\n      }\n    } else {\n      for (let i = 0; i < this.array.length; i++) {\n        this.array[i].innerHTML += arg;\n      }\n    }\n  }\n\n  attr(att, val) {\n    if (val) {\n      for (let i = 0; i < this.array.length; i++){\n        this.array[i].setAttribute(att,val);\n      }\n    } else {\n      return this.array[0].getAttribute(att);\n    }\n  }\n\n  addClass(newClass) {\n\n    for (let i = 0; i < this.array.length; i++) {\n      if (this.array[i].class === undefined) {\n        this.array[i].class = newClass;\n      } else {\n        let newClasses = newClass.split(' ');\n        let currClasses = this.array[i].class.split(' ');\n\n        currClasses = currClasses.concat(newClasses);\n        this.array[i].class = currClasses.join(' ');\n      }\n    }\n  }\n\n\n  removeClass(oldClass) {\n    if (!oldClass) {\n      for (let i = 0; i < this.array.length; i++) {\n        this.array[i].class = \"\";\n      }\n    } else {\n      for (let i = 0; i < this.array.length; i++) {\n        let oldClasses = oldClass.split(' ');\n        let currClasses = this.array[i].class.split(' ');\n\n        for (let j = 0; j < currClasses.length; j++){\n          if(oldClasses.includes(currClasses[j])) {\n            currClasses[j] = '';\n          }\n        }\n        this.array[i].class = currClasses.join(' ').trim();\n      }\n    }\n  }\n\n  children() {\n    let childs = [];\n    for (let i = 0; i < this.array.length; i++) {\n      for (let j = 0; j < this.array[i].children.length; j++) {\n        childs.push(this.array[i].children[j]);\n      }\n    }\n    return new DOMNodeCollection(childs);\n  }\n\n  parent() {\n    let parents = [];\n    for (let i = 0; i < this.array.length; i++) {\n      parents.push(this.array[i].parentElement);\n    }\n    return new DOMNodeCollection(parents);\n  }\n\n  find (selector) {\n    let results = [];\n    for (let i = 0; i < this.array.length; i++) {\n      let list = this.array[i].querySelectorAll(selector);\n      for (let j = 0; j <list.length; j++) {\n        results.push(list[j]);\n      }\n    }\n    return new DOMNodeCollection(results);\n  }\n\n  remove() {\n    this.empty();\n    this.array = [];\n  }\n}\n\n\n\nmodule.exports = DOMNodeCollection;\n\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./lib/dom_node_collection.js\");\n\n$l = function l (arg) {\n\n  if (arg instanceof HTMLElement) {\n    let array = [arg];\n    return new DOMNodeCollection(array);\n  } else\n  if (typeof arg === \"string\") {\n    let array = Array.from(document.querySelectorAll(arg));\n    return new DOMNodeCollection(array);\n  }\n\n};\n\nwindow.el = document.getElementById(\"list1\");li = $l(el); ul = $l('ul'); ul.attr(\"id\",\"whatsup\");\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });