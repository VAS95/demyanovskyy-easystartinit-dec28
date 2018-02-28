// CHANGING THE SIZE OF THE SQUARE
function apply1ButtonClick() {
	var tempWidth = $('.square1Width').val();
	var tempHeight = $('.square1Height').val();

	if(tempWidth && tempHeight) {
		$('#centralSquare1').css('width', tempWidth);
		$('#centralSquare1').css('height', tempHeight);
	}
};

function apply2ButtonClick() {
	var tempWidth = $('.square2Width').val();
	var tempHeight = $('.square2Height').val();

	if(tempWidth && tempHeight) {
		$('#centralSquare2').css('width', tempWidth);
		$('#centralSquare2').css('height', tempHeight);
	}
};

// ADDING THE 'CONTENT' IN V3.html TO THE ALL HEIGHT OF THE RIGHT BLOCK
$(document).ready(function($){
	for(var i = 0; i < Math.floor((parseInt(($('#rightSideV3').css('height')), 10) / (parseInt(($('.block').css('height')), 10) + (parseInt(($('.block').css('marginTop')), 10)))) * 3) - 1; i++){
		$('#rightSideV3').append('<div class="block">BLOCK</div>');
	}
});