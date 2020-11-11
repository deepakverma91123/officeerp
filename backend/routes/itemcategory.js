const express = require('express');
const router = express.Router();
let ObjectID = require('mongodb').ObjectID;
const Itemcategory = require('../model/Itemcategory')
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


router.get('/getallitemcategory', async (req, res) => {
  try {
    const itemcategory = await Itemcategory.find();
    res.json(itemcategory);
  } catch (err) {
    res.json({
      message: err
    })
  }
});





router.get('/getallitemcategory/:id', (req, res, next) => {
  Itemcategory.findById({
    _id: req.params.id
  }).exec().then(result => {
    res.status(200).json({
      message: 'item Itemcategory get single document',
      result: result,

    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      error: err,

    });
  });

});



router.post('/additemcategory', (req, res) => {
  console.log(req.body);
  const itemcategory = new Itemcategory({

    _id: new mongoose.Types.ObjectId(),
    itemName: req.body.itemName,
    manualCode: req.body.manualCode,
    category: req.body.category,
    group: req.body.group,
    itemDate: req.body.itemDate,


  });

  itemcategory.save().then(data => {
    res.json(data)
  }).catch(err => {
    res.json(err);
  })
  console.log('itemcategory add');


})





router.delete('/:id', (req, res, next) => {
  Itemcategory.remove({
    _id: req.params.id
  }).exec().then(result => {
    res.status(200).json({
      message: 'Itemcategory  deleted',
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
  Itemcategory.updateOne({
    _id: req.params.id
  }).exec().then(result => {
    res.status(200).json({
      message: 'Itemcategory update',
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
