var express = require('express');
var router = express.Router();
var connection = require('./../mongoConnect');

/* GET users listing. */
router.get('/', connection, async (req, res, next) => {
  let doc = await req.DB.collection('places').find({}).toArray();
  if (doc.length !== 0) {
    res.status(200).json({ status: 'ok', data: doc })
  } else {
    res.status(404).json({ msg: 'not found' })
  }
});

router.get('/:longitude/:latitude', connection, async (req, res, next) => {
  console.log('asaad')
  let longitude = parseInt(req.params.longitude);
  let latitude = parseInt(req.params.latitude);
  try {
    let doc = await req.DB.collection('places').find({ location: { '$near': [longitude, latitude] } })
      .limit(3).toArray();
    if (doc.length !== 0) {
      res.status(200).json({ status: 'ok', data: doc })
    } else {
      res.status(404).json({ msg: 'not found' })
    }
  } catch (error) {
    res.status(500).json({ status: 'we have an error', msg: error })
  }
});

router.post('/', connection, async (req, res, next) => {
  let incoming = req.body;
  let doc = await req.DB.collection('places').insertOne({
    name: incoming.name,
    category: incoming.category,
    location: incoming.location
  });
  res.status(201).json({ status: 'created' })
});





module.exports = router;
