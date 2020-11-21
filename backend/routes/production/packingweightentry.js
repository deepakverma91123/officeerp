const router = require('express').Router();
const Packingweightentry = require('../../model/production/bundleentry')

// addbundle entry
router.post('/addpackingweightentry', async (req, res) => {
  console.log(req.body);
  const packingweightentry = new Packingweightentry({
    bundleEntryNumber: req.body.bundleEntryNumber,
    bundleEntrytDate: req.body.bundleEntrytDate,
    GSM: req.body.GSM,
    Unit: req.body.Unit,
    Brightness: req.body.Brightness,


  })
  try {
    const savedpackingweightentry = await packingweightentry.save();
    res.send(savedpackingweightentry)
  } catch (error) {

    res.status(404).send(error)
  }

});



// get all bundleEntry
router.get('/packingweightentry', async (req, res) => {
  try {
    const packingweightentry = await Packingweightentry.find();
    res.send(packingweightentry)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }

})

/// get single bundle entry

router.get('/packingweightentry/:packingweightentryid', async (req, res) => {

  try {
    const packingweightentry = await Packingweightentry.findById({
      _id: req.params.packingweightentryid
    });
    res.send(packingweightentry)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }


})



// delete single bundle entry
router.delete('/packingweightentry/:packingweightentryid', async (req, res) => {


  try {

    const packingweightentry = await Packingweightentry.remove({
      _id: req.params.packingweightentryid
    });
    res.send(packingweightentry);



  } catch (error) {

    res.status(500).send(error);
    res.json({
      message: error
    })

  }


});
// update bundle entry 

router.put('/packingweightentry/:packingweightentryid', async (req, res) => {

  try {
    const packingweightentry = await Packingweightentry.updateOne({
      _id: req.params.packingweightentryid,
      bundleEntryNumber: req.body.bundleEntryNumber
    });
    res.send(packingweightentry)
  } catch (error) {

    res.status(500).send(error);
    res.json({
      message: error
    })
  }


});


module.exports = router;
