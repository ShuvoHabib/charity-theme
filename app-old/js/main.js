
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
                items:1
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
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});