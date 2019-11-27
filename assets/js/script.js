var life;
var blockStorage;

function lifeLoad ( ) {
    for(var i = 0; i < life ; i++) {
        $('.energy-content').html($('.energy-content').html() + '<img src="assets/img/potion.png"/>');
    }
}

function lifeLess ( ) {
    if(life > 0){
        life--;
        localStorage.setItem("storyLife", life);
        $('.energy-content').html('');
        lifeLoad();
    } 
    else {
        alert('Que pena! Sua energia acabou, volte até o caminho dos portais para recarregar');
        window.location.replace("index.html");
        life = 5;
        lifeLoad();
    }
}

$(document).ready(function() { 
    console.log(localStorage.getItem("storyLife"));
    
    if (typeof(Storage) !== "undefined" && blockStorage == false) {
        localStorage.setItem("storyLife", 5);
        life = 5;
        blockStorage = true;
    }

    life = localStorage.getItem("storyLife");

    lifeLoad( );

    /**  
 noback v0.0.1 
 library for prevent backbutton 
 Author: Kiko Mesquita: http://twitter.com/kikomesquita 
 Based on stackoverflow 
 * Copyright (c) 2015 @ kikomesquita 
*/ 

(function(window) { 
    'use strict'; 
   
  var noback = { 
       
      //globals 
      version: '0.0.1', 
      history_api : typeof history.pushState !== 'undefined', 
       
      init:function(){ 
          window.location.hash = '#no-back'; 
          noback.configure(); 
      }, 
       
      hasChanged:function(){ 
          if (window.location.hash == '#no-back' ){ 
              window.location.hash = '#BLOQUEIO';
              //mostra mensagem que não pode usar o btn volta do browser
              if($( "#msgAviso" ).css('display') =='none'){
                  $( "#msgAviso" ).slideToggle("slow");
              }
          } 
      }, 
       
      checkCompat: function(){ 
          if(window.addEventListener) { 
              window.addEventListener("hashchange", noback.hasChanged, false); 
          }else if (window.attachEvent) { 
              window.attachEvent("onhashchange", noback.hasChanged); 
          }else{ 
              window.onhashchange = noback.hasChanged; 
          } 
      }, 
       
      configure: function(){ 
          if ( window.location.hash == '#no-back' ) { 
              if ( this.history_api ){ 
                  history.pushState(null, '', '#BLOQUEIO'); 
              }else{  
                  window.location.hash = '#BLOQUEIO';
                  //mostra mensagem que não pode usar o btn volta do browser
                  if($( "#msgAviso" ).css('display') =='none'){
                      $( "#msgAviso" ).slideToggle("slow");
                  }
              } 
          } 
          noback.checkCompat(); 
          noback.hasChanged(); 
      } 
       
      }; 
       
      // AMD support 
      if (typeof define === 'function' && define.amd) { 
          define( function() { return noback; } ); 
      }  
      // For CommonJS and CommonJS-like 
      else if (typeof module === 'object' && module.exports) { 
          module.exports = noback; 
      }  
      else { 
          window.noback = noback; 
      } 
      noback.init();
  }(window)); 
})

