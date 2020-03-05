if ($(".banner").length){
	var window_height = $(window).height();
	$(".banner .img").css("height", window_height + "px");
}
$(".right-navMain .open-nav li.sub-nav a span").click(function(){
	if($(this).parent("a").next("ul").is(":visible"))
	{
		$(this).parent("a").next("ul").slideUp();
		$(this).parent("a").parent("li").removeClass("active");
	}
	else
	{
		$(this).parent("a").next("ul").slideDown();
		$(this).parent("a").parent("li").addClass("active");
	}
});
$(".navbar .nav li.sub-li").each(function() {
	$(this).children("a").after("<span class='arrow'></span>");
});
$(".navbar .nav li.sub-li .arrow").click(function(){
	if($(this).next(".sub-navMain").is(":visible"))
	{
		$(this).next(".sub-navMain").slideUp();
		$(this).removeClass("open");
	}
	else
	{
		$(".navbar .nav li .sub-navMain").slideUp();
		$(".navbar .nav li.sub-li .arrow").removeClass("open")
		$(this).next(".sub-navMain").slideDown();
		$(this).addClass("open");
	}
});
$(".nav-close").click(function(){
	$(".navbar-toggle").click();
});
if ($(".police-info").length){
	var left_width = $(".police-info .container").offset().left;
	$(".police-info .left-bg").css("width", left_width + "px");
}
if ($(".banner").length){
	var left_width = $(".banner .container").offset().left;
	$(".banner .pageJump-nav").css("left", left_width + "px");
}
$(".pageJump-nav ul li").click(function(){
	var count = $(this).index();
	if (count === 0)
	{
		$("html, body").animate({ scrollTop:  "0px" }, 500);
	}
	if (count === 1)
	{
		
		var top_value = $(".our-infoBlock").offset().top;
		$("html, body").animate({ scrollTop: top_value +"px" }, 500);
	}
	if (count === 2)
	{
		var top_value = $(".testimonials").offset().top;
		$("html, body").animate({ scrollTop: top_value + "px" }, 500);
	}
});
if ($(".page-404Banner").length){
	var footer_height = $("#footer").outerHeight();
	var page_height = $(window).height() - footer_height ;
	$(".page-404Banner").css("height", page_height + "px");
}
$(window).resize(function(){
	if ($(".banner").length){
		var window_height = $(window).height();
		$(".banner .img").css("height", window_height + "px");
	}
	if ($(".police-info").length){
		var left_width = $(".police-info .container").offset().left;
		$(".police-info .left-bg").css("width", left_width+ "px");
	}
	if ($(".banner").length){
		var left_width = $(".banner .container").offset().left;
		$(".banner .pageJump-nav").css("left", left_width + "px");
	}
	if ($(".page-404Banner").length){
		var footer_height = $("#footer").outerHeight();
		var page_height = $(window).height() - footer_height ;
		$(".page-404Banner").css("height", page_height + "px");
	}
});
$(window).scroll(function(){
	if ($(".police-info").length){
		var police_top = $(".police-info").offset().top;
		var window_height = $(window).height();
		var start_value = (police_top - window_height) + 80 ;
		if($(window).scrollTop() > start_value)
		{
			$(".police-info").addClass("animation");
		}
	}
});
 function setupLabel() {
	if ($('.label_check input').length) {
		$('.label_check').each(function(){ 
			$(this).removeClass('c_on');
		});
		$('.label_check input:checked').each(function(){ 
			$(this).parent('label').addClass('c_on');
		});                
	};
	if ($('.label_radio input').length) {
		$('.label_radio').each(function(){ 
			$(this).removeClass('r_on');
		});
		$('.label_radio input:checked').each(function(){ 
			$(this).parent('label').addClass('r_on');

		});
	};
};
$(document).ready(function(){
	$('.label_check, .label_radio').click(function(){
		setupLabel();
	});
	setupLabel(); 
	
/*============= According JS Start Here ================*/	

    $(".faq .faq_accrd li h4.faq_acctitle").click(function() {
        if($(this).hasClass("up_icon")){
			$(this).removeClass("up_icon").next().slideUp();	
		}
		else{
				$(".faq .faq_accrd li h4.faq_acctitle").removeClass("up_icon");
				$(".faq .faq_accrd li .faq_acccnt").slideUp();
				$(this).addClass("up_icon");
				$(this).next().slideDown();
			}
		
    });
	

/*============= According JS Start Here ================*/		
});

/*=============Select Box JS Start Here ================*/	
if ($(".select_cutom").length){
	$(".select_cutom").selectbox();
	//$("#hardik").selectbox();
}
/*=============Select Box JS End Here ================*/

/*=============Banner Background JS Start Here ================*/		

$(".inner_banner").each(function() {
		var imgSrc = $(this).children("img").attr("src");
		$(this).css("background-image", "url(" + imgSrc + ")");
		$(this).children("img").hide();
    });	
	
/*=============Banner Background JS Start Here ================*/	

