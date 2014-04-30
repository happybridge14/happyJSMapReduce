require.config({
　　　　paths: {
　　　　　　"underscore": "components/underscore/underscore",
          "mapreduce": "mapreduce"
　　　　}
　　});

require(["mapreduce"],
	function (mr){
		var a = ["aaa","bbb","aaa","ccc"];

		var map = function (value) {
			return [{key:value, value:1}];
		}
		var reduce = function (mem, value) {
			if (!mem[value["key"]]) {
				mem[value["key"]] = 0;
			}
			mem[value["key"]] = mem[value["key"]]+ value["value"];
		}

		var reduceRaw = {};
		var result = mr(a, "", map, reduce, reduceRaw);
		
		for (i in result) {
							console.log("resule: " + result[i]);
						}
					}
);