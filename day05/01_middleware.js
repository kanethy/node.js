//中间件

const express=require('express');
const app=express();
app.listen(8080);

//添加中间件，拦截对URL  /list的请求
//中间件需要写在路由前面
//参数1：要拦截的URL
app.use('/list',(req,res,next)=>{
	//console.log('拦截到了对/list的请求');
	//req 拦截的请求，也就是请求对象
	//获取查询字符串传递的数据
	//console.log(req.query);
	//如果提供的用户不是root
	//则响应'请使用管理员账户'
	//否则往后执行
	if(req.query.uname!=='root'){
		res.send('请使用管理员账户');
	}else{
		//next是一个函数，表示执行下一个中间件或者路由、
		next();
	}
	//res 响应的对象

});

//后台商品列表的路由，只有管理员root才有权限查看
//  get   /list
app.get('/list',(req,res)=>{
	res.send('这是后台的商品列表');
});



//价格打8折
app.use('/shopping',(req,res,next)=>{
	//console.log(req.query);
	//不允许随便响应数字，
	//如果是数字认为是状态码
	req.query.price*=0.8;
	next();
	//console.log(price);
});


app.get('/shopping',(req,res)=>{
	res.send('商品的价格为：'+req.query.price+'￥');
});