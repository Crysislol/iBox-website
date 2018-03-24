$(function() {
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: false
  });

  resize();

  $('.button-collapse').sideNav();

  $(".dropdown-button").dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: true, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: true, // Displays dropdown below the button
    alignment: 'left', // Displays dropdown with edge aligned to the left of button
    stopPropagation: false // Stops event propagation
  });

  var carousel_interval = 3000;
  var int;

  function run() {
    int = setInterval(function() {
      $('.carousel').carousel('next');
    }, carousel_interval);
  }

  function stop() {
    clearInterval(int);
  }
  $('.carousel').hover(stop, run);



  $(window).scroll(function() {
    var navbar = $('#navbar');
    var offset = $(document).scrollTop();
    if (offset > 100) {
      navbar.css('opacity', '0.8');
    } else {
      navbar.css('opacity', '1');
    }
  });

  if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
      backToTop = function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#back-to-top').removeClass('scale-out');
        } else {
          $('#back-to-top').addClass('scale-out');
        }
      };
    backToTop();
    $(window).on('scroll', function() {
      backToTop();
    });

    $('#back-to-top').on('click', function(e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }
  $('.modal').modal();

  $('ul.tabs').tabs();

  AOS.init({
    disable:'mobile'
  });


  function resize(){
    var win = $(window).width();
    if (win < 650) {
      $('.contact .container .row').removeClass('valign-wrapper');
    } else {
      $('.contact .container .row').addClass('valign-wrapper');
    }
  }

  $(window).on('resize', function() {
    var win = $(this);
    if (win.width() < 650) {
      $('.contact .container .row').removeClass('valign-wrapper');
    } else {
      $('.contact .container .row').addClass('valign-wrapper');
    }
  });


});
