$.fn.mySlider = function() {
	var arrowLeft = $('.slider-container .arrow-left');
	var arrowRight = $('.slider-container .arrow-right');
	var dots = $('.slider-container .slider-dot');
	var sliderRow = $('.slider-container .slider-row');
	var sliderCount = $('.slider-container .slider').length;
	var sliderWidth = $('.slider-container .slider').innerWidth(); 
	var sliderRowLength = sliderCount * sliderWidth + 50;
	var currentSlide = 0;

	sliderRow.css('width', '' + sliderRowLength + 'px');

	function sliderController(value) {
		dots.removeClass('active-dot');
		var activeDot = $('.slider-container .slider-dot').eq(value);
		activeDot.addClass('active-dot');
		var width = value * sliderWidth * -1;
		sliderRow.css('transform', 'translateX(' + width + 'px)');
	}

	arrowLeft.click(function() {
		currentSlide--;
		if(currentSlide < 0) {
			currentSlide = sliderCount - 1;
		}
		sliderController(currentSlide);
	});

	arrowRight.click(function() {
		currentSlide++;
		if(currentSlide >= sliderCount) {
			currentSlide = 0;
		}
		sliderController(currentSlide);
	});

	dots.click(function() {
		currentSlide = parseInt($(this).index());
		sliderController(currentSlide);
	});

}	