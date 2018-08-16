$(function(){
	window.doc=document;
	var ch=$("#cnblogs_post_body").find(":header"),
		chs=ch.clone(),
		sons=[];
	for(var i=0,len=chs.length;i<len;i++){
		if(chs[i].tagName=="H1")chs[i].innerHTML=""+chs[i].innerHTML;
		else if(chs[i].tagName=="H2")chs[i].innerHTML="&emsp;&ensp;"+chs[i].innerHTML;
		else if(chs[i].tagName=="H3")chs[i].innerHTML="&emsp;&ensp;&emsp;&ensp;"+chs[i].innerHTML;
		else if(chs[i].tagName=="H4")chs[i].innerHTML="&emsp;&ensp;&emsp;&ensp;&emsp;&ensp;"+chs[i].innerHTML;
		else if(chs[i].tagName=="H5")chs[i].innerHTML="&emsp;&ensp;&emsp;&ensp;&emsp;&ensp;&emsp;&ensp;"+chs[i].innerHTML;
		else if(chs[i].tagName=="H6")chs[i].innerHTML="&emsp;&ensp;&emsp;&ensp;&emsp;&ensp;&emsp;&ensp;&emsp;&ensp;"+chs[i].innerHTML;
		var bt=$("<button></button>").attr("id","contentlinks").append(chs[i]);
		bt.click(function(){window.scrollTo(0,doc.getElementById(this.childNodes[0].id).offsetTop-80);});
		sons.push(bt,"<br>");
	}
	$("#menu").append(sons);
});