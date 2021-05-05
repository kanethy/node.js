const express=require('express');
//const querystring=require('querystring');
//1,引入body-parser中间件
const bodyParser=require('body-parser');
const app=express();
app.listen(8080);


//中间件放到路由之前
app.use(express.static('public'));

//中间件放到路由之前
//2,使用body-parser中间件，将post请求的数据解析为对象
app.use(bodyParser.urlencoded({
	//在解析为对象的时候，是否使用扩展的查询字符串模块qs
	//false表示不使用扩展的模块qs,会使用核心模块querystring
	extended:false  
	//extended——扩展
}));



/*app.post('/login',(req,res)=>{
	req.on('data',(chunk)=>{
		let str=chunk.toString();
		let str1=querystring.parse(str);
		console.log(str1.uname,str1.upwd);
	});
	res.send('登录成功');
});*/

app.post('/login',(req,res)=>{
	//3，获取post请求数据
	console.log(req.body);
	res.send('登录成功');
});


