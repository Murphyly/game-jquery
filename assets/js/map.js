// Para movimentação do personagem pela tela foram utilizados os seguintes materiais
// https://www.geeksforgeeks.org/how-to-move-an-element-to-left-right-up-and-down-using-arrow-keys/
// https://www.w3schools.com/graphics/game_controllers.asp
// https://www.w3schools.com/jsref/event_key_keycode.asp

var stepSpace = 5;

var map = {
    top: $("#map").height(),
    left: $("#map").width()
};

var avatar = $('#avatar');

function avatarTransform(dir){
  avatar.attr('data-moving','true');
  avatar.attr('data-dir',dir);
}

function avatarDirections (pos, diff, step){
    console.log(avatar.position());
  var currPos = avatar.position()[pos],
      newPos = {};
  if(currPos + step > 0 && currPos + step + diff < map[pos]){
    newPos[pos] = currPos+step;
    avatar.offset(newPos);
  }
}
$(document).ready(function(){

   $('audio#enigma')[0].play()

    createDialogo("Uma guerreira precisa salvar um elfo que nasceu com o fio de corbérculos, um fio que só é gerado a cada 200 anos e dá ao     recém-nascido o poder de controlar qualquer exército de elfos, podendo dominar a dimensão, uma bruxa de Espenldighor esperou 200 anos para sequestrar o elfo, agora você precisa atravessar os portais em 4 dimensões diferentes e decifrar 4 enigmas para conseguir os artefatos mágicos que poderão derrotar a bruxa, ande até o primeiro portal para sua primeira aventura em        Elrigonrd");

    $("canvas").drawImage({
        source: 'assets/img/portal.png',
        x: 60,
        y: 140
    });

    $("canvas").drawImage({
        source: 'assets/img/portal2.png',
        x: 300,
        y: 60
    });

    $("canvas").drawImage({
        source: 'assets/img/portal4.png',
        x: 550,
        y: 200
    });

    $("canvas").drawImage({
        source: 'assets/img/portal3.png',
        x: 750,
        y: 50
    });


  $('body').keydown(function(event){
    if(event){
        switch(event.keyCode) {
          case 87:
          case 38:
            avatarDirections ('top', 62, -stepSpace);
            avatarTransform('up');
            break;
          case 83:
          case 40:
            avatarDirections ('top', 
            
            62, stepSpace);
            avatarTransform('down');
            break;
          case 68:
          case 39:
            avatarDirections ('left', 
            
            31, stepSpace);
            avatarTransform('right');
            break;
          case 65:
          case 37:
            avatarDirections ('left', 31, -stepSpace);
            avatarTransform('left');
            break;
      }
    }
  });
  $('body').keyup(function(){
    avatar.attr('data-moving','false'); 
  });
});