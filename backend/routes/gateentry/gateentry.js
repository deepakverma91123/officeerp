const express = require('express');
const router = require('express').Router();
const Gateentry = require('../../model/gateentry/gateentry');


router.post('/addgateentry', async (req, res) => {
  console.log(req.body)
  const gateentry = new Gateentry({
    gateEntryNumber: req.body.gateEntryNumber,
    supplierName: req.body.supplierName,
    transportType: req.body.transportType,
    driverName: req.body.driverName,
    vehicalNumber: req.body.vehicalNumber,
    entryDate: req.body.entryDate,
    purchaseOrderNo: req.body.purchaseOrderNo

  })

  try {
    const savedgateentry = await gateentry.save();
    res.send(savedgateentry)

  } catch (error) {

    res.status(404).send(error)
  }

});



// get all gateentry
router.get('/gateentry', async (req, res) => {
  try {
    const gateentry = await Gateentry.find();
    res.send(gateentry)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }

})


router.get('/gateentry/:gateentryid', async (req, res) => {

  try {
    const gateentry = await Gateentry.findById({
      _id: req.params.gateentryid
    });
    res.send(gateentry)

  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }


})






// router.delete('/indententry/:indententryid', (req, res, next) => {
//   Indententry.remove({
//     _id: req.params.indententryid
//   }).exec().then(result => {
//     res.status(200).json({
//       message: ' indent entry  deleted',
//       result: result,

//     });
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json({
//       error: err,

//     });
//   });

// });


router.delete('/gateentry/:gateentryid', (req, res, next) => {
  Gateentry.findByIdAndRemove({
    _id: req.params.gateentryid,
    // Tickets: req.body.Tickets
  }).exec().then(result => {
    res.status(200).json({
      message: ' gateentry    deleted',
      result: result,

    });
  }).catch(err => {
    console.log(err);
    // res.status(500).json({
    //   error: err,

    // });
  });

});




// router.patch('/indententry/:indententryid', (req, res, next) => {
//   Indententry.findByIdAndUpdate({
//     _id: req.params.indententryid
//   }).exec().then(result => {
//     res.status(200).json({
//       message: 'indententry update',
//       result: result,

//     });
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json({
//       error: err,

//     });
//   });

// });





router.put('/gateentry/:gateentryid',
  async (req, res) => {

    try {
      const gateentry = await Gateentry.updateOne({
        _id: req.params.gateentryid,
        // indenterName: req.body.indenterName

      });
      res.send(gateentry);
    } catch (error) {

      res.status(500).send(error);
      res.json({
        message: error
      })
    }


  });


module.exports = router;
