const router = require('express').Router();
const Jumborollinformation = require('../../model/production/jumborollinformation')

// jumborollinformation entry
router.post('/addjumborollinformation', async (req, res) => {
  console.log(req.body);
  const jumborollentry = new Jumborollinformation({
    jumboCode: req.body.jumboCode,
    jumboRollItemName: req.body.jumboRollItemName,
    machineName: req.body.machineName,
    machineCategory: req.body.machineCategory,
    jumboRollDate: req.body.jumboRollDate

  })
  try {
    const savedjumborollinformation = await jumborollentry.save();
    res.send(savedjumborollinformation)
  } catch (error) {

    res.status(404).send(error)
  }

});



// get all jumborollentry Entry
router.get('/jumborollinformation', async (req, res) => {
  try {
    const jumborollinformation = await Jumborollinformation.find();
    res.send(jumborollinformation)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }

})

/// get single jumborollentry entry

router.get('/jumborollinformation/:jumborollinformationid', async (req, res) => {

  try {
    const jumborollinformation = await Jumborollinformation.findById({
      _id: req.params.jumborollinformationid
    });
    res.send(jumborollinformation)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }


})



// delete single jumborollentry entry
router.delete('/jumborollinformation/:jumborollinformationid', async (req, res) => {


  try {

    const jumborollinformation = await Jumborollinformation.remove({
      _id: req.params.jumborollinformationid
    });
    res.send(jumborollinformation);



  } catch (error) {

    res.status(500).send(error);
    res.json({
      message: error
    })

  }


});
// update jumborollentry entry 

router.put('/jumborollinformation/:jumborollinformationid', async (req, res) => {

  try {
    const jumborollinformation = await Jumborollinformation.updateMany({
      _id: req.params.jumborollinformationid,
      entryNumber: req.body.entryNumber,
      machineNumber: req.body.machineNumber,
    });
    res.send(jumborollinformation)
  } catch (error) {

    res.status(500).send(error);
    res.json({
      message: error
    })
  }


});


module.exports = router;
