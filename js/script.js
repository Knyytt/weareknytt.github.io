//Menu button click
function menuButton() {
  var hex = document.getElementsByClassName("hidden-hex");
  for (var i = 0; i < hex.length; i++) {
    hex[i].classList.toggle("hide");
  }
}
