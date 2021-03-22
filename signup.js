
$(document).ready(function() {
$("#btnt").click(function(e) {

    var firstname = document.getElementById('#FN').val();
    var lastname = document.getElementById('#LN').val();
    var email = document.getElementById('#emailid').val();
    var password = document.getElementById('#pwd').val();
    var cfmpassword = document.getElementById('#cpwd').val();
    var addr = document.getElementById('#addr').val();
    var phone = document.getElementById('#phone').val();
    var dob = document.getElementById('#birthday').val();



    if (firstname.length < 1) {
      $("#FN").css("border-color", "red").css("background-color","#ea907a");
        $('#messagef').html('<span class="error"><em>Please Enter Your FirstName</em></span>').css('color', 'red');
          e.preventDefault();
      }
    if (lastname.length < 1) {
      $("#LN").css("border-color", "red").css("background-color","#ea907a");
        $('#messagel').html('<span class="error"><em>Please Enter Your LastName</em></span>').css('color', 'red');
          e.preventDefault();
      }


    if (email.length < 1) {
      $("#EM").css("border-color", "red").css("background-color","#ea907a");
$('#messagee').html('<span class="error"><em>Please Enter Your E-mail</em></span>').css('color', 'red');
      e.preventDefault();
      }

      var regEx = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
      var validemail = regEx.test(email);
      if (!validemail) {
        $("#EM").css("border-color", "red").css("background-color","#ea907a");
$('#messagee').html('<span class="error"><em>Please Enter a Valid E-mail</em></span>').css('color', 'red');
e.preventDefault();

    }

    if (city.length < 1) {
      $("#C").css("border-color", "red").css("background-color","#ea907a");
        $('#messagec').html('<span class="error"><em>Please Enter Your FirstName</em></span>').css('color', 'red');
          e.preventDefault();
      }


      if (zip.length < 1) {
      $("#Z").css("border-color", "red").css("background-color","#ea907a");
        $('#messagez').html('<span class="error"><em>Please Enter Your FirstName</em></span>').css('color', 'red');
          e.preventDefault();
      }

      if (state.length < 1) {
      $("#S").css("border-color", "red").css("background-color","#ea907a");
        $('#messages').html('<span class="error"><em>Please Enter Your FirstName</em></span>').css('color', 'red');
          e.preventDefault();
      }



    if (password.length == 0) {
      $("#pwd").css("border-color", "red").css("background-color","#ea907a");
$('#messagepwd').html('<span class="error"><em>Please Enter a Password</em></span>').css('color', 'red');
  e.preventDefault();
      }

    if (password.length < 5 & password.length != 0) {
      $("#pwd").css("border-color", "red").css("background-color","#ea907a");
$('#messagepwd').html('<span class="error"><em>Please Your Password should be greater than 5</em></span>').css('color', 'red');
  e.preventDefault();
    }

      var strpass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      var validpass=strpass.test(password);
      if(!validpass)
            {
              $("#pwd").css("border-color", "red").css("background-color","#ea907a");
              $('#messagepwd').html('<span class="error"><em>Min:1 lowercase, 1 uppercase, 1 digit(0,9), 1 special character, min-length(5), max-length(16)</em></span>').css('color', 'red');
                e.preventDefault();
    }


    if (cfmpassword.length == 0) {
      $("#cpwd").css("border-color", "red").css("background-color","#ea907a");
$('#messagecpwd').html('<span class="error"><em>Please Confirm Your Password</em></span>').css('color', 'red');
e.preventDefault();

      }

      var gendcheck = $('#gender').val();
      if (gendcheck==null)
      {
        $("#gender").css("border-color", "red").css("background-color","#ea907a");
        $('#messageg').html('<span class="error"><em>This is required</em></span>').css('color', 'red');
        e.preventDefault();

      }

      if (addr.length==0)
      {
        $("#addr").css("border-color", "red").css("background-color","#ea907a");
        $('#messageaddr').html('<span class="error"><em>Please Enter Your Address</em></span>').css('color', 'red');
        e.preventDefault();

      }



      if (phone.length < 10) {
        $("#phone").css("border-color", "red").css("background-color","#ea907a");
  $('#messagemob').html('<span class="error"><em>Please Enter a Valid Phone Number</em></span>').css('color', 'red');
  e.preventDefault();

        }
          var phoneno = /^\d{10}$/;
      var validphone = phoneno.test(phone);
 if(!validphone)
       {
         $("#phone").css("border-color", "red").css("background-color","#ea907a");
         $('#messagemob').html('<span class="error"><em>Please Enter a Valid Phone Number</em></span>').css('color', 'red');
         e.preventDefault();

       }





  });

});




