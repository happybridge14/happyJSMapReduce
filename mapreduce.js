require(["underscore"],
	function (_){
		reuturn function(raw, filter, map, reduce) {
			var i;
			var tmp;
			if (_.isFunction(filter)) {
				raw = filter(raw);
			} else {
				if (_.isArray(raw)) {
					raw = raw;
				} else if (_.isString(raw) && _.isString(filter)) {
					raw = raw.split(filter);
				} else if (_.isObject(raw)) {
					tmp = raw;
					raw = [];
					for (i in tmp) {
						raw.push({key:i, value:tmp[i]});
					}
				} else {
					return raw;
				}
			}

			var length = raw.length;
			tmp = raw;
			raw = [];
			for (i = 0; i < length; i++) {
				raw.concat(_.map(tmp[i], map));
			};
			return _.map.reduce(raw, reduce);

});