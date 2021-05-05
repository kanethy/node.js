
console.log(2);
//开启
//立即执行定时器
let timer=setImmediate(()=>{
	console.log(1);
});
//清除
//clearImmediate(timer);


//立即执行
process.nextTick(()=>{
	console.log(4);
})

console.log(3);