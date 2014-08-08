(function(win, undefined) {
	'use strict';
	var $;

	function nodeNab(opts) {
		opts = $.extend({
			//dest
			prefix: '$',
			key: 'nab',
			jquery: true,
			multiple: true
		}, opts);

		return this.each(function() {
			var $root = $(this),
				$nodes = $('[data-' + opts.key + ']', $root);

			$nodes = $root.filter('[data-' + opts.key + ']').add($nodes);
			if(!$nodes.length) {
				return;
			}

			$nodes.each(function(index, node) {
				var $node = $(node),
					nabName = $node.data(opts.key),
					propName = ((opts.prefix) ? opts.prefix : '') + nabName,
					dest = opts.dest,
					prop = dest[propName];

				if(opts.jquery === true) {
					if(opts.multiple === true && prop && typeof prop.jquery !== 'undefined') {
						prop.add($node);
					} else {
						prop = $node;
					}
				} else {
					if(opts.multiple === true && prop) {
						if($.isArray(prop)) {
							prop.push(node);
						} else {
							dest[propName] = [prop];
							prop = dest[propName];
						}
					} else {
						prop = node;
					}
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