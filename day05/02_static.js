//内置中间件

const express=require('express');
const app=express();
app.listen(8080);

//托管静态资源到指定的目录（public）
//如果浏览器端请求静态资源，不需要路由，会自动寻找
app.use(express.static('public'));

app.use(express.static('files'));