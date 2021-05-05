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