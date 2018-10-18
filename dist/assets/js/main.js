$(function(){
    $('select').niceSelect();
    $('.datepicker').flatpickr({
        dateFormat: "Y-m-d",
        disable : ['2018-10-23']
    });

    /* Testimonial Slider */
    $('.testimonial').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        prevArrow: $('.slider-controls .arrow.left'),
        nextArrow: $('.slider-controls .arrow.right')
    });

    $('.box-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        prevArrow: $('.box-slider-controls .arrow.left'),
        nextArrow: $('.box-slider-controls .arrow.right')
    });


    /* Custom Select menu */
    $('.custom-select').customSelect();

    /* Toggle Menu */
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        $('.main-navigation').css({"top" : $('.navbar').height() + 34 });
        $('.main-navigation').toggleClass('close');
      });

})