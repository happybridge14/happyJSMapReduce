define("mapreduce", ["underscore"],
		function (_){
			return function(raw, filter, map, reduce, reduceRaw) {
				console.log("aaaaaaa")
				var i;
				var tmp;
				if (_.isFunction(filter)) {
					raw = filter(raw);
				} else {
					if (_.isArray(raw)) {
						raw = [raw]
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
				console.log("hello: " + raw);
				tmp = raw;
				raw = [];
				for (i = 0; i < length; i++) {
					raw.concat(_.map(tmp, map));
				};
				console.log("hello: " + raw);
				return _.reduce(raw, reduce, reduceRaw);
			}
		}
	);