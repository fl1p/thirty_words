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
/******/ 	__webpack_require__.p = "/public";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var bind = __webpack_require__(6);
var isBuffer = __webpack_require__(20);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// wikipedia special terms lifted and augmented from parsoid parser april 2015
// (not even close to being complete)
var i18n = {
  files: ['файл', 'fitxer', 'soubor', 'datei', 'file', 'archivo', 'پرونده', 'tiedosto', 'mynd', "su'wret", 'fichier', 'bestand', 'датотека', 'dosya', 'fil'],
  images: ['image'],
  templates: ['шаблён', 'plantilla', 'šablona', 'vorlage', 'template', 'الگو', 'malline', 'snið', 'shablon', 'modèle', 'sjabloon', 'шаблон', 'şablon'],
  categories: ['катэгорыя', 'categoria', 'kategorie', 'category', 'categoría', 'رده', 'luokka', 'flokkur', 'kategoriya', 'catégorie', 'categorie', 'категорија', 'kategori', 'kategoria', 'تصنيف'],
  redirects: ['перанакіраваньне', 'redirect', 'přesměruj', 'weiterleitung', 'redirección', 'redireccion', 'تغییر_مسیر', 'تغییرمسیر', 'ohjaus', 'uudelleenohjaus', 'tilvísun', 'aýdaw', 'айдау', 'redirection', 'doorverwijzing', 'преусмери', 'преусмјери', 'yönlendi̇rme', 'yönlendi̇r', '重定向', 'redirección', 'redireccion', '重定向', 'yönlendirm?e?', 'تغییر_مسیر', 'تغییرمسیر', 'перанакіраваньне', 'yönlendirme'],
  specials: ['спэцыяльныя', 'especial', 'speciální', 'spezial', 'special', 'ویژه', 'toiminnot', 'kerfissíða', 'arnawlı', 'spécial', 'speciaal', 'посебно', 'özel'],
  users: ['удзельнік', 'usuari', 'uživatel', 'benutzer', 'user', 'usuario', 'کاربر', 'käyttäjä', 'notandi', 'paydalanıwshı', 'utilisateur', 'gebruiker', 'корисник', 'kullanıcı'],
  disambigs: ['disambig', //en
  'disambiguation', //en
  'dab', //en
  'disamb', //en
  'begriffsklärung', //de
  'ujednoznacznienie', //pl
  'doorverwijspagina', //nl
  '消歧义', //zh
  'desambiguación', //es
  'dubbelsinnig', //af
  'disambigua', //it
  'desambiguação', //pt
  'homonymie', //fr
  'неоднозначность', //ru
  'anlam ayrımı' //tr
  ],
  infoboxes: ['infobox', 'ficha', 'канадский', 'inligtingskas', 'inligtingskas3', //af
  'لغة', 'bilgi kutusu', //tr
  'yerleşim bilgi kutusu', 'infoboks' //nn, no
  ],
  sources: [
  //blacklist these headings, as they're not plain-text
  'references', 'see also', 'external links', 'further reading', 'notes et références', 'voir aussi', 'liens externes']
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = i18n;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var helpers = {
  capitalise: function capitalise(str) {
    if (str && typeof str === 'string') {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return '';
  },
  onlyUnique: function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  },
  trim_whitespace: function trim_whitespace(str) {
    if (str && typeof str === 'string') {
      str = str.replace(/^\s\s*/, '');
      str = str.replace(/\s\s*$/, '');
      str = str.replace(/ {2}/, ' ');
      str = str.replace(/\s, /, ', ');
      return str;
    }
    return '';
  }
};
module.exports = helpers;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var helpers = __webpack_require__(2);
var parse_links = __webpack_require__(13);
var i18n = __webpack_require__(1);
var cat_reg = new RegExp("\\[\\[:?(" + i18n.categories.join("|") + "):[^\\]\\]]{2,80}\\]\\]", "gi");

//return only rendered text of wiki links
var resolve_links = function resolve_links(line) {
  // categories, images, files
  line = line.replace(cat_reg, "");
  // [[Common links]]
  line = line.replace(/\[\[:?([^|]{2,80}?)\]\](\w{0,5})/g, "$1$2");
  // [[File:with|Size]]
  line = line.replace(/\[\[File:?(.{2,80}?)\|([^\]]+?)\]\](\w{0,5})/g, "$1");
  // [[Replaced|Links]]
  line = line.replace(/\[\[:?(.{2,80}?)\|([^\]]+?)\]\](\w{0,5})/g, "$2$3");
  // External links
  line = line.replace(/\[(https?|news|ftp|mailto|gopher|irc):\/\/[^\]\| ]{4,1500}([\| ].*?)?\]/g, "$2");
  return line;
};
// console.log(resolve_links("[http://www.whistler.ca www.whistler.ca]"))

function postprocess(line) {
  //fix links
  line = resolve_links(line);
  //oops, recursive image bug
  if (line.match(/^(thumb|right|left)\|/i)) {
    return null;
  }
  line = helpers.trim_whitespace(line);
  return line;
}

function parse_line(line) {
  var obj = {
    text: postprocess(line)
  };
  var links = parse_links(line);
  if (links) {
    obj.links = links;
  }
  return obj;
}

module.exports = parse_line;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(22);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(8);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(8);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return null !== obj && 'object' === (typeof obj === 'undefined' ? 'undefined' : _typeof(obj));
}

module.exports = isObject;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(23);
var buildURL = __webpack_require__(25);
var parseHeaders = __webpack_require__(26);
var isURLSameOrigin = __webpack_require__(27);
var createError = __webpack_require__(9);
var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(28);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || request.readyState !== 4 && !xDomain) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(29);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(24);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var i18n = __webpack_require__(1);
//pulls target link out of redirect page
var REDIRECT_REGEX = new RegExp('^ ?#(' + i18n.redirects.join('|') + ') *?\\[\\[(.{2,60}?)\\]\\]', 'i');

var is_redirect = function is_redirect(wiki) {
  return wiki.match(REDIRECT_REGEX);
};

