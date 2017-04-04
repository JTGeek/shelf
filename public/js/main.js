/* global $ */

$(document).ready(function () {
	// Date conversion
	$('.isoDate').each(function () {
		var date = new Date($(this).html());
		$(this).html(date.toLocaleDateString('en-us'));
		$(this).show();
	});

	// Add to Collection Form
	$('#addToCollection').on('click', '.addMore', function () {
		$(this).parent().after('<p>' + $(this).parent().html() + '</p>');
		$(this).html('Remove Row -').removeClass('addMore').addClass('removeRow');
	});
	$('#addToCollection').on('click', '.removeRow', function () {
		$(this).parent().remove();
	});

	// Label Color Change on Focus
	$('input').on('focus blur', function () {
		$(this).parent().toggleClass('focused');
	});

	// Slide Toggle + Fade Function
	$.fn.slideFadeToggle = function (speed, easing, callback) {
		return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
	};

	$('.want-have-select, .want-selected, .have-selected').hide();

	// Want / Have Button
	$('.want-have-default').on('click', function () {
		$('.want-have-default').hide();
		$('.want-have-select').show();
	});
	// Want / Have Select (Want)
	$('.want-have-select .want').on('click', function () {
		$('.want-have-select').hide();
		$('.want-selected').show();
	});
	// Want / Have Select (Have)
	$('.want-have-select .have').on('click', function () {
		$('.want-have-select').hide();
		$('.have-selected').show();
	});
	// Want / Have Select (Close)
	$('.want-have-select .close').on('click', function () {
		$('.want-have-select').hide();
		$('.want-have-default').show();
	});
	// Deselect
	$('.want-selected, .have-selected').on('click', function () {
		$('.want-selected, .have-selected').hide();
		$('.want-have-select').show();
	});
});
