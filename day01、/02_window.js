//在JS下变量和函数是否在全局作用域下
var a=1;
function fn(){
	return 2;
}

//使用全局对象访问——window
//变量和函数都是全局，所处的作用域就是全局作用域
console.log(window.a);
console.log(window.fn());