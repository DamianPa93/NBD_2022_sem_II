use nbd;

db.people.aggregate([{$project: {
 _id: 0,
 nationality: 1,
 weight: 1,
 height: 1,
 bmi: {
  $divide: [
   {
    $toDouble: '$weight'
   },
   {
    $pow: [
     {
      $toDouble: '$height'
     },
     2
    ]
   }
  ]
 }
}}, {$group: {
 _id: '$nationality',
 avg_bmi: {
  $avg: {
   $toDouble: '$bmi'
  }
 },
 min_bmi: {
  $min: {
   $toDouble: '$bmi'
  }
 },
 max_bmi: {
  $max: {
   $toDouble: '$bmi'
  }
 }
}}]).pretty();