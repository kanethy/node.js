//引入express模块
const express=require('express');
//console.log(express);
//创建web服务器
const app=express();

//设置端口号
app.listen(8800);


//路由: 处理特点的请求
//包括请求的URL和请求的方法

//假设浏览器端请求的URL：/login
//请求的方法是：get
//如果浏览器端一旦发送的请求满足URL和方法，则自动执行回调函数
app.get('/login',(req,res)=>{
	//console.log('有一个登录的请求');
	//这两个对象和之前HTTP模块下的对象不一样
	//req请求对象
	//res响应对象
	//作出响应
	res.send('这是登录的网页');
	
});