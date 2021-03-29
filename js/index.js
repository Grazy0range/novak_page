// slide

$(document).ready(function () {
  $(".slider").slick({
    speed: 1000,
    easing: "easy",
  });
});

// up_button

const btnScrollTop = document.querySelector(".scroll_up");

btnScrollTop.addEventListener("click", function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() < "100") {
      $(btnScrollTop).css({ opacity: "0" });
    } else {
      $(btnScrollTop).css({ opacity: "1" });
    }
  });
});

// id_scroll

function slowScroll(id) {
  var offset = 0;
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - offset,
    },
    500
  );
  return false;
}

// burger-menu

$(document).ready(function () {
  $(".burger__menu, .burger_link").click(function (event) {
    $(".burger__menu, nav").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

// Popup

let popup = document.getElementById("popup");
let popupTogle = document.getElementById("btn");
let popupClose = document.getElementById("close_button");

popupTogle.onclick = function () {
  popup.style.display = "block";
};

popupClose.onclick = function () {
  popup.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == popup_body) {
    popup.style.display = "none";
  }
};
