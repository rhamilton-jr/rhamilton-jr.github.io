var header = 'off'

function showheaderhideheader() {
  if (header === 'off') {
    header = 'on'
    $('#navid').show();
  }else {
    header = 'off'
    $('#navid').hide();
  }
}

$('#hamburgermenu').click(showheaderhideheader)