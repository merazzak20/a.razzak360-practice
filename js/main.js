jQuery(document).ready(function(){

    /* STICKY NAVBAR */
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 300) {
        $("[data-sticky]").addClass("secondary");
      }
      else{
        $("[data-sticky]").removeClass("secondary");
      }
      scroll();
    });

    /* WATER REFFLE EFFECT */
    "use script"
    $('#slider').ripples({
        dropRadius: 10,
        perturbance: 0.01,
      });

    /* ANIMATED TEXT */
    var typed = new Typed('.text', {
    strings: ["I LOVE <span class='color'>CODING....</span>", "ARE YOU SHARE <span class='color'>THIS???</span>"],
      typeSpeed: 90,
      loop: true
      });

    /* TEAM */
    $('.owl-carousel').owlCarousel({
      margin: 15,
      loop: true,
      lazyLoad: true,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
        0: {
          items: 1
        },
        767: {
          items: 1
        },
        991: {
          items: 2
        },
        1199: {
          items: 3,
        },
        1920: {
          items: 3
        }
      }
    });

    
    $('.single-item').slick({
      dots: true,
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      slidesToScroll: 1,
    });




});