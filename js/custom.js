(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });
    

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });
    


    // PARALLAX EFFECT
    $.stellar({
      horizontalScrolling: false,
    }); 

    

    // MAGNIFIC POPUP
    if ($.fn.magnificPopup) {
      $('.image-popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        gallery:{
          enabled:true
        },
        zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
        }
      });
    }


    // SMOOTH SCROLL
    $(function() {
      $('.custom-navbar a:not(#dark-mode-toggle), #home a').on('click', function(event) {
        var href = $(this).attr('href');
        if (!href || href.charAt(0) !== '#') return;
        var $anchor = $(href);
        if (!$anchor.length) return;
        $('html, body').stop().animate({
          scrollTop: $anchor.offset().top - 60
        }, 600, 'swing');
        event.preventDefault();
      });
    });  

    // GOTO TOP
    $(function() {
      $('#myBtn').on('click', function(e) {
        e.preventDefault();
        $('html, body').stop().animate({ scrollTop: 0 }, 500, 'swing');
      });
    });

    // DARK / LIGHT MODE (dark default, light via .light-mode)
    $(function() {
        const darkModeToggle = $('#dark-mode-toggle');
        const body = $('body');
        const moonIcon = 'fa-moon-o';
        const sunIcon = 'fa-sun-o';

        function applyTheme(isLight) {
            if (isLight) {
                body.addClass('light-mode');
                darkModeToggle.find('i').removeClass(moonIcon).addClass(sunIcon);
            } else {
                body.removeClass('light-mode');
                darkModeToggle.find('i').removeClass(sunIcon).addClass(moonIcon);
            }
        }

        let isLight = localStorage.getItem('lightMode') === 'true';
        applyTheme(isLight);

        darkModeToggle.on('click', function(e) {
            e.preventDefault();
            isLight = !isLight;
            localStorage.setItem('lightMode', isLight);
            applyTheme(isLight);
        });
    });

    // SCROLL REVEAL
    $(function() {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce || !('IntersectionObserver' in window)) {
            $('.reveal').addClass('in');
            return;
        }
        const io = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        $('.reveal').each(function() { io.observe(this); });
    });

})(jQuery);
