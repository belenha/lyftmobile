
 
 
 // ***** DESACTIVAR BOTON NEXT & CODIGO *****

$("#contact-phone").keypress(function () {
  var value = $("#contact-phone").val().length;

  if (value === '' || value === 9) {
      $("#next").prop("disabled", false);

  } else {
      $("#next").prop("disabled", true);
  }
  
  if (value <= 9) {
      $("#contact-phone").prop("disabled", false);

  } else {
      $("#contact-phone").prop("disabled", true);
  }

 var $randomNumber = 0;
 $randomNumber = parseInt(Math.random() *1000);
 
 $('#next').click(function(){
 swal("Tu codigo de verificación es : LAB- " +  $randomNumber);
 });

});

// ***** SELECT *****

$(document).ready(function(){
    $('select').formSelect();
  });
// ***** MODAL *****

$(document).ready(function(){
    $('.modal').modal();
    $('#next').click();
  });


