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
            $('html,body').animate({scrollTop : 0},1000);
            $('.main-navgitaion-mobile').css({"top" : $('.mobile-navigation').height() });
            $('.main-navgitaion-mobile').toggleClass('close');
            $('.booknow-form-mobile').addClass('close');
        }else{
            $('.main-navigation').css({"top" : $('.navbar').height() + 34 });
            $('.main-navigation').toggleClass('close');
        }
        
      });


      /* Accordion */
      $('.accordion, .menu-accordion').beefup({
        openSingle: true,
      });

      $('.choose-language-accordion').beefup({
        openSingle: true,
      });


      /* Video Player */
      $(".video-player").simplePlayer();


      /* Book Now Mobile Toggle */
      $('.booknow-mobile').click(function(){
          console.log($(this).text(), $(this).html());
          if($(this).text() == "Book Now"){
              $(this).text("Close");
          }else{
            $(this).text("Book Now");
          }
        $('.booknow-form-mobile').toggleClass('close');
        $('.main-navgitaion-mobile').addClass('close');
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

function changeLanguage(elem){
    $('.choose-language-accordion').find('.beefup__head a').html($(elem).html());
    $('.choose-language-accordion').beefup().close();
    $('input[name="language"]').val($(elem).data("value"));
}