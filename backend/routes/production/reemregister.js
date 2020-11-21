

const router = require('express').Router();
const Bundleentry = require('../../model/production/bundleentry')

// addbundle entry
router.post('/addbundleentry', async (req, res) => {
  console.log(req.body);
  const bundleentry = new Bundleentry({
    bundleEntryNumber: req.body.bundleEntryNumber,
    bundleEntrytDate: req.body.bundleEntrytDate,
    GSM: req.body.GSM,
    Unit: req.body.Unit,
    Brightness: req.body.Brightness,


  })
  try {
    const savedbundleentry = await bundleentry.save();
    res.send(savedbundleentry)
  } catch (error) {

    res.status(404).send(error)
  }

});



// get all bundleEntry
router.get('/bundleentry', async (req, res) => {
  try {
    const bundleentry = await Bundleentry.find();
    res.send(bundleentry)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }

})

/// get single bundle entry

router.get('/bundleentry/:bundleentryid', async (req, res) => {

  try {
    const bundleentry = await Bundleentry.findById({
      _id: req.params.bundleentryid
    });
    res.send(bundleentry)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }


})



// delete single bundle entry
router.delete('/bundleentry/:bundleentryid', async (req, res) => {


  try {

    const bundleentry = await Bundleentry.remove({
      _id: req.params.bundleentryid
    });
    res.send(bundleentry);



  } catch (error) {

    res.status(500).send(error);
    res.json({
      message: error
    })

  }


});
// update bundle entry 

router.put('/bundleentry/:bundleentryid', async (req, res) => {

  try {
    const bundleentry = await Bundleentry.updateOne({
      _id: req.params.bundleentryid,
      bundleEntryNumber: req.body.bundleEntryNumber
    });
    res.send(bundleentry)
  } catch (error) {

    res.status(500).send(error);
    res.json({
      message: error
    })
  }


});


module.exports = router;
