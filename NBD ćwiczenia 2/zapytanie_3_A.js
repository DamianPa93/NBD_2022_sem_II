use nbd;

db.people.aggregate([{
    $project: {
        _id: 0,
        job: 1
    }
}, {
    $group: {
        _id: {
            job: '$job'
        }
    }
}, {
    $group: {
        _id: '$_id.job',
        distinct: {
            $sum: 1
        }
    }
}]);