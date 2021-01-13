const express = require('express');
const router = express.Router();
let ObjectID = require('mongodb').ObjectID;
// const Itemmaster = require('../model/Itemmaster')
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);



const Jumborollentry = require('../../model/production/jumborollentry');

// jumborollentry entry
router.post('/addjumboentry', async (req, res) => {
  console.log(req.body);
  const jumborollentry = new Jumborollentry({
    jumbuRollNumber: req.body.jumbuRollNumber,
    jumbuentryDate: req.body.jumbuentryDate,
    machineNumber: req.body.machineNumber,
    machineCategory: req.body.machineCategory,
    jumboRollItemName: req.body.jumboRollItemName,
    jumbuQuality: req.body.jumbuQuality,
    jumbuGsm: req.body.jumbuGsm,
    jumbuBrightness: req.body.jumbuBrightness,
    jumbuRemark: req.body.jumbuRemark,
    jumbuWeight: req.body.jumbuWeight,
    jumbuBarcode: req.body.jumbuBarcode

  })
  try {
    const savedjumborollentry = await jumborollentry.save();
    res.send(savedjumborollentry)
  } catch (error) {

    res.status(404).send(error)
  }

});



// get all jumborollentry Entry
router.get('/jumborollentry', async (req, res) => {
  try {
    const jumborollentry = await Jumborollentry.find();
    res.send(jumborollentry)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }

})


router.get('/getallsalesorderjumbuquery/:field/:f1/:f2/:f3', async (req, res) => {
  // let limit = parseInt(req.query.fields)


  let ri = parseInt(req.params.field);
  let ribrightness = req.params.f1;
  let rigsm = req.params.f2;
  let riquality = req.params.f3;
  console.log(ribrightness);
  console.log(rigsm);
  console.log(riquality);

  try {
    // const salesorder = await Reelcuttingentry.find({ manyReel: { $gte: 2 } });
    const jumborollentry = await Jumborollentry.find({ jumbuBrightness: { $eq: ribrightness }, jumbuGsm: { $eq: rigsm }, jumbuQuality: { $eq: riquality }, }).limit(ri);

    // const salesorder = await Reelcuttingentry.find({ $limit: fields });

    console.log(jumborollentry)
    res.send(jumborollentry);
  } catch (err) {
    res.json({
      message: err,
      big: 'error'
    })
  }
});







router.post('/filterjumbu', async (req, res) => {
  // let limit = parseInt(req.query.fields)

  console.log(req.body);
  let ri = req.body;

  console.log(ri);


  try {
    // const salesorder = await Reelcuttingentry.find({ manyReel: { $gte: 2 } });
    const jumborollentry = await Jumborollentry.find({ jumbuBrightness: { $eq: ri.jumbuBrightness }, jumbuGsm: { $eq: ri.jumbuGsm }, jumbuQuality: { $eq: ri.jumbuQuality }, });

    // const salesorder = await Reelcuttingentry.find({ $limit: fields });

    console.log(jumborollentry)
    res.send(jumborollentry);
  } catch (err) {
    res.json({
      message: err,
      big: 'error'
    })
  }
});


/// get single jumborollentry entry

router.get('/jumborollentry/:jumborollentryid', async (req, res) => {

  try {
    const jumborollentry = await Jumborollentry.findById({
      _id: req.params.jumborollentryid
    });
    res.send(jumborollentry)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }


})


// router.get('/jumborollentry/:jumborollentryid', (req, res) => {
//   Jumborollentry.findById({
//     _id: req.params.jumborollentryid
//   }).exec().then(result => {
//     console.log(result)
//     // console.log(result.indentNumber)
//     // console.log(result.purchaseOrderNo)




//     Jumborollinformation.findById({
//       _id: result.jumboRollNumber

//     }).then(resp => {

//       console.log(resp)
//       console.log(result)

//       res.send({
//         jumborollentry: result,
//         jumbuinformation: resp

//       })
//     })

//   }).catch(err => {
//     console.log(err);
//     res.status(500).json({
//       error: err,

//     });
//   });

// });



// delete single jumborollentry entry
router.delete('/jumborollentry/:jumborollentryid', async (req, res) => {


  try {

    const jumborollentry = await Jumborollentry.remove({
      _id: req.params.jumborollentryid
    });
    res.send(jumborollentry);



  } catch (error) {

    res.status(500).send(error);
    res.json({
      message: error
    })

  }


});


router.put('/jumborollentry/:jumborollentryid',
  async (req, res) => {
    console.log(req.body)
    // findByIdAndUpdate(req.params.id, req.body, {new: true},
    try {
      const jumburollentry = await Jumborollentry.findByIdAndUpdate(req.params.jumborollentryid, req.body, { new: true }
      );
      res.send({ jumburollentry },);
    } catch (error) {

      res.status(500).send(error);
      res.json({
        message: error
      })
    }


  });




// update jumborollentry entry 

// router.put('/jumborollentry/:jumborollentryid', async (req, res) => {

//   try {
//     const jumborollentry = await Jumborollentry.updateMany({
//       _id: req.params.jumborollentryid,
//       entryNumber: req.body.entryNumber,
//       machineNumber: req.body.machineNumber,
//     });
//     res.send(jumborollentry)
//   } catch (error) {

//     res.status(500).send(error);
//     res.json({
//       message: error
//     })
//   }


// });


module.exports = router;
