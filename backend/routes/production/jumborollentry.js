const router = require('express').Router();
const Jumborollentry = require('../../model/production/jumborollentry')

// jumborollentry entry
router.post('/addjumboentry', async (req, res) => {
  console.log(req.body);
  const jumborollentry = new Jumborollentry({
    entryNumber: req.body.entryNumber,
    entrytDate: req.body.entrytDate,
    machineNumber: req.body.machineNumber,
    machineCategory: req.body.machineCategory,


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
    const jumborollentry = await Jumborollentry.updateOne({
      _id: req.params.bundleentryid,
      bundleEntryNumber: req.body.bundleEntryNumber
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
