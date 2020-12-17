function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * @param {*} value 判断该对象是否是空对象或空数组
 */


export var isEmpty = function isEmpty(value) {
  return value === null || _typeof(value) === 'object' && Object.keys(value).length === 0;
};
/**
 * 作用: 函数节流
 * @params: fun         需要节流执行的程序
 * @params: delay       延迟执行时间
 * @params: time        最小触发间隔
 * @return：返回值延迟执行的函数
 */

export var throttle = function throttle(fun) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 800;
  var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
  var timeout;
  var startTime = Date.now();
  return function callback(_a) {
    var args = __rest(_a, []);

    var curTime = Date.now();
    clearTimeout(timeout);

    if (curTime - startTime >= time) {
      fun(args);
      startTime = curTime;
    } else {
      timeout = setTimeout(function () {
        fun(args);
      }, delay);
    }
  };
};
/**
 * description: 类型检测工具对象
 * isObject: 是否是对象
 * isFunction: 是否是函数
 * isArray: 是否是数组
 * isString: 是否为字符串
 * isNumber: 是否为数字
 * isEmpty: 是否为空
 * */

export var Type = {
  isObject: function isObject(source) {
    return Object.prototype.toString.call(source) === '[object Object]';
  },
  isFunction: function isFunction(source) {
    return source != null && (source.constructor === Function || source instanceof Function);
  },
  isArray: function isArray(source) {
    return Array.isArray(source);
  },
  isString: function isString(source) {
    return typeof source === 'string' || !!source && _typeof(source) === 'object' && Object.prototype.toString.call(source) === '[object String]';
  },
  isNumber: function isNumber(source) {
    return source != null && (source.constructor === Number || source instanceof Number);
  },
  isEmpty: function isEmpty(value) {
    // null 或者 未定义，则为空
    if (value === null || value === undefined) {
      return true;
    } // 传入空字符串，则为空


    if (typeof value === 'string') {
      return value === '';
    } // 传入函数，则不为空


    if (typeof value === 'function') {
      return false;
    } // 传入数组长度为0，则为空


    if (value instanceof Array) {
      return !value.length;
    } // 传入空对象，则为空


    if (value instanceof Object) {
      for (var key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          return false;
        }
      }

      return true;
    }
  }
};