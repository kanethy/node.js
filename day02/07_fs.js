//引入fs模块
const fs=require('fs');
/*//查看文件的状态：包括文件的创建时间，大小...
//sync 同步
//文件操作，同一级./可以不写
let s=fs.statSync('06_timer.js');
//这个文件的形式
//是否为文件
console.log(s.isFile());
//是否为目录
console.log(s.isDirectory());
//console.log(s);
*/
//异步,不是通过返回值获取结果，通过回调函数获取
//
fs.stat('010_timer.js',(err,s)=>{
	//err 可能产生的错误
	if(err) throw err;
	//s就是获取到的结果
	console.log(s);
})


console.log('end');