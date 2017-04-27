$(document).ready(function(){
    $(".slide-one").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            992:{
                items:1,
                nav:true,
                loop:true
            }
        }
    });
    $(".slide-two").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        navText:false,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            666:{
                items:2,
                nav:true
            },
            992:{
                items:3,
                nav:true,
                loop:true
            }
        }
    });
});

