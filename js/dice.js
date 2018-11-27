var scores, cube, roundScore, activePlayer;
var cube0, currentClass0;
var cube1, currentClass1;
var col = 27, row = 14;
//var col = 27, row = 18;
var c, ctx;

$( document ).ready(function() {
	init();

	$(".btn-rules").click(function(){
		$('.popuptext').removeClass('hiderules');
		$('.popuptext').addClass('showrules');
	})
	$(".btn-close").click(function(){
		$('.popuptext').removeClass('showrules');
		$('.popuptext').addClass('hiderules');
	})

	$(".btn-roll").click(function(){
		cube.removeClass('animation-1');
		var counter = 0;
		var loopCount = 30;
		function spinCube() {
			if (++counter >= loopCount) {
				clearInterval(interval);
				cube.removeClass('animation-2');
			} else {
				cube.addClass('animation-2'); 
				$('.player-controls').addClass('disable-controls');
				$('.fa-dice').addClass('grey');
				$('.fa-hand-holding').addClass('grey');
				$('.fa-times').addClass('grey');
			}
		}
		var interval = setInterval(spinCube, 60);
		changeSide();
	})
});

function init() {
	scores = [0,0];
	activePlayer = 0;
	cube = $('.cube');
	cube0 = $('.cube0');
	cube1 = $('.cube1');
	currentClass = '';
	currentClass0 = '';
	currentClass1 = '';
	$('#score-0').val('0');
	$('#score-1').val('0');
	$('#name-0').val('Player1');
	$('#name-1').val('Player2');
	$('.player-0-panel').removeClass('winner');
	$('.player-1-panel').removeClass('winner');
	$('.player-0-panel').removeClass('active');
	$('.player-1-panel').removeClass('active');
	$('.player-0-panel').addClass('active');
	$('.player-controls').removeClass('player-controls-right');
	$('.fa-dice').removeClass('fa-flip-horizontal');
	$('.fa-hand-holding').removeClass('fa-flip-horizontal');
	$('.fa-times').removeClass('fa-flip-horizontal');
	$('.dice1').removeClass('displaynone');
	$('.dice2').removeClass('displaynone');
	$('.player-controls').removeClass('displaynone');
	cube.addClass('animation-1');

	c = $("#canvas")[0];
	ctx = c.getContext('2d');
	ctx.strokeStyle='#cecece';
	ctx.lineWidth=4;
	for(var i=0; i<=1090; i=i+40){
		ctx.moveTo(i, 0);
		ctx.lineTo(i, 600);
		ctx.stroke();
	}
	for(var i=0; i<=560; i=i+40){
		ctx.moveTo(0, i);
		ctx.lineTo(1090, i);
		ctx.stroke()
	}
}

function changeSide() {
	//cube0
	var dice0 = (Math.floor(Math.random()*6)+1);
	var showClass0 = 'show-' + dice0;
	if (currentClass0) {
		cube0.removeClass(currentClass0);
	}
	cube0.addClass(showClass0);
	currentClass0 = showClass0;

	//cube1
	var dice1 = (Math.floor(Math.random()*6)+1);
	var showClass1 = 'show-' + dice1;
	if (currentClass1) {
		cube1.removeClass(currentClass1);
	}
	cube1.addClass(showClass1);
	currentClass1 = showClass1;

	function updateScore() {
		$('.player-controls').removeClass('disable-controls');
		$('.fa-dice').removeClass('grey');
		$('.fa-hand-holding').removeClass('grey');
		$('.fa-times').removeClass('grey');
		// if (dice !==1) {
		// 	roundScore += dice;
		// 	$('#current-' + activePlayer).val(roundScore);
		// } else {
			// nextPlayer();
		// }
	}
	setTimeout(updateScore, 2000);
}