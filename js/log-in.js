/*$(document).ready(function() {
  $('#countries').change(function() {
    var code = $(this).val();
    $('#code').val(code);
    $('#number').focus();
  });

  $('#number').on('input', function() {
    if ($(this).val().length === 10) {
      $('#btn-next-logIn').removeClass('disabled');
      $('#btn-next-logIn').addClass('btn-next-active');
    } else {
      $('#btn-next-logIn').addClass('disabled');
      $('#btn-next-logIn').removeClass('btn-next-active');
    }
  });
	
  $('#btn-next-logIn').click(function() {
    // Numeros random
    var codeRandom = generateCode();
    alert('Tu código es: LAB-' + codeRandom);
    $(this).attr('href', '../views/verify.html');
    $('#number').val('');
  });
	
  function generateCode() {
    return Math.floor((Math.random() * 900) + 100);
	}*/
});

