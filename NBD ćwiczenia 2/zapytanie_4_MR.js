var mapFunc  = function() {
    var bmi = (this.weight/Math.pow(this.height, 2))*10000;
    emit (this.nationality, {sum_bmi: bmi, min_bmi: bmi, max_bmi: bmi, count: 1});
};

var reduceFunc = function(key, values) {
    var x = values[0];
    for (var i=1; i < values.length; i++){
        var y = values[i];
        x.sum_bmi += y.sum_bmi;
        x.count += y.count;
        x.min_bmi = Math.min(x.min_bmi, y.min_bmi);
        x.max_bmi = Math.max(x.max_bmi, y.max_bmi);
    }
    return x;
 };

 var finalizeFunc = function(key, value) {
    value.avg_bmi = value.sum_bmi / value.count;
    return value;
  };

printjson(db.people_conv.mapReduce(mapFunc, reduceFunc, {out: "mr4", finalize: finalizeFunc}));
printjson(db.mr4.find({}, {"value.avg_bmi": 1, "value.min_bmi": 1, "value.max_bmi": 1}).toArray());