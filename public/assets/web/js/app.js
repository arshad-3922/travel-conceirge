$(document).ready(function () {
  var current_fs, next_fs, previous_fs; //fieldsets
  var left, opacity, scale; //fieldset properties which we will animate
  var animating; //flag to prevent quick multi-click glitches

  $(".next").click(function () {
    if (animating) return !1;
    (animating = !0),
    (current_fs = $(this).parent()),
    (next_fs = $(this).parent().next()),
    $("#progressbar li")
      .eq($("fieldset").index(next_fs))
      .addClass("active"),
      next_fs.show(),
      current_fs.animate({
        opacity: 0
      }, {
        step: function (e, t) {
          (scale = 1 - 0.2 * (1 - e)),
          (left = 50 * e + "%"),
          (opacity = 1 - e),
          current_fs.css({
              transform: "scale(" + scale + ")",
              position: "absolute",
            }),
            next_fs.css({
              left: left,
              opacity: opacity
            });
        },
        duration: 800,
        complete: function () {
          current_fs.hide(), (animating = !1);
        },
        easing: "easeInOutBack",
      });
  });
  $(".previous").click(function () {
    if (animating) return !1;
    (animating = !0),
    (current_fs = $(this).parent()),
    (previous_fs = $(this).parent().prev()),
    $("#progressbar li")
      .eq($("fieldset").index(current_fs))
      .removeClass("active"),
      previous_fs.show(),
      current_fs.animate({
        opacity: 0
      }, {
        step: function (e, t) {
          (scale = 0.8 + 0.2 * (1 - e)),
          (left = 50 * (1 - e) + "%"),
          (opacity = 1 - e),
          current_fs.css({
              left: left
            }),
            previous_fs.css({
              transform: "scale(" + scale + ")",
              opacity: opacity,
            });
        },
        duration: 800,
        complete: function () {
          current_fs.hide(), (animating = !1);
        },
        easing: "easeInOutBack",
      });
  });
});

$("#shipAd").change(function () {
  this.checked ?
    $(".shipping-address-div").fadeIn("slow") :
    $(".shipping-address-div").fadeOut("slow");
});
// ========================================= Owl carousel ============================================================//
$('#services').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  center: false,
  navText: ["<img src='./images/back.png' class='arrows'>", "<img src='./images/forword.png' class='arrows'>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 2
    }
  }
})
$('#booking-service').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  center: false,
  navText: ["<img src='./images/back-2.png' class='arrows'>", "<img src='./images/forword-2.png' class='arrows'>"],
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true,
    },
    600: {
      items: 2,
      nav: false,
      dots: true,
    },
    1000: {
      items: 3
    }
  }
})

$(document).ready(function () {

  $(".enter-icon").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $(".enter-input");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  $(".enter-icon-2").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $(".enter-input-2");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  $(".enter-icon-3").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $(".enter-input-3 ");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  setTimeout(function () {
    $('.preloader').fadeOut(100);
  }, 1000);

});


new WOW().init();