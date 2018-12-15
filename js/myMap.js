
$.fn.myMap = function() {
	var linkMap = $(".map-mini");
	var popupMap = $(".modal-map");
	var closeMap = $(".modal-map-close");


	linkMap.click(function() {
		popupMap.addClass("map-show");
	});

	closeMap.click(function() {
		popupMap.removeClass("map-show");
	});
}