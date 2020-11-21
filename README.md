### ES6模块化操作流程
 1. 创建文件结构如下
			-3_ES6_modular
				-src
					-app.js
					-module1.js
					-index.html
				-.babelrc
				
 2. babel编译为ES5，命令如下：babel ./src -d ./build
		browserify继续编译，命令如下：browserify ./build/app.js -o ./build/build.js
		备注：命令不要记！！我们学习的是模块化的暴露、引入语法，不是命令，以后也不敲命令。
 3. index.html页面中引入build/build.js