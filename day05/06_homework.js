const express=require('express');
const mysql=require('mysql');

const app=express();
app.listen(8080);

const pool=mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'',
	port:'3306',
	database:'tedu',
	connectionLimit:15
});

//托管静态资源到public目录
app.use(express.static('public'));




//根据表单的提交创建对应路由
app.get('/add',(req,res)=>{
	//获取表单的数据，格式为查询字符串
	//console.log(req.query);
	//把数据插入到数据库
	pool.query('insert into dept set ?',[req.query],(err,result)=>{
		if(err) throw err;
		console.log(result);
		//因为是异步执行的，所有需要放到里面才会打印了结果后，才显示部门添加成功
		//当数据插入成功才会响应
		res.send('部门添加成功');
	});
	
})




