//暴露的本质是module.exports的内容
// 引入的内容是什么，取决于暴露的是什么

const m1 = require('./module1') //引入自定义模块
const m2 = require('./module2') //引入自定义模块
const uniq = require('uniq')

m1.showData()
m1.showMsg()
console.log(m2.data);
console.log(m2.msg);
m2.sum(1,2)
m2.sub(3,4)
const arr = [1,3,3,4,2,5]
console.log(uniq(arr));
