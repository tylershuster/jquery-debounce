/**
 * Debounce function's decorator plugin 1.0.1
 *
 * Copyright (c) 2009 Filatov Dmitry (alpha@zforms.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

(function($) {

$.debounce = function(fn, timeout, context) {

	var timer;

	return function() {

		clearTimeout(timer);

		var args = arguments;

		timer = setTimeout(function() {
			fn.apply(context, args);
		}, timeout);

	};

};

})(jQuery);