const router = require('express').Router();
const Reelcuttingentry = require('../../model/production/reelcuttingentry')

// addbundle entry
router.post('/addreelcuttingentry', async (req, res) => {
  console.log(req.body);
  const reelcuttingentry = new Reelcuttingentry({
    entryNumber: req.body.entryNumber,
    entrytDate: req.body.entrytDate,
    setNumber: req.body.setNumber,
    jumboRoll: req.body.jumboRoll,
    gsm: req.body.gsm,
    quality: req.body.quality,
    brightness: req.body.brightness


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
