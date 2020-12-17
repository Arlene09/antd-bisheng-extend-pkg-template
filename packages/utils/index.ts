
/**
 * @param {*} value 判断该对象是否是空对象或空数组
 */
export const isEmpty = value => value === null || (typeof value === 'object' && Object.keys(value).length === 0);


/**
 * 作用: 函数节流
 * @params: fun         需要节流执行的程序
 * @params: delay       延迟执行时间
 * @params: time        最小触发间隔
 * @return：返回值延迟执行的函数
 */
export const throttle = (fun, delay: number = 800, time: number = 300) => {
  let timeout;
  let startTime = Date.now();

  return function callback({ ...args }) {
    const curTime = Date.now();
    clearTimeout(timeout);
    if (curTime - startTime >= time) {
      fun(args);
      startTime = curTime;
    } else {
      timeout = setTimeout(() => { fun(args); }, delay);
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
export const Type = {
  isObject(source) {
    return Object.prototype.toString.call(source) === '[object Object]';
  },
  isFunction(source) {
    return (
      source != null &&
      (source.constructor === Function || source instanceof Function)
    );
  },
  isArray(source) {
    return Array.isArray(source);
  },
  isString(source) {
    return (
      typeof source === 'string' ||
      (!!source &&
        typeof source === 'object' &&
        Object.prototype.toString.call(source) === '[object String]')
    );
  },
  isNumber(source) {
    return (
      source != null &&
      (source.constructor === Number || source instanceof Number)
    );
  },
  isEmpty(value) {
    // null 或者 未定义，则为空
    if (value === null || value === undefined) {
      return true;
    }
    // 传入空字符串，则为空
    if (typeof value === 'string') {
      return value === '';
    }
    // 传入函数，则不为空
    if (typeof value === 'function') {
      return false;
    }
    // 传入数组长度为0，则为空
    if (value instanceof Array) {
      return !value.length;
    }
    // 传入空对象，则为空
    if (value instanceof Object) {
      for (var key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }
  },
};