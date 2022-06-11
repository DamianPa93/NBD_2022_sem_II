var mapFunc = function() {
    for (var i = 0; i < this.credit.length; i++) {
       var key = this.credit[i].currency;
       var value = this.credit[i].balance;
       emit(key, value);
    }
};

var reduceFunc = function(key, value) {
    return Array.sum(value);
 };

printjson(db.people_converted.mapReduce(
    mapFunc,
    reduceFunc,
    { out: "mr2" }
 ));
 
printjson(db.mr2.find().toArray());