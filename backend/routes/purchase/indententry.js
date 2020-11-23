const express = require('express');
const router = require('express').Router();
const Indententry = require('../../model/purchase/Indententry')


router.post('/addindententry', async (req, res) => {
  console.log(req.body)
  const indententry = new Indententry({
    indentNumber: req.body.indentNumber,
    indentDate: req.body.indentDate,
    department: req.body.department,
    indenterName: req.body.indenterName,
    itemName: req.body.itemName,
    manualCode: req.body.manualCode,
    currentStock: req.body.currentStock,
    unitName: req.body.unitName,
    reorderQty: req.body.reorderQty,
    reqQty: req.body.reqQty,
    costCenter: req.body.costCenter,
    reqDate: req.body.reqDate,
    Tickets: req.body.Tickets,
    remark: req.body.remark,







  })
  try {
    const savedindententry = await indententry.save();
    res.send(savedindententry)
  } catch (error) {

    res.status(404).send(error)
  }

});



// get all indententry
router.get('/indententry', async (req, res) => {
  try {
    const indententry = await Indententry.find();
    res.send(indententry)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }

})


router.get('/indententry/:indententryid', async (req, res) => {

  try {
    const indententry = await Indententry.findById({
      _id: req.params.indententryid
    });
    res.send(indententry)

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


router.delete('/indententry/:indententryid', (req, res, next) => {
  Indententry.findByIdAndRemove({
    _id: req.params.indententryid,
    Tickets: req.body.Tickets
  }).exec().then(result => {
    res.status(200).json({
      message: ' indent entry  deleted',
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





router.put('/indententry/:indententryid',
  async (req, res) => {

    try {
      const indententry = await Indententry.updateOne({
        _id: req.params.indententryid,
        indenterName: req.body.indenterName

      });
      res.send(indententry);
    } catch (error) {

      res.status(500).send(error);
      res.json({
        message: error
      })
    }


  });


module.exports = router;
