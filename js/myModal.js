$.fn.myModal = function(opt) {
	var link = $(opt);
	var modal = $('.modal');
	var close = $('.modal-close');
	var overlay = $('.overlay');
	var nameForm = $('.modal-form [name=name]');
	var emailForm = $('.modal-form [name=email]');
	var textForm = $('.modal-form [name=text]');
	var form = $('.modal-form');


	link.click(function(evt) {
		evt.preventDefault();
		modal.addClass('modal-show');
		overlay.addClass('overlay-show');
		nameForm.focus();
	});

	close.click(function(evt){
		evt.preventDefault();
		modal.removeClass('modal-show');
		overlay.removeClass('overlay-show');
	});

	overlay.click(function() {
		modal.removeClass('modal-show');
		overlay.removeClass('overlay-show');
	});

	form.click(function(evt) {
		if(!nameForm.val || !emailForm.val || !textForm.val) {
			evt.preventDefault();
			popup.addClass('modal-error');
		}
	});
}