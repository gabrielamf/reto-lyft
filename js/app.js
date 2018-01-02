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
    $number.focus();
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
    alert('Tu código es: LAB-' + codeRandom);
    localStorage.userCodeRandom = codeRandom;
    $inputCode.val('');
    $inputCode.focus();
  }
});