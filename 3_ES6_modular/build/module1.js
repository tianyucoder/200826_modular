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