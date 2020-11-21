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