$(function(){
    //$('select').niceSelect();
    $('.datepicker').flatpickr({
        dateFormat: "Y-m-d",
        disable : ['2018-10-23']
    });

    /* Testimonial Slider */
    $('.testimonial').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        prevArrow: $('.slider-controls .arrow.left'),
        nextArrow: $('.slider-controls .arrow.right')
    });

    $('.box-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        prevArrow: $('.box-slider-controls .arrow.left'),
        nextArrow: $('.box-slider-controls .arrow.right'),
        responsive : [{
            breakpoint: 960,
            settings :"unslick"
        }]
    }); 


    $('.thumbnail-slider').slick({        
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,                        
        responsive : [{
            breakpoint: 768,
            settings : {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                centerMode: true,
                centerPadding: '10px',
            }
        },{
            breakpoint: 800,
            settings : {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                centerMode: false,
                centerPadding: '10px',
            } 
        }
    ]
    });


    /* Custom Select menu */
    $('.custom-select').customSelect();

    /* Toggle Menu */
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");        
        if($(this).data("toggle") == "mobile"){
            $('.main-navgitaion-mobile').css({"top" : $('.mobile-navigation').height() });
            $('.main-navgitaion-mobile').toggleClass('close');
        }else{
            $('.main-navigation').css({"top" : $('.navbar').height() + 34 });
            $('.main-navigation').toggleClass('close');
        }
        
      });


      /* Accordion */
      $('.accordion').beefup({
        openSingle: true,
      });


});

function doResize() {
    // FONT SIZE
    var ww = $('body').width();
    var maxW = 1920;
    ww = Math.min(ww, maxW);
    var fw = ww*(10/maxW);
    var fpc = fw*100/16;
    var fpc = Math.round(fpc*100)/100;
    $('html').css('font-size',fpc+'%');
}