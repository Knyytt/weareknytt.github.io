var slideIndex = 0;
var slideIndex2 = 0;
var slideIndex3 = 0;
carousel();
carousel2();
carousel3();

//Photography carousel
function carousel() {
  var i;
  var x = document.getElementsByClassName("slide1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel1, 3000); // Change image every 8 seconds
}
function carousel1() {
  var i;
  var x = document.getElementsByClassName("slide1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel1, 9000); // Change image every 8 seconds
}

function carousel2() {
  var i;
  var x = document.getElementsByClassName("slide2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > x.length) {slideIndex2 = 1}
  x[slideIndex2-1].style.display = "block";
  setTimeout(carousel21, 6000); // Change image every 8 seconds
}

function carousel21() {
  var i;
  var x = document.getElementsByClassName("slide2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > x.length) {slideIndex2 = 1}
  x[slideIndex2-1].style.display = "block";
  setTimeout(carousel21, 9000); // Change image every 8 seconds
}

function carousel3() {
  var i;
  var x = document.getElementsByClassName("slide3");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > x.length) {slideIndex3 = 1}
  x[slideIndex3-1].style.display = "block";
  setTimeout(carousel3, 9000); // Change image every 8 seconds
}
