const express = require('express');
const router = express.Router();
let ObjectID = require('mongodb').ObjectID;
// const Itemmaster = require('../model/Itemmaster')
const Itemmaster = require('../../model/inventory/Itemmaster')
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


/// count query 
// router.get('/getallitemmastercount', async (req, res) => {
//   try {
//     const itemmaster = await Itemmaster.find().count();
//     res.json(itemmaster);
//     console.log(itemmaster);
//   } catch (err) {
//     res.json({
//       message: err
//     })
//   }
// });



router.get('/getallitemmaster', async (req, res) => {
  try {
    const itemmaster = await Itemmaster.find();
    res.json(itemmaster);
    console.log(itemmaster);
  } catch (err) {
    res.json({
      message: err
    })
  }
});

// category behalf item

router.get('/getallitemmastercategory/:category', async (req, res) => {
  let ri = req.params.category;
  console.log(ri);
  try {
    const itemmasters = await Itemmaster.find({ category: { $eq: ri } },);

    res.json(itemmasters);
    // sort code
    itemmasters.map(doc => {
      doc.itemName
      console.log(doc.itemName);
    }).sort();

  } catch (err) {
    res.json({
      message: err
    })
  }
});




// search api 

// router.get('/getallitemmaster/:itemmasterid', (req, res, next) => {
//   Itemmaster.findById({
//     _id: req.params.itemmasterid
//   }).exec().then(result => {
//     res.status(200).json({
//       message: 'item master  get single document',
//       result: result,

//     });
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json({
//       error: err,

//     });
//   });

// });



// search api 
router.get('/searchitemmaster/:itemName', async (req, res) => {
  let regex = new RegExp(req.params.itemName, 'i');


  try {

    const itemmaster = await Itemmaster.find({ itemName: regex });
    res.send(itemmaster);
  } catch (err) {
    res.json({
      message: err
    })
  }
});




router.get('/getallitemmaster/:itemmasterid', (req, res, next) => {
  Itemmaster.findById({
    _id: req.params.itemmasterid
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


// filter api item master

router.post('/filteritemmaster', async (req, res) => {
  // let limit = parseInt(req.query.fields)

  console.log(req.body);
  let ri = req.body;

  console.log(ri);


  try {
    // const salesorder = await Reelcuttingentry.find({ manyReel: { $gte: 2 } });
    const itemmasterfilter = await Itemmaster.find({ fromDate: { $gte: ri.fromDate }, itemName: { $eq: ri.itemName }, category: { $eq: ri.category } });

    // const salesorder = await Reelcuttingentry.find({ $limit: fields });

    console.log(itemmasterfilter)
    res.send(itemmasterfilter);
  } catch (err) {
    res.json({
      message: err,
      big: 'error'
    })
  }
});




router.post('/additemmaster', (req, res) => {
  console.log(req.body);
  const itemmaster = new Itemmaster({

    _id: new mongoose.Types.ObjectId(),
    itemName: req.body.itemName,
    manualCode: req.body.manualCode,
    category: req.body.category,
    stockUnit: req.body.stockUnit,
    averageLife: req.body.averageLife,
    description: req.body.description,
    tolerance: req.body.tolerance,
    hsnSac: req.body.hsnSac,
    gstNature: req.body.gstNature,
    itemDate: req.body.itemDate,
    lastAmount: req.body.lastAmount,
    unit: req.body.unit
  });

  itemmaster.save().then(data => {
    res.json(data)
  }).catch(err => {
    res.json(err);
  })
  console.log('itemmaster add');


})





router.delete('/getallitemmaster/:itemmasterid', (req, res, next) => {
  Itemmaster.remove({
    _id: req.params.itemmasterid
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



// router.patch('/getallitemmaster/:id', (req, res, next) => {
//   Itemmaster.updateOne({
//     _id: req.params.id
//   }).exec().then(result => {
//     res.status(200).json({
//       message: 'Itemmaster update',
//       result: result,

//     });
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json({
//       error: err,

//     });
//   });

// });


router.put('/getallitemmaster/:itemmasterid',
  async (req, res) => {
    console.log(req.body)
    // findByIdAndUpdate(req.params.id, req.body, {new: true},
    try {
      const itemMaster = await Itemmaster.findByIdAndUpdate(req.params.itemmasterid, req.body, { new: true }
      );
      res.send({ itemMaster, });
    } catch (error) {

      res.status(500).send(error);
      res.json({
        message: error
      })
    }


  });



module.exports = router;
