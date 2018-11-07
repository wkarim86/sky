$(function(){

    var enableDates = [{
        from: '2018-11-05',
        to : '2018-11-15'
    }];
    
    var flatpikr = $('.datepicker').flatpickr({
        dateFormat: "Y-m-d",
        enable : enableDates
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
                rtl: true
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

/* Cover Image tag to background */
imagetoBackground();

/* Ads notification banner */
setTimeout(function(){
    $('.ad-notification').addClass('show');
},2000);
$('.ad-notification .close-arrow').on('click', function(){
    $('.ad-notification').removeClass('show');
});

});


function changeLanguage(elem){
    $('.choose-language-accordion').find('.beefup__head a').html($(elem).html());
    $('.choose-language-accordion').beefup().close();
    $('input[name="language"]').val($(elem).data("value"));
    var language = $(elem).data("value");
    $('.slick-slider').attr("dir", "ltr");
    switch(language){
        case "en":
            $('html').attr("dir","");      
            $('link[href~="assets/css/ar.css"]').remove();
            flatpickr.localize(flatpickr.l10ns.en);
            flatpickr(".datepicker");
        break;
        case "ar" : 
            $('html').attr("dir","rtl");
            $('head').append('<link href="assets/css/ar.css" rel="stylesheet" type="text/css">');
            flatpickr.localize(flatpickr.l10ns.ar);
            flatpickr(".datepicker");
            break;
        case "ch":
            $('html').attr("dir","");
            $('link[href~="assets/css/ar.css"]').remove();
            flatpickr.localize(flatpickr.l10ns.en);
            flatpickr(".datepicker");
            break;
        default :
            $('html').attr("dir","");            
            $('link[href~="assets/css/ar.css"]').remove();
            flatpickr.localize(flatpickr.l10ns.en);
            flatpickr(".datepicker");
            break;
    }
    
}



/* Image to Background */
function imagetoBackground(){
    $('.img2bg').each(function(){
        let src = $(this).attr("src") || $(this).data("src");
        let target = $(this).data("target");
        $(this).parent().addClass('bgcover').css({'background' : 'url("' + src+ '")'});
        $(this).hide();
    });
}