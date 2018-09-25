var cards = ["Sylvanas.png", "Thrall.png", "Thrall.png", "Greymane.png", "Sylvanas.png", "Vrynn.png", "Tyrande.png", "Malfurion.png", "Vrynn.png", "Tyrande.png", "Greymane.png", "Malfurion.png"];

var scards = shuffle(cards);

function shuffle(arr) {
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};

for (let i = 0; i < 12; i++)
{
   document.getElementById('k'+i).addEventListener("click", function(){odslonietaKarta(i);});
}
          
var jednaWidoczna = false;
var wlaczLicznik = 0;
var widoczny_nr;
var blokada = false;
var pozostaleParty = 6;

function odslonietaKarta(nr){
 var opacityValue = $('#k'+nr).css('opacity');
 
 if(opacityValue != 0 && blokada == false){
  blokada = true;
  
  var obraz = "url(image/" + cards[nr] + ")";
 
  $('#k'+nr).css('background-image', obraz);
  $('#k'+nr).addClass('cardA');
  $('#k'+nr).removeClass('card');
 
  if(jednaWidoczna == false){
   
   jednaWidoczna = true;
   widoczny_nr = nr;
   blokada = false;
  }
  else{
   if(cards [widoczny_nr] == cards[nr]){
    setTimeout(function() {schowaj2Karty(nr, widoczny_nr)}, 750);
   }
   else{
    setTimeout(function() {odzyskaj2Karty(nr, widoczny_nr)}, 1000);
   }
   
   wlaczLicznik++;
   $('.score').html('Liczba ruchów: ' + wlaczLicznik);
   jednaWidoczna = false;
  }
 }
}

function schowaj2Karty(nr1, nr2){
 $('#k' + nr1).css('opacity', '0');
 $('#k' + nr2).css('opacity', '0');
 
 pozostaleParty--;
 
 if(pozostaleParty == 0){
  $('.board').html('<h1>Wygrałeś! Po '+wlaczLicznik+' ruchach.</h1></br><button onclick="location.reload();">Zrestartuj grę</button>');
 }
 
 blokada = false;
}

function odzyskaj2Karty(nr1, nr2){
 $('#k'+nr1).css('background-image', 'url(image/Zakryta.png)');
 $('#k'+nr1).addClass('card');
 $('#k'+nr1).removeClass('cardA');
 
 $('#k'+nr2).css('background-image', 'url(image/Zakryta.png)');
 $('#k'+nr2).addClass('card');
 $('#k'+nr2).removeClass('cardA');
 
 blokada = false;
}