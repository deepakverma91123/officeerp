const express = require('express');
const router = express.Router();
let ObjectID = require('mongodb').ObjectID;
// const Itemmaster = require('../model/Itemmaster')
const Itemmaster = require('../../model/inventory/Itemmaster')
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


router.get('/getallitemmaster', async (req, res) => {
  try {
    const itemmaster = await Itemmaster.find();
    res.json(itemmaster);
  } catch (err) {
    res.json({
      message: err
    })
  }
});





router.get('/getallitemmaster/:id', (req, res, next) => {
  Itemmaster.findById({
    _id: req.params.id
  }).exec().then(result => {
    res.status(200).json({
      message: 'item master  get single document',
      result: result,

    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      error: err,

    });
  });

});



router.post('/additemmaster', (req, res) => {
  console.log(req.body);
  const itemmaster = new Itemmaster({

    _id: new mongoose.Types.ObjectId(),
    itemName: req.body.itemName,
    manualCode: req.body.manualCode,
    category: req.body.category,
    gsm: req.body.gsm,
    stockUnit: req.body.stockUnit,
    secondaryUnit: req.body.secondaryUnit,
    fromRate: req.body.fromRate,
    toRate: req.body.toRate,
    avgLife: req.body.avgLife,
    Description: req.body.Description,
    tolerance: req.body.tolerance,
    lotNumber: req.body.lotNumber,

  });

  itemmaster.save().then(data => {
    res.json(data)
  }).catch(err => {
    res.json(err);
  })
  console.log('itemmaster add');


})





router.delete('/:id', (req, res, next) => {
  Itemmaster.remove({
    _id: req.params.id
  }).exec().then(result => {
    res.status(200).json({
      message: 'Itemmaster  deleted',
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
  Itemmaster.updateOne({
    _id: req.params.id
  }).exec().then(result => {
    res.status(200).json({
      message: 'Itemmaster update',
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