jQuery(function($) {

  $("#gender").change(function () {
        var end = this.value;
        if(end=="male" ||end=="female" ||end=="other")
        {
          $("#gender").css("border-color", "#00FF00");
          $("#gender").css("border-color", "green").css("background-color","#90ee90");
          $('#messageg').html('<span class="error"><em></em></span>').css('color', 'red');

        }
    });


  $("#FN").on("blur", function() {
    if ($(this).val().length == 0 && $(this).val().length < 1) {
            $("#FN").css("border-color", "red").css("background-color","#ea907a");
      $('#messagef').html('<span class="error"><em>Please Enter Your FirstName</em></span>').css('color', 'red');

    }
  });


  $("#FN").on("keyup", function() {
    if ($(this).val().length == 0 && $(this).val().length < 1) {
            $('#messagef').html('<span><em>Please Enter Your FirstName</em></span>').css('color', 'black');

    }
  });

  $("#FN").on("keyup", function() {
    if ($(this).val().length >= 1) {
      $("#FN").css("border-color", "#00FF00");
      $("#FN").css("border-color", "green").css("background-color","#90ee90");
      $('#messagef').html('<span class="error"><em></em></span>').css('color', 'red');

    }

  });


$("#FN").on("blur", function() {
  if ($(this).val().length >= 1) {
    $("#FN").css("border-color", "#00FF00");
    $("#FN").css("border-color", "green").css("background-color","#90ee90");
    $('#messagef').html('<span class="error"><em></em></span>').css('color', 'red');

      }
});


$("#LN").on("blur", function() {
  if ($(this).val().length == 0 && $(this).val().length < 2) {
    $("#LN").css("border-color", "red").css("background-color","#ea907a");
    $('#messagel').html('<span class="error"><em>Please Enter Your LastName</em></span>').css('color', 'red');

  }
});



$("#LN").on("keyup", function() {
  if ($(this).val().length > 0) {
    $("#LN").css("border-color", "#00FF00");
    $("#LN").css("border-color", "green").css("background-color","#90ee90");
    $('#messagel').html('<span class="error"><em></em></span>').css('color', 'red');
  }
});

$("#LN").on("blur", function() {
  if ($(this).val().length > 0) {
    $("#LN").css("border-color", "#00FF00");
    $("#LN").css("border-color", "green").css("background-color","#90ee90");
    $('#messagel').html('<span class="error"><em></em></span>').css('color', 'red');
      }
});

$("#UN").on("blur", function() {
  if ($(this).val().length == 0 && $(this).val().length <= 2) {
    $("#UN").css("border-color", "red").css("background-color","#ea907a");
    $('#messageu').html('<span class="error"><em>Please Enter Your UserName</em></span>').css('color', 'red');

  }
});

$("#UN").on("keyup", function() {
  if ($(this).val().length >=1 && $(this).val().length <=2) {
    $("#UN").css("border-color", "red").css("background-color","#ea907a");
    $('#messageu').html('<span class="error"><em>Please Enter Your UserName (Your username should be atleast 3 characters. )</em></span>').css('color', 'red');

  }
});

$("#UN").on("keyup", function() {
  if ($(this).val().length > 2) {
    $("#UN").css("border-color", "#00FF00");
    $("#UN").css("border-color", "green").css("background-color","#90ee90");
    $('#messageu').html('<span class="error"><em></em></span>').css('color', 'red');
    }
});

$("#UN").on("blur", function() {
  if ($(this).val().length >2) {
    $("#UN").css("border-color", "#00FF00");
    $("#UN").css("border-color", "green").css("background-color","#90ee90");
    $('#messageu').html('<span class="error"><em></em></span>').css('color', 'red');
    }
});

$("#C").on("blur", function() {
  if ($(this).val().length == 0 && $(this).val().length < 2) {
    $("#C").css("border-color", "red").css("background-color","#ea907a");
    $('#messagec').html('<span class="error"><em>Please Enter Your City</em></span>').css('color', 'red');

  }
});



$("#C").on("keyup", function() {
  if ($(this).val().length > 0) {
    $("#C").css("border-color", "#00FF00");
    $("#C").css("border-color", "green").css("background-color","#90ee90");
    $('#messagec').html('<span class="error"><em></em></span>').css('color', 'red');
  }
});

$("#C").on("blur", function() {
  if ($(this).val().length > 0) {
    $("#C").css("border-color", "#00FF00");
    $("#C").css("border-color", "green").css("background-color","#90ee90");
    $('#messagec').html('<span class="error"><em></em></span>').css('color', 'red');
      }
});


$("#Z").on("blur", function() {
  if ($(this).val().length == 0 && $(this).val().length < 2) {
    $("#Z").css("border-color", "red").css("background-color","#ea907a");
    $('#messagez').html('<span class="error"><em>Please Enter Your ZIP Code</em></span>').css('color', 'red');

  }
});



$("#Z").on("keyup", function() {
  if ($(this).val().length > 0) {
    $("#Z").css("border-color", "#00FF00");
    $("#Z").css("border-color", "green").css("background-color","#90ee90");
    $('#messagez').html('<span class="error"><em></em></span>').css('color', 'red');
  }
});

$("#Z").on("blur", function() {
  if ($(this).val().length > 0) {
    $("#Z").css("border-color", "#00FF00");
    $("#Z").css("border-color", "green").css("background-color","#90ee90");
    $('#messagez').html('<span class="error"><em></em></span>').css('color', 'red');
      }
});

$("#S").on("blur", function() {
  if ($(this).val().length == 0 && $(this).val().length < 2) {
    $("#S").css("border-color", "red").css("background-color","#ea907a");
    $('#messages').html('<span class="error"><em>Please Enter Your State</em></span>').css('color', 'red');

  }
});



$("#S").on("keyup", function() {
  if ($(this).val().length > 0) {
    $("#S").css("border-color", "#00FF00");
    $("#S").css("border-color", "green").css("background-color","#90ee90");
    $('#messages').html('<span class="error"><em></em></span>').css('color', 'red');
  }
});

$("#S").on("blur", function() {
  if ($(this).val().length > 0) {
    $("#S").css("border-color", "#00FF00");
    $("#S").css("border-color", "green").css("background-color","#90ee90");
    $('#messages').html('<span class="error"><em></em></span>').css('color', 'red');
      }
});

$("#pwd, #cpwd").on('focusout', function() {
  if ($('#pwd').val().length > 2 && $('#cpwd').val().length > 2)
   {
    if ($('#pwd').val() == $('#cpwd').val()) {
      $("#pwd").css("border-color", "#00FF00");
      $("#pwd").css("border-color", "green").css("background-color","#90ee90");
      $("#cpwd").css("border-color", "#00FF00");
      $("#cpwd").css("border-color", "green").css("background-color","#90ee90");
          $('#messagecpwd').html('Your passwords match').css('color', 'green');

    } else

$('#messagecpwd').html('<span class="error"><em>Your passwords should match</em></span>').css('color', 'red');
  }
});


$("#pwd").on("keyup", function() {
  if ($(this).val().length < 5 && $(this).val().length != 0) {
  $("#pwd").css("border-color", "red").css("background-color","#ea907a");
    $('#messagepwd').html('<span class="error"><em>Min:1 lowercase, 1 uppercase, 1 digit(0,9), 1 special character, min-length(5), max-length(16)</em></span>').css('color', 'red');
}
});



$("#pwd").on("keyup", function() {
var password = $('#pwd').val();
var strpass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
var validpass=strpass.test(password);
if(validpass)
      {
        $("#pwd").css("color", "black");
        $("#pwd").css("border-color", "green").css("background-color","#90ee90");
        $('messagepwd').html('<span class="error"><em>Strong Password</em></span>').css('color', 'red');
    }
});

$("#pwd").on("blur", function() {
  if ($(this).val().length >1) {
var password = $('#pwd').val();
var strpass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,16}$/;
var validpass=strpass.test(password);
if(!validpass)
      {
        $("#pwd").css("color", "black");
          $("#pwd").css("border-color", "red").css("background-color","#ea907a");
          $('#messagepwd').html('<span class="error"><em>Min:1 lowercase, 1 uppercase, 1 digit(0,9), 1 special character, min-length(5), max-length(16)</em></span>').css('color', 'red');

    }
else if (!valid){
  $("#pwd").css("color", "black");
  $("#pwd").css("border-color", "green").css("background-color","#90ee90");
  $('messagepwd').html('<span class="error"><em>Strong Password</em></span>').css('color', 'red');

}
}
});

$("#pwd").on("keyup", function() {
var password = $('#pwd').val();
var strpass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,16}$/;
var validpass=strpass.test(password);
if(!validpass)
      {
        $("#pwd").css("color", "black");
          $("#pwd").css("border-color", "red").css("background-color","#ea907a");
          $('#messagepwd').html('<span class="error"><em>Min:1 lowercase, 1 uppercase, 1 digit(0,9), 1 special character, min-length(5), max-length(16)</em></span>').css('color', 'red');

    }
});


