//普通连接


//引入mysql模块
const mysql=require('mysql');
//创建连接对象  Connection——连接
const c=mysql.createConnection({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'tedu'  //连接后要进入的数据库
});

//执行连接
//c.connect();
//执行SQL语句,会自动建立连接
//参数1：要执行的SQL语句
//参数2：回调函数，用于获取执行的结果
//query是一个异步的方法
c.query('select *from emp',(err,result)=>{
	//err可能产生的错误
	if(err) throw err;
	//result  SQL语句的执行结果
	console.log(result);
});