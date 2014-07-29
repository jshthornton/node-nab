(function(win, undefined) {
	'use strict';
	var $;

	function nodeNab(opts) {
		opts = $.extend({
			//dest
			prefix: '$',
			jquery: true
		}, opts);

		return this.each(function() {
			var $root = $(this),
				$nodes = $('[data-nab]', $root);

			$nodes = $root.filter('[data-nab]').add($nodes);
			if(!$nodes.length) {
				return;
			}

			$nodes.each(function(index, node) {
				var $node = $(node),
					nabName = $node.data('nab'),
					propName = ((opts.prefix) ? opts.prefix : '') + nabName;

				if(opts.jquery === true) {
					opts.dest[propName] = $node;
				} else {
					opts.dest[propName] = node;
				}
			});
		});
	}

	function _do(jQuery) {
		$ = jQuery;
		$.fn.nodeNab = nodeNab;
	}

	if (typeof define === 'function' && define.amd) {
		define(['jquery'], _do);
	} else {
		_do(jQuery);
	}
}(window));