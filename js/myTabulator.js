$.fn.myTabulator = function() {

	$('.services-list').click(function() {
		
		var target = $(this).attr('data-tab');

		$('.services-nav .services-list').removeClass('services-list-active');
		$(this).addClass('services-list-active');
		
		$('.services-info').removeClass('services-info-active');
		$('.services-info' + target).addClass('services-info-active');
	});
}