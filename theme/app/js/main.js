
$(document).ready(function () {
    
    // Our members carousel
    $('.owl-carousel.members__logo').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        pagination:false,
        navigation:true,
        autoplay:true,
        autoplayTimeout:1000,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            },
            1400:{
                items:4
            }
        }
    });

    // Blog carousel
    $('.owl-carousel.blog').owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        nav: true,
        pagination:false,
        navigation:true,
        dots: false,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3
            },
            1300: {
                items: 4
            }
        }
    });
});