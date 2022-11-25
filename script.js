window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop < 890) {
    document.getElementById("navbar").style.position = "relative";
  } else {
    document.getElementById('navbar').style.position = "fixed";
  }
}