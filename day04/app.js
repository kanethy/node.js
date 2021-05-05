const express=require('express');
//引入用户路由器user.js
const userRouter=require('./user.js');
const productRouter=require('./product.js');
//console.log(userRouter);
const app=express();
app.listen(8080);

//把用户路由器挂载到web服务器下
//给所有路由中的URL添加前缀/user
//参数1：添加前缀
//参数2：要挂载的路由器
app.use('/user',userRouter);

app.use('/product',productRouter);


