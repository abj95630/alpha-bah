window.onscroll = function() {scrollFunction()};
let mybutton = document.getElementById("myBtn");

function scrollFunction() {
  if (document.documentElement.scrollTop > 30 || document.body.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}