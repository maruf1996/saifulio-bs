$(function () {
  // Mobile Menu
  $(".mobile-menu-toggle").click(function () {
    $(".mobile-menu").slideToggle();
  });
  $(".mobile-menu nav ul li.has-submenu").click(function () {
    $(this).children("ul").slideToggle();
  });
  // magnific popup
  $(".video-btn a").magnificPopup({
    type: "iframe",
    iframe: {
      patterns: {
        youtube: {
          index: "youtube.com/",
          src: "https://www.youtube.com/embed/%id%?autoplay=1",
        },
      },
    },
  });
  // Counter up
  $(".counter").counterUp({
    delay: 10,
    time: 1500,
  });

  // Wow js
  new WOW().init();

  // Slick Slider
  $(".fd-slider").slick({
    slidesToShow: 3,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1580,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
});
