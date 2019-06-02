var express = require('express');
var router = express.Router();

let grades = [];
let index = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({status: "ok", grades});
});

router.get('/:id', function(req,res,next){
let found = grades.some(x => x.id === parseInt(req.params.id));

if(found){
  let obj = grades.find( x => x.id === parseInt(req.params.id));
  res.status(200).json({status:"ok", data: obj})
}else{
  res.status(404).json({msg: "not found!"});
}
});

router.post('/', function(req,res,next){
let receivedGrade = req.body;
let newGrade = {
  id: ++index,
  name: receivedGrade.name,
  course: receivedGrade.course,
  grade: receivedGrade.grade
}
grades.push(newGrade);
res.status(201).json({status:"ok"});
});

router.put('/:id', function(req,res,next){
  try{
    let found = grades.some(x => x.id === parseInt(req.params.id));
if(found){
  let obj = req.body;
  grades.forEach(x => {
      if(x.id === parseInt(req.params.id)) {
        x.name = obj.name? obj.name: x.name,
        x.course = obj.course? obj.course:x.course,
        x.grade = obj.grade? obj.grade:x.grade
      }
      res.status(200).json({status:"ok"});
    })
}else{
  res.status(404).json({msg:"not found"});
}
  }catch(error){
    res.status(400).json({msg:"bad request"})
  }
});

router.delete('/:id', (req,res,next) => {
  let found = grades.some(x => x.id === parseInt(req.params.id));
  if(found){
   grades =  grades.filter(x => x.id !== parseInt(req.params.id));
    res.status(200).json({status:"ok"});
  }else{
    res.status(404).json({msg:"not found"});
  }
});

module.exports = router;
