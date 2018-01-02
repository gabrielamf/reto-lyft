$(document).ready(function() {
  // INICIO
  $('#inicio').toggle();
  setTimeout(function() {
    $('#splash').delay().fadeOut(1000);
    $('#inicio').toggle();
  }, 5000);

  // CÓDIGO PAISES	
  var $countries = $('#countries');
  var code = $('#code');
  code.val(51);
  $countries.on('change', countrieCode);
  function countrieCode() {
    code = $(this).val();
    $('#code').val(code);
  };
	
  // LOG IN
  var $number = $('#number');
  $number.on('input', validateUserNumber);
  function validateUserNumber() {
    if ($(this).val().length === 10) {
      $('#btn-next-logIn').removeClass('disabled');
      $('#btn-next-logIn').addClass('btn-next-active');
    } else {
      $('#btn-next-logIn').addClass('disabled');
      $('#btn-next-logIn').removeClass('btn-next-active');
    }
  }

  // GENERA CODIGO RANDOM
  var $boton = $('#btn-next-logIn');
  $boton.on('click', generateRandomCode);
  function generateRandomCode() {
    var codeRandom = Math.floor((Math.random() * 900) + 100);
    alert('Tu código es: LAB-' + codeRandom);
    // console.log(codeRandom);
    // console.log(localStorage.userCodeRandom);
    localStorage.userCodeRandom = codeRandom;
  };
	
  // VALIDA CODIGO RANDOM
  var $inputCode = $('#inputCode');
  $inputCode.focus();
  $inputCode.on('input', validateUserCode);
  function validateUserCode() {
    // var $campText = $inputCode.val();
    if ($inputCode.val() === localStorage.userCodeRandom) {
      console.log('valido');
      $('#btn-next-verify').removeClass('disabled');
      $('#btn-next-verify').addClass('btn-next-active');
    } else {
      $('#btn-next-verify').addClass('disabled');
      $('#btn-next-verify').removeClass('btn-next-active');
    }
  }
	
  // REENVIA CODIGO RANDOM
  var $botonResend = $('#btn-resend');
  $botonResend.on('click', resendRandomCode);
  function resendRandomCode() {
    var codeRandom = Math.floor((Math.random() * 900) + 100);
    alert('Tu nuevo código es: LAB-' + codeRandom);
    localStorage.userCodeRandom = codeRandom;
    $inputCode.val('');
    $inputCode.focus();
  }
	
  // VALIDATE FORM USER
  var $name = $('#name');
  var $lastname = $('#lastname');
  var $email = $('#inputEmail');
  var $checked = $('input[type="checkbox"]');
	
  var validateNAme = false;
  var validateLastname = false; 
  var validateEmail = false;  
  var validateChecked = false;  
	
  function activeButton() {
    if (validateEmail && validateNAme && validateLastname && validateChecked) {
      $('#btn-next-user').removeClass('disabled');
      $('#btn-next-user').addClass('btn-next-active');
    } 
  }
	
  function desactiveButton() {
    $('#btn-next-user').addClass('disabled');
    $('#btn-next-user').removeClass('btn-next-active');
  }
	
  $email.on('input', function(event) {
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(REGEXEMAIL.test($(this).val()));
    console.log($(this).val());
    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true;
      activeButton(); 
    } else {
      desactiveButton();
    }
  });
	
  $name.on('input', function() {
    if ($(this).val().length >= 3) {
      validateNAme = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  $name.on('input', function() {
    if ($(this).val().length >= 3) {
      validateLastname = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  $checked.on('click', function(event) {
    if (event.target.checked) {
      //   alert('entre');
      validateChecked = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });
	
  $('btn-next-user').on('click', function(event) {
    event.preventDefault();
    localStorage.email = $email.val();
    localStorage.name = $password.val();
    localStorage.lastname = $email.val();
  });
});