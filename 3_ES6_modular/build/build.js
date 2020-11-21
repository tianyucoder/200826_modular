(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module1');

var module1 = _interopRequireWildcard(_module);

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = require('./module4');

var _module5 = _interopRequireDefault(_module4);

var _module6 = require('./module5');

var _module7 = _interopRequireDefault(_module6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//引入【默认暴露】的模块


//引入【分别暴露】的模块+打包引入
//引入【分别暴露】的模块
console.log(_module7.default);

//引入


//引入【统一暴露】的模块（统一暴露和分别暴露，最后引入的方式都是一样的）


//引入【分别暴露】的模块+重命名

console.log(_module6.teacher1);
console.log(_module6.teacher2);
console.log(_module6.stu1);
console.log(_module6.stu2);
},{"./module1":2,"./module2":3,"./module3":4,"./module4":5,"./module5":6}],2:[function(require,module,exports){
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

//统一暴露(精简版)---用的多
exports.school = school;
exports.person = person;
exports.getLaoliu = getLaoliu;

//统一暴露(完整版)
// export {school as a,person as b,getLaoliu as c}
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
/* 
	module4中使用【默认暴露】-----只能暴露一次！！！！
*/
exports.default = {
	name: "wc",
	age: 5
};
},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
//使用【分别暴露】
var teacher1 = exports.teacher1 = { name: '强哥', age: 15 };
var teacher2 = exports.teacher2 = { name: '歌神', age: 17

	//使用【统一暴露】
};var stu1 = { name: '王宇', age: 18 };
var stu2 = { name: '宇航', age: 19 };
exports.stu1 = stu1;
exports.stu2 = stu2;

//使用【默认暴露】

exports.default = {
	school: '尚硅谷',
	address: '宏福科技园',
	subjects: ['前端', 'java', '大数据']
};
},{}]},{},[1]);
