function rand_code(chars, lon){
  code = "";
  for (x=0; x < lon; x++)
  {
  rand = Math.floor(Math.random()*chars.length);
  code += chars.substr(rand, 1);
  }
  return code;
  }
  
  caracteres = "0123456789";
  longitud = 3;
  
  alert("LAB-" + (rand_code(caracteres, longitud)));

$("#contact-phone").keypress(function () {
  var value = $("#contact-phone").val().length;
  // console.log(valueT);
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

});

$(document).ready(function(){
    $('select').formSelect();
  });


$(document).ready(function(){
    $('.modal').modal();
    $('#next').click();
  });

 




  //   function getContactData (){
//     var name = $('#contact-name').val();
    // var phone = $('#contact-phone').val();
    // var phone = ('#contact-phone').val();


    
    // console.log(name, $phone);
    // addContactData(name, $phone);

    // $('#contact-name').val('');
    // $('#contact-phone').val('');
    // $phone.val=('');

// }
//     $('main').append(finalTemplate);
//     $('h5').html('Contactos: ' + count);
//     swal("Good job!", "Ya tienes otro amigo", "success");
// }