var contIMG = 5, chance = 2;;

$(document).ready(function () {

    createDialogo("Bem vindo à Gondorny, encontre as 6 imagens que liberarão o 2º enigma")
    
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
                $('audio#enigma').prop("volume", 0.1);
                $('audio#enigma')[0].play()
            }
        }
    });

});


function compara () {
    if($('input').val() == "POKEMON" || $('input').val() == "pokemon" || $('input').val() == "Pókemon" || $('input').val() == "PÓKEMON") {
        createDialogo("Parabéns! Você conseguiu resgatar o 1º artefato mágico");
        window.location.replace("level3.html");
    }
    else if (chance > 0){
        createDialogo("Você possui mais " + chance + " chance(s)  para conseguir o 1º artefato mágico");
        chance--;
    }
    else {
        // life--;
        // if (life <= 0){
            alert("Acabaram as vidas, volte ao começo e recupere-se")
            window.location.replace("index.html");
        // }
        // else {
        //     createDialogo("Menos 1 vida, você possui mais " + chance + " (duas) chances para conseguir o 1º artefato mágico");
        //     chance = 2;
        // }
    }
    $('#dialogo').text(" ");
}