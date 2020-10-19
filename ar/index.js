$(document).ready(function () {
  var hrWidth = $("div ul div hr").width();
  $("hr").width(hrWidth);
  $("hr").css({ "margin-left": "0" });
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 150) {
    $(".obj").addClass("skew");
    $(".vis").addClass("skew2");
    $(".mis").addClass("skew3");
  }

  if (scroll >= 600) {
    $(".service").addClass("fadeinleft");
  }
});
