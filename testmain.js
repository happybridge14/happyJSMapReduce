require.config({
    paths: {
        "underscore": "components/underscore/underscore",
        "mapreduce": "mapreduce"
    }
});

require(["mapreduce"],
    function(mapreduce) {
        var raw = ["aaa", "bbb", "aaa", "ccc"];

        var filter = function(raw) {

        }

        var map = function(value) {
            return {
                key: value,
                value: 1
            };
        }

        var reduce = function(mem, value) {
            if (!mem[value["key"]]) {
                mem[value["key"]] = 0;
            }
            mem[value["key"]] = mem[value["key"]] + value["value"];
            return mem;
        }

        var reduceRaw = {};

        var result = mapreduce(raw, "", map, reduce, reduceRaw);

        console.log(result);
    }
);