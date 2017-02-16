window["MyAwesomeLibrary"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*__wc__loader*/

(function (document) {
    var _htmlStr = "<template>\n  <style>:host{overflow:hidden;color:rgba(0,0,0,0.87);background:white;min-height:100px;min-width:400px;display:inline-block;vertical-align:top;box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12);}::content p{padding:4px;}h1{margin:0;font-size:1.3em;padding:12px 12px;color:white;background:#26a69a;}</style>\n\n  <h1 id=\"title\" hidden=\"\"></h1>\n\n  <slot></slot>\n  \n</template>\n<style>wc-card{margin:10px;height:250px;width:600px;}wc-card.theme-dark{background:#26a69a;color:white;}</style>\n";
    if (document.head) {
        var el = document.head;
        var div = document.createElement('div');
        div.innerHTML = _htmlStr;
        while (div.children.length > 0) {
            el.appendChild(div.children[0]);
        }
    } else {
        document.write(_htmlStr);
    }
})(document);

(function (document) {
    var _htmlStr = "";
    if (document.body) {
        var el = document.body;
        var div = document.createElement('div');
        div.innerHTML = _htmlStr;
        while (div.children.length > 0) {
            el.appendChild(div.children[0]);
        }
    } else {
        document.write(_htmlStr);
    }
})(document);

class WcElement extends HTMLElement {

    constructor() {
        super();
    }

    static get observedAttributes() {
        return [];
    }

    connectedCallback() {
        alert('web component loaded from http://localhost:8000/build/main.bundle.js');
        setTimeout(() => this.fire('connectedCallback'), 0);
    }

    disconnectedCallback() {
        this.fire('disconnectedCallback');
    }

    attributeChangedCallback(attributeName, previousValue, currentValue) {
        this.fire('attributeChanged');
    }

    adoptedCallback() {
        this.fire('adoptedCallback');
    }

    fire(type, data = {}) {
        const event = new Event(type, {
            bubbles: true,
            cancelable: true
        });
        this.dispatchEvent(event);
    }

}
/* unused harmony export WcElement */


window.customElements.define('wc-element', WcElement);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wc_card_index_html__ = __webpack_require__(0);


/***/ })
/******/ ]);