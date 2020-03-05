$(document).ready(function(){
	$('scroll_btn').hide();
	$(window).scroll(function(){
		var scroll=$(window).scrollTop();
		console.log("scroll: "+scroll);
		if(scroll>100){
		$('.scroll_btn').show();
		}
		else{
		$('.scroll_btn').hide();
		
		}
	});
	$(".scroll_btn").click(function(){
	$("body,html").animate({"scrollTop":"0px"},500);
	});
	var w=$(window).width();
		var left_val = $(".container").offset() .left ;
		$('.end_of_sale_img .img-main').css("margin-right","-" + left_val + "px");
	$(window).resize(function(){
		var left_val = $(".container").offset() .left ;
		$('.end_of_sale_img .img-main').css("margin-right","-" + left_val + "px");
	});
});