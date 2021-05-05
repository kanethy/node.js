//引入核心模块querystring
//只要安装了node.js,就出现了这些核心模块
const querystring=require('querystring');


//声明变量保存一组查询字符串
let str='kw=dell&price=4999';
//获取传递的数据dell和4999
//使用查询字符串模块下的方法，将查询字符串解析为字符串
let obj=querystring.parse(str);
console.log(obj);
console.log(obj.kw);
console.log(obj.price);



let str1='keyword=thinkpad&enc=utf-8&pvid=20';

let obj1=querystring.parse(str1);
console.log(obj1);
console.log(obj1.keyword);
console.log(obj1.enc);
console.log(obj1.pvid);




