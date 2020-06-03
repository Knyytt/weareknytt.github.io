var slideIndex = 0;
var slideIndex2 = 0;
var slideIndex3 = 0;
var slideIndex4 = 0;
var slideIndex5 = 0;
var slideIndex6 = 0;
carousel();
carousel2();
carousel3();
carousel4();
carousel5();
carousel6();

//Photography carousel eye-catching
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

//Photography carousel clean
function carousel4() {
  var i;
  var x = document.getElementsByClassName("slide4");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex4++;
  if (slideIndex4 > x.length) {slideIndex4 = 1}
  x[slideIndex4-1].style.display = "block";
  setTimeout(carousel41, 3000); // Change image every 8 seconds
}
function carousel41() {
  var i;
  var x = document.getElementsByClassName("slide4");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex4++;
  if (slideIndex4 > x.length) {slideIndex4 = 1}
  x[slideIndex4-1].style.display = "block";
  setTimeout(carousel41, 9000); // Change image every 8 seconds
}

function carousel5() {
  var i;
  var x = document.getElementsByClassName("slide5");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex5++;
  if (slideIndex5 > x.length) {slideIndex5 = 1}
  x[slideIndex5-1].style.display = "block";
  setTimeout(carousel51, 6000); // Change image every 8 seconds
}

function carousel51() {
  var i;
  var x = document.getElementsByClassName("slide5");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex5++;
  if (slideIndex5 > x.length) {slideIndex5 = 1}
  x[slideIndex5-1].style.display = "block";
  setTimeout(carousel51, 9000); // Change image every 8 seconds
}

function carousel6() {
  var i;
  var x = document.getElementsByClassName("slide6");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex6++;
  if (slideIndex6 > x.length) {slideIndex6 = 1}
  x[slideIndex6-1].style.display = "block";
  setTimeout(carousel6, 9000); // Change image every 8 seconds
}
