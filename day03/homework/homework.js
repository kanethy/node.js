/*创建web服务器，设置端口为8080，根据浏览器请求的URL作出响应
     /index    响应    '这是首页'
     /login    响应    this  is  login page
     /list      响应文件   list.html （同步读取文件，然后把读取到的响应过去）
     /study    跳转   'http://www.tmooc.cn'
     其它     响应 404   Not  found
*/





const http=require('http');
const fs=require('fs');
const app=http.createServer();

app.listen(8080);

app.on('request',(req,res)=>{
	
	if(req.url==='/index'){
		res.writeHead(200,{
			'Content-Type':'text/html;charset=utf-8'
		});
		res.write('这是首页');
		
	}else if(req.url==='/login'){
		res.write('this is login page');
		
	}else if(req.url==='/list'){
		//把读取的数据响应到浏览器，buffer数据隐式转为字符串
		let list=fs.readFileSync('list.html');
		res.write(list);

	}else if(req.url==='/study'){
		res.writeHead(302,{
			Location:'http://www.tmooc.cn'
		});
		
	}else{
		res.writeHead(404);
		res.write('Not found');
		
	}
	res.end();
});