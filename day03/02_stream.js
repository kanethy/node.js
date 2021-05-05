const fs=require('fs');

// //创建可读取的文件流
// let rs=fs.createReadStream('day05_all.zip');
// //获取读取的数据
// //事件：一旦数据流入到内存，自动触发回调函数
// //on用于添加事件，data是数据流入的事件，固定的写法
// let count=0;
// rs.on('data',(chunk)=>{
// 	//chunk 分段，一段一段的数据
// 	//console.log(chunk);
// 	//每读取一段加1
// 	count++;

// });

// //当读取结束后，再打印事件
// //事件：当读取结束后自动触发回调函数
// //end 结束的事件，固定写法
// rs.on('end',()=>{
// 	console.log(count);
// });


//通过读取流和写入流完成大文件的拷贝
//创建一个可读取的流

let rs=fs.createReadStream('day05_all.zip');
//创建一个可写入的流(相当于一个空文件)
let ws=fs.createWriteStream('day05.zip');
//把读取到的流，通过管道添加到写入流
//管道pipe
rs.pipe(ws);