// function splash(param) {
//   var time = param;
//   setTimeout(function () {
//     $('#splashscreen').hide();
//   }, time);
//  }

// $(function() {
//   $("#splashScreen").show().delay(3000).hide();
// });

document.addEventListener("DOMContentLoaded", function(){
  $('#splashScreen').delay(2000).fadeOut('slow');
  
  $('.preloader-wrapper')
      .delay(1000)
      .fadeOut('slow');
});

$(document).ready(function(){
    $('select').formSelect();
  });