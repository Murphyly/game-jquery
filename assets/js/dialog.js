var j = 0;

function createDialogo ( dialogs ) {

  var Textdialogo = [dialogs],
  cont = 0;
  dialogo = Textdialogo[cont].split('');

  for(i = 0; i < dialogo.length; i++) {
    (function(i){
      setTimeout(function(){
          if (j < 124) {
            $('#dialogo').text($('#dialogo').text() +   dialogo[i]);
            j++;
          }
          else {
            $('#dialogo').text(" ");
            j = 0;
          }
          if (i == dialogo.length-1 ) {
            Mousetrap.bind('enter', function() {
                if (dialogs[cont+1]) {
                $('#dialogo').text('');
                cont += 1;
                Textdialogo = dialogs[cont].split('');
                createDialogo( Textdialogo );
                }
            });
          }
      }, 90*i); 
    }(i));
  }
}