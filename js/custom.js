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


    // SMOOTH SCROLL
    $(function() {
      $('.custom-navbar a:not(#dark-mode-toggle), #home a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  

    // DARK MODE
    $(function() {
        const darkModeToggle = $('#dark-mode-toggle');
        const body = $('body');
        const moonIcon = 'fa-moon-o';
        const sunIcon = 'fa-sun-o';

        // Funzione per applicare il tema
        function applyTheme(isDarkMode) {
            if (isDarkMode) {
                body.addClass('dark-mode');
                darkModeToggle.find('i').removeClass(moonIcon).addClass(sunIcon);
            } else {
                body.removeClass('dark-mode');
                darkModeToggle.find('i').removeClass(sunIcon).addClass(moonIcon);
            }
        }

        // Controlla il localStorage al caricamento della pagina
        let isDarkMode = localStorage.getItem('darkMode') === 'true';
        applyTheme(isDarkMode);

        // Gestisce il click sul pulsante
        darkModeToggle.on('click', function(e) {
            e.preventDefault();
            isDarkMode = !isDarkMode;
            localStorage.setItem('darkMode', isDarkMode);
            applyTheme(isDarkMode);
        });
    });

})(jQuery);
