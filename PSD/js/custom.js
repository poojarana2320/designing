$(document).ready(function() {
     $(".owl-carousel1").owlCarousel({
     
          loop:true,
    margin:10,
    nav:true,
    navText: [
      '<i class="fa fa-angle-left"></i> ',
      '<i class="fa fa-angle-right"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
     });

      $(".best-seller").owlCarousel({
     
          loop:true,
    margin:10,
    nav:true,
    navText: [
      '<i class="fa fa-angle-left"></i> ',
      '<i class="fa fa-angle-right"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        991:{
            items:4
        }
    },
     });


      $('.my_slick1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.my_slick2'
    });
    $('.my_slick2').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.my_slick1',
      dots: true,
      centerMode: true,
      focusOnSelect: true
    });
    $('.my_slick3').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.my_slick4',
      prevArrow: '<button class="slick-prev" aria-label="Previous" ><i class="fa fa-angle-left"></i></button>',
      nextArrow: '<button class="slick-next" aria-label="Next" ><i class="fa fa-angle-right"></i></button>'
    });
    $('.my_slick4').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.my_slick3',
      focusOnSelect: true,
      prevArrow: '<button class="slick-prev" aria-label="Previous" ><i class="fa fa-angle-left"></i></button>',
      nextArrow: '<button class="slick-next" aria-label="Next" ><i class="fa fa-angle-right"></i></button>',
        responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }

  ] 
      
       
    
    });
    $('.date_select').select2();

    $('.product-desc-tab ul li a').click(function(){
   var new_id=$(this).parent().attr('id').split("-");
   $('.product-desc-tab ul li').removeClass("li_active");
   $(this).parent().addClass("li_active");
   $(".tab-content").hide();
   $(".product-"+new_id[1]).show();

});


$(".nav > li i").click(function(){
    if ($(this).next("ul").is(":visible")) {
        $(this).addClass("fa-plus-circle");
        $(this).removeClass("fa-minus-circle");
        $(".submenu").slideUp();
    }else{
        $(".submenu").hide();
        $(".nav > li i").addClass("fa-plus-circle");
        $(".nav > li i").removeClass("fa-minus-circle");
        $(this).addClass("fa-minus-circle");
        $(this).removeClass("fa-plus-circle");
        $(this).next("ul").slideDown();
    }
});
$(".navbar-nav .static1 i").click(function(){
    if ($(this).next(".mega_menu").is(":visible")) {
        $(this).addClass("fa-plus-circle");
        $(this).removeClass("fa-minus-circle");
        $(this).next(".mega_menu").slideUp();
    }else{
        $(".mega_menu").hide();
        $(".navbar-nav .static1 i").addClass("fa-plus-circle");
        $(".navbar-nav .static1 i").removeClass("fa-minus-circle");
        $(this).addClass("fa-minus-circle");
        $(this).removeClass("fa-plus-circle");
        $(this).next(".mega_menu").slideDown();
    }
});
$('.up').click(function(){
      $('.myNumber').val(parseInt($('.myNumber').val())+1);
  console.log(parseInt($('.myNumber').val()));
});
$('.down').click(function(){
     var new_value=parseInt($('.myNumber').val())-1;
   if(new_value==-1)
   {
    $('.down').css({
    "cursor": "wait","pointer-events": "none"});
   }
   else{
    $('.myNumber').val(new_value);}
});

  var w=$(window).width();
console.log("width:"+w);
  var top=((38.79*w)/100)/2;
console.log("top:"+top);
  $('.owl-carousel .owl-nav button.owl-next').css("top",top);
  $('.owl-carousel .owl-nav button.owl-prev').css("top",top+"px");

$(window).resize(function(){
var w=$(window).width();
console.log("width:"+w);
  var top=((38.79*w)/100)/2;
console.log("top:"+top);
  $('.owl-carousel .owl-nav button.owl-next').css("top",top);
  $('.owl-carousel .owl-nav button.owl-prev').css("top",top+"px");

});

});





 


