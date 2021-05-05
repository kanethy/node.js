//开启一次性定时器
//间隔时间单位是毫秒
//3秒后执行一次回调函数
let timer=setTimeout(function(){
	console.log('boom!');
},3000);

/*//改成箭头函数
setTimeout(()=>{
	console.log('boom!');
},3000);
*/

//清楚定时器
clearTimeout(timer);



//开启周期性定时器
let timer1=setInterval(()=>{
	console.log('lalala!');
},3000);


//清除定时器
clearInterval(timer1);



let count=0;
let timer2=setInterval(()=>{
	console.log('kk');
	//打印一次加一
	count++;
	if(count===3){
		clearInterval(timer2);
	}
},1000);
