window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navigation").style.height = "80px";
    document.getElementById("logo").style.width= "70px";
  } else {
    document.getElementById("navigation").style.height = "100px";
    document.getElementById("logo").style.width= "80px";
  }
}