$(document).ready(function(){
    $('select').formSelect();
  });


$(document).ready(function(){
    $('.modal').modal();
    $('#add-contact').click(getContactData);
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