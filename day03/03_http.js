//引入HTTP模块
const http=require('http');
//创建web服务器
const app=http.createServer();
//设置端口号
app.listen(8800);

//访问服务器
//http://127.0.0.1:8800
//http://localhost:8800

//接收浏览器的请求
//事件：一旦有请求进来，自动触发回调函数
//request 事件名称，固定用法
app.on('request',(req,res)=>{
	//console.log('有一个人买煎饼');
	//req  请求的对象
	//获取请求的URL和请求的方法
	console.log(req.url,req.method);

	//res  响应的对象
	//设置响应的内容
	//res.write('this is your jianbing');
	
	//设置响应的状态码和头信息
	//设置状态码为302，设置location为http://www.tmooc.cn/
	/*res.writeHead(302,{
		Location:'http://www.tmooc.cn/'
	});*/
	
	//设置状态码为404，响应内容为not found
	res.writeHead(404,{
		'Content-Type':'text/html;charset=utf-8'
	});
	res.write('<h2>找不到此网页</h2>');


	//发送并结束响应
	res.end();
});