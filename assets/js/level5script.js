var counter = 3;
var chance = 2;

$(document).ready(function() {

    createDialogo('Bem vindo ao portal das cores. Para chegar no covil da bruxa aperte start e encontre os 3 conjuntos de número que dirão onde fica a casa da bruxa com coordenadas do mundo das cores');

    $(".menuButton").hide();
    setRGB();
    
    
    $(".button").click(function() {
        $(".imagem").fadeOut("fast", function(){});
        $(".itens").fadeOut("fast", function(){});
        $(".menuButton").show("slow", function(){});
    })
    
    $(".menuButton").click(function() {
        $(".imagem").fadeIn("100", function(){});
        $(".itens").fadeIn("100", function(){});
        $(".menuButton").fadeOut("fast", function(){});
        $(".button").text("Resume");
    })

    var myR = "0";
    var myG = "0";
    var myB = "0";

    $(".areaRGB").on({
        mouseenter: function() { $(this).next().show(); },
        mouseleave: function() { $(this).next().hide(); },
        click: function() { 
            if($(this).next().attr('id') == 'R') {
                myR = $("#R").text();
            } 
            else if ($(this).next().attr('id') == 'G'){
                myG = $("#G").text();
            }
            else {
                myB = $("#B").text();
            }
            $("#RGB").text('RGB ('+ myR + ',' + myG + ',' + myB + ')')
            $(this).next().off();
            $(this).off();
            counter--;
            if(counter == 0){
                $("#dialogo").remove();
                $("#canva").show();
                $(".answer").show();
                $(".imagem").fadeIn("100", function(){});
                $(".itens").fadeIn("100", function(){});
            }
        }
    });

    
    $( ".RGB" ).each(function( i ) {
        $(this).css({
            marginTop: Math.min($(window).height(), Math.random() * 100),
            marginLeft: Math.min($(window).height(), Math.random() * 100)
        });
    });

    $("canvas").click(function() {
        if(chance > 0 && counter == 0 && $(this).css("background-color") == ('rgb('+ myR + ', ' + myG + ', ' + myB + ')')){
            alert('Parabéns você vai para a luta final com a bruxa!');
            window.location.replace("level6.html");
        }
        else if (counter == 0 && chance > 0){
            alert('Você possui mais uma chance ou perder todos os itens!');
            chance--;
        }
        else {
            lifeLess();
            if (life > 0) {
                chance = 2;
                alert("Menos 1 vida, você possui mais " + chance + " (duas) chances para conseguir encontrar a localização do covil da bruxa");
            }
        }
    });
    
});

function generateArrayColors (num) {
    var array = [];
    for(var i=0; i < num; i++){
        array.push(generateRandomRGB());
    }
    return array;
}

function generateRandomRGB() {   //Gera um RGB aleatorio
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "RGB(" + r + ", " + g +", " + b + ")";    
}

function setRGB(){
    var canvas = document.querySelectorAll("canvas");
    var colors = [];
    var colors = generateArrayColors(canvas.length);
    for(var i=0; i<canvas.length; i++){
        canvas[i].style.background=colors[i];
    }
    
    setupMap(colors, canvas.length);
    
}

function setupMap(Array, num){
    var RGB = getRandomColorOfArray(Array, num);
    var R = "";
    var G = "";
    var B = "";
    
    RGB=RGB.replace(',',''); //remover vírgula 1
    RGB=RGB.replace(',',''); //remover vírgula 2
    
    var tamanho = RGB.length;
    
    R = getRfromRGB(RGB, tamanho);
    G = getGfromRGB(RGB, tamanho);
    B = getBfromRGB(RGB, tamanho);
    
    // randomizerPosition("#R");
    // randomizerPosition("#G");
    // randomizerPosition("#B");
    
    $("#R").text(R);
    $("#G").text(G);
    $("#B").text(B);
    
}

function getRandomColorOfArray(Array, num){
    var random = Math.floor(Math.random() * Array.length);
	return Array[random];
}

function getRfromRGB(String, Number){
    var R = "";
    for(var i=1; i<=Number; i++){
        if(String.substring(i-1,i)=='('){
            R += String.substring(i,i+1);
            if(String.substring(i+1,i+2)!=' '){
                R += String.substring(i+1,i+2);
            }
            if(String.substring(i+2,i+3)!=' '){
                R += String.substring(i+2,i+3);
            }
            
        }
    }
    return R;
}

function getGfromRGB(String, Number){
    var G = "";
    var count=false;
    for(var i=1; i<=Number; i++){
        if(String.substring(i-1,i)==' ' && !count){
            count=true;
            G += String.substring(i,i+1);
            if(String.substring(i+1,i+2)!=' '){
                G += String.substring(i+1,i+2);
            }
            if(String.substring(i+1,i+2)!=' ' && String.substring(i+2,i+3)!=' '){
                G+= String.substring(i+2,i+3);
            }
        }
    }
    return G;
}

function getBfromRGB(String, Number){
    var B = "";
    var count=false;
    for(var i=1; i<=Number; i++){
        if(String.substring(i-1,i)==' ' && !count){
            count=true;
        }else if(String.substring(i-1,i)==' ' && count){
            B += String.substring(i,i+1);
            if(String.substring(i+1,i+2)!=' ' && String.substring(i+1,i+2)!=')'){
                B+= String.substring(i+1,i+2);
            }
            if(String.substring(i+2,i+3)!=')'){
                B+= String.substring(i+2,i+3);
            }
        }
    }
    return B;
}