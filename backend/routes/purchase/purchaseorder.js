const router = require('express').Router();
const Purchaseorder = require('../../model/purchase/purchaseorder')




router.post('/addpurchaseorder', async (req, res) => {
  const purchaseorder = new Purchaseorder({
    indentNumber: req.body.indentNumber,
    indentNumber: req.body.indentNumber,
    orderNumber: req.body.orderNumber,
    orderDate: req.body.orderDate,
    supplier: req.body.supplier,
    currency: req.body.currency,

  })
  try {
    const savedpurchaseorder = await purchaseorder.save();
    res.send(savedpurchaseorder)
  } catch (error) {

    res.status(404).send(error)
  }

});



// get all indententry
router.get('/purchaseorder', async (req, res) => {
  try {
    const purchaseorder = await Purchaseorder.find();
    res.send(purchaseorder)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }

})


router.get('/purchaseorder/:purchaseorderid', async (req, res) => {

  try {
    const purchaseorder = await Purchaseorder.findById(req.params.purchaseorderid);
    res.send(purchaseorder)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }


})






router.delete('/purchaseorder/:purchaseorderid', (req, res, next) => {
    Purchaseorder.remove({
    _id: req.params.purchaseorderid
  }).exec().then(result => {
    res.status(200).json({
      message: ' indent entry  deleted',
      result: result,

    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      error: err,

    });
  });

});



router.patch('/purchaseorder/:purchaseorderid', (req, res, next) => {
    Purchaseorder.findByIdAndUpdate({
    _id: req.params.purchaseorderid
  }).exec().then(result => {
    res.status(200).json({
      message: 'purchaseorder update',
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
