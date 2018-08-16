$(function(){
	$("#mainm").append($("#blog_stats"));
	$("#stats_post_count").text($("#stats_post_count").text().trim()).after("<br>");
	$("#stats_article_count").text($("#stats_article_count").text().trim()).after("<br>");
	$("#header").remove();
	var fr=$("#friend"),
		mbt=$("#mainbt"),
		mbts=$("#mainbt span"),
		mm=$("#mainm"),
		cm=$("#cmenu"),
		mnbt=$("#menubt");
	$("#but").click(function(){
		if(fr.css("height")!="0px")fr.animate({height:"0px"});
		else fr.animate({height:"262px"});
	});
	mbt.click(function(){
		if(mm.css("left")!="0px"){
			setTimeout(function(){mm.animate({left:"0px"},200);},100);
			setTimeout(function(){mbt.animate({left:"180px"},200);mbts.text("«");},0);
		}else{
			setTimeout(function(){mm.animate({left:"-200px"},200);},100);
			setTimeout(function(){mbt.animate({left:"-20px"},200);mbts.text("»");},0);
		}
	});
	mnbt.click(function(){
		if(cm.css("right")!="0px"){
			setTimeout(function(){cm.animate({right:"0px"},200);},100);
			setTimeout(function(){mnbt.animate({right:"410px"},200);},0);
		}else{
			setTimeout(function(){cm.animate({right:"-430px"},200);},100);
			setTimeout(function(){mnbt.animate({right:"-20px"},200);},0);
		}
	});
});