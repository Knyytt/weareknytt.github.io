//Testimonials carousel
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 8000); // Change image every 8 seconds
}

//Menu button click
function menuButton() {
  var hex = document.getElementsByClassName("hidden-hex");
  for (var i = 0; i < hex.length; i++) {
    hex[i].classList.toggle("hide");
  }
}
