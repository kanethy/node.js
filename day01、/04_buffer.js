//创建buffer，存储数据,一个汉字占3个字节，一个英文占1个字节
let buf=Buffer.alloc(5,'abcde');
//console.log(buf);
//将buffer数据转为字符串
console.log(String(buf),buf.toString());
