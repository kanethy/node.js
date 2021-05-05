/*console.log(1);   //打印输出
console.info(2);   //输出消息
console.warn(3);    //输出警告
console.error(4);    //输出错误*/

//开始计时
console.time('kk');
for(let i=1;i<=10000;i++){

}
//结束计时
console.timeEnd('kk');

console.time('tt');
let i=1;
while(i<=10000){
	i++;
}
console.timeEnd('tt');

console.time('kaney');
i=1;
do{
	i++;
}while(i<=10000);
console.timeEnd('kaney');