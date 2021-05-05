//引入不以路径开头的目录模块ran
const ran=require('ran');

//调用导出的函数
//./同一级
//../上一级
//../../上上一级
console.log(ran.fn('./node_modules'));