$("#EM").on("blur", function() {
  var regEx = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
  var email1=$('#EM').val();
  var svalidemail = regEx.test(email1);

  if (!svalidemail) {

  $("#EM").css("border-color", "red").css("background-color","#ea907a");
$('#messagee').html('<span class="error"><em>Please Enter a Valid E-mail</em></span>').css('color', 'red');

}
else{
  $("#EM").css("border-color", "green").css("background-color","#90ee90");
  $('#messagee').html('<span class="error"><em></em></span>').css('color', 'red');

}
});









$("#phone").on("keyup", function() {
  if ($(this).val().length >1 && $(this).val().length < 10) {
    $("#phone").css("border-color", "red").css("background-color","#ea907a");
    $('#messagemob').html('<span class="error"><em>Please Enter A Valid Phone Number</em></span>').css('color', 'red');

  }
});


$("#phone").on("keyup", function() {
  if ($(this).val().length ==10) {
    $("#phone").css("border-color", "#00FF00");
    $("#phone").css("border-color", "green").css("background-color","#90ee90");
    $('#messagemob').html('<span class="error"><em></em></span>').css('color', 'red');
    }
});

$("#phone").on("blur", function() {
  if ($(this).val().length ==10) {
    $("#phone").css("border-color", "#00FF00");
    $("#phone").css("border-color", "green").css("background-color","#90ee90");
    $('#messagemob').html('<span class="error"><em></em></span>').css('color', 'red');
    }
});

