$(document).ready(function () {

  function getCurentFileName(){
    var pagePathName= window.location.pathname;
    return pagePathName.substring(pagePathName.lastIndexOf("/") + 1);
}

  if (getCurentFileName() == "index.html") {
    var hrWidth = $("div ul div hr").width();
  $("hr").width(hrWidth);
  $("hr").css({ "margin-left": "0" });
  }

   // search ================================================================
  $("#filter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".formList li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  $("d").click(function(){
    $("p:first").addClass("intro");
  });
 // search ================================================================

  // highlight ================================================================

  $('.sidenav a').click(function(){

  $($(this).attr('href')).addClass("highlight").delay(1000).queue(function(){
    $(this).removeClass("highlight").dequeue();
  });

 });

  // highlight ================================================================

  $(document).on('click', '.nav-item a', function (e) {
    $(this).parent().addClass('active').siblings().removeClass('active');
});



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
