var sps=['%','^','&','*','(',')','-','+','=','{','}','[',']','|',':',';','<',',','>','.','/','?','!',"~"],
	pttc=/'[\s\S]'/g;
function special(c){return sps.indexOf(c)!=-1;}
function expandstr(e){
	var str=e.text().split(""),
		txt="",
		fsp=$("<span></span>");
	e.after(fsp);
	fsp.append(e);
	e=fsp;
	for(var i=0,len=str.length;i<len;i++){
		if(special(str[i])){
			e.text(txt);
			txt="";
			var sp=$("<span></span>").attr("id","symbol").text(str[i]);
			e.after(sp);
			e=$("<span></span>");
			sp.after(e);
		}else txt+=str[i];
	}
	e.text(txt);
}
function markcode(e){
	var ch=e.contents();
	for(var i=0,len=ch.length;i<len;i++){
		var cls=ch[i].className;
		if(typeof(cls)=="undefined")expandstr(ch.eq(i));
		else if(cls=="hljs-function"||cls=="hljs-params")markcode(ch.eq(i));
	}
	ch=e.find("*");
	for(var i=0,len=ch.length;i<len;i++)if(pttc.test(ch.eq(i).text()))ch.eq(i).attr("id","char");
}
$(function(){
	var chs=$("pre.cpp>code.hljs");
	for(var i=0,len=chs.length;i<len;i++)markcode(chs.eq(i));
});