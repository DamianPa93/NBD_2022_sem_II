var mapFunc  = function() {emit (this.sex, {count: 1, weight: this.weight, height: this.height});};

var reduceFunc = function(key, values) {
    redVals = {count: 0, weight: 0, height: 0};
    for (var i = 0; i < values.length; i++) {
        redVals.count += values[i].count;
        redVals.weight += values[i].weight;
        redVals.height += values[i].height;
    }
    return redVals;
 };
 
var finalizeFunc = function(key, redVals) {
    redVals.avgWeight = redVals.weight/redVals.count;
    redVals.avgHeight = redVals.height/redVals.count;
    return redVals;
  };
  
printjson(db.people_conv.mapReduce(mapFunc, reduceFunc, {out: "mr1", finalize: finalizeFunc}));
printjson(db.mr1.find({}, {"value.avgWeight": 1, "value.avgHeight": 1}).toArray());