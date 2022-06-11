use nbd;

db.people.deleteMany({
    $expr: {$gte: [{$toDouble: "$height"}, 190]}
});