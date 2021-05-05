//引入fs模块
const fs=require('fs');
//1，创建目录一个mydir的目录   make direcotry
/*fs.mkdir('mydir',(err)=>{
	//err 可能产生的错误
	if(err) throw err;
})
*/
//fs.mkdirSync('mydir2');


//2，读取目录中的内容
/*fs.readdir('../day02',(err,result)=>{
	//err  可能产生的错误
	if(err) throw err;
	//result 读取到的内容
	console.log(result);
})*/



/*let arr=fs.readdirSync('../day02');
console.log(arr);*/



//3，移除目录，只能移除空目录  remove
/*fs.rmdir('mydir',(err)=>{
	if(err) throw err;
})
*/
//fs.rmdirSync('mydir2');


//4.写入文件/创建文件
/*fs.writeFile('1213.txt','今天天气灰蒙蒙的!',(err)=>{
	if(err) throw err;
	console.log('数据写入成功');
})

fs.writeFileSync('01.txt','下周没课，再去趟非洲');
*/


/*//5，追加写入
fs.appendFile('1213.txt','\n不想要出门!',(err)=>{
	if(err) throw err;
	console.log('数据写入成功');
})
*/


/*let arr=['kk','tt','chuchu','lulu','dd','lala','momo'];
for(let i=0;i<arr.length;i++){
	fs.appendFileSync('data.txt',arr[i]+' ');
}
*/

//6,读取文件
/*fs.readFile('1213.txt',(err,data)=>{
	
	if(err) throw err;
	//data是读取到的数据,格式为buffer,需要转为字符串
	console.log(String(data));
})	*/

/*let result=fs.readFileSync('data.txt');
console.log(String(result));*/


//7，删除文件
/*fs.unlink('1213.txt',(err)=>{
	if(err) throw err;
	console.log('删除成功');
})*/

//fs.unlinkSync('01.txt');

//8,检测文件是否存在
/*let result=fs.existsSync('data.txt');
console.log(result);*/

if(fs.existsSync('data.txt')){
	fs.unlinkSync('data.txt');
}

if(fs.existsSync('mydir')===false){
	fs.mkdirSync('mydir');
}