$(document).ready(function () {
  if ($(".home").length) {
    var hrWidth = $("div ul div hr").width();
    $("hr").width(hrWidth);
    $("hr").css({ "margin-left": "0" });
  }

  //============================== search ==================================

  $("#filter").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".formList li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
  //============================= search ===================================

  //=============================== highlight =================================

  $(".sidenav a").click(function () {
    var selected = $(this).attr("href");
    $(selected).addClass("highlight");

    setTimeout(function () {
      $(selected).removeClass("highlight");
    }, 1000);
  });

  //================================== highlight ==============================

  // ========================= Change Active Tab On Navbar ====================

  $(".nav-item a").click(function (e) {
    if (!$(this).text() == "Blackboard") {
      $(this).parent().addClass("active").siblings().removeClass("active");
    }
  });
  // ========================= Change Active Tab On Navbar ====================

  // ========================= Forms Select Tag Other field ====================

  $("select").change(function () {
    className = $(this).attr("class");

    if ($("." + className).val() == "Other") {
      $("#OtherInput").show();
      $("#other").prop("required", true);
    } else {
      $("#OtherInput").hide();
      $("#other").prop("required", false);
    }
  });

  // ========================= Forms Select Tag Other field ====================

  // ========================= FAQ arrow ====================

  $(".card-header a").click(function () {
    var obj = $(this);

    setTimeout(function () {
      var myClass = obj.attr("class");
      if (myClass.match("collapsed")) {
        obj.find(".fas").addClass("arrow-right");
        obj.find(".fas").removeClass("arrow-down");
      } else {
        $(".arrow-down").addClass("arrow-right");
        $(".fas").removeClass("arrow-down");

        obj.find(".fas").removeClass("arrow-right");
        obj.find(".fas").addClass("arrow-down");
      }
    }, 0.01);
  });

  // ========================= FAQ arrow ====================

  function windowSize() {
    if ($(window).width() > 1267) {
      $(".googleMap").attr("width", "700");
      $(".googleMap").attr("height", "450");
    } else if ($(window).width() < 1267 && $(window).width() > 1149) {
      $(".googleMap").attr("width", "600");
      $(".googleMap").attr("height", "400");
    } else if ($(window).width() < 1149 && $(window).width() > 827) {
      $(".googleMap").attr("width", "750");
      $(".googleMap").attr("height", "450");
    } else if ($(window).width() < 827 && $(window).width() > 585) {
      $(".googleMap").attr("width", "550");
      $(".googleMap").attr("height", "450");
    } else if ($(window).width() < 585 && $(window).width() > 420) {
      $(".googleMap").attr("width", "400");
      $(".googleMap").attr("height", "300");
    } else if ($(window).width() < 420 && $(window).width() > 320) {
      $(".googleMap").attr("width", "300");
      $(".googleMap").attr("height", "250");
    } else if ($(window).width() < 320) {
      $(".googleMap").attr("width", "270");
      $(".googleMap").attr("height", "250");
    }
  }

  windowSize();

  $(window).resize(function () {
    windowSize();
  });

  // ========================= Adding More Fields ====================

  var counter = 3;

  $("#addButton").click(function () {
    if (counter > 7) {
      return false;
    }

    if (counter >= 3) {
      $("#removeButton").css("visibility", "visible");
    }
    var newTextBoxDiv = $(document.createElement("div")).attr(
      "id",
      "TextBoxDiv" + counter
    );

    newTextBoxDiv
      .after()
      .html(
        "<p style='margin-bottom: 0.2rem'><label> " +
          "</label>" +
          '<input type="text" style="margin-left: 3px;" id="course' +
          counter +
          '" value="" placeholder="Course Code" required></p>'
      );

    newTextBoxDiv.appendTo(".more");

    counter++;
    if (counter > 7) {
      $("#addButton").prop("disabled", true);
    }
  });
  // ========================= Adding More Fields ====================
  // ========================= Removing Fields ====================

  $("#removeButton").click(function () {
    counter--;

    if (counter <= 3) {
      $("#TextBoxDiv" + counter).remove();
      $("#removeButton").css("visibility", "hidden");
      return false;
    }

    $("#TextBoxDiv" + counter).remove();
    $("#addButton").prop("disabled", false);
  });

  // ========================= Removing Fields ====================
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
