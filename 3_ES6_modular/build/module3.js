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

//统一暴露(精简版)---用的多
exports.school = school;
exports.person = person;
exports.getLaoliu = getLaoliu;

//统一暴露(完整版)
// export {school as a,person as b,getLaoliu as c}