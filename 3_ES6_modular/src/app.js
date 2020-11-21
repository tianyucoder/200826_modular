//引入【分别暴露】的模块
import {data,showData,showMsg} from './module1'

//引入【分别暴露】的模块+重命名
import {data as data2} from './module2'

//引入【分别暴露】的模块+打包引入
import * as module1 from './module1'

//引入【统一暴露】的模块（统一暴露和分别暴露，最后引入的方式都是一样的）
import {school,person,getLaoliu} from './module3'


