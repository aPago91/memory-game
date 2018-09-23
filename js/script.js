var cards = ["Sylvanas.png", "Thrall.png", "Thrall.png", "Greymane.png", "Sylvanas.png", "Vrynn.png", "Tyrande.png", "Malfurion.png", "Vrynn.png", "Tyrande.png", "Greymane.png", "Malfurion.png"];

var k0 = document.getElementById('k0');
var k1 = document.getElementById('k1');
var k2 = document.getElementById('k2');
var k3 = document.getElementById('k3');

var k4 = document.getElementById('k4');
var k5 = document.getElementById('k5');
var k6 = document.getElementById('k6');
var k7 = document.getElementById('k7');

var k8 = document.getElementById('k8');
var k9 = document.getElementById('k9');
var k10 = document.getElementById('k10');
var k11 = document.getElementById('k11');

k0.addEventListener("click", function(){odslonietaKarta(0);});
k1.addEventListener("click", function(){odslonietaKarta(1);});
k2.addEventListener("click", function(){odslonietaKarta(2);});
k3.addEventListener("click", function(){odslonietaKarta(3);});

k4.addEventListener("click", function(){odslonietaKarta(4);});
k5.addEventListener("click", function(){odslonietaKarta(5);});
k6.addEventListener("click", function(){odslonietaKarta(6);});
k7.addEventListener("click", function(){odslonietaKarta(7);});

k8.addEventListener("click", function(){odslonietaKarta(8);});
k9.addEventListener("click", function(){odslonietaKarta(9);});
k10.addEventListener("click", function(){odslonietaKarta(10);});
k11.addEventListener("click", function(){odslonietaKarta(11);});
										
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
		$('.board').html('<h1>Wygrałeś! Po '+wlaczLicznik+' ruchach.</h1>');
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

