//引入【分别暴露】的模块
import {data,showData,showMsg} from './module1'

//引入【分别暴露】的模块+重命名
import {data as data2} from './module2'

//引入【分别暴露】的模块+打包引入
import * as module1 from './module1'

//引入【统一暴露】的模块（统一暴露和分别暴露，最后引入的方式都是一样的）
import {school,person,getLaoliu} from './module3'

//引入【默认暴露】的模块
import module4 from './module4'

//引入多种暴露方式的模块
import module5,{teacher1,teacher2,stu1,stu2} from './module5'
console.log(module5);
console.log(teacher1);
console.log(teacher2);
console.log(stu1);
console.log(stu2);
