$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  const url = window.location.pathname;

  if (scroll > 0) {
    $('#header').addClass('bg-white');
    $('#navbar').removeClass('navbar-light');
    $('#navbar').addClass('navbar-dark');
    $('#menu-white').addClass('hidden');
    $('#menu-white').removeClass('shown');
    $('#search-white').addClass('hidden');
    $('#search-white').removeClass('shown');
    $('#menu-dark').addClass('shown');
    $('#search-dark').addClass('shown');

    if (url == '/templates/interna.php') {
      $('#menu-white').addClass('hidden');
      $('#menu-white').removeClass('shown');
      $('#search-white').addClass('hidden');
      $('#search-white').removeClass('shown');
      $('#search-dark').addClass('shown');
      $('#search-dark').removeClass('hidden');
    }
  } else {
    $('#header').removeClass('bg-white');
    $('#navbar').removeClass('navbar-dark');
    $('#navbar').addClass('navbar-light');
    $('#menu-white').addClass('shown');
    $('#menu-white').removeClass('hidden');
    $('#search-white').addClass('shown');
    $('#search-white').removeClass('hidden');
    $('#menu-dark').removeClass('shown');
    $('#search-dark').removeClass('shown');

    if (url == '/templates/interna.php') {
      $('#menu-white').addClass('hidden');
      $('#menu-white').removeClass('shown');
      $('#search-dark').removeClass('hidden');

      $('#search-white').removeClass('shown');
      $('#search-white').addClass('hidden');
    }
  }
});

// ANIMATIONS
AOS.init();

// CAROUSEL
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
});

// ANIMATION ON SCROLL

var $target = $('.anime'),
  animationClass = 'anime-start',
  counterClass = 'Single',
  offset = ($(window).height() * 3) / 4;

function animeScroll() {
  var documentTop = $(document).scrollTop();

  $target.each(function () {
    var itemTop = $(this).offset().top;
    if (documentTop > itemTop - offset) {
      $(this).addClass(animationClass);
    } else {
      $(this).removeClass(animationClass);
    }
  });
}

var $target2 = $('.anime2'),
  animationClass2 = 'anime-start2',
  offset2 = ($(window).height() * 3) / 4;

function animeScroll2() {
  var documentTop2 = $(document).scrollTop();

  $target2.each(function () {
    var itemTop2 = $(this).offset().top;
    if (documentTop2 > itemTop2 - offset2) {
      $(this).addClass(animationClass2);
    } else {
      $(this).removeClass(animationClass2);
    }
  });
}

var $target3 = $('.anime3'),
  animationClass3 = 'anime-start3',
  offset3 = ($(window).height() * 4) / 4;

function animeScroll3() {
  var documentTop3 = $(document).scrollTop();

  $target3.each(function () {
    var itemTop3 = $(this).offset().top;
    if (documentTop3 > itemTop3 - offset3) {
      $(this).addClass(animationClass3);
    } else {
      $(this).removeClass(animationClass3);
    }
  });
}

// animeScroll();
// animeScroll2();
// animeScroll3();

$(document).scroll(function () {
  animeScroll();
  animeScroll2();
  animeScroll3();
});
