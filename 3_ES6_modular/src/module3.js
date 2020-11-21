/* 
	module3中使用【统一暴露】
*/

const school = '尚硅谷'
const person = {
	name:'老刘',
	age:19,
	sex:'女'
}
function getLaoliu(){
	console.log(person);
}

//统一暴露(精简版)---用的多
export {school,person,getLaoliu}

//统一暴露(完整版)
// export {school as a,person as b,getLaoliu as c}