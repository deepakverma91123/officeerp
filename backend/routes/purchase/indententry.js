const express = require('express');
const router = require('express').Router();
const Indententry = require('../../model/purchase/Indententry')
const Purchaseorder = require('../../model/purchase/purchaseorder')


router.post('/addindententry', async (req, res) => {
  console.log(req.body)
  const indententry = new Indententry({
    indentNumber: req.body.indentNumber,
    indentDate: req.body.indentDate,
    department: req.body.department,
    indenterName: req.body.indenterName,
    itemNames: req.body.itemNames,
    manualCodes: req.body.manualCodes,
    currentStocks: req.body.currentStocks,
    unitNames: req.body.unitNames,
    reorderQtys: req.body.reorderQtys,
    reqQtys: req.body.reqQtys,
    costCenters: req.body.costCenters,
    totalAmounts: req.body.totalAmounts,

    Tickets: req.body.Tickets,
    // remark: req.body.remark,
    indententry: req.body.indententry

  })

  const purchaseorderentry = new Purchaseorder({
    title: 'deepak',
    indententry: indententry._id,


  })


  try {
    const savedindententry = await indententry.save();
    res.send(savedindententry)

    try {

      const savedpurchaseorderentry = await purchaseorderentry.save();
      res.send(savedpurchaseorderentry)
    } catch (error) {
      res.status(404).send(error)
    }



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





// router.put('/indententry/:indententryid', async (req, res) => {

//   try {
//     const indententry = await Indententry.updateMany({
//       _id: req.params.indententryid,
//       indentNumber: req.body.indentNumber,
//       indentDate: req.body.indentDate,
//       department: req.body.department,
//       indenterName: req.body.indenterName,
//       itemName: req.body.itemName,
//       manualCode: req.body.manualCode,
//       currentStock: req.body.currentStock,
//       unitName: req.body.unitName,
//       reorderQty: req.body.reorderQty,
//       reqQty: req.body.reqQty,
//       costCenter: req.body.costCenter,
//       reqDate: req.body.reqDate,
//       Tickets: req.body.Tickets,
//       remark: req.body.remark,
//       indententry: req.body.indententry

//     });
//     res.send(indententry);
//   } catch (error) {

//     res.status(500).send(error);
//     res.json({
//       message: error
//     })
//   }


// });




// router.put('/indententry/:indententryid', async (req, res) => {

//   try {
//     const indententry = await Indententry.updateMany({
//       _id: req.params.indententryid,

//       department: req.body.department,
//       indenterName: req.body.indenterName,

//     });
//     res.send(indententry)
//   } catch (error) {

//     res.status(500).send(error);
//     res.json({
//       message: error
//     })
//   }


// });



router.put('/indententry/:indententryid',
  async (req, res) => {
    console.log('gate entry' + req.body)
    // findByIdAndUpdate(req.params.id, req.body, {new: true},
    try {
      const customer = await Indententry.findByIdAndUpdate(req.params.indententryid, { finalSubmit: '1' }, { new: true }
      );


      res.send({ customer, });
    } catch (error) {

      res.status(500).send(error);
      res.json({
        message: error
      })
    }


  });


module.exports = router;
