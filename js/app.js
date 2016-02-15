$(document).ready(function() {
  var len = $('#slider li').length,
      i = 1;

  setInterval(function() {
    $('#slider li:nth-child('+i+')').animate({
      left: "+=15",
      opacity: 0
    }, 0, "linear", function() {
    });
    $('#slider li:nth-child('+i+')').animate({
      left: "-=15",
      opacity: 1
    }, 250, "linear", function() {
    }).delay(2000).animate({
      left: "-=15",
      opacity: 0
    }, 250, "linear", function() {
    }).animate({
      left: "+=15",
    }, 0, "linear", function() {
    });
    i++;
    i = i > len ? 1 : i;
  }, 2500);
});
