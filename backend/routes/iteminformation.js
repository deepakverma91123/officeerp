const express = require('express');
const router = express.Router();
let ObjectID = require('mongodb').ObjectID;
const Iteminformation = require('../model/Iteminformation')
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


router.get('/getalliteminformation', async (req, res) => {
  try {
    const iteminformation = await Iteminformation.find();
    res.json(iteminformation);
  } catch (err) {
    res.json({
      message: err
    })
  }
});





router.get('/getalliteminformation/:id', (req, res, next) => {
  Iteminformation.findById({
    _id: req.params.id
  }).exec().then(result => {
    res.status(200).json({
      message: 'item information get single document',
      result: result,

    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      error: err,

    });
  });

});



router.post('/additeminformation', (req, res) => {
  console.log(req.body);
  const iteminformation = new Iteminformation({

    _id: new mongoose.Types.ObjectId(),
    itemName: req.body.itemName,
    manualCode: req.body.manualCode,
    category: req.body.category,
    group: req.body.group,
    itemDate: req.body.itemDate,
    

  });

  iteminformation.save().then(data => {
    res.json(data)
  }).catch(err => {
    res.json(err);
  })
  console.log('iteminformation add');


})





router.delete('/:id', (req, res, next) => {
  Iteminformation.remove({
    _id: req.params.id
  }).exec().then(result => {
    res.status(200).json({
      message: 'iteminformation  deleted',
      result: result,

    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      error: err,

    });
  });

});



router.patch('/:id', (req, res, next) => {
  Iteminformation.updateOne({
    _id: req.params.id
  }).exec().then(result => {
    res.status(200).json({
      message: 'Iteminformation update',
      result: result,

    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      error: err,

    });
  });

});


module.exports = router;
