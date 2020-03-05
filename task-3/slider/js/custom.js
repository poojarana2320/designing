$(document).ready(function(){
	$('.my-slider1').slick({
		dots: true,
		prevArrow: '<button class="slick-prev" aria-label="Previous" ><</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" >></button>'
	});
});

$(document).ready(function(){
	$('.my-slider2').slick({
		dots: true,
		prevArrow: '<button class="slick-prev" aria-label="Previous" ><</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" >></button>',

  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]        
	});
});

