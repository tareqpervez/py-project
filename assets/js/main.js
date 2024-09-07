(function ($) {
    "use strict";
    jQuery(document).ready(function($){

        $(".logo-carousel").owlCarousel({
            item:6,
            margin:30,
            loop:true,
            dots:false,
            nav:false,
        });

        $(".case-studies-carousel").owlCarousel({
            item:3,
            margin:30,
            loop:true,
            dots:true,
            nav:false,
        });

        $(".testimonial-carousel").owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            items:1,
            dots:true,
        });

       
    });

    jQuery(window).load(function(){

    });

 } (jQuery));