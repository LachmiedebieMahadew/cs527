var express = require('express');
var router = express.Router();
var connect = require('./../mongoconnect');


/* GET users listing. */
router.get('/', connect, async (req, res, next) => {
  const doc = await req.DB.collection('lectures').find({}).toArray();
  res.status(200).json({ status: 'ok', data: doc });
});

router.get('/:course', connect, async (req, res, next) => {
  const doc = await req.DB.collection('lectures').
    find({ 'course': { $regex: req.params.course, $options: "i" } }).toArray();
  res.status(200).json({ status: 'ok', data: doc });
});

router.post('/', connect, async (req, res, next) => {
  let incoming = req.body;
  const doc = await req.DB.collection('lectures').insertOne({
    course: incoming.course,
    lecture: incoming.lecture
  });
  res.status(201).json({ status: 'created' });

});

router.delete('/:course', connect, async (req, res, next) => {
  let found = await req.DB.collection('lectures').
    find({ 'course': { $regex: req.params.course, $options: "i" } }).toArray();

  if (found.length !== 0) {
    let doc = await req.DB.collection('lectures').
      remove({ 'course': { $regex: req.params.course, $options: "i" } });
    res.status(200).json({ status: "removed" });
  } else {
    res.status(400).json({ status: "bad request" });
  }
});


router.put('/:course', connect, async (req, res, next) => {
  let found = await req.DB.collection('lectures').
    find({ 'course': { $regex: req.params.course, $options: "i" } }).toArray();

  if (found.length !== 0) {
    let doc = await req.DB.collection('lectures').
      updateOne({ 'course': { $regex: req.params.course, $options: "i" } }, {
        $set: {
          course: req.body.course,
          lecture: req.body.lecture
        }
      });
    res.status(200).json({ status: "updated" });
  } else {
    res.status(400).json({ status: "bad request" });
  }
});

router.get('/search/:q', connect, async (req, res, next) => {
  let foundCourse = await req.DB.collection('lectures').
    find({ 'course': { $regex: req.params.q, $options: "i" } }).toArray();
  let foundLecture = await req.DB.collection('lectures').
    find({ 'lecture': { $regex: req.params.q, $options: "i" } }).toArray();

  if (foundCourse.length !== 0) {
    res.status(200).json({ status: 'ok', data: foundCourse });
  } else if (foundLecture.length !== 0) {
    res.status(200).json({ status: 'ok', data: foundLecture });
  }
  else {
    res.status(400).json({ status: "bad request" });
  }
});

module.exports = router;
