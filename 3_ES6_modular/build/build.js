(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module1');

console.log(_module.data);
console.log(_module.msg);
(0, _module.showMsg)();
(0, _module.showData)();
},{"./module1":2}],2:[function(require,module,exports){
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
},{}]},{},[1]);
