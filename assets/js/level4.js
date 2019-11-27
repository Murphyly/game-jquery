var contIMG = 5, chance = 2;;

$(document).ready(function () {

    createDialogo("Bem vindo à Fildelios, encontre as 5 pistas que liberarão o 4º enigma")
    
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
    if($('input').val() == "LA CASA DE PAPEL" || $('input').val() == "la casa de papel" || $('input').val() == "La casa de papel" || $('input').val() == "La Casa De Papel" || $('input').val() == "LACASADEPAPEL" || $('input').val() == "lacasadepapel" || $('input').val() == "Lacasadepapel" || $('input').val() == "LaCasaDePapel" ) {
        createDialogo("Parabéns! Você conseguiu resgatar o 4º artefato mágico");
        window.location.replace("level5.html");
    }
    else if (chance > 0){
        createDialogo("Possui mais " + chance + " chance(s)");
        chance--;
    }
    else {
        lifeLess();
        if (life > 0) {
            chance = 2;
            createDialogo("Menos 1 vida, você possui mais " + chance + " (duas) chances para conseguir o 4º artefato mágico");
        }
    }
    $('#dialogo').text(" ");
}