use nbd;

db.people.find({
  $and: [
    { $expr: {$gte: [{$toDouble: "$weight"}, 68]} },
    { $expr: {$lt: [{$toDouble: "$weight"}, 71.5]} }
  ]
}).pretty();