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
});
