var a=1;
function fn(){
	return 2;
}

//a和fn是否为全局下的
//脚本中的变量和函数都不是全局的，所处的作用域肯定不是全局的，叫做模块作用域
console.log(global.a);
console.log(global.fn());