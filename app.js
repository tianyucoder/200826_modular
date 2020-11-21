//暴露的本质是module.exports的内容
// 引入的内容是什么，取决于暴露的是什么

const m1 = require('./module1') //引入自定义模块
const m2 = require('./module2') //引入自定义模块
const m3 = require('./module3') //引入自定义模块
const uniq = require('uniq')

console.log(m3);
