const router = require('express').Router();
const Reementry = require('../../model/production/reementry')

// addbundle entry
router.post('/addreementry', async (req, res) => {
  console.log(req.body);
  const reementry = new Reementry({
    reemEntryNumber: req.body.reemEntryNumber,
    reemEntrytDate: req.body.reemEntrytDate,
    gsm: req.body.gsm,
    unit: req.body.unit,
    brightness: req.body.brightness,


  })
  try {
    const savedreementry = await reementry.save();
    res.send(savedreementry)
  } catch (error) {

    res.status(404).send(error)
  }

});



// get all bundleEntry
router.get('/reementry', async (req, res) => {
  try {
    const reementry = await Reementry.find();
    res.send(reementry)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }

})

/// get single bundle entry

router.get('/reementry/:reementryid', async (req, res) => {

  try {
    const reementry = await Reementry.findById({
      _id: req.params.reementryid
    });
    res.send(reementry)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }


})



// delete single bundle entry
router.delete('/reementry/:reementryid', async (req, res) => {


  try {

    const reementry = await Reementry.remove({
      _id: req.params.reementryid
    });
    res.send(reementry);



  } catch (error) {

    res.status(500).send(error);
    res.json({
      message: error
    })

  }


});
// update bundle entry 

router.put('/reementry/:reementryid', async (req, res) => {

  try {
    const reementry = await Reementry.updateOne({
      _id: req.params.reementryid,
    });
    res.send(reementry)
  } catch (error) {

    res.status(500).send(error);
    res.json({
      message: error
    })
  }


});


module.exports = router;
