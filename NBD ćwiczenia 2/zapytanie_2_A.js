use nbd;

db.people.aggregate([{
    $project: {
        _id: 0,
        credit: 1
    }
}, {
    $unwind: {
        path: '$credit'
    }
}, {
    $group: {
        _id: '$credit.currency',
        balance_sum: {
            $sum: {
                $toDouble: '$credit.balance'
            }
        }
    }
}]);