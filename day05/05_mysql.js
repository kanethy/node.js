//连接池

const mysql=require('mysql');
//创建连接池对象
const pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'tedu',
	connectionLimit:20   //设置连接池的大小 默认值15
});

//执行SQL语句会自动建立连接
//参数1：要执行的SQL语句
//参数2：把用户提供的数据放入到数组中,就会过滤，
//然后把过滤的数据替换占位符，避免数据库攻击
//防止SQL注入使用占位符
//参数2：回调函数，用于获取执行的结果
/*pool.query('select * from emp where eid=?',['1 or 1=1'],(err,result)=>{
	if(err) throw err;
	console.log(result);
});*/


//练习：往员工表emp中插入一条数据，在SQL语句中所有语句都需要过滤
//因为设置了自增，所有eid可以给参数为null
/*pool.query('insert into emp values(?,?,?,?,?,?)',[null,'kaneth',0,'1991-4-22',90000,20],(err,result)=>{
    if(err) throw err;
	console.log(result);
});
*/


//插入一个对象形式的数据
//要求属性名和列名称保存一致
//如果列名称不存在，则会使用默认值
let person={
	eid:null,
	ename:'kk',
	//sex:0,
	birthday:'1992-8-3',
	salary:700000,
	deptId:20
};
//插入对象形式的数据
//SQL语句不属于标准的，mysql模块中才可以使用
pool.query('insert into emp set ?',[person],(err,result)=>{
	if(err) throw err;
	console.log(result);
});



