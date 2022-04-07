$(document).ready(function () {
  // Sticky navigation
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px",
    }
  );

  // Animated on scroll
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass(
        "animate__animated animate__fadeIn animate__slow"
      );
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "40%",
    }
  );

  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animate__animated animate__zoomIn");
    },
    {
      offset: "40%",
    }
  );

  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass(
        "animate__animated animate__pulse animate__repeat-2"
      );
    },
    {
      offset: "40%",
    }
  );

  $(".js--wp-5").waypoint(
    function (direction) {
      $(".js--wp-5").addClass("animate__animated animate__swing");
    },
    {
      offset: "40%",
    }
  );
});
