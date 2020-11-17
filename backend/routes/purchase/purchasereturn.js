const router = require('express').Router();
const PurchaseReturn = require('../../model/purchase/Purchasereturn')


router.post('/addpurchasereturn', async (req, res) => {
  console.log(req.body)
  const purchaseReturn = new PurchaseReturn({
    purchaseOrderNo: req.body.purchaseOrderNo,
    prEntryNumber: req.body.prEntryNumber,
    entryDate: req.body.entryDate,
    transportType: req.body.transportType,
    vehicalNumber: req.body.vehicalNumber,
    gateEntryNumber: req.body.gateEntryNumber,
    supplierName: req.body.supplierName,
  })
  try {
    const savedpurchaseReturn = await purchaseReturn.save();
    res.send(savedpurchaseReturn)
  } catch (error) {

    res.status(404).send(error)
  }

});



// get all indententry
router.get('/purchasereturn', async (req, res) => {
  try {
    const purchaseReturn = await PurchaseReturn.find();
    res.send(purchaseReturn)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }

})


router.get('/purchasereturn/:purchasereturnid', async (req, res) => {

  try {
    const purchaseReturn = await PurchaseReturn.findById({
      _id: req.params.purchasereturnid
    });
    res.send(purchaseReturn)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }


})






router.delete('/purchasereturn/:purchasereturnid', (req, res, next) => {
  PurchaseReturn.remove({
    _id: req.params.purchasereturnid
  }).exec().then(result => {
    res.status(200).json({
      message: ' purchasereturnid    deleted',
      result: result,

    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      error: err,

    });
  });

});



router.patch('/purchasereturn/:purchasereturnid', (req, res, next) => {
  PurchaseReturn.findByIdAndUpdate({
    _id: req.params.purchasereturnid
  }).exec().then(result => {
    res.status(200).json({
      message: 'purchasereturn update',
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
