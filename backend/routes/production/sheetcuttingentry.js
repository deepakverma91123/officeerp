const router = require('express').Router();
const Sheetcuttingentry = require('../../model/production/bundleentry')

// addbundle entry
router.post('/addsheetcuttingentry', async (req, res) => {
  console.log(req.body);
  const sheetcuttingentry = new Sheetcuttingentry({
    entryNumber: req.body.entryNumber,
    entrytDate: req.body.entrytDate,
    itemName: req.body.itemName,
    quality: req.body.quality,
    brightness: req.body.brightness,
    gsm: req.body.gsm


  })
  try {
    const savedsheetcuttingentry = await sheetcuttingentry.save();
    res.send(savedsheetcuttingentry)
  } catch (error) {

    res.status(404).send(error)
  }

});



// get all bundleEntry
router.get('/sheetcuttingentry', async (req, res) => {
  try {
    const sheetcuttingentry = await Sheetcuttingentry.find();
    res.send(sheetcuttingentry)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }

})

/// get single bundle entry

router.get('/sheetcuttingentry/:sheetcuttingentryid', async (req, res) => {

  try {
    const sheetcuttingentry = await Sheetcuttingentry.findById({
      _id: req.params.sheetcuttingentryid
    });
    res.send(sheetcuttingentry)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }


})



// delete single bundle entry
router.delete('/sheetcuttingentry/:sheetcuttingentryid', async (req, res) => {


  try {

    const sheetcuttingentry = await Sheetcuttingentry.remove({
      _id: req.params.sheetcuttingentryid
    });
    res.send(sheetcuttingentry);



  } catch (error) {

    res.status(500).send(error);
    res.json({
      message: error
    })

  }


});
// update bundle entry 

router.put('/sheetcuttingentry/:sheetcuttingentryid', async (req, res) => {

  try {
    const sheetcuttingentry = await Sheetcuttingentry.updateOne({
      _id: req.params.sheetcuttingentryid
    });
    res.send(sheetcuttingentry)
  } catch (error) {

    res.status(500).send(error);
    res.json({
      message: error
    })
  }


});


module.exports = router;
