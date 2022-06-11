var mapFunc  = function() {emit (this.job, 1);};

var reduceFunc = function(key, value) {
    return key, Array.sum(value);
 };

printjson(db.people.mapReduce(
    mapFunc,
    reduceFunc,
    { out: "mr3" }
 ));
printjson(db.mr3.find().toArray().map((value) => value._id));