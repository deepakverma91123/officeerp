const router = require('express').Router();
const Mrnentry = require('../../model/purchase/mrnentry')


router.post('/addmrnentry', async (req, res) => {
  console.log(req.body);
  const mrnentry = new Mrnentry({
    purchaseOrderNumber: req.body.purchaseOrderNumber,
    chalanNumber: req.body.chalanNumber,
    entryDate: req.body.entryDate,
    transportType: req.body.transportType,
    vehicalNumber: req.body.vehicalNumber,
    driverName: req.body.driverName,
    gateEntryName: req.body.gateEntryName,
    supplierName: req.body.supplierName,
    billNumber: req.body.billNumber,
    roadPermitNumber: req.body.roadPermitNumber,
    gates: req.body.gates,
    receiveQuantity: req.body.receiveQuantity

  })
  try {
    const savedmrnentry = await mrnentry.save();
    res.send(savedmrnentry)
  } catch (error) {

    res.status(404).send(error)
  }

});



// get all indententry
router.get('/mrnentry', async (req, res) => {
  try {
    const mrnentry = await Mrnentry.find();
    res.send(mrnentry)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }

})


router.get('/mrnentry/:mrnentryid', async (req, res) => {

  try {
    const mrnentry = await Mrnentry.findById({
      _id: req.params.mrnentryid
    });
    res.send(mrnentry)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }


})






router.delete('/mrnentry/:mrnentryid', (req, res, next) => {
  Mrnentry.remove({
    _id: req.params.mrnentryid
  }).exec().then(result => {
    res.status(200).json({
      message: ' mrn entry  deleted',
      result: result,

    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      error: err,

    });
  });

});



router.patch('/mrnentry/:mrnentryid', (req, res, next) => {
  Mrnentry.findByIdAndUpdate({
    _id: req.params.mrnentryid
  }).exec().then(result => {
    res.status(200).json({
      message: 'mrnentry update',
      result: result,

    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      error: err,

    });
  });

});


module.exports = router;
