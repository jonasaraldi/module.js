(function(global) {
	"use strict"

	var configs = {
		constructor: "init"
	};

	global.Module = Module;

	function Module(namespace, module, deps) {
		var scope = global, 
			path = namespace.split('.');

		if(!(module && module instanceof Function))
			return;

		for(var i = 0, len = path.length; i < len; i++) {
			var last = (i == len - 1),
				current = path[i];

			scope[current] = last ? module.apply(scope, deps) : (scope[current] || {}); 
			scope = scope[current];
		}

		if(configs.constructor 
			&& scope 
			&& scope[configs.constructor] 
			&& scope[configs.constructor] instanceof Function)
			global.onload = scope[configs.constructor];
	}

	Module.config = function(options) {
		for(var id in options)
			if(configs.hasOwnProperty(id))
				configs[id] = options[id] || configs[id];
	};

})(window);

