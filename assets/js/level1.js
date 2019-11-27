var contIMG = 5;
var chance = 2;
var item;

$(document).ready(function () {

    createDialogo("Bem vindo ao resgate do 1º dos 4 artefatos, encontre as 5 pistas escondidas pela esquerda, passando o mouse                   até a pista ficar vísivel e então clique na pista encontrada! ao achar todas as 6 pistas, o enigma será liberado.")
    
    $( ".artefacts" ).each(function( i ) {
        $(this).css({
            marginTop: Math.min($(window).height(), Math.random() * 10),
            marginLeft: Math.min($(window).height(), Math.random() * 1587)
        });
    });

    $(".areaArtefact").on({
        mouseenter: function() { $(this).next().show(); },
        mouseleave: function() { $(this).next().hide(); },
        click: function() { 
            $(".panel").html($('.panel').html() + '<img src="' + $(this).next().attr('src') + '"/>');
            $(this).next().off();
            $(this).off();
            contIMG--;
            if(contIMG == 0){
                $(".answer").show();
                $('audio#enigma')[0].play()
            }
        }
    });

});


function compara () {
    if($('input').val() == "Game of Thrones" || $('input').val() == "game of thrones" || $('input').val() == "GOT" || $('input').val() == "got" || $('input').val() == "GAME OF THRONES") {
        createDialogo("Parabéns! Você conseguiu resgatar o 1º artefato mágico");
        item = $('.item-content').html('<img src="/assets/img/item1.png"/>');
        setInterval(function(){window.location.replace("level2.html")}, 3000);
    }
    else if (chance > 0){
        createDialogo("Possui mais " + chance + " chance(s)");
        chance--;
    }
    else {
        lifeLess();
        if (life > 0) {
            chance = 2;
            createDialogo("Menos 1 vida, você possui mais " + chance + " (duas) chances para conseguir o 1º artefato mágico");
        }
    }
    $('#dialogo').text(" ");
}