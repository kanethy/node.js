let obj=require('./09_homework_circle.js');

console.log(obj);
console.log(obj.girth(4).toFixed(2));
console.log(obj.area(4).toFixed(2));



//当前模块的绝对路径+模块名称
console.log(__filename);
//当前模块的绝对路径
console.log(__dirname);