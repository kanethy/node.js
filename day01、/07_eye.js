console.log('眼睛模块');


var a=2;

function fn(){
	return 3;
}

//外部想要使用这个模块下的声明的变量，需要导出才可以
//module:当前模块的对象
//console.log(module);
//module.exports:导出的对象
//如果要导出任何东西，只需要放入到该对象
module.exports={
	num:1,
	a1:a,      //把变量a导出
	myfn:fn    //把函数fn导出
}