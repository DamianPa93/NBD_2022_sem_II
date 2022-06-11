var mapFunc = function() {
    for (var i = 0; i < this.credit.length; i++) {
       var key = this.credit[i].currency;
       var value = {count: 1, sum_balance: this.credit[i].balance};
       emit(key, value);
    }
};

var reduceFunc = function(key, value) {
    reducedValue = {count: 0, sum_balance: 0};
    for (var i = 0; i < value.length; i++) {
        reducedValue.count += value[i].count;
        reducedValue.sum_balance += value[i].sum_balance;
    }
    return reducedValue;
 };

var finalizeFunc = function(key, value) {
    value.avg_balance = value.sum_balance/value.count;
    return value;
  };

printjson(db.people_converted.mapReduce(mapFunc, reduceFunc, {query: {nationality: "Poland", sex: "Female"}, out: "mr5", finalize: finalizeFunc}));
printjson(db.mr5.find({}, {"value.sum_balance": 1, "value.avg_balance": 1}).toArray());