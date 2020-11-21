(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module1');

var module1 = _interopRequireWildcard(_module);

var _module2 = require('./module2');

var _module3 = require('./module3');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//引入【分别暴露】的模块+打包引入
//引入【分别暴露】的模块
console.log(_module3.a, _module3.b);

//引入【统一暴露】的模块


//引入【分别暴露】的模块+重命名

(0, _module3.c)();
},{"./module1":2,"./module2":3,"./module3":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.showData = showData;
exports.showMsg = showMsg;
/* 
	module1中使用【分别暴露】
*/

var data = exports.data = 'atguigu';
var msg = exports.msg = 'hello,0826';

function showData() {
	console.log(data);
}
function showMsg() {
	console.log(msg);
}
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/* 
	module2中使用【分别暴露】，但暴露了一个和module1重名的一个data
*/
var data = exports.data = '北七家镇宏福科技园';
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/* 
	module3中使用【统一暴露】
*/

var school = '尚硅谷';
var person = {
	name: '老刘',
	age: 19,
	sex: '女'
};
function getLaoliu() {
	console.log(person);
}

//统一暴露(精简版)
// export {school,person,getLaoliu}

//统一暴露(完整版)
exports.a = school;
exports.b = person;
exports.c = getLaoliu;
},{}]},{},[1]);
