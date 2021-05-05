//console.log('模块引入成功');
//module当前模块的对象
//console.log( module );
//module.exports 当前导出的对象
//把一个新的对象作为了导出对象
/*
module.exports={
  id:1,
  ename:'range'
}
*/
function fn(){
  return 2;
}
//可以直接使用原来的对象module.exports，往里边添加属性或者方法
module.exports.age=18;
module.exports.play=function(){
  return '然哥正在玩单杠';
}
module.exports.a=fn;
//exports和module.exports指向同一个对象，为了简化操作
//使用exports往导出对象中添加了一项
exports.b=3;
//默认两者是完全等价的
console.log(exports===module.exports);
//如果module.exports指向一个新的对象,此时exports和module.exports不再等价
module.exports={
  name:'然哥'
}
console.log(exports===module.exports)
//console.log(module);

var person={};
person.age=18;
person.play=function(){

}