$("#addr").on("keyup", function() {
  if ($(this).val().length > 1) {
    $("#addr").css("border-color", "#00FF00");
    $("#addr").css("border-color", "green").css("background-color","#90ee90");
    $('#messageaddr').html('<span class="error"><em></em></span>').css('color', 'red');
    }
});


$("#addr").on("blur", function() {
  if ($(this).val().length < 1) {
    $("#addr").css("border-color", "red").css("background-color","#ea907a");
$('#messageaddr').html('<span class="error"><em>Please Enter Your Address</em></span>').css('color', 'red');
    }
});



$("#phone").on("blur", function() {
  if ($(this).val().length < 10) {
    $("#phone").css("border-color", "red").css("background-color","#ea907a");
$('#messagemob').html('<span class="error"><em>Please Enter Your Phone Number</em></span>').css('color', 'red');
    }
});

$("#birthday").on("blur", function() {
      var dob1 = $('#birthday').val();
     var year = Number(dob1.substr(0, 4));
     var month = Number(dob1.substr(4, 2)) - 1;
     var day = Number(dob1.substr(6, 2));
     var today = new Date();
     var age2 = today.getFullYear() - year;
     if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
       age2--;
     }
     {
       $("#birthday").css("border-color", "#00FF00");
       $("#birthday").css("border-color", "green").css("background-color","#90ee90");
       $('#messagedob').html('<span class="error"><em></em></span>').css('color', 'red');

     }
     if(age2<16){
     $("#birthday").css("border-color", "red").css("background-color","#ea907a");
     $('#messagedob').html('<span class="error"><em>You have to be 16 years old</em></span>').css('color', 'red');
     e.preventDefault();

     }
});

});
