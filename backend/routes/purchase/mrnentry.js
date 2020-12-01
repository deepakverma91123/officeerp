const router = require('express').Router();
const Mrnentry = require('../../model/purchase/mrnentry')
const Gateentry = require('../../model/gateentry/gateentry')
const Purchaseorderentry = require('../../model/purchase/purchaseorder')
router.post('/addmrnentry', async (req, res) => {
  console.log(req.body);
  const mrnentry = new Mrnentry({
    vehicalNumber: req.body.vehicalNumber,
    entryDate: req.body.entryDate,
    driverName: req.body.driverName,
    Weight: req.body.Weight,
    supplierName: req.body.supplierName,
    gates: req.body.gates,
    receiveQuantity: req.body.receiveQuantity,
    purchaseOrderNo: req.body.purchaseOrderNo,
    isActive: req.body.isActive

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


// router.get('/mrnentry/:mrnentryid', async (req, res) => {

//   try {
//     const mrnentry = await Mrnentry.findById({
//       _id: req.params.mrnentryid
//     });
//     res.send(mrnentry)
//   } catch (error) {
//     res.status(404).send(error);
//     res.json({
//       message: error
//     })
//   }


// })




router.get('/mrnentry/:mrnentryid', (req, res) => {
  Mrnentry.findById({
    _id: req.params.mrnentryid
  }).exec().then(result => {
    console.log(result)
    // console.log(result.indentNumber)
    // console.log(result.purchaseOrderNo)




    Purchaseorderentry.findById({
      _id: result.purchaseOrderNo

    }).then(resp => {

      console.log(resp)
      console.log(result)



      res.send({
        mrn: result,
        purchaseorder: resp,
        gat: 'deepak kumar'

      })
    })



    Gateentry.findById({
      _id: result.gates

    }).then(resg => {

      console.log(resg)
      console.log(result)

      res.send({
        mrn: result,
        gates: resg,
        gate: 'deepak'

      })
    })

  }).catch(err => {
    console.log(err);
    res.status(500).json({
      error: err,

    });
  });

});


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