var parse_redirect = function parse_redirect(wiki) {
  var article = (wiki.match(REDIRECT_REGEX) || [])[2] || '';
  article = article.replace(/#.*/, '');
  return {
    type: 'redirect',
    redirect: article
  };
};

module.exports = {
  is_redirect: is_redirect,
  parse_redirect: parse_redirect
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var helpers = __webpack_require__(2);
var link_reg = /\[\[(.{2,80}?)\]\](\w{0,10})/g;
var ignore_links = /^:?(category|catégorie|Kategorie|Categoría|Categoria|Categorie|Kategoria|تصنيف|image|file|image|fichier|datei|media|special|wp|wikipedia|help|user|mediawiki|portal|talk|template|book|draft|module|topic|wiktionary|wikisource):/i;
var external_link = /\[(https?|news|ftp|mailto|gopher|irc)(:\/\/[^\]\| ]{4,1500})([\| ].*?)?\]/g;

var external_links = function external_links(links, str) {
  str.replace(external_link, function (all, protocol, link) {
    var text = '';
    var m = link.match(/\[([^\| ]+)/);
    if (m && m[1]) {
      text = m[1];
    }
    links.push({
      type: 'external',
      site: protocol + link,
      text: text
    });
    return text;
  });
  return links;
};

var internal_links = function internal_links(links, str) {
  //regular links
  str.replace(link_reg, function (_, s) {
    var link, txt;
    if (s.match(/\|/)) {
      //replacement link [[link|text]]
      s = s.replace(/\[\[(.{2,80}?)\]\](\w{0,10})/g, '$1$2'); //remove ['s and keep suffix
      link = s.replace(/(.{2,60})\|.{0,200}/, '$1'); //replaced links
      txt = s.replace(/.{2,60}?\|/, '');
      //handle funky case of [[toronto|]]
      if (!txt && link.match(/\|$/)) {
        link = link.replace(/\|$/, '');
        txt = link;
      }
    } else {
      // standard link [[link]]
      link = s.replace(/\[\[(.{2,60}?)\]\](\w{0,10})/g, '$1'); //remove ['s
    }
    //kill off non-wikipedia namespaces
    if (link.match(ignore_links)) {
      return s;
    }
    //kill off just anchor links [[#history]]
    if (link.match(/^#/i)) {
      return s;
    }
    //remove anchors from end [[toronto#history]]
    link = link.replace(/#[^ ]{1,100}/, '');
    var obj = {
      page: helpers.capitalise(link),
      text: txt || link
    };
    links.push(obj);
    return s;
  });
  return links;
};

//grab an array of internal links in the text
var parse_links = function parse_links(str) {
  var links = [];
  //first, parse external links
  links = external_links(links, str);
  //internal links
  links = internal_links(links, str);

  if (links.length === 0) {
    return undefined;
  }
  return links;
};
module.exports = parse_links;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  aa: {
    english_title: 'Afar',
    direction: 'ltr',
    local_title: 'Afar'
  },
  ab: {
    english_title: 'Abkhazian',
    direction: 'ltr',
    local_title: 'Аҧсуа'
  },
  af: {
    english_title: 'Afrikaans',
    direction: 'ltr',
    local_title: 'Afrikaans'
  },
  ak: {
    english_title: 'Akan',
    direction: 'ltr',
    local_title: 'Akana'
  },
  als: {
    english_title: 'Alemannic',
    direction: 'ltr',
    local_title: 'Alemannisch'
  },
  am: {
    english_title: 'Amharic',
    direction: 'ltr',
    local_title: 'አማርኛ'
  },
  an: {
    english_title: 'Aragonese',
    direction: 'ltr',
    local_title: 'Aragonés'
  },
  ang: {
    english_title: 'Anglo-Saxon',
    direction: 'ltr',
    local_title: 'Englisc'
  },
  ar: {
    english_title: 'Arabic',
    direction: 'rtl',
    local_title: 'العربية'
  },
  arc: {
    english_title: 'Aramaic',
    direction: 'rtl',
    local_title: 'ܣܘܪܬ'
  },
  as: {
    english_title: 'Assamese',
    direction: 'ltr',
    local_title: 'অসমীয়া'
  },
  ast: {
    english_title: 'Asturian',
    direction: 'ltr',
    local_title: 'Asturianu'
  },
  av: {
    english_title: 'Avar',
    direction: 'ltr',
    local_title: 'Авар'
  },
  ay: {
    english_title: 'Aymara',
    direction: 'ltr',
    local_title: 'Aymar'
  },
  az: {
    english_title: 'Azerbaijani',
    direction: 'ltr',
    local_title: 'Azərbaycanca'
  },
  ba: {
    english_title: 'Bashkir',
    direction: 'ltr',
    local_title: 'Башҡорт'
  },
  bar: {
    english_title: 'Bavarian',
    direction: 'ltr',
    local_title: 'Boarisch'
  },
  'bat-smg': {
    english_title: 'Samogitian',
    direction: 'ltr',
    local_title: 'Žemaitėška'
  },
  bcl: {
    english_title: 'Bikol',
    direction: 'ltr',
    local_title: 'Bikol'
  },
  be: {
    english_title: 'Belarusian',
    direction: 'ltr',
    local_title: 'Беларуская'
  },
  'be-x-old': {
    english_title: 'Belarusian',
    direction: '(Taraškievica)',
    local_title: 'ltr'
  },
  bg: {
    english_title: 'Bulgarian',
    direction: 'ltr',
    local_title: 'Български'
  },
  bh: {
    english_title: 'Bihari',
    direction: 'ltr',
    local_title: 'भोजपुरी'
  },
  bi: {
    english_title: 'Bislama',
    direction: 'ltr',
    local_title: 'Bislama'
  },
  bm: {
    english_title: 'Bambara',
    direction: 'ltr',
    local_title: 'Bamanankan'
  },
  bn: {
    english_title: 'Bengali',
    direction: 'ltr',
    local_title: 'বাংলা'
  },
  bo: {
    english_title: 'Tibetan',
    direction: 'ltr',
    local_title: 'བོད་ཡིག'
  },
  bpy: {
    english_title: 'Bishnupriya',
    direction: 'Manipuri',
    local_title: 'ltr'
  },
  br: {
    english_title: 'Breton',
    direction: 'ltr',
    local_title: 'Brezhoneg'
  },
  bs: {
    english_title: 'Bosnian',
    direction: 'ltr',
    local_title: 'Bosanski'
  },
  bug: {
    english_title: 'Buginese',
    direction: 'ltr',
    local_title: 'ᨅᨔ'
  },
  bxr: {
    english_title: 'Buriat',
    direction: '(Russia)',
    local_title: 'ltr'
  },
  ca: {
    english_title: 'Catalan',
    direction: 'ltr',
    local_title: 'Català'
  },
  cdo: {
    english_title: 'Min',
    direction: 'Dong',
    local_title: 'Chinese'
  },
  ce: {
    english_title: 'Chechen',
    direction: 'ltr',
    local_title: 'Нохчийн'
  },
  ceb: {
    english_title: 'Cebuano',
    direction: 'ltr',
    local_title: 'Sinugboanong'
  },
  ch: {
    english_title: 'Chamorro',
    direction: 'ltr',
    local_title: 'Chamoru'
  },
  cho: {
    english_title: 'Choctaw',
    direction: 'ltr',
    local_title: 'Choctaw'
  },
  chr: {
    english_title: 'Cherokee',
    direction: 'ltr',
    local_title: 'ᏣᎳᎩ'
  },
  chy: {
    english_title: 'Cheyenne',
    direction: 'ltr',
    local_title: 'Tsetsêhestâhese'
  },
  co: {
    english_title: 'Corsican',
    direction: 'ltr',
    local_title: 'Corsu'
  },
  cr: {
    english_title: 'Cree',
    direction: 'ltr',
    local_title: 'Nehiyaw'
  },
  cs: {
    english_title: 'Czech',
    direction: 'ltr',
    local_title: 'Česky'
  },
  csb: {
    english_title: 'Kashubian',
    direction: 'ltr',
    local_title: 'Kaszëbsczi'
  },
  cu: {
    english_title: 'Old',
    direction: 'Church',
    local_title: 'Slavonic'
  },
  cv: {
    english_title: 'Chuvash',
    direction: 'ltr',
    local_title: 'Чăваш'
  },
  cy: {
    english_title: 'Welsh',
    direction: 'ltr',
    local_title: 'Cymraeg'
  },
  da: {
    english_title: 'Danish',
    direction: 'ltr',
    local_title: 'Dansk'
  },
  de: {
    english_title: 'German',
    direction: 'ltr',
    local_title: 'Deutsch'
  },
  diq: {
    english_title: 'Dimli',
    direction: 'ltr',
    local_title: 'Zazaki'
  },
  dsb: {
    english_title: 'Lower',
    direction: 'Sorbian',
    local_title: 'ltr'
  },
  dv: {
    english_title: 'Divehi',
    direction: 'rtl',
    local_title: 'ދިވެހިބަސް'
  },
  dz: {
    english_title: 'Dzongkha',
    direction: 'ltr',
    local_title: 'ཇོང་ཁ'
  },
  ee: {
    english_title: 'Ewe',
    direction: 'ltr',
    local_title: 'Ɛʋɛ'
  },
  far: {
    english_title: 'Farsi',
    direction: 'ltr',
    local_title: 'فارسی'
  },
  el: {
    english_title: 'Greek',
    direction: 'ltr',
    local_title: 'Ελληνικά'
  },
  en: {
    english_title: 'English',
    direction: 'ltr',
    local_title: 'English'
  },
  eo: {
    english_title: 'Esperanto',
    direction: 'ltr',
    local_title: 'Esperanto'
  },
  es: {
    english_title: 'Spanish',
    direction: 'ltr',
    local_title: 'Español'
  },
  et: {
    english_title: 'Estonian',
    direction: 'ltr',
    local_title: 'Eesti'
  },
  eu: {
    english_title: 'Basque',
    direction: 'ltr',
    local_title: 'Euskara'
  },
  ext: {
    english_title: 'Extremaduran',
    direction: 'ltr',
    local_title: 'Estremeñu'
  },
  ff: {
    english_title: 'Peul',
    direction: 'ltr',
    local_title: 'Fulfulde'
  },
  fi: {
    english_title: 'Finnish',
    direction: 'ltr',
    local_title: 'Suomi'
  },
  'fiu-vro': {
    english_title: 'Võro',
    direction: 'ltr',
    local_title: 'Võro'
  },
  fj: {
    english_title: 'Fijian',
    direction: 'ltr',
    local_title: 'Na'
  },
  fo: {
    english_title: 'Faroese',
    direction: 'ltr',
    local_title: 'Føroyskt'
  },
  fr: {
    english_title: 'French',
    direction: 'ltr',
    local_title: 'Français'
  },
  frp: {
    english_title: 'Arpitan',
    direction: 'ltr',
    local_title: 'Arpitan'
  },
  fur: {
    english_title: 'Friulian',
    direction: 'ltr',
    local_title: 'Furlan'
  },
  fy: {
    english_title: 'West',
    direction: 'Frisian',
    local_title: 'ltr'
  },
  ga: {
    english_title: 'Irish',
    direction: 'ltr',
    local_title: 'Gaeilge'
  },
  gan: {
    english_title: 'Gan',
    direction: 'Chinese',
    local_title: 'ltr'
  },
  gd: {
    english_title: 'Scottish',
    direction: 'Gaelic',
    local_title: 'ltr'
  },
  gil: {
    english_title: 'Gilbertese',
    direction: 'ltr',
    local_title: 'Taetae'
  },
  gl: {
    english_title: 'Galician',
    direction: 'ltr',
    local_title: 'Galego'
  },
  gn: {
    english_title: 'Guarani',
    direction: 'ltr',
    local_title: "Avañe'ẽ"
  },
  got: {
    english_title: 'Gothic',
    direction: 'ltr',
    local_title: 'gutisk'
  },
  gu: {
    english_title: 'Gujarati',
    direction: 'ltr',
    local_title: 'ગુજરાતી'
  },
  gv: {
    english_title: 'Manx',
    direction: 'ltr',
    local_title: 'Gaelg'
  },
  ha: {
    english_title: 'Hausa',
    direction: 'rtl',
    local_title: 'هَوُسَ'
  },
  hak: {
    english_title: 'Hakka',
    direction: 'Chinese',
    local_title: 'ltr'
  },
  haw: {
    english_title: 'Hawaiian',
    direction: 'ltr',
    local_title: 'Hawai`i'
  },
  he: {
    english_title: 'Hebrew',
    direction: 'rtl',
    local_title: 'עברית'
  },
  hi: {
    english_title: 'Hindi',
    direction: 'ltr',
    local_title: 'हिन्दी'
  },
  ho: {
    english_title: 'Hiri',
    direction: 'Motu',
    local_title: 'ltr'
  },
  hr: {
    english_title: 'Croatian',
    direction: 'ltr',
    local_title: 'Hrvatski'
  },
  ht: {
    english_title: 'Haitian',
    direction: 'ltr',
    local_title: 'Krèyol'
  },
  hu: {
    english_title: 'Hungarian',
    direction: 'ltr',
    local_title: 'Magyar'
  },
  hy: {
    english_title: 'Armenian',
    direction: 'ltr',
    local_title: 'Հայերեն'
  },
  hz: {
    english_title: 'Herero',
    direction: 'ltr',
    local_title: 'Otsiherero'
  },
  ia: {
    english_title: 'Interlingua',
    direction: 'ltr',
    local_title: 'Interlingua'
  },
  id: {
    english_title: 'Indonesian',
    direction: 'ltr',
    local_title: 'Bahasa'
  },
  ie: {
    english_title: 'Interlingue',
    direction: 'ltr',
    local_title: 'Interlingue'
  },
  ig: {
    english_title: 'Igbo',
    direction: 'ltr',
    local_title: 'Igbo'
  },
  ii: {
    english_title: 'Sichuan',
    direction: 'Yi',
    local_title: 'ltr'
  },
  ik: {
    english_title: 'Inupiak',
    direction: 'ltr',
    local_title: 'Iñupiak'
  },
  ilo: {
    english_title: 'Ilokano',
    direction: 'ltr',
    local_title: 'Ilokano'
  },
  io: {
    english_title: 'Ido',
    direction: 'ltr',
    local_title: 'Ido'
  },
  is: {
    english_title: 'Icelandic',
    direction: 'ltr',
    local_title: 'Íslenska'
  },
  it: {
    english_title: 'Italian',
    direction: 'ltr',
    local_title: 'Italiano'
  },
  iu: {
    english_title: 'Inuktitut',
    direction: 'ltr',
    local_title: 'ᐃᓄᒃᑎᑐᑦ'
  },
  ja: {
    english_title: 'Japanese',
    direction: 'ltr',
    local_title: '日本語'
  },
  jbo: {
    english_title: 'Lojban',
    direction: 'ltr',
    local_title: 'Lojban'
  },
  jv: {
    english_title: 'Javanese',
    direction: 'ltr',
    local_title: 'Basa'
  },
  ka: {
    english_title: 'Georgian',
    direction: 'ltr',
    local_title: 'ქართული'
  },
  kg: {
    english_title: 'Kongo',
    direction: 'ltr',
    local_title: 'KiKongo'
  },
  ki: {
    english_title: 'Kikuyu',
    direction: 'ltr',
    local_title: 'Gĩkũyũ'
  },
  kj: {
    english_title: 'Kuanyama',
    direction: 'ltr',
    local_title: 'Kuanyama'
  },
  kk: {
    english_title: 'Kazakh',
    direction: 'ltr',
    local_title: 'Қазақша'
  },
  kl: {
    english_title: 'Greenlandic',
    direction: 'ltr',
    local_title: 'Kalaallisut'
  },
  km: {
    english_title: 'Cambodian',
    direction: 'ltr',
    local_title: 'ភាសាខ្មែរ'
  },
  kn: {
    english_title: 'Kannada',
    direction: 'ltr',
    local_title: 'ಕನ್ನಡ'
  },
  khw: {
    english_title: 'Khowar',
    direction: 'rtl',
    local_title: 'کھوار'
  },
  ko: {
    english_title: 'Korean',
    direction: 'ltr',
    local_title: '한국어'
  },
  kr: {
    english_title: 'Kanuri',
    direction: 'ltr',
    local_title: 'Kanuri'
  },
  ks: {
    english_title: 'Kashmiri',
    direction: 'rtl',
    local_title: 'कश्मीरी'
  },
  ksh: {
    english_title: 'Ripuarian',
    direction: 'ltr',
    local_title: 'Ripoarisch'
  },
  ku: {
    english_title: 'Kurdish',
    direction: 'rtl',
    local_title: 'Kurdî'
  },
  kv: {
    english_title: 'Komi',
    direction: 'ltr',
    local_title: 'Коми'
  },
  kw: {
    english_title: 'Cornish',
    direction: 'ltr',
    local_title: 'Kernewek'
  },
  ky: {
    english_title: 'Kirghiz',
    direction: 'ltr',
    local_title: 'Kırgızca'
  },
  la: {
    english_title: 'Latin',
    direction: 'ltr',
    local_title: 'Latina'
  },
  lad: {
    english_title: 'Ladino',
    direction: 'ltr',
    local_title: 'Dzhudezmo'
  },
  lan: {
    english_title: 'Lango',
    direction: 'ltr',
    local_title: 'Leb'
  },
  lb: {
    english_title: 'Luxembourgish',
    direction: 'ltr',
    local_title: 'Lëtzebuergesch'
  },
  lg: {
    english_title: 'Ganda',
    direction: 'ltr',
    local_title: 'Luganda'
  },
  li: {
    english_title: 'Limburgian',
    direction: 'ltr',
    local_title: 'Limburgs'
  },
  lij: {
    english_title: 'Ligurian',
    direction: 'ltr',
    local_title: 'Líguru'
  },
  lmo: {
    english_title: 'Lombard',
    direction: 'ltr',
    local_title: 'Lumbaart'
  },
  ln: {
    english_title: 'Lingala',
    direction: 'ltr',
    local_title: 'Lingála'
  },
  lo: {
    english_title: 'Laotian',
    direction: 'ltr',
    local_title: 'ລາວ'
  },
  lt: {
    english_title: 'Lithuanian',
    direction: 'ltr',
    local_title: 'Lietuvių'
  },
  lv: {
    english_title: 'Latvian',
    direction: 'ltr',
    local_title: 'Latviešu'
  },
  'map-bms': {
    english_title: 'Banyumasan',
    direction: 'ltr',
    local_title: 'Basa'
  },
  mg: {
    english_title: 'Malagasy',
    direction: 'ltr',
    local_title: 'Malagasy'
  },
  man: {
    english_title: 'Mandarin',
    direction: 'ltr',
    local_title: '官話'
  },
  mh: {
    english_title: 'Marshallese',
    direction: 'ltr',
    local_title: 'Kajin'
  },
  mi: {
    english_title: 'Maori',
    direction: 'ltr',
    local_title: 'Māori'
  },
  min: {
    english_title: 'Minangkabau',
    direction: 'ltr',
    local_title: 'Minangkabau'
  },
  mk: {
    english_title: 'Macedonian',
    direction: 'ltr',
    local_title: 'Македонски'
  },
  ml: {
    english_title: 'Malayalam',
    direction: 'ltr',
    local_title: 'മലയാളം'
  },
  mn: {
    english_title: 'Mongolian',
    direction: 'ltr',
    local_title: 'Монгол'
  },
  mo: {
    english_title: 'Moldovan',
    direction: 'ltr',
    local_title: 'Moldovenească'
  },
  mr: {
    english_title: 'Marathi',
    direction: 'ltr',
    local_title: 'मराठी'
  },
  ms: {
    english_title: 'Malay',
    direction: 'ltr',
    local_title: 'Bahasa'
  },
  mt: {
    english_title: 'Maltese',
    direction: 'ltr',
    local_title: 'bil-Malti'
  },
  mus: {
    english_title: 'Creek',
    direction: 'ltr',
    local_title: 'Muskogee'
  },
  my: {
    english_title: 'Burmese',
    direction: 'ltr',
    local_title: 'Myanmasa'
  },
  na: {
    english_title: 'Nauruan',
    direction: 'ltr',
    local_title: 'Dorerin'
  },
  nah: {
    english_title: 'Nahuatl',
    direction: 'ltr',
    local_title: 'Nahuatl'
  },
  nap: {
    english_title: 'Neapolitan',
    direction: 'ltr',
    local_title: 'Nnapulitano'
  },
  nd: {
    english_title: 'North',
    direction: 'Ndebele',
    local_title: 'ltr'
  },
  nds: {
    english_title: 'Low German',
    direction: 'ltr',
    local_title: 'Plattdüütsch'
  },
  'nds-nl': {
    english_title: 'Dutch',
    direction: 'Low',
    local_title: 'Saxon'
  },
  ne: {
    english_title: 'Nepali',
    direction: 'ltr',
    local_title: 'नेपाली'
  },
  new: {
    english_title: 'Newar',
    direction: 'ltr',
    local_title: 'नेपालभाषा'
  },
  ng: {
    english_title: 'Ndonga',
    direction: 'ltr',
    local_title: 'Oshiwambo'
  },
  nl: {
    english_title: 'Dutch',
    direction: 'ltr',
    local_title: 'Nederlands'
  },
  nn: {
    english_title: 'Norwegian',
    direction: 'Nynorsk',
    local_title: 'ltr'
  },
  no: {
    english_title: 'Norwegian',
    direction: 'ltr',
    local_title: 'Norsk'
  },
  nr: {
    english_title: 'South',
    direction: 'Ndebele',
    local_title: 'ltr'
  },
  nso: {
    english_title: 'Northern',
    direction: 'Sotho',
    local_title: 'ltr'
  },
  nrm: {
    english_title: 'Norman',
    direction: 'ltr',
    local_title: 'Nouormand'
  },
  nv: {
    english_title: 'Navajo',
    direction: 'ltr',
    local_title: 'Diné'
  },
  ny: {
    english_title: 'Chichewa',
    direction: 'ltr',
    local_title: 'Chi-Chewa'
  },
  oc: {
    english_title: 'Occitan',
    direction: 'ltr',
    local_title: 'Occitan'
  },
  oj: {
    english_title: 'Ojibwa',
    direction: 'ltr',
    local_title: 'ᐊᓂᔑᓈᐯᒧᐎᓐ'
  },
  om: {
    english_title: 'Oromo',
    direction: 'ltr',
    local_title: 'Oromoo'
  },
  or: {
    english_title: 'Oriya',
    direction: 'ltr',
    local_title: 'ଓଡ଼ିଆ'
  },
  os: {
    english_title: 'Ossetian',
    direction: 'ltr',
    local_title: 'Иронау'
  },
  pa: {
    english_title: 'Panjabi',
    direction: 'ltr',
    local_title: 'ਪੰਜਾਬੀ'
  },
  pag: {
    english_title: 'Pangasinan',
    direction: 'ltr',
    local_title: 'Pangasinan'
  },
  pam: {
    english_title: 'Kapampangan',
    direction: 'ltr',
    local_title: 'Kapampangan'
  },
  pap: {
    english_title: 'Papiamentu',
    direction: 'ltr',
    local_title: 'Papiamentu'
  },
  pdc: {
    english_title: 'Pennsylvania',
    direction: 'German',
    local_title: 'ltr'
  },
  pi: {
    english_title: 'Pali',
    direction: 'ltr',
    local_title: 'Pāli'
  },
  pih: {
    english_title: 'Norfolk',
    direction: 'ltr',
    local_title: 'Norfuk'
  },
  pl: {
    english_title: 'Polish',
    direction: 'ltr',
    local_title: 'Polski'
  },
  pms: {
    english_title: 'Piedmontese',
    direction: 'ltr',
    local_title: 'Piemontèis'
  },
  ps: {
    english_title: 'Pashto',
    direction: 'rtl',
    local_title: 'پښتو'
  },
  pt: {
    english_title: 'Portuguese',
    direction: 'ltr',
    local_title: 'Português'
  },
  qu: {
    english_title: 'Quechua',
    direction: 'ltr',
    local_title: 'Runa'
  },
  rm: {
    english_title: 'Raeto',
    direction: 'Romance',
    local_title: 'ltr'
  },
  rmy: {
    english_title: 'Romani',
    direction: 'ltr',
    local_title: 'Romani'
  },
  rn: {
    english_title: 'Kirundi',
    direction: 'ltr',
    local_title: 'Kirundi'
  },
  ro: {
    english_title: 'Romanian',
    direction: 'ltr',
    local_title: 'Română'
  },
  'roa-rup': {
    english_title: 'Aromanian',
    direction: 'ltr',
    local_title: 'Armâneashti'
  },
  ru: {
    english_title: 'Russian',
    direction: 'ltr',
    local_title: 'Русский'
  },
  rw: {
    english_title: 'Rwandi',
    direction: 'ltr',
    local_title: 'Kinyarwandi'
  },
  sa: {
    english_title: 'Sanskrit',
    direction: 'ltr',
    local_title: 'संस्कृतम्'
  },
  sc: {
    english_title: 'Sardinian',
    direction: 'ltr',
    local_title: 'Sardu'
  },
  scn: {
    english_title: 'Sicilian',
    direction: 'ltr',
    local_title: 'Sicilianu'
  },
  sco: {
    english_title: 'Scots',
    direction: 'ltr',
    local_title: 'Scots'
  },
  sd: {
    english_title: 'Sindhi',
    direction: 'ltr',
    local_title: 'सिनधि'
  },
  se: {
    english_title: 'Northern',
    direction: 'Sami',
    local_title: 'ltr'
  },
  sg: {
    english_title: 'Sango',
    direction: 'ltr',
    local_title: 'Sängö'
  },
  sh: {
    english_title: 'Serbo-Croatian',
    direction: 'ltr',
    local_title: 'Srpskohrvatski'
  },
  si: {
    english_title: 'Sinhalese',
    direction: 'ltr',
    local_title: 'සිංහල'
  },
  simple: {
    english_title: 'Simple',
    direction: 'English',
    local_title: 'ltr'
  },
  sk: {
    english_title: 'Slovak',
    direction: 'ltr',
    local_title: 'Slovenčina'
  },
  sl: {
    english_title: 'Slovenian',
    direction: 'ltr',
    local_title: 'Slovenščina'
  },
  sm: {
    english_title: 'Samoan',
    direction: 'ltr',
    local_title: 'Gagana'
  },
  sn: {
    english_title: 'Shona',
    direction: 'ltr',
    local_title: 'chiShona'
  },
  so: {
    english_title: 'Somalia',
    direction: 'ltr',
    local_title: 'Soomaaliga'
  },
  sq: {
    english_title: 'Albanian',
    direction: 'ltr',
    local_title: 'Shqip'
  },
  sr: {
    english_title: 'Serbian',
    direction: 'ltr',
    local_title: 'Српски'
  },
  ss: {
    english_title: 'Swati',
    direction: 'ltr',
    local_title: 'SiSwati'
  },
  st: {
    english_title: 'Southern',
    direction: 'Sotho',
    local_title: 'ltr'
  },
  su: {
    english_title: 'Sundanese',
    direction: 'ltr',
    local_title: 'Basa'
  },
  sv: {
    english_title: 'Swedish',
    direction: 'ltr',
    local_title: 'Svenska'
  },
  sw: {
    english_title: 'Swahili',
    direction: 'ltr',
    local_title: 'Kiswahili'
  },
  ta: {
    english_title: 'Tamil',
    direction: 'ltr',
    local_title: 'தமிழ்'
  },
  te: {
    english_title: 'Telugu',
    direction: 'ltr',
    local_title: 'తెలుగు'
  },
  tet: {
    english_title: 'Tetum',
    direction: 'ltr',
    local_title: 'Tetun'
  },
  tg: {
    english_title: 'Tajik',
    direction: 'ltr',
    local_title: 'Тоҷикӣ'
  },
  th: {
    english_title: 'Thai',
    direction: 'ltr',
    local_title: 'ไทย'
  },
  ti: {
    english_title: 'Tigrinya',
    direction: 'ltr',
    local_title: 'ትግርኛ'
  },
  tk: {
    english_title: 'Turkmen',
    direction: 'ltr',
    local_title: 'Туркмен'
  },
  tl: {
    english_title: 'Tagalog',
    direction: 'ltr',
    local_title: 'Tagalog'
  },
  tlh: {
    english_title: 'Klingon',
    direction: 'ltr',
    local_title: 'tlhIngan-Hol'
  },
  tn: {
    english_title: 'Tswana',
    direction: 'ltr',
    local_title: 'Setswana'
  },
  to: {
    english_title: 'Tonga',
    direction: 'ltr',
    local_title: 'Lea'
  },
  tpi: {
    english_title: 'Tok',
    direction: 'Pisin',
    local_title: 'ltr'
  },
  tr: {
    english_title: 'Turkish',
    direction: 'ltr',
    local_title: 'Türkçe'
  },
  ts: {
    english_title: 'Tsonga',
    direction: 'ltr',
    local_title: 'Xitsonga'
  },
  tt: {
    english_title: 'Tatar',
    direction: 'ltr',
    local_title: 'Tatarça'
  },
  tum: {
    english_title: 'Tumbuka',
    direction: 'ltr',
    local_title: 'chiTumbuka'
  },
  tw: {
    english_title: 'Twi',
    direction: 'ltr',
    local_title: 'Twi'
  },
  ty: {
    english_title: 'Tahitian',
    direction: 'ltr',
    local_title: 'Reo'
  },
  udm: {
    english_title: 'Udmurt',
    direction: 'ltr',
    local_title: 'Удмурт'
  },
  ug: {
    english_title: 'Uyghur',
    direction: 'ltr',
    local_title: 'Uyƣurqə'
  },
  uk: {
    english_title: 'Ukrainian',
    direction: 'ltr',
    local_title: 'Українська'
  },
  ur: {
    english_title: 'Urdu',
    direction: 'rtl',
    local_title: 'اردو'
  },
  uz: {
    english_title: 'Uzbek',
    direction: 'ltr',
    local_title: 'Ўзбек'
  },
  ve: {
    english_title: 'Venda',
    direction: 'ltr',
    local_title: 'Tshivenḓa'
  },
  vi: {
    english_title: 'Vietnamese',
    direction: 'ltr',
    local_title: 'Việtnam'
  },
  vec: {
    english_title: 'Venetian',
    direction: 'ltr',
    local_title: 'Vèneto'
  },
  vls: {
    english_title: 'West',
    direction: 'Flemish',
    local_title: 'ltr'
  },
  vo: {
    english_title: 'Volapük',
    direction: 'ltr',
    local_title: 'Volapük'
  },
  wa: {
    english_title: 'Walloon',
    direction: 'ltr',
    local_title: 'Walon'
  },
  war: {
    english_title: 'Waray-Waray',
    direction: 'ltr',
    local_title: 'Winaray'
  },
  wo: {
    english_title: 'Wolof',
    direction: 'ltr',
    local_title: 'Wollof'
  },
  xal: {
    english_title: 'Kalmyk',
    direction: 'ltr',
    local_title: 'Хальмг'
  },
  xh: {
    english_title: 'Xhosa',
    direction: 'ltr',
    local_title: 'isiXhosa'
  },
  yi: {
    english_title: 'Yiddish',
    direction: 'rtl',
    local_title: 'ייִדיש'
  },
  yo: {
    english_title: 'Yoruba',
    direction: 'ltr',
    local_title: 'Yorùbá'
  },
  za: {
    english_title: 'Zhuang',
    direction: 'ltr',
    local_title: 'Cuengh'
  },
  zh: {
    english_title: 'Chinese',
    direction: 'ltr',
    local_title: '中文'
  },
  'zh-classical': {
    english_title: 'Classical',
    direction: 'Chinese',
    local_title: 'ltr'
  },
  'zh-min-nan': {
    english_title: 'Minnan',
    direction: 'ltr',
    local_title: 'Bân-lâm-gú'
  },
  'zh-yue': {
    english_title: 'Cantonese',
    direction: 'ltr',
    local_title: '粵語'
  },
  zu: {
    english_title: 'Zulu',
    direction: 'ltr',
    local_title: 'isiZulu'
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _words = __webpack_require__(17);

$(document).ready(function () {
  // SEARCH SOURCES

  // set up event listener to detect user input
  var input = document.querySelector('#searchInput');
  if (input) {
    var timer = void 0;
    var waitInterval = 2000;

    input.addEventListener('keyup', function () {
      clearTimeout(timer);
      timer = setTimeout(_words.searchSources, waitInterval);
    });

    // TODO somehow this creates two calls to the wiki api instead of just one
    input.addEventListener('keydown', function (e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        console.log('Yup');
        (0, _words.searchSources)();
      } else {
        clearTimeout(timer);
      }
    });
  }
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchSources = undefined;

var _axios = __webpack_require__(18);

var axios = _interopRequireWildcard(_axios);

var _wtf_wikipedia = __webpack_require__(37);

var wtfWikipedia = _interopRequireWildcard(_wtf_wikipedia);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// STEP 1 - SOURCES

function clickSource(event) {
  var element = event.target;
  if (element.className === '') {
    element.className = 'active';
  } else if (element.className === 'active') {
    element.className = '';
  }
}

function addListenersToSourcesForm() {
  var list = document.querySelectorAll('.sources_list_entry');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      item.addEventListener('click', clickSource);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  document.querySelector('#sourcesForm').addEventListener('submit', function (e) {
    e.preventDefault();
    searchWords();
  });
}

// search sources based on user input
var searchSources = exports.searchSources = function searchSources() {
  var term = document.querySelector('#searchInput').value;
  var url = 'https://en.wikipedia.org/w/api.php';
  var params = {
    action: 'opensearch',
    search: term,
    limit: 10,
    namespace: 0,
    origin: '*',
    format: 'json'
  };

  axios.get(url, { params: params }).then(function (res) {
    var html = res.data[1].map(function (source, i) {
      return '\n          <hr>\n          <div class=\'sources_list_entry\'>\n            <p> ' + source + ' </p>\n          </div>\n        ';
    }).join('').concat('<hr>');

    var top = "<div id='sources_list'>";
    var bottom = '</div> <input id="sources_submit_button" class="button btn btn-lg btn-default" type="submit" value="Find words"> ';
    var finalHtml = top.concat(html).concat(bottom);

    // TODO (re-)move / animate search form

    // display next 'screen'
    document.querySelector('#searchInput').blur();
    document.querySelector('#sources_label').style.display = 'block';
    document.querySelector('#sourcesForm').innerHTML = finalHtml;
    document.querySelector('#sourcesForm').style.display = 'block';

    addListenersToSourcesForm();
  }).catch(function (error) {
    // TODO
    // think of appropriate error handling
    console.log(error);
  });
};

// STEP 2: Words

function searchWords() {
  console.log('Searhing words---');

  // get all list entries with class active into array
  var selectedSources = [];
  var sources = document.querySelectorAll('.sources_list_entry .active');
  for (var i = sources.length; i--; selectedSources.unshift(sources[i])) {}

  var urls = selectedSources.map(function (node) {
    return encodeURI(node.textContent.trim());
  }).map(function (title) {
    return url(title);
  });

  var promiseArray = urls.map(function (url) {
    return axios.get(url);
  });
  axios.all(promiseArray).then(function (response) {
    var finalWords = response.map(function (source) {
      return parseWikiMarkup(source);
    }).filter(deleteMetaPages);
    console.log(finalWords);
  });
  console.log(urls);
}

// creates a wikimedia url for a given page title
function url(title) {
  var url = 'https://en.wikipedia.org/w/api.php';
  var query = '?action=query&titles=' + title + '&prop=revisions&rvprop=content&format=json&origin=*';
  return url.concat(query);
}

// parses a single wikipedia page
function parseWikiMarkup(source) {
  var page = source.data.query.pages;
  var words = void 0;

  for (var propName in page) {
    var wikiPage = page[propName].revisions['0']['*'];
    words = wtfWikipedia.parse(wikiPage);
  }
  return words;
}

// returns false for meta pages
function deleteMetaPages(page) {
  if (page.type !== 'page') {
    console.log('Page filtered: ' + page.type);
  }
  return page.type === 'page';
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(19);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(6);
var Axios = __webpack_require__(21);
var defaults = __webpack_require__(4);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(11);
axios.CancelToken = __webpack_require__(35);
axios.isCancel = __webpack_require__(10);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(36);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};

function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(4);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(30);
var dispatchRequest = __webpack_require__(31);
var isAbsoluteURL = __webpack_require__(33);
var combineURLs = __webpack_require__(34);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(9);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error();
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
  // initialize result and counter
  var block, charCode, idx = 0, map = chars;
  // if the next str index does not exist:
  //   change the mapping table to "="
  //   check if d has no fractional digits
  str.charAt(idx | 0) || (map = '=', idx % 1);
  // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(32);
var isCancel = __webpack_require__(10);
var defaults = __webpack_require__(4);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(config.data, config.headers, config.transformRequest);

  // Flatten headers
  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(response.data, response.headers, config.transformResponse);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
  );
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(11);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//turns wikimedia script into json
// https://github.com/spencermountain/wtf_wikipedia
//@spencermountain
var fetch = __webpack_require__(38);
var parse = __webpack_require__(47);

//from a page title or id, fetch the wikiscript
var from_api = function from_api(page_identifier, lang_or_wikiid, cb) {
  if (typeof lang_or_wikiid === 'function') {
    cb = lang_or_wikiid;
    lang_or_wikiid = 'en';
  }
  cb = cb || function () {};
  lang_or_wikiid = lang_or_wikiid || 'en';
  if (!fetch) {
    //no http method, on the client side
    return cb(null);
  }
  return fetch(page_identifier, lang_or_wikiid, cb);
};

//turn wiki-markup into a nicely-formatted text
var plaintext = function plaintext(str) {
  var data = parse(str) || {};
  var arr = Object.keys(data.sections).map(function (k) {
    return data.sections[k].sentences.map(function (a) {
      return a.text;
    }).join(' ');
  });
  return arr.join('\n\n');
};

module.exports = {
  from_api: from_api,
  parse: parse,
  plaintext: plaintext
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//grab the content of any article, off the api

var request = __webpack_require__(39);
var site_map = __webpack_require__(46);
var redirects = __webpack_require__(12);

var fetch = function fetch(page_identifier, lang_or_wikiid, cb) {
  lang_or_wikiid = lang_or_wikiid || 'en';
  var identifier_type = 'titles';
  if (page_identifier.match(/^[0-9]*$/) && page_identifier.length > 3) {
    identifier_type = 'curid';
  }
  var url = void 0;
  if (site_map[lang_or_wikiid]) {
    url = site_map[lang_or_wikiid] + '/w/api.php';
  } else {
    url = 'https://' + lang_or_wikiid + '.wikipedia.org/w/api.php';
  }
  //we use the 'revisions' api here, instead of the Raw api, for its CORS-rules..
  url += '?action=query&prop=revisions&rvlimit=1&rvprop=content&format=json&origin=*';
  url += '&' + identifier_type + '=' + encodeURIComponent(page_identifier);

  request.get(url).end(function (err, res) {
    if (err || !res.body.query) {
      console.warn(err);
      cb(null);
      return;
    }
    var pages = res.body.query.pages || {};
    var id = Object.keys(pages)[0];
    if (id) {
      var page = pages[id];
      if (page && page.revisions && page.revisions[0]) {
        var text = page.revisions[0]['*'];
        if (redirects.is_redirect(text)) {
          var result = redirects.parse_redirect(text);
          fetch(result.redirect, lang_or_wikiid, cb); //recursive
          return;
        }
        cb(text);
      } else {
        cb(null);
      }
    }
  });
};

module.exports = fetch;

// fetch('On_A_Friday', 'en', function(r) { // 'afwiki'
//   console.log(JSON.stringify(r, null, 2));
// });

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') {
  // Browser window
  root = window;
} else if (typeof self !== 'undefined') {
  // Web Worker
  root = self;
} else {
  // Other environments
  console.warn("Using browser-only version of superagent in non-browser environment");
  root = undefined;
}

var Emitter = __webpack_require__(40);
var RequestBase = __webpack_require__(41);
var isObject = __webpack_require__(5);
var isFunction = __webpack_require__(42);
var ResponseBase = __webpack_require__(43);
var shouldRetry = __webpack_require__(45);

/**
 * Noop.
 */

function noop() {};

/**
 * Expose `request`.
 */

var request = exports = module.exports = function (method, url) {
  // callback
  if ('function' == typeof url) {
    return new exports.Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
};

exports.Request = Request;

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest && (!root.location || 'file:' != root.location.protocol || !root.ActiveXObject)) {
    return new XMLHttpRequest();
  } else {
    try {
      return new ActiveXObject('Microsoft.XMLHTTP');
    } catch (e) {}
    try {
      return new ActiveXObject('Msxml2.XMLHTTP.6.0');
    } catch (e) {}
    try {
      return new ActiveXObject('Msxml2.XMLHTTP.3.0');
    } catch (e) {}
    try {
      return new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {}
  }
  throw Error("Browser-only verison of superagent could not find XHR");
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim ? function (s) {
  return s.trim();
} : function (s) {
  return s.replace(/(^\s*|\s*$)/g, '');
};

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    pushEncodedKeyValuePair(pairs, key, obj[key]);
  }
  return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs, key, val) {
  if (val != null) {
    if (Array.isArray(val)) {
      val.forEach(function (v) {
        pushEncodedKeyValuePair(pairs, key, v);
      });
    } else if (isObject(val)) {
      for (var subkey in val) {
        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
      }
    } else {
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
    }
  } else if (val === null) {
    pairs.push(encodeURIComponent(key));
  }
}

/**
 * Expose serialization method.
 */

request.serializeObject = serialize;

/**
 * Parse the given x-www-form-urlencoded `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');
    if (pos == -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'application/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

request.serialize = {
  'application/x-www-form-urlencoded': serialize,
  'application/json': JSON.stringify
};

/**
 * Default parsers.
 *
 *     superagent.parse['application/xml'] = function(str){
 *       return { object parsed from str };
 *     };
 *
 */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  lines.pop(); // trailing CRLF

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime) {
  return (/[\/+]json\b/.test(mime)
  );
}

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req) {
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = this.req.method != 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text') || typeof this.xhr.responseType === 'undefined' ? this.xhr.responseText : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status;
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }
  this._setStatusProperties(status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this._setHeaderProperties(this.header);

  if (null === this.text && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method != 'HEAD' ? this._parseBody(this.text ? this.text : this.xhr.response) : null;
  }
}

ResponseBase(Response.prototype);

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function (str) {
  var parse = request.parse[this.type];
  if (this.req._parser) {
    return this.req._parser(this, str);
  }
  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }
  return parse && str && (str.length || str instanceof Object) ? parse(str) : null;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function () {
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case
  this._header = {}; // coerces header names to lowercase
  this.on('end', function () {
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch (e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      // issue #675: return the raw response if the response parsing fails
      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;
        // issue #876: return the http status code if the response parsing fails
        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; // backwards-compat only
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);

    var new_err;
    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
        new_err.original = err;
        new_err.response = res;
        new_err.status = res.status;
      }
    } catch (e) {
      new_err = e; // #985 touching res may cause INVALID_STATE_ERR on old Android
    }

    // #1000 don't catch errors from the callback to avoid double calling it
    if (new_err) {
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}

/**
 * Mixin `Emitter` and `RequestBase`.
 */

Emitter(Request.prototype);
RequestBase(Request.prototype);

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function (type) {
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function (type) {
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function (user, pass, options) {
  if ((typeof pass === 'undefined' ? 'undefined' : _typeof(pass)) === 'object' && pass !== null) {
    // pass is optional and can substitute for options
    options = pass;
  }
  if (!options) {
    options = {
      type: 'function' === typeof btoa ? 'basic' : 'auto'
    };
  }

  switch (options.type) {
    case 'basic':
      this.set('Authorization', 'Basic ' + btoa(user + ':' + pass));
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;

    case 'bearer':
      // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', 'Bearer ' + user);
      break;
  }
  return this;
};

/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.query = function (val) {
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function (field, file, options) {
  if (file) {
    if (this._data) {
      throw Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }
  return this;
};

Request.prototype._getFormData = function () {
  if (!this._formData) {
    this._formData = new root.FormData();
  }
  return this._formData;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function (err, res) {
  // console.log(this._retries, this._maxRetries)
  if (this._maxRetries && this._retries++ < this._maxRetries && shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) err.retries = this._retries - 1;
    this.emit('error', err);
  }

  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function () {
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;

  err.status = this.status;
  err.method = this.method;
  err.url = this.url;

  this.callback(err);
};

// This only warns, because the request is still likely to work
Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function () {
  console.warn("This is not supported in browser version of superagent");
  return this;
};

// This throws, because it can't send/receive data as expected
Request.prototype.pipe = Request.prototype.write = function () {
  throw Error("Streaming is not supported in browser version of superagent");
};

/**
 * Compose querystring to append to req.url
 *
 * @api private
 */

Request.prototype._appendQueryString = function () {
  var query = this._query.join('&');
  if (query) {
    this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
  }

  if (this._sort) {
    var index = this.url.indexOf('?');
    if (index >= 0) {
      var queryArr = this.url.substring(index + 1).split('&');
      if (isFunction(this._sort)) {
        queryArr.sort(this._sort);
      } else {
        queryArr.sort();
      }
      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
    }
  }
};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */
Request.prototype._isHost = function _isHost(obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && 'object' === (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
};

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function (fn) {
  if (this._endCalled) {
    console.warn("Warning: .end() was called twice. This is not supported in superagent");
  }
  this._endCalled = true;

  // store callback
  this._callback = fn || noop;

  // querystring
  this._appendQueryString();

  return this._end();
};

Request.prototype._end = function () {
  var self = this;
  var xhr = this.xhr = request.getXHR();
  var data = this._formData || this._data;

  this._setTimeouts();

  // state change
  xhr.onreadystatechange = function () {
    var readyState = xhr.readyState;
    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }
    if (4 != readyState) {
      return;
    }

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try {
      status = xhr.status;
    } catch (e) {
      status = 0;
    }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function handleProgress(direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    e.direction = direction;
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    try {
      xhr.onprogress = handleProgress.bind(null, 'download');
      if (xhr.upload) {
        xhr.upload.onprogress = handleProgress.bind(null, 'upload');
      }
    } catch (e) {
      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  }

  // initiate request
  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  }

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];
    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && isJSON(contentType)) {
      serialize = request.serialize['application/json'];
    }
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;

    if (this.header.hasOwnProperty(field)) xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function (url, data, fn) {
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.head = function (url, data, fn) {
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.options = function (url, data, fn) {
  var req = request('OPTIONS', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

function del(url, data, fn) {
  var req = request('DELETE', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

request['del'] = del;
request['delete'] = del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function (url, data, fn) {
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.post = function (url, data, fn) {
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.put = function (url, data, fn) {
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1),
      callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Module of mixed-in functions shared between node and client code
 */
var isObject = __webpack_require__(5);

/**
 * Expose `RequestBase`.
 */

module.exports = RequestBase;

/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in RequestBase.prototype) {
    obj[key] = RequestBase.prototype[key];
  }
  return obj;
}

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.clearTimeout = function _clearTimeout() {
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  return this;
};

/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.parse = function parse(fn) {
  this._parser = fn;
  return this;
};

/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.responseType = function (val) {
  this._responseType = val;
  return this;
};

/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.serialize = function serialize(fn) {
  this._serializer = fn;
  return this;
};

/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, read, deadline}
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.timeout = function timeout(options) {
  if (!options || 'object' !== (typeof options === 'undefined' ? 'undefined' : _typeof(options))) {
    this._timeout = options;
    this._responseTimeout = 0;
    return this;
  }

  for (var option in options) {
    switch (option) {
      case 'deadline':
        this._timeout = options.deadline;
        break;
      case 'response':
        this._responseTimeout = options.response;
        break;
      default:
        console.warn("Unknown timeout option", option);
    }
  }
  return this;
};

/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.retry = function retry(count) {
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  return this;
};

/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */

RequestBase.prototype._retry = function () {
  this.clearTimeout();

  // node
  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;

  return this._end();
};

/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */

RequestBase.prototype.then = function then(resolve, reject) {
  if (!this._fullfilledPromise) {
    var self = this;
    if (this._endCalled) {
      console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
    }
    this._fullfilledPromise = new Promise(function (innerResolve, innerReject) {
      self.end(function (err, res) {
        if (err) innerReject(err);else innerResolve(res);
      });
    });
  }
  return this._fullfilledPromise.then(resolve, reject);
};

RequestBase.prototype.catch = function (cb) {
  return this.then(undefined, cb);
};

/**
 * Allow for extension
 */

RequestBase.prototype.use = function use(fn) {
  fn(this);
  return this;
};

RequestBase.prototype.ok = function (cb) {
  if ('function' !== typeof cb) throw Error("Callback required");
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function (res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};

/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

RequestBase.prototype.get = function (field) {
  return this._header[field.toLowerCase()];
};

/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

RequestBase.prototype.getHeader = RequestBase.prototype.get;

/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function (field, val) {
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */
RequestBase.prototype.unset = function (field) {
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */
RequestBase.prototype.field = function (name, val) {

  // name should be either a string or an object.
  if (null === name || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject(name)) {
    for (var key in name) {
      this.field(key, name[key]);
    }
    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      this.field(name, val[i]);
    }
    return this;
  }

  // val should be defined now
  if (null === val || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }
  if ('boolean' === typeof val) {
    val = '' + val;
  }
  this._getFormData().append(name, val);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */
RequestBase.prototype.abort = function () {
  if (this._aborted) {
    return this;
  }
  this._aborted = true;
  this.xhr && this.xhr.abort(); // browser
  this.req && this.req.abort(); // node
  this.clearTimeout();
  this.emit('abort');
  return this;
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

RequestBase.prototype.withCredentials = function (on) {
  // This is browser-only functionality. Node side is no-op.
  if (on == undefined) on = true;
  this._withCredentials = on;
  return this;
};

/**
 * Set the max redirects to `n`. Does noting in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.redirects = function (n) {
  this._maxRedirects = n;
  return this;
};

/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */

RequestBase.prototype.toJSON = function () {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header
  };
};

/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.send = function (data) {
  var isObj = isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObj && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw Error("Can't merge these send calls");
  }

  // merge
  if (isObj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data ? this._data + '&' + data : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObj || this._isHost(data)) {
    return this;
  }

  // default to json
  if (!type) this.type('json');
  return this;
};

/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.sortQuery = function (sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

RequestBase.prototype._timeoutError = function (reason, timeout, errno) {
  if (this._aborted) {
    return;
  }
  var err = new Error(reason + timeout + 'ms exceeded');
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function () {
  var self = this;

  // deadline
  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function () {
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  }
  // response timeout
  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function () {
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if `fn` is a function.
 *
 * @param {Function} fn
 * @return {Boolean}
 * @api private
 */
var isObject = __webpack_require__(5);

function isFunction(fn) {
  var tag = isObject(fn) ? Object.prototype.toString.call(fn) : '';
  return tag === '[object Function]';
}

module.exports = isFunction;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var utils = __webpack_require__(44);

/**
 * Expose `ResponseBase`.
 */

module.exports = ResponseBase;

/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in ResponseBase.prototype) {
    obj[key] = ResponseBase.prototype[key];
  }
  return obj;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

ResponseBase.prototype.get = function (field) {
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

ResponseBase.prototype._setHeaderProperties = function (header) {
  // TODO: moar!
  // TODO: make this a util

  // content-type
  var ct = header['content-type'] || '';
  this.type = utils.type(ct);

  // params
  var params = utils.params(ct);
  for (var key in params) {
    this[key] = params[key];
  }this.links = {};

  // links
  try {
    if (header.link) {
      this.links = utils.parseLinks(header.link);
    }
  } catch (err) {
    // ignore
  }
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

ResponseBase.prototype._setStatusProperties = function (status) {
  var type = status / 100 | 0;

  // status / class
  this.status = this.statusCode = status;
  this.statusType = type;

  // basics
  this.info = 1 == type;
  this.ok = 2 == type;
  this.redirect = 3 == type;
  this.clientError = 4 == type;
  this.serverError = 5 == type;
  this.error = 4 == type || 5 == type ? this.toError() : false;

  // sugar
  this.accepted = 202 == status;
  this.noContent = 204 == status;
  this.badRequest = 400 == status;
  this.unauthorized = 401 == status;
  this.notAcceptable = 406 == status;
  this.forbidden = 403 == status;
  this.notFound = 404 == status;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.type = function (str) {
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.params = function (str) {
  return str.split(/ *; */).reduce(function (obj, str) {
    var parts = str.split(/ *= */);
    var key = parts.shift();
    var val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.parseLinks = function (str) {
  return str.split(/ *, */).reduce(function (obj, str) {
    var parts = str.split(/ *; */);
    var url = parts[0].slice(1, -1);
    var rel = parts[1].split(/ *= */)[1].slice(1, -1);
    obj[rel] = url;
    return obj;
  }, {});
};

/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */

exports.cleanHeader = function (header, shouldStripCookie) {
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header['host'];
  if (shouldStripCookie) {
    delete header['cookie'];
  }
  return header;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ERROR_CODES = ['ECONNRESET', 'ETIMEDOUT', 'EADDRINFO', 'ESOCKETTIMEDOUT'];

/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err
 * @param {Response} [res]
 * @returns {Boolean}
 */
module.exports = function shouldRetry(err, res) {
  if (err && err.code && ~ERROR_CODES.indexOf(err.code)) return true;
  if (res && res.status && res.status >= 500) return true;
  // Superagent timeout
  if (err && 'timeout' in err && err.code == 'ECONNABORTED') return true;
  if (err && 'crossDomain' in err) return true;
  return false;
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//from https://en.wikipedia.org/w/api.php?action=sitematrix&format=json
var site_map = {
  aawiki: 'https://aa.wikipedia.org',
  aawiktionary: 'https://aa.wiktionary.org',
  aawikibooks: 'https://aa.wikibooks.org',
  abwiki: 'https://ab.wikipedia.org',
  abwiktionary: 'https://ab.wiktionary.org',
  acewiki: 'https://ace.wikipedia.org',
  afwiki: 'https://af.wikipedia.org',
  afwiktionary: 'https://af.wiktionary.org',
  afwikibooks: 'https://af.wikibooks.org',
  afwikiquote: 'https://af.wikiquote.org',
  akwiki: 'https://ak.wikipedia.org',
  akwiktionary: 'https://ak.wiktionary.org',
  akwikibooks: 'https://ak.wikibooks.org',
  alswiki: 'https://als.wikipedia.org',
  alswiktionary: 'https://als.wiktionary.org',
  alswikibooks: 'https://als.wikibooks.org',
  alswikiquote: 'https://als.wikiquote.org',
  amwiki: 'https://am.wikipedia.org',
  amwiktionary: 'https://am.wiktionary.org',
  amwikiquote: 'https://am.wikiquote.org',
  anwiki: 'https://an.wikipedia.org',
  anwiktionary: 'https://an.wiktionary.org',
  angwiki: 'https://ang.wikipedia.org',
  angwiktionary: 'https://ang.wiktionary.org',
  angwikibooks: 'https://ang.wikibooks.org',
  angwikiquote: 'https://ang.wikiquote.org',
  angwikisource: 'https://ang.wikisource.org',
  arwiki: 'https://ar.wikipedia.org',
  arwiktionary: 'https://ar.wiktionary.org',
  arwikibooks: 'https://ar.wikibooks.org',
  arwikinews: 'https://ar.wikinews.org',
  arwikiquote: 'https://ar.wikiquote.org',
  arwikisource: 'https://ar.wikisource.org',
  arwikiversity: 'https://ar.wikiversity.org',
  arcwiki: 'https://arc.wikipedia.org',
  arzwiki: 'https://arz.wikipedia.org',
  aswiki: 'https://as.wikipedia.org',
  aswiktionary: 'https://as.wiktionary.org',
  aswikibooks: 'https://as.wikibooks.org',
  aswikisource: 'https://as.wikisource.org',
  astwiki: 'https://ast.wikipedia.org',
  astwiktionary: 'https://ast.wiktionary.org',
  astwikibooks: 'https://ast.wikibooks.org',
  astwikiquote: 'https://ast.wikiquote.org',
  avwiki: 'https://av.wikipedia.org',
  avwiktionary: 'https://av.wiktionary.org',
  aywiki: 'https://ay.wikipedia.org',
  aywiktionary: 'https://ay.wiktionary.org',
  aywikibooks: 'https://ay.wikibooks.org',
  azwiki: 'https://az.wikipedia.org',
  azwiktionary: 'https://az.wiktionary.org',
  azwikibooks: 'https://az.wikibooks.org',
  azwikiquote: 'https://az.wikiquote.org',
  azwikisource: 'https://az.wikisource.org',
  bawiki: 'https://ba.wikipedia.org',
  bawikibooks: 'https://ba.wikibooks.org',
  barwiki: 'https://bar.wikipedia.org',
  bat_smgwiki: 'https://bat-smg.wikipedia.org',
  bclwiki: 'https://bcl.wikipedia.org',
  bewiki: 'https://be.wikipedia.org',
  bewiktionary: 'https://be.wiktionary.org',
  bewikibooks: 'https://be.wikibooks.org',
  bewikiquote: 'https://be.wikiquote.org',
  bewikisource: 'https://be.wikisource.org',
  be_x_oldwiki: 'https://be-x-old.wikipedia.org',
  bgwiki: 'https://bg.wikipedia.org',
  bgwiktionary: 'https://bg.wiktionary.org',
  bgwikibooks: 'https://bg.wikibooks.org',
  bgwikinews: 'https://bg.wikinews.org',
  bgwikiquote: 'https://bg.wikiquote.org',
  bgwikisource: 'https://bg.wikisource.org',
  bhwiki: 'https://bh.wikipedia.org',
  bhwiktionary: 'https://bh.wiktionary.org',
  biwiki: 'https://bi.wikipedia.org',
  biwiktionary: 'https://bi.wiktionary.org',
  biwikibooks: 'https://bi.wikibooks.org',
  bjnwiki: 'https://bjn.wikipedia.org',
  bmwiki: 'https://bm.wikipedia.org',
  bmwiktionary: 'https://bm.wiktionary.org',
  bmwikibooks: 'https://bm.wikibooks.org',
  bmwikiquote: 'https://bm.wikiquote.org',
  bnwiki: 'https://bn.wikipedia.org',
  bnwiktionary: 'https://bn.wiktionary.org',
  bnwikibooks: 'https://bn.wikibooks.org',
  bnwikisource: 'https://bn.wikisource.org',
  bowiki: 'https://bo.wikipedia.org',
  bowiktionary: 'https://bo.wiktionary.org',
  bowikibooks: 'https://bo.wikibooks.org',
  bpywiki: 'https://bpy.wikipedia.org',
  brwiki: 'https://br.wikipedia.org',
  brwiktionary: 'https://br.wiktionary.org',
  brwikiquote: 'https://br.wikiquote.org',
  brwikisource: 'https://br.wikisource.org',
  bswiki: 'https://bs.wikipedia.org',
  bswiktionary: 'https://bs.wiktionary.org',
  bswikibooks: 'https://bs.wikibooks.org',
  bswikinews: 'https://bs.wikinews.org',
  bswikiquote: 'https://bs.wikiquote.org',
  bswikisource: 'https://bs.wikisource.org',
  bugwiki: 'https://bug.wikipedia.org',
  bxrwiki: 'https://bxr.wikipedia.org',
  cawiki: 'https://ca.wikipedia.org',
  cawiktionary: 'https://ca.wiktionary.org',
  cawikibooks: 'https://ca.wikibooks.org',
  cawikinews: 'https://ca.wikinews.org',
  cawikiquote: 'https://ca.wikiquote.org',
  cawikisource: 'https://ca.wikisource.org',
  cbk_zamwiki: 'https://cbk-zam.wikipedia.org',
  cdowiki: 'https://cdo.wikipedia.org',
  cewiki: 'https://ce.wikipedia.org',
  cebwiki: 'https://ceb.wikipedia.org',
  chwiki: 'https://ch.wikipedia.org',
  chwiktionary: 'https://ch.wiktionary.org',
  chwikibooks: 'https://ch.wikibooks.org',
  chowiki: 'https://cho.wikipedia.org',
  chrwiki: 'https://chr.wikipedia.org',
  chrwiktionary: 'https://chr.wiktionary.org',
  chywiki: 'https://chy.wikipedia.org',
  ckbwiki: 'https://ckb.wikipedia.org',
  cowiki: 'https://co.wikipedia.org',
  cowiktionary: 'https://co.wiktionary.org',
  cowikibooks: 'https://co.wikibooks.org',
  cowikiquote: 'https://co.wikiquote.org',
  crwiki: 'https://cr.wikipedia.org',
  crwiktionary: 'https://cr.wiktionary.org',
  crwikiquote: 'https://cr.wikiquote.org',
  crhwiki: 'https://crh.wikipedia.org',
  cswiki: 'https://cs.wikipedia.org',
  cswiktionary: 'https://cs.wiktionary.org',
  cswikibooks: 'https://cs.wikibooks.org',
  cswikinews: 'https://cs.wikinews.org',
  cswikiquote: 'https://cs.wikiquote.org',
  cswikisource: 'https://cs.wikisource.org',
  cswikiversity: 'https://cs.wikiversity.org',
  csbwiki: 'https://csb.wikipedia.org',
  csbwiktionary: 'https://csb.wiktionary.org',
  cuwiki: 'https://cu.wikipedia.org',
  cvwiki: 'https://cv.wikipedia.org',
  cvwikibooks: 'https://cv.wikibooks.org',
  cywiki: 'https://cy.wikipedia.org',
  cywiktionary: 'https://cy.wiktionary.org',
  cywikibooks: 'https://cy.wikibooks.org',
  cywikiquote: 'https://cy.wikiquote.org',
  cywikisource: 'https://cy.wikisource.org',
  dawiki: 'https://da.wikipedia.org',
  dawiktionary: 'https://da.wiktionary.org',
  dawikibooks: 'https://da.wikibooks.org',
  dawikiquote: 'https://da.wikiquote.org',
  dawikisource: 'https://da.wikisource.org',
  dewiki: 'https://de.wikipedia.org',
  dewiktionary: 'https://de.wiktionary.org',
  dewikibooks: 'https://de.wikibooks.org',
  dewikinews: 'https://de.wikinews.org',
  dewikiquote: 'https://de.wikiquote.org',
  dewikisource: 'https://de.wikisource.org',
  dewikiversity: 'https://de.wikiversity.org',
  dewikivoyage: 'https://de.wikivoyage.org',
  diqwiki: 'https://diq.wikipedia.org',
  dsbwiki: 'https://dsb.wikipedia.org',
  dvwiki: 'https://dv.wikipedia.org',
  dvwiktionary: 'https://dv.wiktionary.org',
  dzwiki: 'https://dz.wikipedia.org',
  dzwiktionary: 'https://dz.wiktionary.org',
  eewiki: 'https://ee.wikipedia.org',
  elwiki: 'https://el.wikipedia.org',
  elwiktionary: 'https://el.wiktionary.org',
  elwikibooks: 'https://el.wikibooks.org',
  elwikinews: 'https://el.wikinews.org',
  elwikiquote: 'https://el.wikiquote.org',
  elwikisource: 'https://el.wikisource.org',
  elwikiversity: 'https://el.wikiversity.org',
  elwikivoyage: 'https://el.wikivoyage.org',
  emlwiki: 'https://eml.wikipedia.org',
  enwiki: 'https://en.wikipedia.org',
  enwiktionary: 'https://en.wiktionary.org',
  enwikibooks: 'https://en.wikibooks.org',
  enwikinews: 'https://en.wikinews.org',
  enwikiquote: 'https://en.wikiquote.org',
  enwikisource: 'https://en.wikisource.org',
  enwikiversity: 'https://en.wikiversity.org',
  enwikivoyage: 'https://en.wikivoyage.org',
  eowiki: 'https://eo.wikipedia.org',
  eowiktionary: 'https://eo.wiktionary.org',
  eowikibooks: 'https://eo.wikibooks.org',
  eowikinews: 'https://eo.wikinews.org',
  eowikiquote: 'https://eo.wikiquote.org',
  eowikisource: 'https://eo.wikisource.org',
  eswiki: 'https://es.wikipedia.org',
  eswiktionary: 'https://es.wiktionary.org',
  eswikibooks: 'https://es.wikibooks.org',
  eswikinews: 'https://es.wikinews.org',
  eswikiquote: 'https://es.wikiquote.org',
  eswikisource: 'https://es.wikisource.org',
  eswikiversity: 'https://es.wikiversity.org',
  eswikivoyage: 'https://es.wikivoyage.org',
  etwiki: 'https://et.wikipedia.org',
  etwiktionary: 'https://et.wiktionary.org',
  etwikibooks: 'https://et.wikibooks.org',
  etwikiquote: 'https://et.wikiquote.org',
  etwikisource: 'https://et.wikisource.org',
  euwiki: 'https://eu.wikipedia.org',
  euwiktionary: 'https://eu.wiktionary.org',
  euwikibooks: 'https://eu.wikibooks.org',
  euwikiquote: 'https://eu.wikiquote.org',
  extwiki: 'https://ext.wikipedia.org',
  fawiki: 'https://fa.wikipedia.org',
  fawiktionary: 'https://fa.wiktionary.org',
  fawikibooks: 'https://fa.wikibooks.org',
  fawikinews: 'https://fa.wikinews.org',
  fawikiquote: 'https://fa.wikiquote.org',
  fawikisource: 'https://fa.wikisource.org',
  fawikivoyage: 'https://fa.wikivoyage.org',
  ffwiki: 'https://ff.wikipedia.org',
  fiwiki: 'https://fi.wikipedia.org',
  fiwiktionary: 'https://fi.wiktionary.org',
  fiwikibooks: 'https://fi.wikibooks.org',
  fiwikinews: 'https://fi.wikinews.org',
  fiwikiquote: 'https://fi.wikiquote.org',
  fiwikisource: 'https://fi.wikisource.org',
  fiwikiversity: 'https://fi.wikiversity.org',
  fiu_vrowiki: 'https://fiu-vro.wikipedia.org',
  fjwiki: 'https://fj.wikipedia.org',
  fjwiktionary: 'https://fj.wiktionary.org',
  fowiki: 'https://fo.wikipedia.org',
  fowiktionary: 'https://fo.wiktionary.org',
  fowikisource: 'https://fo.wikisource.org',
  frwiki: 'https://fr.wikipedia.org',
  frwiktionary: 'https://fr.wiktionary.org',
  frwikibooks: 'https://fr.wikibooks.org',
  frwikinews: 'https://fr.wikinews.org',
  frwikiquote: 'https://fr.wikiquote.org',
  frwikisource: 'https://fr.wikisource.org',
  frwikiversity: 'https://fr.wikiversity.org',
  frwikivoyage: 'https://fr.wikivoyage.org',
  frpwiki: 'https://frp.wikipedia.org',
  frrwiki: 'https://frr.wikipedia.org',
  furwiki: 'https://fur.wikipedia.org',
  fywiki: 'https://fy.wikipedia.org',
  fywiktionary: 'https://fy.wiktionary.org',
  fywikibooks: 'https://fy.wikibooks.org',
  gawiki: 'https://ga.wikipedia.org',
  gawiktionary: 'https://ga.wiktionary.org',
  gawikibooks: 'https://ga.wikibooks.org',
  gawikiquote: 'https://ga.wikiquote.org',
  gagwiki: 'https://gag.wikipedia.org',
  ganwiki: 'https://gan.wikipedia.org',
  gdwiki: 'https://gd.wikipedia.org',
  gdwiktionary: 'https://gd.wiktionary.org',
  glwiki: 'https://gl.wikipedia.org',
  glwiktionary: 'https://gl.wiktionary.org',
  glwikibooks: 'https://gl.wikibooks.org',
  glwikiquote: 'https://gl.wikiquote.org',
  glwikisource: 'https://gl.wikisource.org',
  glkwiki: 'https://glk.wikipedia.org',
  gnwiki: 'https://gn.wikipedia.org',
  gnwiktionary: 'https://gn.wiktionary.org',
  gnwikibooks: 'https://gn.wikibooks.org',
  gotwiki: 'https://got.wikipedia.org',
  gotwikibooks: 'https://got.wikibooks.org',
  guwiki: 'https://gu.wikipedia.org',
  guwiktionary: 'https://gu.wiktionary.org',
  guwikibooks: 'https://gu.wikibooks.org',
  guwikiquote: 'https://gu.wikiquote.org',
  guwikisource: 'https://gu.wikisource.org',
  gvwiki: 'https://gv.wikipedia.org',
  gvwiktionary: 'https://gv.wiktionary.org',
  hawiki: 'https://ha.wikipedia.org',
  hawiktionary: 'https://ha.wiktionary.org',
  hakwiki: 'https://hak.wikipedia.org',
  hawwiki: 'https://haw.wikipedia.org',
  hewiki: 'https://he.wikipedia.org',
  hewiktionary: 'https://he.wiktionary.org',
  hewikibooks: 'https://he.wikibooks.org',
  hewikinews: 'https://he.wikinews.org',
  hewikiquote: 'https://he.wikiquote.org',
  hewikisource: 'https://he.wikisource.org',
  hewikivoyage: 'https://he.wikivoyage.org',
  hiwiki: 'https://hi.wikipedia.org',
  hiwiktionary: 'https://hi.wiktionary.org',
  hiwikibooks: 'https://hi.wikibooks.org',
  hiwikiquote: 'https://hi.wikiquote.org',
  hifwiki: 'https://hif.wikipedia.org',
  howiki: 'https://ho.wikipedia.org',
  hrwiki: 'https://hr.wikipedia.org',
  hrwiktionary: 'https://hr.wiktionary.org',
  hrwikibooks: 'https://hr.wikibooks.org',
  hrwikiquote: 'https://hr.wikiquote.org',
  hrwikisource: 'https://hr.wikisource.org',
  hsbwiki: 'https://hsb.wikipedia.org',
  hsbwiktionary: 'https://hsb.wiktionary.org',
  htwiki: 'https://ht.wikipedia.org',
  htwikisource: 'https://ht.wikisource.org',
  huwiki: 'https://hu.wikipedia.org',
  huwiktionary: 'https://hu.wiktionary.org',
  huwikibooks: 'https://hu.wikibooks.org',
  huwikinews: 'https://hu.wikinews.org',
  huwikiquote: 'https://hu.wikiquote.org',
  huwikisource: 'https://hu.wikisource.org',
  hywiki: 'https://hy.wikipedia.org',
  hywiktionary: 'https://hy.wiktionary.org',
  hywikibooks: 'https://hy.wikibooks.org',
  hywikiquote: 'https://hy.wikiquote.org',
  hywikisource: 'https://hy.wikisource.org',
  hzwiki: 'https://hz.wikipedia.org',
  iawiki: 'https://ia.wikipedia.org',
  iawiktionary: 'https://ia.wiktionary.org',
  iawikibooks: 'https://ia.wikibooks.org',
  idwiki: 'https://id.wikipedia.org',
  idwiktionary: 'https://id.wiktionary.org',
  idwikibooks: 'https://id.wikibooks.org',
  idwikiquote: 'https://id.wikiquote.org',
  idwikisource: 'https://id.wikisource.org',
  iewiki: 'https://ie.wikipedia.org',
  iewiktionary: 'https://ie.wiktionary.org',
  iewikibooks: 'https://ie.wikibooks.org',
  igwiki: 'https://ig.wikipedia.org',
  iiwiki: 'https://ii.wikipedia.org',
  ikwiki: 'https://ik.wikipedia.org',
  ikwiktionary: 'https://ik.wiktionary.org',
  ilowiki: 'https://ilo.wikipedia.org',
  iowiki: 'https://io.wikipedia.org',
  iowiktionary: 'https://io.wiktionary.org',
  iswiki: 'https://is.wikipedia.org',
  iswiktionary: 'https://is.wiktionary.org',
  iswikibooks: 'https://is.wikibooks.org',
  iswikiquote: 'https://is.wikiquote.org',
  iswikisource: 'https://is.wikisource.org',
  itwiki: 'https://it.wikipedia.org',
  itwiktionary: 'https://it.wiktionary.org',
  itwikibooks: 'https://it.wikibooks.org',
  itwikinews: 'https://it.wikinews.org',
  itwikiquote: 'https://it.wikiquote.org',
  itwikisource: 'https://it.wikisource.org',
  itwikiversity: 'https://it.wikiversity.org',
  itwikivoyage: 'https://it.wikivoyage.org',
  iuwiki: 'https://iu.wikipedia.org',
  iuwiktionary: 'https://iu.wiktionary.org',
  jawiki: 'https://ja.wikipedia.org',
  jawiktionary: 'https://ja.wiktionary.org',
  jawikibooks: 'https://ja.wikibooks.org',
  jawikinews: 'https://ja.wikinews.org',
  jawikiquote: 'https://ja.wikiquote.org',
  jawikisource: 'https://ja.wikisource.org',
  jawikiversity: 'https://ja.wikiversity.org',
  jbowiki: 'https://jbo.wikipedia.org',
  jbowiktionary: 'https://jbo.wiktionary.org',
  jvwiki: 'https://jv.wikipedia.org',
  jvwiktionary: 'https://jv.wiktionary.org',
  kawiki: 'https://ka.wikipedia.org',
  kawiktionary: 'https://ka.wiktionary.org',
  kawikibooks: 'https://ka.wikibooks.org',
  kawikiquote: 'https://ka.wikiquote.org',
  kaawiki: 'https://kaa.wikipedia.org',
  kabwiki: 'https://kab.wikipedia.org',
  kbdwiki: 'https://kbd.wikipedia.org',
  kgwiki: 'https://kg.wikipedia.org',
  kiwiki: 'https://ki.wikipedia.org',
  kjwiki: 'https://kj.wikipedia.org',
  kkwiki: 'https://kk.wikipedia.org',
  kkwiktionary: 'https://kk.wiktionary.org',
  kkwikibooks: 'https://kk.wikibooks.org',
  kkwikiquote: 'https://kk.wikiquote.org',
  klwiki: 'https://kl.wikipedia.org',
  klwiktionary: 'https://kl.wiktionary.org',
  kmwiki: 'https://km.wikipedia.org',
  kmwiktionary: 'https://km.wiktionary.org',
  kmwikibooks: 'https://km.wikibooks.org',
  knwiki: 'https://kn.wikipedia.org',
  knwiktionary: 'https://kn.wiktionary.org',
  knwikibooks: 'https://kn.wikibooks.org',
  knwikiquote: 'https://kn.wikiquote.org',
  knwikisource: 'https://kn.wikisource.org',
  kowiki: 'https://ko.wikipedia.org',
  kowiktionary: 'https://ko.wiktionary.org',
  kowikibooks: 'https://ko.wikibooks.org',
  kowikinews: 'https://ko.wikinews.org',
  kowikiquote: 'https://ko.wikiquote.org',
  kowikisource: 'https://ko.wikisource.org',
  kowikiversity: 'https://ko.wikiversity.org',
  koiwiki: 'https://koi.wikipedia.org',
  krwiki: 'https://kr.wikipedia.org',
  krwikiquote: 'https://kr.wikiquote.org',
  krcwiki: 'https://krc.wikipedia.org',
  kswiki: 'https://ks.wikipedia.org',
  kswiktionary: 'https://ks.wiktionary.org',
  kswikibooks: 'https://ks.wikibooks.org',
  kswikiquote: 'https://ks.wikiquote.org',
  kshwiki: 'https://ksh.wikipedia.org',
  kuwiki: 'https://ku.wikipedia.org',
  kuwiktionary: 'https://ku.wiktionary.org',
  kuwikibooks: 'https://ku.wikibooks.org',
  kuwikiquote: 'https://ku.wikiquote.org',
  kvwiki: 'https://kv.wikipedia.org',
  kwwiki: 'https://kw.wikipedia.org',
  kwwiktionary: 'https://kw.wiktionary.org',
  kwwikiquote: 'https://kw.wikiquote.org',
  kywiki: 'https://ky.wikipedia.org',
  kywiktionary: 'https://ky.wiktionary.org',
  kywikibooks: 'https://ky.wikibooks.org',
  kywikiquote: 'https://ky.wikiquote.org',
  lawiki: 'https://la.wikipedia.org',
  lawiktionary: 'https://la.wiktionary.org',
  lawikibooks: 'https://la.wikibooks.org',
  lawikiquote: 'https://la.wikiquote.org',
  lawikisource: 'https://la.wikisource.org',
  ladwiki: 'https://lad.wikipedia.org',
  lbwiki: 'https://lb.wikipedia.org',
  lbwiktionary: 'https://lb.wiktionary.org',
  lbwikibooks: 'https://lb.wikibooks.org',
  lbwikiquote: 'https://lb.wikiquote.org',
  lbewiki: 'https://lbe.wikipedia.org',
  lezwiki: 'https://lez.wikipedia.org',
  lgwiki: 'https://lg.wikipedia.org',
  liwiki: 'https://li.wikipedia.org',
  liwiktionary: 'https://li.wiktionary.org',
  liwikibooks: 'https://li.wikibooks.org',
  liwikiquote: 'https://li.wikiquote.org',
  liwikisource: 'https://li.wikisource.org',
  lijwiki: 'https://lij.wikipedia.org',
  lmowiki: 'https://lmo.wikipedia.org',
  lnwiki: 'https://ln.wikipedia.org',
  lnwiktionary: 'https://ln.wiktionary.org',
  lnwikibooks: 'https://ln.wikibooks.org',
  lowiki: 'https://lo.wikipedia.org',
  lowiktionary: 'https://lo.wiktionary.org',
  ltwiki: 'https://lt.wikipedia.org',
  ltwiktionary: 'https://lt.wiktionary.org',
  ltwikibooks: 'https://lt.wikibooks.org',
  ltwikiquote: 'https://lt.wikiquote.org',
  ltwikisource: 'https://lt.wikisource.org',
  ltgwiki: 'https://ltg.wikipedia.org',
  lvwiki: 'https://lv.wikipedia.org',
  lvwiktionary: 'https://lv.wiktionary.org',
  lvwikibooks: 'https://lv.wikibooks.org',
  maiwiki: 'https://mai.wikipedia.org',
  map_bmswiki: 'https://map-bms.wikipedia.org',
  mdfwiki: 'https://mdf.wikipedia.org',
  mgwiki: 'https://mg.wikipedia.org',
  mgwiktionary: 'https://mg.wiktionary.org',
  mgwikibooks: 'https://mg.wikibooks.org',
  mhwiki: 'https://mh.wikipedia.org',
  mhwiktionary: 'https://mh.wiktionary.org',
  mhrwiki: 'https://mhr.wikipedia.org',
  miwiki: 'https://mi.wikipedia.org',
  miwiktionary: 'https://mi.wiktionary.org',
  miwikibooks: 'https://mi.wikibooks.org',
  minwiki: 'https://min.wikipedia.org',
  mkwiki: 'https://mk.wikipedia.org',
  mkwiktionary: 'https://mk.wiktionary.org',
  mkwikibooks: 'https://mk.wikibooks.org',
  mkwikisource: 'https://mk.wikisource.org',
  mlwiki: 'https://ml.wikipedia.org',
  mlwiktionary: 'https://ml.wiktionary.org',
  mlwikibooks: 'https://ml.wikibooks.org',
  mlwikiquote: 'https://ml.wikiquote.org',
  mlwikisource: 'https://ml.wikisource.org',
  mnwiki: 'https://mn.wikipedia.org',
  mnwiktionary: 'https://mn.wiktionary.org',
  mnwikibooks: 'https://mn.wikibooks.org',
  mowiki: 'https://mo.wikipedia.org',
  mowiktionary: 'https://mo.wiktionary.org',
  mrwiki: 'https://mr.wikipedia.org',
  mrwiktionary: 'https://mr.wiktionary.org',
  mrwikibooks: 'https://mr.wikibooks.org',
  mrwikiquote: 'https://mr.wikiquote.org',
  mrwikisource: 'https://mr.wikisource.org',
  mrjwiki: 'https://mrj.wikipedia.org',
  mswiki: 'https://ms.wikipedia.org',
  mswiktionary: 'https://ms.wiktionary.org',
  mswikibooks: 'https://ms.wikibooks.org',
  mtwiki: 'https://mt.wikipedia.org',
  mtwiktionary: 'https://mt.wiktionary.org',
  muswiki: 'https://mus.wikipedia.org',
  mwlwiki: 'https://mwl.wikipedia.org',
  mywiki: 'https://my.wikipedia.org',
  mywiktionary: 'https://my.wiktionary.org',
  mywikibooks: 'https://my.wikibooks.org',
  myvwiki: 'https://myv.wikipedia.org',
  mznwiki: 'https://mzn.wikipedia.org',
  nawiki: 'https://na.wikipedia.org',
  nawiktionary: 'https://na.wiktionary.org',
  nawikibooks: 'https://na.wikibooks.org',
  nawikiquote: 'https://na.wikiquote.org',
  nahwiki: 'https://nah.wikipedia.org',
  nahwiktionary: 'https://nah.wiktionary.org',
  nahwikibooks: 'https://nah.wikibooks.org',
  napwiki: 'https://nap.wikipedia.org',
  ndswiki: 'https://nds.wikipedia.org',
  ndswiktionary: 'https://nds.wiktionary.org',
  ndswikibooks: 'https://nds.wikibooks.org',
  ndswikiquote: 'https://nds.wikiquote.org',
  nds_nlwiki: 'https://nds-nl.wikipedia.org',
  newiki: 'https://ne.wikipedia.org',
  newiktionary: 'https://ne.wiktionary.org',
  newikibooks: 'https://ne.wikibooks.org',
  newwiki: 'https://new.wikipedia.org',
  ngwiki: 'https://ng.wikipedia.org',
  nlwiki: 'https://nl.wikipedia.org',
  nlwiktionary: 'https://nl.wiktionary.org',
  nlwikibooks: 'https://nl.wikibooks.org',
  nlwikinews: 'https://nl.wikinews.org',
  nlwikiquote: 'https://nl.wikiquote.org',
  nlwikisource: 'https://nl.wikisource.org',
  nlwikivoyage: 'https://nl.wikivoyage.org',
  nnwiki: 'https://nn.wikipedia.org',
  nnwiktionary: 'https://nn.wiktionary.org',
  nnwikiquote: 'https://nn.wikiquote.org',
  nowiki: 'https://no.wikipedia.org',
  nowiktionary: 'https://no.wiktionary.org',
  nowikibooks: 'https://no.wikibooks.org',
  nowikinews: 'https://no.wikinews.org',
  nowikiquote: 'https://no.wikiquote.org',
  nowikisource: 'https://no.wikisource.org',
  novwiki: 'https://nov.wikipedia.org',
  nrmwiki: 'https://nrm.wikipedia.org',
  nsowiki: 'https://nso.wikipedia.org',
  nvwiki: 'https://nv.wikipedia.org',
  nywiki: 'https://ny.wikipedia.org',
  ocwiki: 'https://oc.wikipedia.org',
  ocwiktionary: 'https://oc.wiktionary.org',
  ocwikibooks: 'https://oc.wikibooks.org',
  omwiki: 'https://om.wikipedia.org',
  omwiktionary: 'https://om.wiktionary.org',
  orwiki: 'https://or.wikipedia.org',
  orwiktionary: 'https://or.wiktionary.org',
  orwikisource: 'https://or.wikisource.org',
  oswiki: 'https://os.wikipedia.org',
  pawiki: 'https://pa.wikipedia.org',
  pawiktionary: 'https://pa.wiktionary.org',
  pawikibooks: 'https://pa.wikibooks.org',
  pagwiki: 'https://pag.wikipedia.org',
  pamwiki: 'https://pam.wikipedia.org',
  papwiki: 'https://pap.wikipedia.org',
  pcdwiki: 'https://pcd.wikipedia.org',
  pdcwiki: 'https://pdc.wikipedia.org',
  pflwiki: 'https://pfl.wikipedia.org',
  piwiki: 'https://pi.wikipedia.org',
  piwiktionary: 'https://pi.wiktionary.org',
  pihwiki: 'https://pih.wikipedia.org',
  plwiki: 'https://pl.wikipedia.org',
  plwiktionary: 'https://pl.wiktionary.org',
  plwikibooks: 'https://pl.wikibooks.org',
  plwikinews: 'https://pl.wikinews.org',
  plwikiquote: 'https://pl.wikiquote.org',
  plwikisource: 'https://pl.wikisource.org',
  plwikivoyage: 'https://pl.wikivoyage.org',
  pmswiki: 'https://pms.wikipedia.org',
  pnbwiki: 'https://pnb.wikipedia.org',
  pnbwiktionary: 'https://pnb.wiktionary.org',
  pntwiki: 'https://pnt.wikipedia.org',
  pswiki: 'https://ps.wikipedia.org',
  pswiktionary: 'https://ps.wiktionary.org',
  pswikibooks: 'https://ps.wikibooks.org',
  ptwiki: 'https://pt.wikipedia.org',
  ptwiktionary: 'https://pt.wiktionary.org',
  ptwikibooks: 'https://pt.wikibooks.org',
  ptwikinews: 'https://pt.wikinews.org',
  ptwikiquote: 'https://pt.wikiquote.org',
  ptwikisource: 'https://pt.wikisource.org',
  ptwikiversity: 'https://pt.wikiversity.org',
  ptwikivoyage: 'https://pt.wikivoyage.org',
  quwiki: 'https://qu.wikipedia.org',
  quwiktionary: 'https://qu.wiktionary.org',
  quwikibooks: 'https://qu.wikibooks.org',
  quwikiquote: 'https://qu.wikiquote.org',
  rmwiki: 'https://rm.wikipedia.org',
  rmwiktionary: 'https://rm.wiktionary.org',
  rmwikibooks: 'https://rm.wikibooks.org',
  rmywiki: 'https://rmy.wikipedia.org',
  rnwiki: 'https://rn.wikipedia.org',
  rnwiktionary: 'https://rn.wiktionary.org',
  rowiki: 'https://ro.wikipedia.org',
  rowiktionary: 'https://ro.wiktionary.org',
  rowikibooks: 'https://ro.wikibooks.org',
  rowikinews: 'https://ro.wikinews.org',
  rowikiquote: 'https://ro.wikiquote.org',
  rowikisource: 'https://ro.wikisource.org',
  rowikivoyage: 'https://ro.wikivoyage.org',
  roa_rupwiki: 'https://roa-rup.wikipedia.org',
  roa_rupwiktionary: 'https://roa-rup.wiktionary.org',
  roa_tarawiki: 'https://roa-tara.wikipedia.org',
  ruwiki: 'https://ru.wikipedia.org',
  ruwiktionary: 'https://ru.wiktionary.org',
  ruwikibooks: 'https://ru.wikibooks.org',
  ruwikinews: 'https://ru.wikinews.org',
  ruwikiquote: 'https://ru.wikiquote.org',
  ruwikisource: 'https://ru.wikisource.org',
  ruwikiversity: 'https://ru.wikiversity.org',
  ruwikivoyage: 'https://ru.wikivoyage.org',
  ruewiki: 'https://rue.wikipedia.org',
  rwwiki: 'https://rw.wikipedia.org',
  rwwiktionary: 'https://rw.wiktionary.org',
  sawiki: 'https://sa.wikipedia.org',
  sawiktionary: 'https://sa.wiktionary.org',
  sawikibooks: 'https://sa.wikibooks.org',
  sawikiquote: 'https://sa.wikiquote.org',
  sawikisource: 'https://sa.wikisource.org',
  sahwiki: 'https://sah.wikipedia.org',
  sahwikisource: 'https://sah.wikisource.org',
  scwiki: 'https://sc.wikipedia.org',
  scwiktionary: 'https://sc.wiktionary.org',
  scnwiki: 'https://scn.wikipedia.org',
  scnwiktionary: 'https://scn.wiktionary.org',
  scowiki: 'https://sco.wikipedia.org',
  sdwiki: 'https://sd.wikipedia.org',
  sdwiktionary: 'https://sd.wiktionary.org',
  sdwikinews: 'https://sd.wikinews.org',
  sewiki: 'https://se.wikipedia.org',
  sewikibooks: 'https://se.wikibooks.org',
  sgwiki: 'https://sg.wikipedia.org',
  sgwiktionary: 'https://sg.wiktionary.org',
  shwiki: 'https://sh.wikipedia.org',
  shwiktionary: 'https://sh.wiktionary.org',
  siwiki: 'https://si.wikipedia.org',
  siwiktionary: 'https://si.wiktionary.org',
  siwikibooks: 'https://si.wikibooks.org',
  simplewiki: 'https://simple.wikipedia.org',
  simplewiktionary: 'https://simple.wiktionary.org',
  simplewikibooks: 'https://simple.wikibooks.org',
  simplewikiquote: 'https://simple.wikiquote.org',
  skwiki: 'https://sk.wikipedia.org',
  skwiktionary: 'https://sk.wiktionary.org',
  skwikibooks: 'https://sk.wikibooks.org',
  skwikiquote: 'https://sk.wikiquote.org',
  skwikisource: 'https://sk.wikisource.org',
  slwiki: 'https://sl.wikipedia.org',
  slwiktionary: 'https://sl.wiktionary.org',
  slwikibooks: 'https://sl.wikibooks.org',
  slwikiquote: 'https://sl.wikiquote.org',
  slwikisource: 'https://sl.wikisource.org',
  slwikiversity: 'https://sl.wikiversity.org',
  smwiki: 'https://sm.wikipedia.org',
  smwiktionary: 'https://sm.wiktionary.org',
  snwiki: 'https://sn.wikipedia.org',
  snwiktionary: 'https://sn.wiktionary.org',
  sowiki: 'https://so.wikipedia.org',
  sowiktionary: 'https://so.wiktionary.org',
  sqwiki: 'https://sq.wikipedia.org',
  sqwiktionary: 'https://sq.wiktionary.org',
  sqwikibooks: 'https://sq.wikibooks.org',
  sqwikinews: 'https://sq.wikinews.org',
  sqwikiquote: 'https://sq.wikiquote.org',
  srwiki: 'https://sr.wikipedia.org',
  srwiktionary: 'https://sr.wiktionary.org',
  srwikibooks: 'https://sr.wikibooks.org',
  srwikinews: 'https://sr.wikinews.org',
  srwikiquote: 'https://sr.wikiquote.org',
  srwikisource: 'https://sr.wikisource.org',
  srnwiki: 'https://srn.wikipedia.org',
  sswiki: 'https://ss.wikipedia.org',
  sswiktionary: 'https://ss.wiktionary.org',
  stwiki: 'https://st.wikipedia.org',
  stwiktionary: 'https://st.wiktionary.org',
  stqwiki: 'https://stq.wikipedia.org',
  suwiki: 'https://su.wikipedia.org',
  suwiktionary: 'https://su.wiktionary.org',
  suwikibooks: 'https://su.wikibooks.org',
  suwikiquote: 'https://su.wikiquote.org',
  svwiki: 'https://sv.wikipedia.org',
  svwiktionary: 'https://sv.wiktionary.org',
  svwikibooks: 'https://sv.wikibooks.org',
  svwikinews: 'https://sv.wikinews.org',
  svwikiquote: 'https://sv.wikiquote.org',
  svwikisource: 'https://sv.wikisource.org',
  svwikiversity: 'https://sv.wikiversity.org',
  svwikivoyage: 'https://sv.wikivoyage.org',
  swwiki: 'https://sw.wikipedia.org',
  swwiktionary: 'https://sw.wiktionary.org',
  swwikibooks: 'https://sw.wikibooks.org',
  szlwiki: 'https://szl.wikipedia.org',
  tawiki: 'https://ta.wikipedia.org',
  tawiktionary: 'https://ta.wiktionary.org',
  tawikibooks: 'https://ta.wikibooks.org',
  tawikinews: 'https://ta.wikinews.org',
  tawikiquote: 'https://ta.wikiquote.org',
  tawikisource: 'https://ta.wikisource.org',
  tewiki: 'https://te.wikipedia.org',
  tewiktionary: 'https://te.wiktionary.org',
  tewikibooks: 'https://te.wikibooks.org',
  tewikiquote: 'https://te.wikiquote.org',
  tewikisource: 'https://te.wikisource.org',
  tetwiki: 'https://tet.wikipedia.org',
  tgwiki: 'https://tg.wikipedia.org',
  tgwiktionary: 'https://tg.wiktionary.org',
  tgwikibooks: 'https://tg.wikibooks.org',
  thwiki: 'https://th.wikipedia.org',
  thwiktionary: 'https://th.wiktionary.org',
  thwikibooks: 'https://th.wikibooks.org',
  thwikinews: 'https://th.wikinews.org',
  thwikiquote: 'https://th.wikiquote.org',
  thwikisource: 'https://th.wikisource.org',
  tiwiki: 'https://ti.wikipedia.org',
  tiwiktionary: 'https://ti.wiktionary.org',
  tkwiki: 'https://tk.wikipedia.org',
  tkwiktionary: 'https://tk.wiktionary.org',
  tkwikibooks: 'https://tk.wikibooks.org',
  tkwikiquote: 'https://tk.wikiquote.org',
  tlwiki: 'https://tl.wikipedia.org',
  tlwiktionary: 'https://tl.wiktionary.org',
  tlwikibooks: 'https://tl.wikibooks.org',
  tnwiki: 'https://tn.wikipedia.org',
  tnwiktionary: 'https://tn.wiktionary.org',
  towiki: 'https://to.wikipedia.org',
  towiktionary: 'https://to.wiktionary.org',
  tpiwiki: 'https://tpi.wikipedia.org',
  tpiwiktionary: 'https://tpi.wiktionary.org',
  trwiki: 'https://tr.wikipedia.org',
  trwiktionary: 'https://tr.wiktionary.org',
  trwikibooks: 'https://tr.wikibooks.org',
  trwikinews: 'https://tr.wikinews.org',
  trwikiquote: 'https://tr.wikiquote.org',
  trwikisource: 'https://tr.wikisource.org',
  tswiki: 'https://ts.wikipedia.org',
  tswiktionary: 'https://ts.wiktionary.org',
  ttwiki: 'https://tt.wikipedia.org',
  ttwiktionary: 'https://tt.wiktionary.org',
  ttwikibooks: 'https://tt.wikibooks.org',
  ttwikiquote: 'https://tt.wikiquote.org',
  tumwiki: 'https://tum.wikipedia.org',
  twwiki: 'https://tw.wikipedia.org',
  twwiktionary: 'https://tw.wiktionary.org',
  tywiki: 'https://ty.wikipedia.org',
  tyvwiki: 'https://tyv.wikipedia.org',
  udmwiki: 'https://udm.wikipedia.org',
  ugwiki: 'https://ug.wikipedia.org',
  ugwiktionary: 'https://ug.wiktionary.org',
  ugwikibooks: 'https://ug.wikibooks.org',
  ugwikiquote: 'https://ug.wikiquote.org',
  ukwiki: 'https://uk.wikipedia.org',
  ukwiktionary: 'https://uk.wiktionary.org',
  ukwikibooks: 'https://uk.wikibooks.org',
  ukwikinews: 'https://uk.wikinews.org',
  ukwikiquote: 'https://uk.wikiquote.org',
  ukwikisource: 'https://uk.wikisource.org',
  ukwikivoyage: 'https://uk.wikivoyage.org',
  urwiki: 'https://ur.wikipedia.org',
  urwiktionary: 'https://ur.wiktionary.org',
  urwikibooks: 'https://ur.wikibooks.org',
  urwikiquote: 'https://ur.wikiquote.org',
  uzwiki: 'https://uz.wikipedia.org',
  uzwiktionary: 'https://uz.wiktionary.org',
  uzwikibooks: 'https://uz.wikibooks.org',
  uzwikiquote: 'https://uz.wikiquote.org',
  vewiki: 'https://ve.wikipedia.org',
  vecwiki: 'https://vec.wikipedia.org',
  vecwiktionary: 'https://vec.wiktionary.org',
  vecwikisource: 'https://vec.wikisource.org',
  vepwiki: 'https://vep.wikipedia.org',
  viwiki: 'https://vi.wikipedia.org',
  viwiktionary: 'https://vi.wiktionary.org',
  viwikibooks: 'https://vi.wikibooks.org',
  viwikiquote: 'https://vi.wikiquote.org',
  viwikisource: 'https://vi.wikisource.org',
  viwikivoyage: 'https://vi.wikivoyage.org',
  vlswiki: 'https://vls.wikipedia.org',
  vowiki: 'https://vo.wikipedia.org',
  vowiktionary: 'https://vo.wiktionary.org',
  vowikibooks: 'https://vo.wikibooks.org',
  vowikiquote: 'https://vo.wikiquote.org',
  wawiki: 'https://wa.wikipedia.org',
  wawiktionary: 'https://wa.wiktionary.org',
  wawikibooks: 'https://wa.wikibooks.org',
  warwiki: 'https://war.wikipedia.org',
  wowiki: 'https://wo.wikipedia.org',
  wowiktionary: 'https://wo.wiktionary.org',
  wowikiquote: 'https://wo.wikiquote.org',
  wuuwiki: 'https://wuu.wikipedia.org',
  xalwiki: 'https://xal.wikipedia.org',
  xhwiki: 'https://xh.wikipedia.org',
  xhwiktionary: 'https://xh.wiktionary.org',
  xhwikibooks: 'https://xh.wikibooks.org',
  xmfwiki: 'https://xmf.wikipedia.org',
  yiwiki: 'https://yi.wikipedia.org',
  yiwiktionary: 'https://yi.wiktionary.org',
  yiwikisource: 'https://yi.wikisource.org',
  yowiki: 'https://yo.wikipedia.org',
  yowiktionary: 'https://yo.wiktionary.org',
  yowikibooks: 'https://yo.wikibooks.org',
  zawiki: 'https://za.wikipedia.org',
  zawiktionary: 'https://za.wiktionary.org',
  zawikibooks: 'https://za.wikibooks.org',
  zawikiquote: 'https://za.wikiquote.org',
  zeawiki: 'https://zea.wikipedia.org',
  zhwiki: 'https://zh.wikipedia.org',
  zhwiktionary: 'https://zh.wiktionary.org',
  zhwikibooks: 'https://zh.wikibooks.org',
  zhwikinews: 'https://zh.wikinews.org',
  zhwikiquote: 'https://zh.wikiquote.org',
  zhwikisource: 'https://zh.wikisource.org',
  zhwikivoyage: 'https://zh.wikivoyage.org',
  zh_classicalwiki: 'https://zh-classical.wikipedia.org',
  zh_min_nanwiki: 'https://zh-min-nan.wikipedia.org',
  zh_min_nanwiktionary: 'https://zh-min-nan.wiktionary.org',
  zh_min_nanwikibooks: 'https://zh-min-nan.wikibooks.org',
  zh_min_nanwikiquote: 'https://zh-min-nan.wikiquote.org',
  zh_min_nanwikisource: 'https://zh-min-nan.wikisource.org',
  zh_yuewiki: 'https://zh-yue.wikipedia.org',
  zuwiki: 'https://zu.wikipedia.org',
  zuwiktionary: 'https://zu.wiktionary.org',
  zuwikibooks: 'https://zu.wikibooks.org'
};
if (typeof module !== 'undefined' && module.exports) {
  module.exports = site_map;
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var redirects = __webpack_require__(12);
var disambig = __webpack_require__(48);
var word_templates = __webpack_require__(49);
var preprocess = __webpack_require__(50);
var parse_tables = __webpack_require__(52);
var parse_categories = __webpack_require__(53);
var parse_recursion = __webpack_require__(54);
var parse_lines = __webpack_require__(63);

//convert wikiscript markup lang to json
var main = function main(wiki) {
  wiki = wiki || '';
  //detect if page is just redirect, and return
  if (redirects.is_redirect(wiki)) {
    return redirects.parse_redirect(wiki);
  }
  //detect if page is just disambiguator page, and return
  if (disambig.is_disambig(wiki)) {
    return disambig.parse_disambig(wiki);
  }
  var r = {
    type: 'page',
    sections: {},
    categories: [],
    images: [],
    infobox: {},
    infobox_template: {},
    tables: [],
    translations: {}
  };
  //parse templates like {{currentday}}
  wiki = word_templates(wiki);
  //kill off (some) craziness
  wiki = preprocess(wiki);
  //parse the tables
  wiki = parse_tables(r, wiki);
  //parse+remove scary '[[ [[]] ]]' stuff
  wiki = parse_recursion(r, wiki);
  //ok, now that the scary recursion issues are gone, we can trust simple regex methods..
  //kill the rest of templates
  wiki = wiki.replace(/\{\{.*?\}\}/g, '');
  //get list of links, categories
  wiki = parse_categories(r, wiki);
  //parse all the headings, and their texts/sentences
  wiki = parse_lines(r, wiki);

  return r;
};

module.exports = main;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var i18n = __webpack_require__(1);
var parse_links = __webpack_require__(13);
var template_reg = new RegExp('\\{\\{ ?(' + i18n.disambigs.join('|') + ')(\\|[a-z =]*?)? ?\\}\\}', 'i');

var is_disambig = function is_disambig(wiki) {
  return template_reg.test(wiki);
};

//return a list of probable pages for this disambig page
var parse_disambig = function parse_disambig(wiki) {
  var pages = [];
  var lines = wiki.replace(/\r/g, '').split(/\n/);
  lines.forEach(function (str) {
    //if there's an early link in the list
    if (str.match(/^\*.{0,40}\[\[.*\]\]/)) {
      var links = parse_links(str);
      if (links && links[0] && links[0].page) {
        pages.push(links[0].page);
      }
    }
  });
  return {
    type: 'disambiguation',
    pages: pages
  };
};
module.exports = {
  is_disambig: is_disambig,
  parse_disambig: parse_disambig
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var languages = __webpack_require__(14);
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// templates that need parsing and replacing for inline text
//https://en.wikipedia.org/wiki/Category:Magic_word_templates
var word_templates = function word_templates(wiki) {
  //we can be sneaky with this template, as it's often found inside other templates
  wiki = wiki.replace(/\{\{URL\|([^ ]{4,100}?)\}\}/gi, '$1');
  //this one needs to be handled manually
  wiki = wiki.replace(/\{\{convert\|([0-9]*?)\|([^\|]*?)\}\}/gi, '$1 $2'); //TODO: support https://en.wikipedia.org/wiki/Template:Convert#Ranges_of_values
  //date-time templates
  var d = new Date();
  wiki = wiki.replace(/\{\{(CURRENT|LOCAL)DAY(2)?\}\}/gi, d.getDate());
  wiki = wiki.replace(/\{\{(CURRENT|LOCAL)MONTH(NAME|ABBREV)?\}\}/gi, months[d.getMonth()]);
  wiki = wiki.replace(/\{\{(CURRENT|LOCAL)YEAR\}\}/gi, d.getFullYear());
  wiki = wiki.replace(/\{\{(CURRENT|LOCAL)DAYNAME\}\}/gi, days[d.getDay()]);
  //formatting templates
  wiki = wiki.replace(/\{\{(lc|uc|formatnum):(.*?)\}\}/gi, '$2');
  wiki = wiki.replace(/\{\{pull quote\|([\s\S]*?)(\|[\s\S]*?)?\}\}/gi, '$1');
  wiki = wiki.replace(/\{\{cquote\|([\s\S]*?)(\|[\s\S]*?)?\}\}/gi, '$1');

  //font-size
  wiki = wiki.replace(/\{\{(small|smaller|midsize|larger|big|bigger|large|huge|resize)\|([\s\S]*?)\}\}/gi, '$2');
  //{{font|size=x%|text}}

  if (wiki.match(/\{\{dts\|/)) {
    var date = (wiki.match(/\{\{dts\|(.*?)[\}\|]/) || [])[1] || '';
    date = new Date(date);
    if (date && date.getTime()) {
      wiki = wiki.replace(/\{\{dts\|.*?\}\}/gi, date.toDateString());
    } else {
      wiki = wiki.replace(/\{\{dts\|.*?\}\}/gi, ' ');
    }
  }
  if (wiki.match(/\{\{date\|.*?\}\}/)) {
    var _date = wiki.match(/\{\{date\|(.*?)\|(.*?)\|(.*?)\}\}/) || [] || [];
    var dateString = _date[1] + ' ' + _date[2] + ' ' + _date[3];
    wiki = wiki.replace(/\{\{date\|.*?\}\}/gi, dateString);
  }
  //common templates in wiktionary
  wiki = wiki.replace(/\{\{term\|(.*?)\|.*?\}\}/gi, "'$1'");
  wiki = wiki.replace(/\{\{IPA\|(.*?)\|.*?\}\}/gi, '$1');
  wiki = wiki.replace(/\{\{sense\|(.*?)\|?.*?\}\}/gi, '($1)');
  wiki = wiki.replace(/\{\{t\+?\|...?\|(.*?)(\|.*)?\}\}/gi, "'$1'");
  //replace languages in 'etyl' tags
  if (wiki.match(/\{\{etyl\|/)) {
    //doesn't support multiple-ones per sentence..
    var lang = wiki.match(/\{\{etyl\|(.*?)\|.*?\}\}/i)[1] || '';
    lang = lang.toLowerCase();
    if (lang && languages[lang]) {
      wiki = wiki.replace(/\{\{etyl\|(.*?)\|.*?\}\}/gi, languages[lang].english_title);
    } else {
      wiki = wiki.replace(/\{\{etyl\|(.*?)\|.*?\}\}/gi, '($1)');
    }
  }
  return wiki;
};
// console.log(word_templates("hello {{CURRENTDAY}} world"))
// console.log(word_templates("hello {{CURRENTMONTH}} world"))
// console.log(word_templates("hello {{CURRENTYEAR}} world"))
// console.log(word_templates("hello {{LOCALDAYNAME}} world"))
// console.log(word_templates("hello {{lc:88}} world"))
// console.log(word_templates("hello {{pull quote|Life is like\n|author=[[asdf]]}} world"))
// console.log(word_templates("hi {{etyl|la|-}} there"))
// console.log(word_templates("{{etyl|la|-}} cognate with {{etyl|is|-}} {{term|hugga||to comfort|lang=is}},"))

module.exports = word_templates;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var kill_xml = __webpack_require__(51);

function cleanup_misc(wiki) {
  //the dump requires us to unescape xml
  //remove comments
  wiki = wiki.replace(/<!--[^>]{0,2000}-->/g, '');
  wiki = wiki.replace(/__(NOTOC|NOEDITSECTION|FORCETOC|TOC)__/gi, '');
  //signitures
  wiki = wiki.replace(/~~{1,3}/, '');
  //horizontal rule
  wiki = wiki.replace(/--{1,3}/, '');
  //space
  wiki = wiki.replace(/&nbsp;/g, ' ');
  //kill off interwiki links
  wiki = wiki.replace(/\[\[([a-z][a-z]|simple|war|ceb|min):.{2,60}\]\]/i, '');
  //bold and italics combined
  wiki = wiki.replace(/''{4}([^']{0,200})''{4}/g, '$1');
  //bold
  wiki = wiki.replace(/''{2}([^']{0,200})''{2}/g, '$1');
  //italic
  wiki = wiki.replace(/''([^']{0,200})''/g, '$1');
  //give it the inglorious send-off it deserves..
  wiki = kill_xml(wiki);

  return wiki;
}
module.exports = cleanup_misc;
// console.log(cleanup_misc("hi [[as:Plancton]] there"));
// console.log(cleanup_misc('hello <br/> world'))
// console.log(cleanup_misc("hello <asd f> world </h2>"))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//okay, i know you're not supposed to regex html, but...
//https://en.wikipedia.org/wiki/Help:HTML_in_wikitext

var kill_xml = function kill_xml(wiki) {
  //luckily, refs can't be recursive..
  wiki = wiki.replace(/ ?<ref>[\s\S]{0,750}?<\/ref> ?/gi, ' '); // <ref></ref>
  wiki = wiki.replace(/ ?<ref [^>]{0,200}?\/> ?/gi, ' '); // <ref name=""/>
  wiki = wiki.replace(/ ?<ref [^>]{0,200}?>[\s\S]{0,500}?<\/ref> ?/gi, ' '); // <ref name=""></ref>
  //other types of xml that we want to trash completely

  wiki = wiki.replace(/< ?(table|code|score|data|categorytree|charinsert|gallery|hiero|imagemap|inputbox|math|nowiki|poem|references|source|syntaxhighlight|timeline) ?[^>]{0,200}?>[\s\S]{0,700}< ?\/ ?(table|code|score|data|categorytree|charinsert|gallery|hiero|imagemap|inputbox|math|nowiki|poem|references|source|syntaxhighlight|timeline) ?>/gi, ' '); // <table name=""><tr>hi</tr></table>

  //some xml-like fragments we can also kill
  //
  wiki = wiki.replace(/ ?< ?(ref|span|div|table|data) [a-z0-9=" ]{2,20}\/ ?> ?/g, ' '); //<ref name="asd"/>
  //some formatting xml, we'll keep their insides though
  wiki = wiki.replace(/ ?<[ \/]?(p|sub|sup|span|nowiki|div|table|br|tr|td|th|pre|pre2|hr)[ \/]?> ?/g, ' '); //<sub>, </sub>
  wiki = wiki.replace(/ ?<[ \/]?(abbr|bdi|bdo|blockquote|cite|del|dfn|em|i|ins|kbd|mark|q|s)[ \/]?> ?/g, ' '); //<abbr>, </abbr>
  wiki = wiki.replace(/ ?<[ \/]?h[0-9][ \/]?> ?/g, ' '); //<h2>, </h2>
  //a more generic + dangerous xml-tag removal
  wiki = wiki.replace(/ ?<[ \/]?[a-z0-9]{1,8}[ \/]?> ?/g, ' '); //<samp>
  wiki = wiki.replace(/ ?< ?br ?\/> ?/g, ' '); //<br />
  return wiki.trim();
};
// console.log(kill_xml("hello <ref>nono!</ref> world1. hello <ref name='hullo'>nono!</ref> world2. hello <ref name='hullo'/>world3.  hello <table name=''><tr><td>hi<ref>nono!</ref></td></tr></table>world4. hello<ref name=''/> world5 <ref name=''>nono</ref>, man.}}"))
// console.log(kill_xml("hello <table name=''><tr><td>hi<ref>nono!</ref></td></tr></table>world4"))
// console.log(kill_xml('hello<ref name="theroyal"/> world <ref>nono</ref>, man}}'))
// console.log(kill_xml("hello<ref name=\"theroyal\"/> world5, <ref name=\"\">nono</ref> man"));
// console.log(kill_xml("hello <asd f> world </h2>"))
// console.log(kill_xml("North America,<ref name=\"fhwa\"> and one of"))
// console.log(kill_xml("North America,<br /> and one of"))
module.exports = kill_xml;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var helpers = __webpack_require__(2);
var parse_line = __webpack_require__(3);

var table_reg = /\{\|[\s\S]{1,8000}?\|\}/g;

var parseHeading = function parseHeading(str) {
  str = str.replace(/^\! +/, "");
  if (str.match(/\|/)) {
    str = str.replace(/.+\| ?/, ""); //class="unsortable"|title
  }
  str = parse_line(str).text;
  return str;
};

//turn a {|...table string into an array of arrays
var parse_table = function parse_table(wiki) {
  var table = [];
  var headings = [];
  var lines = wiki.replace(/\r/g, "").split(/\n/);

  //find headings first
  for (var i = 0; i < lines.length; i++) {
    var str = lines[i];
    //header
    if (str.match(/^\!/)) {
      str = parseHeading(str);
      if (!str) {
        str = "col-" + headings.length;
      }
      headings.push(str);
    } else if (str.match(/^\| /)) {
      break;
    }
  }

  lines.forEach(function (str) {
    //die here
    if (str.match(/^\|\}/)) {
      return;
    }
    //make new row
    if (str.match(/^\|-/)) {
      table.push([]);
      return;
    }
    //this is some kind of comment
    if (str.match(/^\|\+/)) {
      return;
    }
    //header
    if (str.match(/^\!/)) {
      return;
    }
    //juicy line
    if (str.match(/^\|/)) {
      //make a new row
      if (!table[table.length - 1]) {
        table[table.length - 1] = [];
      }
      var want = (str.match(/\|(.*)/) || [])[1] || "";
      want = helpers.trim_whitespace(want) || "";
      //handle the || shorthand..
      if (want.match(/[!\|]{2}/)) {
        want.split(/[!\|]{2}/g).forEach(function (s) {
          s = helpers.trim_whitespace(s);
          table[table.length - 1].push(s);
        });
      } else {
        table[table.length - 1].push(want);
      }
    }
  });
  //remove top one, if it's empty
  if (table[0] && Object.keys(table[0]).length === 0) {
    table.shift();
  }
  //index them by their header
  table = table.map(function (arr) {
    var obj = {};
    arr.forEach(function (a, i) {
      var head = headings[i] || "col-" + i;
      obj[head] = parse_line(a);
    });
    return obj;
  });
  return table;
};

var findTables = function findTables(r, wiki) {
  r.tables = wiki.match(table_reg, "") || [];
  r.tables = r.tables.map(function (str) {
    return parse_table(str);
  });
  //remove tables
  wiki = wiki.replace(table_reg, "");
  return wiki;
};
module.exports = findTables;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var i18n = __webpack_require__(1);
var cat_reg = new RegExp('\\[\\[:?(' + i18n.categories.join('|') + '):(.{2,60}?)]](w{0,10})', 'ig');
var cat_remove_reg = new RegExp('^\\[\\[:?(' + i18n.categories.join('|') + '):', 'ig');

var parse_categories = function parse_categories(r, wiki) {
  r.categories = [];
  var tmp = wiki.match(cat_reg); //regular links
  if (tmp) {
    tmp.forEach(function (c) {
      c = c.replace(cat_remove_reg, '');
      c = c.replace(/\|?[ \*]?\]\]$/i, ''); //parse fancy onces..
      c = c.replace(/\|.*/, ''); //everything after the '|' is metadata
      if (c && !c.match(/[\[\]]/)) {
        r.categories.push(c);
      }
    });
  }
  return wiki;
};
module.exports = parse_categories;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var i18n = __webpack_require__(1);
var languages = __webpack_require__(14);
var find_recursive = __webpack_require__(55);

var parse_infobox = __webpack_require__(56);
var parse_infobox_template = __webpack_require__(57);
var parse_image = __webpack_require__(58);

var infobox_reg = new RegExp('{{(' + i18n.infoboxes.join('|') + ')[: \n]', 'ig');
var fileRegex = new RegExp('\\[\\[(' + i18n.images.concat(i18n.files).join('|') + ')', 'i');
var img_regex = new RegExp('^(' + i18n.images.concat(i18n.files).join('|') + ')', 'i');
var noWrap_reg = /^\{\{nowrap\|(.*?)\}\}$/;

//reduce the scary recursive situations
var parse_recursive = function parse_recursive(r, wiki) {
  //remove {{template {{}} }} recursions
  var matches = find_recursive('{', '}', wiki);
  matches.forEach(function (s) {
    if (s.match(infobox_reg, 'ig') && Object.keys(r.infobox).length === 0) {
      r.infobox = parse_infobox(s);
      r.infobox_template = parse_infobox_template(s);
    }
    if (s.match(infobox_reg)) {
      wiki = wiki.replace(s, '');
    }
    //rest of them...
    if (s.match(/^\{\{/)) {
      //support nowrap
      var nowrap = s.match(noWrap_reg);
      if (nowrap) {
        wiki = wiki.replace(s, nowrap[1]);
        return;
      }
      //if it's not a known template, but it's recursive, remove it
      //(because it will be misread later-on)
      wiki = wiki.replace(s, '');
    }
  });

  //second, remove [[file:...[[]] ]] recursions
  matches = find_recursive('[', ']', wiki);
  matches.forEach(function (s) {
    if (s.match(fileRegex)) {
      r.images.push(parse_image(s));
      wiki = wiki.replace(s, '');
    }
  });

  //third, wiktionary-style interlanguage links
  matches.forEach(function (s) {
    if (s.match(/\[\[([a-z][a-z]):(.*?)\]\]/i) !== null) {
      var lang = s.match(/\[\[([a-z][a-z]):/i)[1];
      if (lang && languages[lang]) {
        r.translations[lang] = s.match(/\[\[([a-z][a-z]):(.*?)\]\]/i)[2];
      }
      wiki = wiki.replace(s, '');
    }
  });

  //add additional image from infobox, if applicable
  if (r.infobox['image'] && r.infobox['image'].text) {
    var img = r.infobox['image'].text || '';
    if (typeof img === 'string' && !img.match(img_regex)) {
      img = 'File:' + img;
    }
    r.images.push(img);
  }

  return wiki;
};

module.exports = parse_recursive;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//find all the pairs of '[[...[[..]]...]]' in the text
//used to properly root out recursive template calls, [[.. [[...]] ]]
//basically just adds open tags, and subtracts closing tags
function find_recursive(opener, closer, text) {
  var out = [];
  var last = [];
  var chars = text.split('');
  var open = 0;
  for (var i = 0; i < chars.length; i++) {
    //incriment open tag
    if (chars[i] === opener) {
      open += 1;
    }
    //decrement close tag
    if (chars[i] === closer) {
      open -= 1;
      if (open < 0) {
        open = 0;
      }
    }
    if (open >= 0) {
      last.push(chars[i]);
    }
    if (open === 0 && last.length > 0) {
      //first, fix botched parse
      var open_count = last.filter(function (s) {
        return s === opener;
      });
      var close_count = last.filter(function (s) {
        return s === closer;
      });
      //is it botched?
      if (open_count.length > close_count.length) {
        last.push(closer);
      }
      //looks good, keep it
      out.push(last.join(''));
      last = [];
    }
  }
  return out;
}
module.exports = find_recursive;

// console.log(find_recursive('{', '}', 'he is president. {{nowrap|{{small|(1995–present)}}}} he lives in texas'));
// console.log(find_recursive("{", "}", "this is fun {{nowrap{{small1995–present}}}} and it works"))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var helpers = __webpack_require__(2);
var parse_line = __webpack_require__(3);

var line_reg = /\n *\|([^=]*)=(.*)/g;

var parse_infobox = function parse_infobox(str) {
  if (!str) {
    return {};
  }
  var obj = {};
  var stringBuilder = [];
  var lastChar = void 0;
  //this collapsible list stuff is just a headache
  str = str.replace(/\{\{Collapsible list[^}]{10,1000}\}\}/g, '');

  var parDepth = -2; // first two {{
  for (var i = 0, len = str.length; i < len; i++) {
    if (parDepth === 0 && str[i] === '|' && lastChar !== '\n') {
      stringBuilder.push('\n');
    }
    if (str[i] === '{' || str[i] === '[') {
      parDepth++;
    } else if (str[i] === '}' || str[i] === ']') {
      parDepth--;
    }
    lastChar = str[i];
    stringBuilder.push(lastChar);
  }

  str = stringBuilder.join('');

  var regexMatch = void 0;
  while ((regexMatch = line_reg.exec(str)) !== null) {
    var key = helpers.trim_whitespace(regexMatch[1] || '') || '';
    var value = helpers.trim_whitespace(regexMatch[2] || '') || '';

    //this is necessary for mongodb, im sorry
    if (key && key.match(/[\.]/)) {
      key = null;
    }

    if (key && value) {
      obj[key] = parse_line(value);
      //turn number strings into integers
      if (obj[key].text && obj[key].text.match(/^[0-9,]*$/)) {
        obj[key].text = obj[key].text.replace(/,/, '');
        obj[key].text = parseInt(obj[key].text, 10);
      }
    }
  }
  return obj;
};
module.exports = parse_infobox;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var i18n = __webpack_require__(1);
var infobox_template_reg = new RegExp('{{(?:' + i18n.infoboxes.join('|') + ')\\s*(.*)', 'i');

function parse_infobox_template(str) {
  var template = '';
  if (str) {
    var matches = str.match(infobox_template_reg);
    if (matches && matches.length > 1) {
      template = matches[1];
    }
  }
  return template;
}
module.exports = parse_infobox_template;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var i18n = __webpack_require__(1);
var make_image = __webpack_require__(59);
var file_reg = new RegExp('(' + i18n.images.concat(i18n.files).join('|') + '):.*?[\\|\\]]', 'i');
//images are usually [[image:my_pic.jpg]]

var parse_image = function parse_image(img) {
  img = img.match(file_reg) || [''];
  img = img[0].replace(/[\|\]]$/, '');
  //add url, etc to image
  img = make_image(img);
  return img;
};
module.exports = parse_image;

// console.log(parse_image("[[image:my_pic.jpg]]"));

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Hashes = __webpack_require__(60);
//the wikimedia image url is a little silly:
//https://commons.wikimedia.org/wiki/Commons:FAQ#What_are_the_strangely_named_components_in_file_paths.3F

var make_image = function make_image(file) {
  var title = file.replace(/^(image|file?)\:/i, '');
  //titlecase it
  title = title.charAt(0).toUpperCase() + title.substring(1);
  //spaces to underscores
  title = title.replace(/ /g, '_');

  var hash = new Hashes.MD5().hex(title);
  var path = hash.substr(0, 1) + '/' + hash.substr(0, 2) + '/';
  title = encodeURIComponent(title);
  path += title;
  var server = 'https://upload.wikimedia.org/wikipedia/commons/';
  var thumb = '/300px-' + title;
  return {
    url: server + path,
    file: file,
    thumb: server + 'thumb/' + path + thumb
  };
};

module.exports = make_image;

// console.log(make_image('Spelterini_Blüemlisalp.jpg'));
// console.log(make_image('Charlatans.jpg'));
// make_image('File:Abingdonschool.jpg');
//1e44ecfe85c6446438da2a01a2bf9e4c

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * jshashes - https://github.com/h2non/jshashes
 * Released under the "New BSD" license
 *
 * Algorithms specification:
 *
 * MD5 - http://www.ietf.org/rfc/rfc1321.txt
 * RIPEMD-160 - http://homes.esat.kuleuven.be/~bosselae/ripemd160.html
 * SHA1   - http://csrc.nist.gov/publications/fips/fips180-4/fips-180-4.pdf
 * SHA256 - http://csrc.nist.gov/publications/fips/fips180-4/fips-180-4.pdf
 * SHA512 - http://csrc.nist.gov/publications/fips/fips180-4/fips-180-4.pdf
 * HMAC - http://www.ietf.org/rfc/rfc2104.txt
 */
(function () {
  var Hashes;

  function utf8Encode(str) {
    var x,
        y,
        output = '',
        i = -1,
        l;

    if (str && str.length) {
      l = str.length;
      while ((i += 1) < l) {
        /* Decode utf-16 surrogate pairs */
        x = str.charCodeAt(i);
        y = i + 1 < l ? str.charCodeAt(i + 1) : 0;
        if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
          x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
          i += 1;
        }
        /* Encode output as utf-8 */
        if (x <= 0x7F) {
          output += String.fromCharCode(x);
        } else if (x <= 0x7FF) {
          output += String.fromCharCode(0xC0 | x >>> 6 & 0x1F, 0x80 | x & 0x3F);
        } else if (x <= 0xFFFF) {
          output += String.fromCharCode(0xE0 | x >>> 12 & 0x0F, 0x80 | x >>> 6 & 0x3F, 0x80 | x & 0x3F);
        } else if (x <= 0x1FFFFF) {
          output += String.fromCharCode(0xF0 | x >>> 18 & 0x07, 0x80 | x >>> 12 & 0x3F, 0x80 | x >>> 6 & 0x3F, 0x80 | x & 0x3F);
        }
      }
    }
    return output;
  }

  function utf8Decode(str) {
    var i,
        ac,
        c1,
        c2,
        c3,
        arr = [],
        l;
    i = ac = c1 = c2 = c3 = 0;

    if (str && str.length) {
      l = str.length;
      str += '';

      while (i < l) {
        c1 = str.charCodeAt(i);
        ac += 1;
        if (c1 < 128) {
          arr[ac] = String.fromCharCode(c1);
          i += 1;
        } else if (c1 > 191 && c1 < 224) {
          c2 = str.charCodeAt(i + 1);
          arr[ac] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
          i += 2;
        } else {
          c2 = str.charCodeAt(i + 1);
          c3 = str.charCodeAt(i + 2);
          arr[ac] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          i += 3;
        }
      }
    }
    return arr.join('');
  }

  /**
   * Add integers, wrapping at 2^32. This uses 16-bit operations internally
   * to work around bugs in some JS interpreters.
   */

  function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF),
        msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xFFFF;
  }

  /**
   * Bitwise rotate a 32-bit number to the left.
   */

  function bit_rol(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  }

  /**
   * Convert a raw string to a hex string
   */

  function rstr2hex(input, hexcase) {
    var hex_tab = hexcase ? '0123456789ABCDEF' : '0123456789abcdef',
        output = '',
        x,
        i = 0,
        l = input.length;
    for (; i < l; i += 1) {
      x = input.charCodeAt(i);
      output += hex_tab.charAt(x >>> 4 & 0x0F) + hex_tab.charAt(x & 0x0F);
    }
    return output;
  }

  /**
   * Encode a string as utf-16
   */

  function str2rstr_utf16le(input) {
    var i,
        l = input.length,
        output = '';
    for (i = 0; i < l; i += 1) {
      output += String.fromCharCode(input.charCodeAt(i) & 0xFF, input.charCodeAt(i) >>> 8 & 0xFF);
    }
    return output;
  }

  function str2rstr_utf16be(input) {
    var i,
        l = input.length,
        output = '';
    for (i = 0; i < l; i += 1) {
      output += String.fromCharCode(input.charCodeAt(i) >>> 8 & 0xFF, input.charCodeAt(i) & 0xFF);
    }
    return output;
  }

  /**
   * Convert an array of big-endian words to a string
   */

  function binb2rstr(input) {
    var i,
        l = input.length * 32,
        output = '';
    for (i = 0; i < l; i += 8) {
      output += String.fromCharCode(input[i >> 5] >>> 24 - i % 32 & 0xFF);
    }
    return output;
  }

  /**
   * Convert an array of little-endian words to a string
   */

  function binl2rstr(input) {
    var i,
        l = input.length * 32,
        output = '';
    for (i = 0; i < l; i += 8) {
      output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xFF);
    }
    return output;
  }

  /**
   * Convert a raw string to an array of little-endian words
   * Characters >255 have their high-byte silently ignored.
   */

  function rstr2binl(input) {
    var i,
        l = input.length * 8,
        output = Array(input.length >> 2),
        lo = output.length;
    for (i = 0; i < lo; i += 1) {
      output[i] = 0;
    }
    for (i = 0; i < l; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << i % 32;
    }
    return output;
  }

  /**
   * Convert a raw string to an array of big-endian words
   * Characters >255 have their high-byte silently ignored.
   */

  function rstr2binb(input) {
    var i,
        l = input.length * 8,
        output = Array(input.length >> 2),
        lo = output.length;
    for (i = 0; i < lo; i += 1) {
      output[i] = 0;
    }
    for (i = 0; i < l; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << 24 - i % 32;
    }
    return output;
  }

  /**
   * Convert a raw string to an arbitrary string encoding
   */

  function rstr2any(input, encoding) {
    var divisor = encoding.length,
        remainders = Array(),
        i,
        q,
        x,
        ld,
        quotient,
        dividend,
        output,
        full_length;

    /* Convert to an array of 16-bit big-endian values, forming the dividend */
    dividend = Array(Math.ceil(input.length / 2));
    ld = dividend.length;
    for (i = 0; i < ld; i += 1) {
      dividend[i] = input.charCodeAt(i * 2) << 8 | input.charCodeAt(i * 2 + 1);
    }

    /**
     * Repeatedly perform a long division. The binary array forms the dividend,
     * the length of the encoding is the divisor. Once computed, the quotient
     * forms the dividend for the next step. We stop when the dividend is zerHashes.
     * All remainders are stored for later use.
     */
    while (dividend.length > 0) {
      quotient = Array();
      x = 0;
      for (i = 0; i < dividend.length; i += 1) {
        x = (x << 16) + dividend[i];
        q = Math.floor(x / divisor);
        x -= q * divisor;
        if (quotient.length > 0 || q > 0) {
          quotient[quotient.length] = q;
        }
      }
      remainders[remainders.length] = x;
      dividend = quotient;
    }

    /* Convert the remainders to the output string */
    output = '';
    for (i = remainders.length - 1; i >= 0; i--) {
      output += encoding.charAt(remainders[i]);
    }

    /* Append leading zero equivalents */
    full_length = Math.ceil(input.length * 8 / (Math.log(encoding.length) / Math.log(2)));
    for (i = output.length; i < full_length; i += 1) {
      output = encoding[0] + output;
    }
    return output;
  }

  /**
   * Convert a raw string to a base-64 string
   */

  function rstr2b64(input, b64pad) {
    var tab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        output = '',
        len = input.length,
        i,
        j,
        triplet;
    b64pad = b64pad || '=';
    for (i = 0; i < len; i += 3) {
      triplet = input.charCodeAt(i) << 16 | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
      for (j = 0; j < 4; j += 1) {
        if (i * 8 + j * 6 > input.length * 8) {
          output += b64pad;
        } else {
          output += tab.charAt(triplet >>> 6 * (3 - j) & 0x3F);
        }
      }
    }
    return output;
  }

  Hashes = {
    /**
     * @property {String} version
     * @readonly
     */
    VERSION: '1.0.6',
    /**
     * @member Hashes
     * @class Base64
     * @constructor
     */
    Base64: function Base64() {
      // private properties
      var tab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          pad = '=',
          // default pad according with the RFC standard
      url = false,
          // URL encoding support @todo
      utf8 = true; // by default enable UTF-8 support encoding

      // public method for encoding
      this.encode = function (input) {
        var i,
            j,
            triplet,
            output = '',
            len = input.length;

        pad = pad || '=';
        input = utf8 ? utf8Encode(input) : input;

        for (i = 0; i < len; i += 3) {
          triplet = input.charCodeAt(i) << 16 | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
          for (j = 0; j < 4; j += 1) {
            if (i * 8 + j * 6 > len * 8) {
              output += pad;
            } else {
              output += tab.charAt(triplet >>> 6 * (3 - j) & 0x3F);
            }
          }
        }
        return output;
      };

      // public method for decoding
      this.decode = function (input) {
        // var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var i,
            o1,
            o2,
            o3,
            h1,
            h2,
            h3,
            h4,
            bits,
            ac,
            dec = '',
            arr = [];
        if (!input) {
          return input;
        }

        i = ac = 0;
        input = input.replace(new RegExp('\\' + pad, 'gi'), ''); // use '='
        //input += '';

        do {
          // unpack four hexets into three octets using index points in b64
          h1 = tab.indexOf(input.charAt(i += 1));
          h2 = tab.indexOf(input.charAt(i += 1));
          h3 = tab.indexOf(input.charAt(i += 1));
          h4 = tab.indexOf(input.charAt(i += 1));

          bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

          o1 = bits >> 16 & 0xff;
          o2 = bits >> 8 & 0xff;
          o3 = bits & 0xff;
          ac += 1;

          if (h3 === 64) {
            arr[ac] = String.fromCharCode(o1);
          } else if (h4 === 64) {
            arr[ac] = String.fromCharCode(o1, o2);
          } else {
            arr[ac] = String.fromCharCode(o1, o2, o3);
          }
        } while (i < input.length);

        dec = arr.join('');
        dec = utf8 ? utf8Decode(dec) : dec;

        return dec;
      };

      // set custom pad string
      this.setPad = function (str) {
        pad = str || pad;
        return this;
      };
      // set custom tab string characters
      this.setTab = function (str) {
        tab = str || tab;
        return this;
      };
      this.setUTF8 = function (bool) {
        if (typeof bool === 'boolean') {
          utf8 = bool;
        }
        return this;
      };
    },

    /**
     * CRC-32 calculation
     * @member Hashes
     * @method CRC32
     * @static
     * @param {String} str Input String
     * @return {String}
     */
    CRC32: function CRC32(str) {
      var crc = 0,
          x = 0,
          y = 0,
          table,
          i,
          iTop;
      str = utf8Encode(str);

      table = ['00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 ', '79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 ', '84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F ', '63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD ', 'A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC ', '51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 ', 'B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 ', '06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 ', 'E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 ', '12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 ', 'D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 ', '33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 ', 'CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 ', '9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E ', '7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D ', '806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 ', '60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA ', 'AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 ', '5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 ', 'B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 ', '05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 ', 'F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA ', '11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 ', 'D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F ', '30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E ', 'C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D'].join('');

      crc = crc ^ -1;
      for (i = 0, iTop = str.length; i < iTop; i += 1) {
        y = (crc ^ str.charCodeAt(i)) & 0xFF;
        x = '0x' + table.substr(y * 9, 8);
        crc = crc >>> 8 ^ x;
      }
      // always return a positive number (that's what >>> 0 does)
      return (crc ^ -1) >>> 0;
    },
    /**
     * @member Hashes
     * @class MD5
     * @constructor
     * @param {Object} [config]
     *
     * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
     * Digest Algorithm, as defined in RFC 1321.
     * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
     * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     * See <http://pajhome.org.uk/crypt/md5> for more infHashes.
     */
    MD5: function MD5(options) {
      /**
       * Private config properties. You may need to tweak these to be compatible with
       * the server-side, but the defaults work in most cases.
       * See {@link Hashes.MD5#method-setUpperCase} and {@link Hashes.SHA1#method-setUpperCase}
       */
      var hexcase = options && typeof options.uppercase === 'boolean' ? options.uppercase : false,
          // hexadecimal output case format. false - lowercase; true - uppercase
      b64pad = options && typeof options.pad === 'string' ? options.pad : '=',
          // base-64 pad character. Defaults to '=' for strict RFC compliance
      utf8 = options && typeof options.utf8 === 'boolean' ? options.utf8 : true; // enable/disable utf8 encoding

      // privileged (public) methods
      this.hex = function (s) {
        return rstr2hex(rstr(s, utf8), hexcase);
      };
      this.b64 = function (s) {
        return rstr2b64(rstr(s), b64pad);
      };
      this.any = function (s, e) {
        return rstr2any(rstr(s, utf8), e);
      };
      this.raw = function (s) {
        return rstr(s, utf8);
      };
      this.hex_hmac = function (k, d) {
        return rstr2hex(rstr_hmac(k, d), hexcase);
      };
      this.b64_hmac = function (k, d) {
        return rstr2b64(rstr_hmac(k, d), b64pad);
      };
      this.any_hmac = function (k, d, e) {
        return rstr2any(rstr_hmac(k, d), e);
      };
      /**
       * Perform a simple self-test to see if the VM is working
       * @return {String} Hexadecimal hash sample
       */
      this.vm_test = function () {
        return hex('abc').toLowerCase() === '900150983cd24fb0d6963f7d28e17f72';
      };
      /**
       * Enable/disable uppercase hexadecimal returned string
       * @param {Boolean}
       * @return {Object} this
       */
      this.setUpperCase = function (a) {
        if (typeof a === 'boolean') {
          hexcase = a;
        }
        return this;
      };
      /**
       * Defines a base64 pad string
       * @param {String} Pad
       * @return {Object} this
       */
      this.setPad = function (a) {
        b64pad = a || b64pad;
        return this;
      };
      /**
       * Defines a base64 pad string
       * @param {Boolean}
       * @return {Object} [this]
       */
      this.setUTF8 = function (a) {
        if (typeof a === 'boolean') {
          utf8 = a;
        }
        return this;
      };

      // private methods

      /**
       * Calculate the MD5 of a raw string
       */

      function rstr(s) {
        s = utf8 ? utf8Encode(s) : s;
        return binl2rstr(binl(rstr2binl(s), s.length * 8));
      }

      /**
       * Calculate the HMAC-MD5, of a key and some data (raw strings)
       */

      function rstr_hmac(key, data) {
        var bkey, ipad, opad, hash, i;

        key = utf8 ? utf8Encode(key) : key;
        data = utf8 ? utf8Encode(data) : data;
        bkey = rstr2binl(key);
        if (bkey.length > 16) {
          bkey = binl(bkey, key.length * 8);
        }

        ipad = Array(16), opad = Array(16);
        for (i = 0; i < 16; i += 1) {
          ipad[i] = bkey[i] ^ 0x36363636;
          opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        hash = binl(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
        return binl2rstr(binl(opad.concat(hash), 512 + 128));
      }

      /**
       * Calculate the MD5 of an array of little-endian words, and a bit length.
       */

      function binl(x, len) {
        var i,
            olda,
            oldb,
            oldc,
            oldd,
            a = 1732584193,
            b = -271733879,
            c = -1732584194,
            d = 271733878;

        /* append padding */
        x[len >> 5] |= 0x80 << len % 32;
        x[(len + 64 >>> 9 << 4) + 14] = len;

        for (i = 0; i < x.length; i += 16) {
          olda = a;
          oldb = b;
          oldc = c;
          oldd = d;

          a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
          d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
          c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
          b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
          a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
          d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
          c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
          b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
          a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
          d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
          c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
          b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
          a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
          d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
          c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
          b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

          a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
          d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
          c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
          b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
          a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
          d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
          c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
          b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
          a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
          d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
          c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
          b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
          a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
          d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
          c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
          b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

          a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
          d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
          c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
          b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
          a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
          d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
          c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
          b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
          a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
          d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
          c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
          b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
          a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
          d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
          c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
          b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

          a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
          d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
          c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
          b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
          a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
          d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
          c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
          b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
          a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
          d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
          c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
          b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
          a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
          d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
          c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
          b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

          a = safe_add(a, olda);
          b = safe_add(b, oldb);
          c = safe_add(c, oldc);
          d = safe_add(d, oldd);
        }
        return Array(a, b, c, d);
      }

      /**
       * These functions implement the four basic operations the algorithm uses.
       */

      function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
      }

      function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn(b & c | ~b & d, a, b, x, s, t);
      }

      function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn(b & d | c & ~d, a, b, x, s, t);
      }

      function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
      }

      function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
      }
    },
    /**
     * @member Hashes
     * @class Hashes.SHA1
     * @param {Object} [config]
     * @constructor
     *
     * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined in FIPS 180-1
     * Version 2.2 Copyright Paul Johnston 2000 - 2009.
     * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     * See http://pajhome.org.uk/crypt/md5 for details.
     */
    SHA1: function SHA1(options) {
      /**
       * Private config properties. You may need to tweak these to be compatible with
       * the server-side, but the defaults work in most cases.
       * See {@link Hashes.MD5#method-setUpperCase} and {@link Hashes.SHA1#method-setUpperCase}
       */
      var hexcase = options && typeof options.uppercase === 'boolean' ? options.uppercase : false,
          // hexadecimal output case format. false - lowercase; true - uppercase
      b64pad = options && typeof options.pad === 'string' ? options.pad : '=',
          // base-64 pad character. Defaults to '=' for strict RFC compliance
      utf8 = options && typeof options.utf8 === 'boolean' ? options.utf8 : true; // enable/disable utf8 encoding

      // public methods
      this.hex = function (s) {
        return rstr2hex(rstr(s, utf8), hexcase);
      };
      this.b64 = function (s) {
        return rstr2b64(rstr(s, utf8), b64pad);
      };
      this.any = function (s, e) {
        return rstr2any(rstr(s, utf8), e);
      };
      this.raw = function (s) {
        return rstr(s, utf8);
      };
      this.hex_hmac = function (k, d) {
        return rstr2hex(rstr_hmac(k, d));
      };
      this.b64_hmac = function (k, d) {
        return rstr2b64(rstr_hmac(k, d), b64pad);
      };
      this.any_hmac = function (k, d, e) {
        return rstr2any(rstr_hmac(k, d), e);
      };
      /**
       * Perform a simple self-test to see if the VM is working
       * @return {String} Hexadecimal hash sample
       * @public
       */
      this.vm_test = function () {
        return hex('abc').toLowerCase() === '900150983cd24fb0d6963f7d28e17f72';
      };
      /**
       * @description Enable/disable uppercase hexadecimal returned string
       * @param {boolean}
       * @return {Object} this
       * @public
       */
      this.setUpperCase = function (a) {
        if (typeof a === 'boolean') {
          hexcase = a;
        }
        return this;
      };
      /**
       * @description Defines a base64 pad string
       * @param {string} Pad
       * @return {Object} this
       * @public
       */
      this.setPad = function (a) {
        b64pad = a || b64pad;
        return this;
      };
      /**
       * @description Defines a base64 pad string
       * @param {boolean}
       * @return {Object} this
       * @public
       */
      this.setUTF8 = function (a) {
        if (typeof a === 'boolean') {
          utf8 = a;
        }
        return this;
      };

      // private methods

      /**
       * Calculate the SHA-512 of a raw string
       */

      function rstr(s) {
        s = utf8 ? utf8Encode(s) : s;
        return binb2rstr(binb(rstr2binb(s), s.length * 8));
      }

      /**
       * Calculate the HMAC-SHA1 of a key and some data (raw strings)
       */

      function rstr_hmac(key, data) {
        var bkey, ipad, opad, i, hash;
        key = utf8 ? utf8Encode(key) : key;
        data = utf8 ? utf8Encode(data) : data;
        bkey = rstr2binb(key);

        if (bkey.length > 16) {
          bkey = binb(bkey, key.length * 8);
        }
        ipad = Array(16), opad = Array(16);
        for (i = 0; i < 16; i += 1) {
          ipad[i] = bkey[i] ^ 0x36363636;
          opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        hash = binb(ipad.concat(rstr2binb(data)), 512 + data.length * 8);
        return binb2rstr(binb(opad.concat(hash), 512 + 160));
      }

      /**
       * Calculate the SHA-1 of an array of big-endian words, and a bit length
       */

      function binb(x, len) {
        var i,
            j,
            t,
            olda,
            oldb,
            oldc,
            oldd,
            olde,
            w = Array(80),
            a = 1732584193,
            b = -271733879,
            c = -1732584194,
            d = 271733878,
            e = -1009589776;

        /* append padding */
        x[len >> 5] |= 0x80 << 24 - len % 32;
        x[(len + 64 >> 9 << 4) + 15] = len;

        for (i = 0; i < x.length; i += 16) {
          olda = a;
          oldb = b;
          oldc = c;
          oldd = d;
          olde = e;

          for (j = 0; j < 80; j += 1) {
            if (j < 16) {
              w[j] = x[i + j];
            } else {
              w[j] = bit_rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
            }
            t = safe_add(safe_add(bit_rol(a, 5), sha1_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), sha1_kt(j)));
            e = d;
            d = c;
            c = bit_rol(b, 30);
            b = a;
            a = t;
          }

          a = safe_add(a, olda);
          b = safe_add(b, oldb);
          c = safe_add(c, oldc);
          d = safe_add(d, oldd);
          e = safe_add(e, olde);
        }
        return Array(a, b, c, d, e);
      }

      /**
       * Perform the appropriate triplet combination function for the current
       * iteration
       */

      function sha1_ft(t, b, c, d) {
        if (t < 20) {
          return b & c | ~b & d;
        }
        if (t < 40) {
          return b ^ c ^ d;
        }
        if (t < 60) {
          return b & c | b & d | c & d;
        }
        return b ^ c ^ d;
      }

      /**
       * Determine the appropriate additive constant for the current iteration
       */

      function sha1_kt(t) {
        return t < 20 ? 1518500249 : t < 40 ? 1859775393 : t < 60 ? -1894007588 : -899497514;
      }
    },
    /**
     * @class Hashes.SHA256
     * @param {config}
     *
     * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined in FIPS 180-2
     * Version 2.2 Copyright Angel Marin, Paul Johnston 2000 - 2009.
     * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     * See http://pajhome.org.uk/crypt/md5 for details.
     * Also http://anmar.eu.org/projects/jssha2/
     */
    SHA256: function SHA256(options) {
      /**
       * Private properties configuration variables. You may need to tweak these to be compatible with
       * the server-side, but the defaults work in most cases.
       * @see this.setUpperCase() method
       * @see this.setPad() method
       */
      var hexcase = options && typeof options.uppercase === 'boolean' ? options.uppercase : false,
          // hexadecimal output case format. false - lowercase; true - uppercase  */
      b64pad = options && typeof options.pad === 'string' ? options.pad : '=',

      /* base-64 pad character. Default '=' for strict RFC compliance   */
      utf8 = options && typeof options.utf8 === 'boolean' ? options.utf8 : true,

      /* enable/disable utf8 encoding */
      sha256_K;

      /* privileged (public) methods */
      this.hex = function (s) {
        return rstr2hex(rstr(s, utf8));
      };
      this.b64 = function (s) {
        return rstr2b64(rstr(s, utf8), b64pad);
      };
      this.any = function (s, e) {
        return rstr2any(rstr(s, utf8), e);
      };
      this.raw = function (s) {
        return rstr(s, utf8);
      };
      this.hex_hmac = function (k, d) {
        return rstr2hex(rstr_hmac(k, d));
      };
      this.b64_hmac = function (k, d) {
        return rstr2b64(rstr_hmac(k, d), b64pad);
      };
      this.any_hmac = function (k, d, e) {
        return rstr2any(rstr_hmac(k, d), e);
      };
      /**
       * Perform a simple self-test to see if the VM is working
       * @return {String} Hexadecimal hash sample
       * @public
       */
      this.vm_test = function () {
        return hex('abc').toLowerCase() === '900150983cd24fb0d6963f7d28e17f72';
      };
      /**
       * Enable/disable uppercase hexadecimal returned string
       * @param {boolean}
       * @return {Object} this
       * @public
       */
      this.setUpperCase = function (a) {
        if (typeof a === 'boolean') {
          hexcase = a;
        }
        return this;
      };
      /**
       * @description Defines a base64 pad string
       * @param {string} Pad
       * @return {Object} this
       * @public
       */
      this.setPad = function (a) {
        b64pad = a || b64pad;
        return this;
      };
      /**
       * Defines a base64 pad string
       * @param {boolean}
       * @return {Object} this
       * @public
       */
      this.setUTF8 = function (a) {
        if (typeof a === 'boolean') {
          utf8 = a;
        }
        return this;
      };

      // private methods

      /**
       * Calculate the SHA-512 of a raw string
       */

      function rstr(s, utf8) {
        s = utf8 ? utf8Encode(s) : s;
        return binb2rstr(binb(rstr2binb(s), s.length * 8));
      }

      /**
       * Calculate the HMAC-sha256 of a key and some data (raw strings)
       */

      function rstr_hmac(key, data) {
        key = utf8 ? utf8Encode(key) : key;
        data = utf8 ? utf8Encode(data) : data;
        var hash,
            i = 0,
            bkey = rstr2binb(key),
            ipad = Array(16),
            opad = Array(16);

        if (bkey.length > 16) {
          bkey = binb(bkey, key.length * 8);
        }

        for (; i < 16; i += 1) {
          ipad[i] = bkey[i] ^ 0x36363636;
          opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }

        hash = binb(ipad.concat(rstr2binb(data)), 512 + data.length * 8);
        return binb2rstr(binb(opad.concat(hash), 512 + 256));
      }

      /*
       * Main sha256 function, with its support functions
       */

      function sha256_S(X, n) {
        return X >>> n | X << 32 - n;
      }

      function sha256_R(X, n) {
        return X >>> n;
      }

      function sha256_Ch(x, y, z) {
        return x & y ^ ~x & z;
      }

      function sha256_Maj(x, y, z) {
        return x & y ^ x & z ^ y & z;
      }

      function sha256_Sigma0256(x) {
        return sha256_S(x, 2) ^ sha256_S(x, 13) ^ sha256_S(x, 22);
      }

      function sha256_Sigma1256(x) {
        return sha256_S(x, 6) ^ sha256_S(x, 11) ^ sha256_S(x, 25);
      }

      function sha256_Gamma0256(x) {
        return sha256_S(x, 7) ^ sha256_S(x, 18) ^ sha256_R(x, 3);
      }

      function sha256_Gamma1256(x) {
        return sha256_S(x, 17) ^ sha256_S(x, 19) ^ sha256_R(x, 10);
      }

      function sha256_Sigma0512(x) {
        return sha256_S(x, 28) ^ sha256_S(x, 34) ^ sha256_S(x, 39);
      }

      function sha256_Sigma1512(x) {
        return sha256_S(x, 14) ^ sha256_S(x, 18) ^ sha256_S(x, 41);
      }

      function sha256_Gamma0512(x) {
        return sha256_S(x, 1) ^ sha256_S(x, 8) ^ sha256_R(x, 7);
      }

      function sha256_Gamma1512(x) {
        return sha256_S(x, 19) ^ sha256_S(x, 61) ^ sha256_R(x, 6);
      }

      sha256_K = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998];

      function binb(m, l) {
        var HASH = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225];
        var W = new Array(64);
        var a, b, c, d, e, f, g, h;
        var i, j, T1, T2;

        /* append padding */
        m[l >> 5] |= 0x80 << 24 - l % 32;
        m[(l + 64 >> 9 << 4) + 15] = l;

        for (i = 0; i < m.length; i += 16) {
          a = HASH[0];
          b = HASH[1];
          c = HASH[2];
          d = HASH[3];
          e = HASH[4];
          f = HASH[5];
          g = HASH[6];
          h = HASH[7];

          for (j = 0; j < 64; j += 1) {
            if (j < 16) {
              W[j] = m[j + i];
            } else {
              W[j] = safe_add(safe_add(safe_add(sha256_Gamma1256(W[j - 2]), W[j - 7]), sha256_Gamma0256(W[j - 15])), W[j - 16]);
            }

            T1 = safe_add(safe_add(safe_add(safe_add(h, sha256_Sigma1256(e)), sha256_Ch(e, f, g)), sha256_K[j]), W[j]);
            T2 = safe_add(sha256_Sigma0256(a), sha256_Maj(a, b, c));
            h = g;
            g = f;
            f = e;
            e = safe_add(d, T1);
            d = c;
            c = b;
            b = a;
            a = safe_add(T1, T2);
          }

          HASH[0] = safe_add(a, HASH[0]);
          HASH[1] = safe_add(b, HASH[1]);
          HASH[2] = safe_add(c, HASH[2]);
          HASH[3] = safe_add(d, HASH[3]);
          HASH[4] = safe_add(e, HASH[4]);
          HASH[5] = safe_add(f, HASH[5]);
          HASH[6] = safe_add(g, HASH[6]);
          HASH[7] = safe_add(h, HASH[7]);
        }
        return HASH;
      }
    },

    /**
     * @class Hashes.SHA512
     * @param {config}
     *
     * A JavaScript implementation of the Secure Hash Algorithm, SHA-512, as defined in FIPS 180-2
     * Version 2.2 Copyright Anonymous Contributor, Paul Johnston 2000 - 2009.
     * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     * See http://pajhome.org.uk/crypt/md5 for details.
     */
    SHA512: function SHA512(options) {
      /**
       * Private properties configuration variables. You may need to tweak these to be compatible with
       * the server-side, but the defaults work in most cases.
       * @see this.setUpperCase() method
       * @see this.setPad() method
       */
      var hexcase = options && typeof options.uppercase === 'boolean' ? options.uppercase : false,

      /* hexadecimal output case format. false - lowercase; true - uppercase  */
      b64pad = options && typeof options.pad === 'string' ? options.pad : '=',

      /* base-64 pad character. Default '=' for strict RFC compliance   */
      utf8 = options && typeof options.utf8 === 'boolean' ? options.utf8 : true,

      /* enable/disable utf8 encoding */
      sha512_k;

      /* privileged (public) methods */
      this.hex = function (s) {
        return rstr2hex(rstr(s));
      };
      this.b64 = function (s) {
        return rstr2b64(rstr(s), b64pad);
      };
      this.any = function (s, e) {
        return rstr2any(rstr(s), e);
      };
      this.raw = function (s) {
        return rstr(s, utf8);
      };
      this.hex_hmac = function (k, d) {
        return rstr2hex(rstr_hmac(k, d));
      };
      this.b64_hmac = function (k, d) {
        return rstr2b64(rstr_hmac(k, d), b64pad);
      };
      this.any_hmac = function (k, d, e) {
        return rstr2any(rstr_hmac(k, d), e);
      };
      /**
       * Perform a simple self-test to see if the VM is working
       * @return {String} Hexadecimal hash sample
       * @public
       */
      this.vm_test = function () {
        return hex('abc').toLowerCase() === '900150983cd24fb0d6963f7d28e17f72';
      };
      /**
       * @description Enable/disable uppercase hexadecimal returned string
       * @param {boolean}
       * @return {Object} this
       * @public
       */
      this.setUpperCase = function (a) {
        if (typeof a === 'boolean') {
          hexcase = a;
        }
        return this;
      };
      /**
       * @description Defines a base64 pad string
       * @param {string} Pad
       * @return {Object} this
       * @public
       */
      this.setPad = function (a) {
        b64pad = a || b64pad;
        return this;
      };
      /**
       * @description Defines a base64 pad string
       * @param {boolean}
       * @return {Object} this
       * @public
       */
      this.setUTF8 = function (a) {
        if (typeof a === 'boolean') {
          utf8 = a;
        }
        return this;
      };

      /* private methods */

      /**
       * Calculate the SHA-512 of a raw string
       */

      function rstr(s) {
        s = utf8 ? utf8Encode(s) : s;
        return binb2rstr(binb(rstr2binb(s), s.length * 8));
      }
      /*
       * Calculate the HMAC-SHA-512 of a key and some data (raw strings)
       */

      function rstr_hmac(key, data) {
        key = utf8 ? utf8Encode(key) : key;
        data = utf8 ? utf8Encode(data) : data;

        var hash,
            i = 0,
            bkey = rstr2binb(key),
            ipad = Array(32),
            opad = Array(32);

        if (bkey.length > 32) {
          bkey = binb(bkey, key.length * 8);
        }

        for (; i < 32; i += 1) {
          ipad[i] = bkey[i] ^ 0x36363636;
          opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }

        hash = binb(ipad.concat(rstr2binb(data)), 1024 + data.length * 8);
        return binb2rstr(binb(opad.concat(hash), 1024 + 512));
      }

      /**
       * Calculate the SHA-512 of an array of big-endian dwords, and a bit length
       */

      function binb(x, len) {
        var j,
            i,
            l,
            W = new Array(80),
            hash = new Array(16),

        //Initial hash values
        H = [new int64(0x6a09e667, -205731576), new int64(-1150833019, -2067093701), new int64(0x3c6ef372, -23791573), new int64(-1521486534, 0x5f1d36f1), new int64(0x510e527f, -1377402159), new int64(-1694144372, 0x2b3e6c1f), new int64(0x1f83d9ab, -79577749), new int64(0x5be0cd19, 0x137e2179)],
            T1 = new int64(0, 0),
            T2 = new int64(0, 0),
            a = new int64(0, 0),
            b = new int64(0, 0),
            c = new int64(0, 0),
            d = new int64(0, 0),
            e = new int64(0, 0),
            f = new int64(0, 0),
            g = new int64(0, 0),
            h = new int64(0, 0),

        //Temporary variables not specified by the document
        s0 = new int64(0, 0),
            s1 = new int64(0, 0),
            Ch = new int64(0, 0),
            Maj = new int64(0, 0),
            r1 = new int64(0, 0),
            r2 = new int64(0, 0),
            r3 = new int64(0, 0);

        if (sha512_k === undefined) {
          //SHA512 constants
          sha512_k = [new int64(0x428a2f98, -685199838), new int64(0x71374491, 0x23ef65cd), new int64(-1245643825, -330482897), new int64(-373957723, -2121671748), new int64(0x3956c25b, -213338824), new int64(0x59f111f1, -1241133031), new int64(-1841331548, -1357295717), new int64(-1424204075, -630357736), new int64(-670586216, -1560083902), new int64(0x12835b01, 0x45706fbe), new int64(0x243185be, 0x4ee4b28c), new int64(0x550c7dc3, -704662302), new int64(0x72be5d74, -226784913), new int64(-2132889090, 0x3b1696b1), new int64(-1680079193, 0x25c71235), new int64(-1046744716, -815192428), new int64(-459576895, -1628353838), new int64(-272742522, 0x384f25e3), new int64(0xfc19dc6, -1953704523), new int64(0x240ca1cc, 0x77ac9c65), new int64(0x2de92c6f, 0x592b0275), new int64(0x4a7484aa, 0x6ea6e483), new int64(0x5cb0a9dc, -1119749164), new int64(0x76f988da, -2096016459), new int64(-1740746414, -295247957), new int64(-1473132947, 0x2db43210), new int64(-1341970488, -1728372417), new int64(-1084653625, -1091629340), new int64(-958395405, 0x3da88fc2), new int64(-710438585, -1828018395), new int64(0x6ca6351, -536640913), new int64(0x14292967, 0xa0e6e70), new int64(0x27b70a85, 0x46d22ffc), new int64(0x2e1b2138, 0x5c26c926), new int64(0x4d2c6dfc, 0x5ac42aed), new int64(0x53380d13, -1651133473), new int64(0x650a7354, -1951439906), new int64(0x766a0abb, 0x3c77b2a8), new int64(-2117940946, 0x47edaee6), new int64(-1838011259, 0x1482353b), new int64(-1564481375, 0x4cf10364), new int64(-1474664885, -1136513023), new int64(-1035236496, -789014639), new int64(-949202525, 0x654be30), new int64(-778901479, -688958952), new int64(-694614492, 0x5565a910), new int64(-200395387, 0x5771202a), new int64(0x106aa070, 0x32bbd1b8), new int64(0x19a4c116, -1194143544), new int64(0x1e376c08, 0x5141ab53), new int64(0x2748774c, -544281703), new int64(0x34b0bcb5, -509917016), new int64(0x391c0cb3, -976659869), new int64(0x4ed8aa4a, -482243893), new int64(0x5b9cca4f, 0x7763e373), new int64(0x682e6ff3, -692930397), new int64(0x748f82ee, 0x5defb2fc), new int64(0x78a5636f, 0x43172f60), new int64(-2067236844, -1578062990), new int64(-1933114872, 0x1a6439ec), new int64(-1866530822, 0x23631e28), new int64(-1538233109, -561857047), new int64(-1090935817, -1295615723), new int64(-965641998, -479046869), new int64(-903397682, -366583396), new int64(-779700025, 0x21c0c207), new int64(-354779690, -840897762), new int64(-176337025, -294727304), new int64(0x6f067aa, 0x72176fba), new int64(0xa637dc5, -1563912026), new int64(0x113f9804, -1090974290), new int64(0x1b710b35, 0x131c471b), new int64(0x28db77f5, 0x23047d84), new int64(0x32caab7b, 0x40c72493), new int64(0x3c9ebe0a, 0x15c9bebc), new int64(0x431d67c4, -1676669620), new int64(0x4cc5d4be, -885112138), new int64(0x597f299c, -60457430), new int64(0x5fcb6fab, 0x3ad6faec), new int64(0x6c44198c, 0x4a475817)];
        }

        for (i = 0; i < 80; i += 1) {
          W[i] = new int64(0, 0);
        }

        // append padding to the source string. The format is described in the FIPS.
        x[len >> 5] |= 0x80 << 24 - (len & 0x1f);
        x[(len + 128 >> 10 << 5) + 31] = len;
        l = x.length;
        for (i = 0; i < l; i += 32) {
          //32 dwords is the block size
          int64copy(a, H[0]);
          int64copy(b, H[1]);
          int64copy(c, H[2]);
          int64copy(d, H[3]);
          int64copy(e, H[4]);
          int64copy(f, H[5]);
          int64copy(g, H[6]);
          int64copy(h, H[7]);

          for (j = 0; j < 16; j += 1) {
            W[j].h = x[i + 2 * j];
            W[j].l = x[i + 2 * j + 1];
          }

          for (j = 16; j < 80; j += 1) {
            //sigma1
            int64rrot(r1, W[j - 2], 19);
            int64revrrot(r2, W[j - 2], 29);
            int64shr(r3, W[j - 2], 6);
            s1.l = r1.l ^ r2.l ^ r3.l;
            s1.h = r1.h ^ r2.h ^ r3.h;
            //sigma0
            int64rrot(r1, W[j - 15], 1);
            int64rrot(r2, W[j - 15], 8);
            int64shr(r3, W[j - 15], 7);
            s0.l = r1.l ^ r2.l ^ r3.l;
            s0.h = r1.h ^ r2.h ^ r3.h;

            int64add4(W[j], s1, W[j - 7], s0, W[j - 16]);
          }

          for (j = 0; j < 80; j += 1) {
            //Ch
            Ch.l = e.l & f.l ^ ~e.l & g.l;
            Ch.h = e.h & f.h ^ ~e.h & g.h;

            //Sigma1
            int64rrot(r1, e, 14);
            int64rrot(r2, e, 18);
            int64revrrot(r3, e, 9);
            s1.l = r1.l ^ r2.l ^ r3.l;
            s1.h = r1.h ^ r2.h ^ r3.h;

            //Sigma0
            int64rrot(r1, a, 28);
            int64revrrot(r2, a, 2);
            int64revrrot(r3, a, 7);
            s0.l = r1.l ^ r2.l ^ r3.l;
            s0.h = r1.h ^ r2.h ^ r3.h;

            //Maj
            Maj.l = a.l & b.l ^ a.l & c.l ^ b.l & c.l;
            Maj.h = a.h & b.h ^ a.h & c.h ^ b.h & c.h;

            int64add5(T1, h, s1, Ch, sha512_k[j], W[j]);
            int64add(T2, s0, Maj);

            int64copy(h, g);
            int64copy(g, f);
            int64copy(f, e);
            int64add(e, d, T1);
            int64copy(d, c);
            int64copy(c, b);
            int64copy(b, a);
            int64add(a, T1, T2);
          }
          int64add(H[0], H[0], a);
          int64add(H[1], H[1], b);
          int64add(H[2], H[2], c);
          int64add(H[3], H[3], d);
          int64add(H[4], H[4], e);
          int64add(H[5], H[5], f);
          int64add(H[6], H[6], g);
          int64add(H[7], H[7], h);
        }

        //represent the hash as an array of 32-bit dwords
        for (i = 0; i < 8; i += 1) {
          hash[2 * i] = H[i].h;
          hash[2 * i + 1] = H[i].l;
        }
        return hash;
      }

      //A constructor for 64-bit numbers

      function int64(h, l) {
        this.h = h;
        this.l = l;
        //this.toString = int64toString;
      }

      //Copies src into dst, assuming both are 64-bit numbers

      function int64copy(dst, src) {
        dst.h = src.h;
        dst.l = src.l;
      }

      //Right-rotates a 64-bit number by shift
      //Won't handle cases of shift>=32
      //The function revrrot() is for that

      function int64rrot(dst, x, shift) {
        dst.l = x.l >>> shift | x.h << 32 - shift;
        dst.h = x.h >>> shift | x.l << 32 - shift;
      }

      //Reverses the dwords of the source and then rotates right by shift.
      //This is equivalent to rotation by 32+shift

      function int64revrrot(dst, x, shift) {
        dst.l = x.h >>> shift | x.l << 32 - shift;
        dst.h = x.l >>> shift | x.h << 32 - shift;
      }

      //Bitwise-shifts right a 64-bit number by shift
      //Won't handle shift>=32, but it's never needed in SHA512

      function int64shr(dst, x, shift) {
        dst.l = x.l >>> shift | x.h << 32 - shift;
        dst.h = x.h >>> shift;
      }

      //Adds two 64-bit numbers
      //Like the original implementation, does not rely on 32-bit operations

      function int64add(dst, x, y) {
        var w0 = (x.l & 0xffff) + (y.l & 0xffff);
        var w1 = (x.l >>> 16) + (y.l >>> 16) + (w0 >>> 16);
        var w2 = (x.h & 0xffff) + (y.h & 0xffff) + (w1 >>> 16);
        var w3 = (x.h >>> 16) + (y.h >>> 16) + (w2 >>> 16);
        dst.l = w0 & 0xffff | w1 << 16;
        dst.h = w2 & 0xffff | w3 << 16;
      }

      //Same, except with 4 addends. Works faster than adding them one by one.

      function int64add4(dst, a, b, c, d) {
        var w0 = (a.l & 0xffff) + (b.l & 0xffff) + (c.l & 0xffff) + (d.l & 0xffff);
        var w1 = (a.l >>> 16) + (b.l >>> 16) + (c.l >>> 16) + (d.l >>> 16) + (w0 >>> 16);
        var w2 = (a.h & 0xffff) + (b.h & 0xffff) + (c.h & 0xffff) + (d.h & 0xffff) + (w1 >>> 16);
        var w3 = (a.h >>> 16) + (b.h >>> 16) + (c.h >>> 16) + (d.h >>> 16) + (w2 >>> 16);
        dst.l = w0 & 0xffff | w1 << 16;
        dst.h = w2 & 0xffff | w3 << 16;
      }

      //Same, except with 5 addends

      function int64add5(dst, a, b, c, d, e) {
        var w0 = (a.l & 0xffff) + (b.l & 0xffff) + (c.l & 0xffff) + (d.l & 0xffff) + (e.l & 0xffff),
            w1 = (a.l >>> 16) + (b.l >>> 16) + (c.l >>> 16) + (d.l >>> 16) + (e.l >>> 16) + (w0 >>> 16),
            w2 = (a.h & 0xffff) + (b.h & 0xffff) + (c.h & 0xffff) + (d.h & 0xffff) + (e.h & 0xffff) + (w1 >>> 16),
            w3 = (a.h >>> 16) + (b.h >>> 16) + (c.h >>> 16) + (d.h >>> 16) + (e.h >>> 16) + (w2 >>> 16);
        dst.l = w0 & 0xffff | w1 << 16;
        dst.h = w2 & 0xffff | w3 << 16;
      }
    },
    /**
     * @class Hashes.RMD160
     * @constructor
     * @param {Object} [config]
     *
     * A JavaScript implementation of the RIPEMD-160 Algorithm
     * Version 2.2 Copyright Jeremy Lin, Paul Johnston 2000 - 2009.
     * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     * See http://pajhome.org.uk/crypt/md5 for details.
     * Also http://www.ocf.berkeley.edu/~jjlin/jsotp/
     */
    RMD160: function RMD160(options) {
      /**
       * Private properties configuration variables. You may need to tweak these to be compatible with
       * the server-side, but the defaults work in most cases.
       * @see this.setUpperCase() method
       * @see this.setPad() method
       */
      var hexcase = options && typeof options.uppercase === 'boolean' ? options.uppercase : false,

      /* hexadecimal output case format. false - lowercase; true - uppercase  */
      b64pad = options && typeof options.pad === 'string' ? options.pa : '=',

      /* base-64 pad character. Default '=' for strict RFC compliance   */
      utf8 = options && typeof options.utf8 === 'boolean' ? options.utf8 : true,

      /* enable/disable utf8 encoding */
      rmd160_r1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
          rmd160_r2 = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
          rmd160_s1 = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
          rmd160_s2 = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];

      /* privileged (public) methods */
      this.hex = function (s) {
        return rstr2hex(rstr(s, utf8));
      };
      this.b64 = function (s) {
        return rstr2b64(rstr(s, utf8), b64pad);
      };
      this.any = function (s, e) {
        return rstr2any(rstr(s, utf8), e);
      };
      this.raw = function (s) {
        return rstr(s, utf8);
      };
      this.hex_hmac = function (k, d) {
        return rstr2hex(rstr_hmac(k, d));
      };
      this.b64_hmac = function (k, d) {
        return rstr2b64(rstr_hmac(k, d), b64pad);
      };
      this.any_hmac = function (k, d, e) {
        return rstr2any(rstr_hmac(k, d), e);
      };
      /**
       * Perform a simple self-test to see if the VM is working
       * @return {String} Hexadecimal hash sample
       * @public
       */
      this.vm_test = function () {
        return hex('abc').toLowerCase() === '900150983cd24fb0d6963f7d28e17f72';
      };
      /**
       * @description Enable/disable uppercase hexadecimal returned string
       * @param {boolean}
       * @return {Object} this
       * @public
       */
      this.setUpperCase = function (a) {
        if (typeof a === 'boolean') {
          hexcase = a;
        }
        return this;
      };
      /**
       * @description Defines a base64 pad string
       * @param {string} Pad
       * @return {Object} this
       * @public
       */
      this.setPad = function (a) {
        if (typeof a !== 'undefined') {
          b64pad = a;
        }
        return this;
      };
      /**
       * @description Defines a base64 pad string
       * @param {boolean}
       * @return {Object} this
       * @public
       */
      this.setUTF8 = function (a) {
        if (typeof a === 'boolean') {
          utf8 = a;
        }
        return this;
      };

      /* private methods */

      /**
       * Calculate the rmd160 of a raw string
       */

      function rstr(s) {
        s = utf8 ? utf8Encode(s) : s;
        return binl2rstr(binl(rstr2binl(s), s.length * 8));
      }

      /**
       * Calculate the HMAC-rmd160 of a key and some data (raw strings)
       */

      function rstr_hmac(key, data) {
        key = utf8 ? utf8Encode(key) : key;
        data = utf8 ? utf8Encode(data) : data;
        var i,
            hash,
            bkey = rstr2binl(key),
            ipad = Array(16),
            opad = Array(16);

        if (bkey.length > 16) {
          bkey = binl(bkey, key.length * 8);
        }

        for (i = 0; i < 16; i += 1) {
          ipad[i] = bkey[i] ^ 0x36363636;
          opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        hash = binl(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
        return binl2rstr(binl(opad.concat(hash), 512 + 160));
      }

      /**
       * Convert an array of little-endian words to a string
       */

      function binl2rstr(input) {
        var i,
            output = '',
            l = input.length * 32;
        for (i = 0; i < l; i += 8) {
          output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xFF);
        }
        return output;
      }

      /**
       * Calculate the RIPE-MD160 of an array of little-endian words, and a bit length.
       */

      function binl(x, len) {
        var T,
            j,
            i,
            l,
            h0 = 0x67452301,
            h1 = 0xefcdab89,
            h2 = 0x98badcfe,
            h3 = 0x10325476,
            h4 = 0xc3d2e1f0,
            A1,
            B1,
            C1,
            D1,
            E1,
            A2,
            B2,
            C2,
            D2,
            E2;

        /* append padding */
        x[len >> 5] |= 0x80 << len % 32;
        x[(len + 64 >>> 9 << 4) + 14] = len;
        l = x.length;

        for (i = 0; i < l; i += 16) {
          A1 = A2 = h0;
          B1 = B2 = h1;
          C1 = C2 = h2;
          D1 = D2 = h3;
          E1 = E2 = h4;
          for (j = 0; j <= 79; j += 1) {
            T = safe_add(A1, rmd160_f(j, B1, C1, D1));
            T = safe_add(T, x[i + rmd160_r1[j]]);
            T = safe_add(T, rmd160_K1(j));
            T = safe_add(bit_rol(T, rmd160_s1[j]), E1);
            A1 = E1;
            E1 = D1;
            D1 = bit_rol(C1, 10);
            C1 = B1;
            B1 = T;
            T = safe_add(A2, rmd160_f(79 - j, B2, C2, D2));
            T = safe_add(T, x[i + rmd160_r2[j]]);
            T = safe_add(T, rmd160_K2(j));
            T = safe_add(bit_rol(T, rmd160_s2[j]), E2);
            A2 = E2;
            E2 = D2;
            D2 = bit_rol(C2, 10);
            C2 = B2;
            B2 = T;
          }

          T = safe_add(h1, safe_add(C1, D2));
          h1 = safe_add(h2, safe_add(D1, E2));
          h2 = safe_add(h3, safe_add(E1, A2));
          h3 = safe_add(h4, safe_add(A1, B2));
          h4 = safe_add(h0, safe_add(B1, C2));
          h0 = T;
        }
        return [h0, h1, h2, h3, h4];
      }

      // specific algorithm methods

      function rmd160_f(j, x, y, z) {
        return 0 <= j && j <= 15 ? x ^ y ^ z : 16 <= j && j <= 31 ? x & y | ~x & z : 32 <= j && j <= 47 ? (x | ~y) ^ z : 48 <= j && j <= 63 ? x & z | y & ~z : 64 <= j && j <= 79 ? x ^ (y | ~z) : 'rmd160_f: j out of range';
      }

      function rmd160_K1(j) {
        return 0 <= j && j <= 15 ? 0x00000000 : 16 <= j && j <= 31 ? 0x5a827999 : 32 <= j && j <= 47 ? 0x6ed9eba1 : 48 <= j && j <= 63 ? 0x8f1bbcdc : 64 <= j && j <= 79 ? 0xa953fd4e : 'rmd160_K1: j out of range';
      }

      function rmd160_K2(j) {
        return 0 <= j && j <= 15 ? 0x50a28be6 : 16 <= j && j <= 31 ? 0x5c4dd124 : 32 <= j && j <= 47 ? 0x6d703ef3 : 48 <= j && j <= 63 ? 0x7a6d76e9 : 64 <= j && j <= 79 ? 0x00000000 : 'rmd160_K2: j out of range';
      }
    }
  };

  // exposes Hashes
  (function (window, undefined) {
    var freeExports = false;
    if (( false ? 'undefined' : _typeof(exports)) === 'object') {
      freeExports = exports;
      if (exports && (typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' && global && global === global.global) {
        window = global;
      }
    }

    if ("function" === 'function' && _typeof(__webpack_require__(15)) === 'object' && __webpack_require__(15)) {
      // define as an anonymous module, so, through path mapping, it can be aliased
      !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return Hashes;
      }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (freeExports) {
      // in Node.js or RingoJS v0.8.0+
      if (( false ? 'undefined' : _typeof(module)) === 'object' && module && module.exports === freeExports) {
        module.exports = Hashes;
      }
      // in Narwhal or RingoJS v0.7.0-
      else {
          freeExports.Hashes = Hashes;
        }
    } else {
      // in a browser or Rhino
      window.Hashes = Hashes;
    }
  })(this);
})(); // IIFE
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61), __webpack_require__(62)(module)))

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//interpret ==heading== lines
var fns = __webpack_require__(2);
var list = __webpack_require__(64);
var parseSentences = __webpack_require__(65);
var heading_reg = /^(={1,5})([^=]{1,200}?)={1,5}$/;

var parseHeading = function parseHeading(head) {
  var title = head[2] || '';
  title = fns.trim_whitespace(title);
  var depth = 1;
  if (head[1]) {
    depth = head[1].length;
  }
  return {
    title: title,
    depth: depth,
    sentences: []
  };
};

var parseSections = function parseSections(lines) {
  var arr = [parseHeading([])];
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    //empty lines
    if (!line) {
      continue;
    }
    //handle new ==headings==
    var header = line.match(heading_reg);
    if (header !== null) {
      arr.push(parseHeading(header));
      continue;
    }
    //list or sentence?
    var _section = arr[arr.length - 1];
    if (line && list.isList(line)) {
      _section.list = _section.list || [];
      _section.list.push(line);
    } else {
      var sentenceArr = parseSentences(line);
      _section.sentences = _section.sentences.concat(sentenceArr);
    }
  }
  for (var _i = 0; _i < arr.length; _i++) {
    var section = arr[_i];
    if (section.list) {
      section.list = list.cleanList(section.list);
    }
  }
  return arr;
};

var parseText = function parseText(r, wiki) {
  //next, map each line into a parsable sentence
  var lines = wiki.replace(/\r/g, '').split(/\n/);

  r.sections = parseSections(lines);

  return wiki;
};

module.exports = parseText;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var list_reg = /^[#\*:;\|]+/;
var bullet_reg = /^\*+[^:,\|]{4}/;
var number_reg = /^ ?\#[^:,\|]{4}/;
var parseLine = __webpack_require__(3);

var isList = function isList(line) {
  return list_reg.test(line) || bullet_reg.test(line) || number_reg.test(line);
};

var cleanList = function cleanList(list) {
  var number = 1;
  for (var i = 0; i < list.length; i++) {
    var line = list[i];
    //add # numberings formatting
    if (line.match(number_reg)) {
      line = line.replace(/^ ?#*/, number + ') ');
      line = line + '\n';
      number += 1;
    } else if (line.match(list_reg)) {
      number = 1;
      line = line.replace(list_reg, '');
    }
    list[i] = parseLine(line);
  }
  return list;
};

module.exports = {
  isList: isList,
  cleanList: cleanList
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sentence_parser = __webpack_require__(66);
var parseLine = __webpack_require__(3);

var parseSentences = function parseSentences(line) {
  var arr = [];
  var sentences = sentence_parser(line);
  sentences.forEach(function (str) {
    arr.push(parseLine(str));
  });
  return arr;
};
module.exports = parseSentences;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//split text into sentences, using regex
//@spencermountain MIT

//(Rule-based sentence boundary segmentation) - chop given text into its proper sentences.
// Ignore periods/questions/exclamations used in acronyms/abbreviations/numbers, etc.
// @spencermountain 2015 MIT


var abbreviations = __webpack_require__(67);
var abbrev_reg = new RegExp('(^| )(' + abbreviations.join('|') + ')[.!?] ?$', 'i');
var acronym_reg = new RegExp('[ |.][A-Z].? +?$', 'i');
var elipses_reg = new RegExp('\\.\\.\\.* +?$');

//turn a nested array into one array
var flatten = function flatten(arr) {
  var all = [];
  arr.forEach(function (a) {
    all = all.concat(a);
  });
  return all;
};

var naiive_split = function naiive_split(text) {
  //first, split by newline
  var splits = text.split(/(\n+)/);
  //split by period, question-mark, and exclamation-mark
  splits = splits.map(function (str) {
    return str.split(/(\S.+?[.!?])(?=\s+|$)/g);
  });
  return flatten(splits);
};

// if this looks like a period within a wikipedia link, return false
var isBalanced = function isBalanced(str) {
  str = str || '';
  var open = str.split(/\[\[/) || [];
  var closed = str.split(/\]\]/) || [];
  if (open.length > closed.length) {
    return false;
  }
  //make sure quotes are closed too
  var quotes = str.match(/"/g);
  if (quotes && quotes.length % 2 !== 0 && str.length < 900) {
    return false;
  }
  return true;
};

var sentence_parser = function sentence_parser(text) {
  var sentences = [];
  //first do a greedy-split..
  var chunks = [];
  //ensure it 'smells like' a sentence
  if (!text || typeof text !== 'string' || !text.match(/\w/)) {
    return sentences;
  }
  // This was the splitter regex updated to fix quoted punctuation marks.
  // let splits = text.split(/(\S.+?[.\?!])(?=\s+|$|")/g);
  // todo: look for side effects in this regex replacement:
  var splits = naiive_split(text);
  //filter-out the grap ones
  for (var i = 0; i < splits.length; i++) {
    var s = splits[i];
    if (!s || s === '') {
      continue;
    }
    //this is meaningful whitespace
    if (!s.match(/\S/)) {
      //add it to the last one
      if (chunks[chunks.length - 1]) {
        chunks[chunks.length - 1] += s;
        continue;
      } else if (splits[i + 1]) {
        //add it to the next one
        splits[i + 1] = s + splits[i + 1];
        continue;
      }
      //else, only whitespace, no terms, no sentence
    }
    chunks.push(s);
  }

  //detection of non-sentence chunks
  var isSentence = function isSentence(hmm) {
    if (hmm.match(abbrev_reg) || hmm.match(acronym_reg) || hmm.match(elipses_reg)) {
      return false;
    }
    if (!isBalanced(hmm)) {
      return false;
    }
    return true;
  };

  //loop through these chunks, and join the non-sentence chunks back together..
  for (var _i = 0; _i < chunks.length; _i++) {
    //should this chunk be combined with the next one?
    if (chunks[_i + 1] && !isSentence(chunks[_i])) {
      chunks[_i + 1] = chunks[_i] + (chunks[_i + 1] || ''); //.replace(/ +/g, ' ');
    } else if (chunks[_i] && chunks[_i].length > 0) {
      //this chunk is a proper sentence..
      sentences.push(chunks[_i]);
      chunks[_i] = '';
    }
  }
  //if we never got a sentence, return the given text
  if (sentences.length === 0) {
    return [text];
  }
  return sentences;
};

module.exports = sentence_parser;
// console.log(sentence_parser('Tony is nice. He lives in Japan.').length === 2);

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//these are used for the sentence-splitter
module.exports = ['jr', 'mr', 'mrs', 'ms', 'dr', 'prof', 'sr', 'sen', 'corp', 'calif', 'rep', 'gov', 'atty', 'supt', 'det', 'rev', 'col', 'gen', 'lt', 'cmdr', 'adm', 'capt', 'sgt', 'cpl', 'maj', 'dept', 'univ', 'assn', 'bros', 'inc', 'ltd', 'co', 'corp', 'arc', 'al', 'ave', 'blvd', 'cl', 'ct', 'cres', 'exp', 'rd', 'st', 'dist', 'mt', 'ft', 'fy', 'hwy', 'la', 'pd', 'pl', 'plz', 'tce', 'Ala', 'Ariz', 'Ark', 'Cal', 'Calif', 'Col', 'Colo', 'Conn', 'Del', 'Fed', 'Fla', 'Ga', 'Ida', 'Id', 'Ill', 'Ind', 'Ia', 'Kan', 'Kans', 'Ken', 'Ky', 'La', 'Me', 'Md', 'Mass', 'Mich', 'Minn', 'Miss', 'Mo', 'Mont', 'Neb', 'Nebr', 'Nev', 'Mex', 'Okla', 'Ok', 'Ore', 'Penna', 'Penn', 'Pa', 'Dak', 'Tenn', 'Tex', 'Ut', 'Vt', 'Va', 'Wash', 'Wis', 'Wisc', 'Wy', 'Wyo', 'USAFA', 'Alta', 'Ont', 'QuÔøΩ', 'Sask', 'Yuk', 'jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec', 'sept', 'vs', 'etc', 'esp', 'llb', 'md', 'bl', 'phd', 'ma', 'ba', 'miss', 'misses', 'mister', 'sir', 'esq', 'mstr', 'lit', 'fl', 'ex', 'eg', 'sep', 'sept', '..'];

/***/ })
/******/ ]);