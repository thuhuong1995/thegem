function showVersion() {
  var submenu = document.getElementById("version-list");
  if (submenu.style.display === "none") {
    submenu.style.display = "block";
  } else {
    submenu.style.display = "none";
  }
}

function showProin() {
  var submenu = document.getElementById("proin-list");
  if (submenu.style.display === "none") {
    submenu.style.display = "block";
  } else {
    submenu.style.display = "none";
  }
}
function showSecondmenu() {
  var submenu = document.getElementById("second-menu");
  if (submenu.style.display === "none") {
    submenu.style.display = "block";
    $(".fa-chevron-down").toggleClass("show");
  } else {
    submenu.style.display = "none";
    $(".fa-chevron-right").toggleClass("hidden");
  }
}

$(document).ready(function () {
  $(".header-bar__btn").click(function () {
    $(this).toggleClass("open");
    $(".header-tool").toggleClass("hidden");
    $(".header-menu").toggleClass("show");
  });
});
