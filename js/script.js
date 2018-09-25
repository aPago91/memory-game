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
	document.getElementById('k'+i).addEventListener("click", function(){revealCard(i);});
}
          
var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var block = false;
var otherPair = 6;

function revealCard(nr){
	var opacityValue = $('#k'+nr).css('opacity');
 
	if(opacityValue != 0 && block == false){
		block = true;
  
		var img = "url(image/" + cards[nr] + ")";
 
		$('#k'+nr).css('background-image', img);
		$('#k'+nr).addClass('cardA');
		$('#k'+nr).removeClass('card');
 
		if(oneVisible == false){
   
			oneVisible = true;
			visible_nr = nr;
			block = false;
		}
		else{
			if(cards [visible_nr] == cards[nr]){
				setTimeout(function() {hide2Card(nr, visible_nr)}, 750);
			}
			else{
				setTimeout(function() {get2Cards(nr, visible_nr)}, 1000);
			}
   
			turnCounter++;
			$('.score').html('Liczba ruchów: ' + turnCounter);
			oneVisible = false;
		}
	}
}

function hide2Card(nr1, nr2){
	$('#k' + nr1).css('opacity', '0');
	$('#k' + nr2).css('opacity', '0');
 
	otherPair--;
 
	if(otherPair == 0){
		$('.board').html('<h1>Wygrałeś! Po '+turnCounter+' ruchach.</h1></br><button onclick="location.reload();">Zrestartuj grę</button>');
	}
 
	block = false;
}

function get2Cards(nr1, nr2){
	$('#k'+nr1).css('background-image', 'url(image/Zakryta.png)');
	$('#k'+nr1).addClass('card');
	$('#k'+nr1).removeClass('cardA');
 
	$('#k'+nr2).css('background-image', 'url(image/Zakryta.png)');
	$('#k'+nr2).addClass('card');
	$('#k'+nr2).removeClass('cardA');
 
	block = false;
}