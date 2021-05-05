//引入URL模块
const url=require('url');
/*let str='http://codeboy.com:9999/products_detail.html?lid=1';
//使用URL模块下的api将URL解析为对象
let obj=url.parse(str);
console.log(obj);
*/

/*练习：获取url中查询字符串的数据
  https://www.tmooc.cn:443/course/web.html?cid=2004&cname=nodejs
 第1步：解析URL得到查询字符串
 第2步：再次解析查询字符串就可以得到数据
*/


const querystring=require('querystring');

let str1='https://www.tmooc.cn:443/course/web.html?cid=2004&cname=nodejs';
let obj1=url.parse(str1);
let str2=obj1.query;
let obj2=querystring.parse(str2);
console.log(obj2.cid,obj2.cname);