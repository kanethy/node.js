//引入express，express是路由器下的一个功能
//需要下载express模块 npm install express
const express=require('express');
//创建路由器对象
const router=express.Router();


//网路由器中添加路由
//用户列表的路由是  get   方法是/list

router.get('/list',(req,res)=>{
	res.send('这是用户的列表');
});

//这个路由器最终要给web服务器使用，需要导出路由器对象router
module.exports=router;