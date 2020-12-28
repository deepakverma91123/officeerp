const router = require('express').Router();
const Reelcuttingentry = require('../../model/production/reelcuttingentry')

// addbundle entry
router.post('/addreelcuttingentry', async (req, res) => {
  console.log(req.body);
  const reelcuttingentry = new Reelcuttingentry({
    jumboRollNumber: req.body.jumboRollNumber,
    reelcuttingentryDate: req.body.reelcuttingentryDate,
    reelcuttingentryNumber: req.body.reelcuttingentryNumber,
    jumboRollItemName: req.body.jumboRollItemName,
    reelcuttingGsm: req.body.reelcuttingGsm,
    reelcuttingQuality: req.body.reelcuttingQuality,
    reelcuttingBrightness: req.body.reelcuttingBrightness,
    manyReel: req.body.manyReel,



    reelNumber: req.body.reelNumber,
    reelSize: req.body.reelSize,
    reelUnit: req.body.reelUnit,
    reelWeight: req.body.reelWeight,
    reelRemark: req.body.reelRemark,
    reelMeterage: req.body.reelMeterage,
    reelGsm: req.body.reelGsm,



  })
  try {
    const savedreelcuttingentry = await reelcuttingentry.save();
    res.send(savedreelcuttingentry)
  } catch (error) {

    res.status(404).send(error)
  }

});



// get all reelcuttingentry
router.get('/reelcuttingentry', async (req, res) => {
  try {
    const reelcuttingentry = await Reelcuttingentry.find();
    res.send(reelcuttingentry)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }

})


router.get('/getallsalesordeequery/:fields', async (req, res) => {
  // let limit = parseInt(req.query.fields)


  let ri = parseInt(req.params.fields);
  try {
    // const salesorder = await Reelcuttingentry.find({ manyReel: { $gte: 2 } });
    const salesorder = await Reelcuttingentry.find().limit(ri);

    // const salesorder = await Reelcuttingentry.find({ $limit: fields });

    console.log(salesorder)
    res.send(salesorder);
  } catch (err) {
    res.json({
      message: err,
      big: 'error'
    })
  }
});

/// query

router.get('/reelcuttingentry/:reelcuttingentryid', async (req, res) => {
  // const fields = req.params.fields;
  try {
    const reelcuttingentry = await Reelcuttingentry.findById({
      _id: req.params.reelcuttingentryid
    });
    res.send(reelcuttingentry)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }


})



/// get single reelcuttingentry entry

router.get('/reelcuttingentry/:reelcuttingentryid', async (req, res) => {

  try {
    const reelcuttingentry = await Reelcuttingentry.findById({
      _id: req.params.reelcuttingentryid
    });
    res.send(reelcuttingentry)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }


})



// delete single bundle entry
router.delete('/reelcuttingentry/:reelcuttingentryid', async (req, res) => {


  try {

    const reelcuttingentry = await Reelcuttingentry.remove({
      _id: req.params.reelcuttingentryid
    });
    res.send(reelcuttingentry);



  } catch (error) {

    res.status(500).send(error);
    res.json({
      message: error
    })

  }


});
// update reelcuttingentry entry 

router.put('/reelcuttingentry/:reelcuttingentryid', async (req, res) => {

  try {
    const reelcuttingentry = await Reelcuttingentry.updateOne({
      _id: req.params.reelcuttingentryid
    });
    res.send(reelcuttingentry)
  } catch (error) {

    res.status(500).send(error);
    res.json({
      message: error
    })
  }


});


module.exports = router;
