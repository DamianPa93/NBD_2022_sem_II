use nbd;

db.people.aggregate([{$project: {
 _id: 0,
 sex: 1,
 nationality: 1,
 credit: 1
}}, {$match: {
 sex: 'Female',
 nationality: 'Poland'
}}, {$unwind: {
 path: '$credit'
}}, {$group: {
 _id: '$credit.currency',
 avg_balance: {
  $avg: {
   $toDouble: '$credit.balance'
  }
 },
 sum_balance: {
  $sum: {
   $toDouble: '$credit.balance'
  }
 }
}}]);