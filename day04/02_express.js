const express=require('express');
const querystring=require('querystring');
const app=express();

app.listen(8080);
app.get('/list',(req,res)=>{
	//res.send('这是商品列表');
	//响应文件,需要使用绝对路径
	res.sendFile(__dirname+'/list.html');
});
//获取当前模块的绝对路径
//console.log(__dirname);

//请求方法:get，请求URL：/study
app.get('/study',(req,res)=>{
	//跳转
	res.redirect('http://www.tmooc.cn');
});

//创建路由，请求方法：get，请求URL'/',跳转到/list
app.get('/',(req,res)=>{
	res.redirect('/list');
});


//创建路由，请求方法：post，响应‘成功登录’

//创建路由，请求方法是get，请求URL /login1,响应文件login.html
app.get('/login1',(req,res)=>{
	res.sendFile(__dirname+'/login.html');
});

//根据表单的请求，创建对应的路由
//post   /login2
app.post('/login2',(req,res)=>{
	//获取传递的数据
	//post传递的数据也是流的形式
	//通过事件获取
	//事件：一旦有数据流入，自动执行回调函数获取
	req.on('data',(chunk)=>{
		//chunk是获取的分段数据,格式是buffer
		let obj=chunk.toString();
		//转为字符串后的格式为查询字符串
		//将查询字符串解析为对象
		let obj2=querystring.parse(obj);
		console.log(obj2);
	});
	res.send('登录成功');
});