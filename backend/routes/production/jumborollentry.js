const router = require('express').Router();
const Jumborollentry = require('../../model/production/jumborollentry')

// jumborollentry entry
router.post('/addjumboentry', async (req, res) => {
  console.log(req.body);
  const jumborollentry = new Jumborollentry({
    entryNumber: req.body.entryNumber,


    jumboRollNumber: req.body.jumboRollNumber,
    jumbuentryDate: req.body.jumbuentryDate,
    jumboRollItemName: req.body.jumboRollItemName,
    jumboCode: req.body.jumboCode,
    machineName: req.body.machineName,
    machineCategory: req.body.machineCategory,
    quality: req.body.quality,
    gsm: req.body.gsm,
    brightness: req.body.brightness,
    remark: req.body.remark,
    weight: req.body.weight,
    barcode: req.body.barcode,
    burstFactor: req.body.burstFactor,

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
