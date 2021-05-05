const express=require('express');
const app=express();
app.listen(8080);

app.get('/search',(req,res)=>{
	res.sendFile(__dirname+'/search.html');
});

//根据表单的请求创建对应的路由
//get  /mysearch
app.get('/mysearch',(req,res)=>{
	//get方式传递。格式为查询字符串,
	//在浏览器地址栏可以看到
	//通过获取URL就可以看到
	//console.log(req.url,req.method);
	//express下提供的一个方法可以迅速获取
	console.log(req.query);
	res.send('搜索成功');
});


//路由传参
//获取任意一个模块的详情
//获取方法：get   获取方法：/package
//pname  此时表示形参，用于接收传递的实参(数据)
app.get('/package/:pname',(req,res)=>{
	//获取路由传参的数据,格式是对象
	console.log(req.params);
	res.send('这是模块的详情：'+req.params.pname);
});


//练习：创建添加到购物车的路由，(get  /shopping)，传递商品的编号lid和价格price，最后在浏览器端响应 '商品编号：xx  价格：xxx￥'
app.get('/shopping/:lid/:price',(req,res)=>{

	//res.send('商品编号：'+req.params.lid+' '+'商品价格：'+req.params.price+'￥');
	res.send(`商品编号：${req.params.lid} <br> 商品价格：${req.params.price}￥`)
});