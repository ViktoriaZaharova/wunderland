$('.home-slider').slick({
    slidesToShow: 1,
    dots: true,
    fade: true,
    appendArrows: '.home-slider__nav',
    appendDots: '.home-slider__dots',
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg" alt=""></button>'
});

// mobile menu
$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
   $('.mobile-menu').fadeOut();
});
