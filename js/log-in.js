$(document).ready(function() {
  $('#countries').change(function() {
    var code = $(this).val();
    $('#code').val(code);
    $('#number').focus();
  });

  $('#number').on('input', function() {
    if ($(this).val().length === 10) {
      $('#btn-next').attr('disabled', false);
      $('#btn-next').addClass('btn-next-active');
    } else {
      $('#btn-next').attr('disabled', 'disabled');
      $('#btn-next').removeClass('btn-next-active');
    }
  });
	
  $('#btn-next').click(function() {
    // Numeros random
    var code = (Math.floor(Math.random() * 900) + 100);
    alert('Tu código es: LAB-' + code);
    $(this).attr('href', '../views/verify.html');
  });
});

