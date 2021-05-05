//周长
function girth(r){
	return 2*Math.PI*r;
}
//面积
function area(r){
	return Math.PI*Math.pow(r,2);
}

//把两个函数添加到导出对象中
module.exports={
	girth:girth,
	area:area

}

//把对象先存到变量中，再导出也可以
/*let object={
	girth:girth,
	area:area
}
module.exports=object;*/

