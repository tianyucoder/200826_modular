/* 
	module1使用module.exports = xxxx 去暴露，xxx就是暴露的内容
	module.exports和exports不能混用，若混用了，以module.exports
*/
//没有暴露的data和msg(被保护了)
const data = 'atguigu'
const msg = 'hello'

module.exports = {
	showData (){
		console.log(data);
	},
	showMsg(){
		console.log(msg);
	}
}

exports.x = 100 //此行代码不起作用。因为上方写了module.exports
