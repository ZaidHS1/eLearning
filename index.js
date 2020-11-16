$(document).ready(function () {
  

if ($('.home').length) {
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

 $(".Devices").change(function(){

  if ($(".Devices").val() == "Other") {
    $("#OtherInput").show();
    $("#other").prop('required',true);
  }else{
    $("#OtherInput").hide();
    $("#other").prop('required',false);
  }
 });

// ========================= FAQ arrow ====================

$(".card-header a").click(function() {

  var obj = $(this);
  
  setTimeout(
    function()
    {
      var myClass = obj.attr("class")
      if (myClass.match("collapsed")) {
        
        obj.find(".fas").removeClass("arrow-down");
        obj.find(".fas").addClass("arrow-right");
        
      } else{
          $(".fas").removeClass("arrow-down");
         

        obj.find(".fas").removeClass("arrow-right");
        obj.find(".fas").addClass("arrow-down");
      }
    }, 0.01);

    

});



// ========================= FAQ arrow ====================
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
