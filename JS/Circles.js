function randomcolor(){
	var r=parseInt(Math.random()*256).toString(16);
	var b=parseInt(Math.random()*256).toString(16);
	var g=parseInt(Math.random()*256).toString(16);
	return "#"+r+g+b;
}
var bd=$("body"),
	$d=$("<div></div>"),
	sty={
		"border-radius":"50%",
		"width":"0px",
		"height":"0px",
		"position":"absolute",
		"pointer-events":"none",
		"opacity":"1",
		"z-index":"2147483647"
	};
function gene(e){
	var pg=[e.pageX,e.pageY];
	bd.unbind("click");
	$d.css(sty);
	$d.css({
		"border":"2px solid "+randomcolor(),
		"left":pg[0],
		"top":pg[1]
	});
	var x=parseInt(pg[0])-150,
		y=parseInt(pg[1])-150;
	$d.animate({
		width:"300px",
		height:"300px",
		left:x.toString()+"px",
		top:y.toString()+"px",
		opacity:"0"
	},400,function(){bd.bind("click",gene);});
}
$(function(){
	$d.css(sty);
	$("body").append($d);
	bd.bind("click",gene);
});