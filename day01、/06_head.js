//node.js自动给每个文件添加了构造函数，
//程序员写的代码自动出现在函数中，
//所有里面的变量和函数都是局部的
//(function(exports,require,module,_filename,_dirname){
	

//引入07_eye.js模块,一旦引入成功，会自动执行07_eye.js中的代码
//如果同一级目录下的模块，需要加./开头
//得到的是另一个模块导出的对象
//把得到的放到变量obj中
let obj=require('./07_eye.js');
console.log(obj);

//直接使用07_eye.js里面的变量a
console.log(obj.a1,obj.myfn());




//})
