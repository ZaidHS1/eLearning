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

  $("d").click(function () {
    $("p:first").addClass("intro");
  });
  //============================= search ===================================

  //=============================== highlight =================================

  $(".sidenav a").click(function () {
    $($(this).attr("href"))
      .addClass("highlight")
      .delay(1000)
      .queue(function () {
        $(this).removeClass("highlight").dequeue();
      });
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
  // $(window).resize(function() {
  //   if ($(window).width() < 960) {
  //      alert('Less than 960');
  //   }
  //  else {
  //     alert('More than 960');
  //  }
  // });

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
});
// ========================= Adding More Fields ====================
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
