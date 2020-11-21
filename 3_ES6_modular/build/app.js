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