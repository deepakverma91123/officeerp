const router = require('express').Router();
const Jumborollentry = require('../../model/production/jumborollentry')
const Jumborollinformation = require('../../model/production/jumborollinformation')

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

/// get single jumborollentry entry

// router.get('/jumborollentry/:jumborollentryid', async (req, res) => {

//   try {
//     const jumborollentry = await Jumborollentry.findById({
//       _id: req.params.jumborollentryid
//     });
//     res.send(jumborollentry)
//   } catch (error) {
//     res.status(404).send(error);
//     res.json({
//       message: error
//     })
//   }


// })


router.get('/jumborollentry/:jumborollentryid', (req, res) => {
  Jumborollentry.findById({
    _id: req.params.jumborollentryid
  }).exec().then(result => {
    console.log(result)
    // console.log(result.indentNumber)
    // console.log(result.purchaseOrderNo)




    Jumborollinformation.findById({
      _id: result.jumboRollNumber

    }).then(resp => {

      console.log(resp)
      console.log(result)

      res.send({
        jumborollentry: result,
        jumbuinformation: resp

      })
    })

  }).catch(err => {
    console.log(err);
    res.status(500).json({
      error: err,

    });
  });

});



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
// update jumborollentry entry 

router.put('/jumborollentry/:jumborollentryid', async (req, res) => {

  try {
    const jumborollentry = await Jumborollentry.updateMany({
      _id: req.params.jumborollentryid,
      entryNumber: req.body.entryNumber,
      machineNumber: req.body.machineNumber,
    });
    res.send(jumborollentry)
  } catch (error) {

    res.status(500).send(error);
    res.json({
      message: error
    })
  }


});


module.exports = router;
