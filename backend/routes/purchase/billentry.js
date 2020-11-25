const router = require('express').Router();
const Purchaseorder = require('../../model/purchase/purchaseorder')
const Indententry = require('../../model/purchase/Indententry')
const Gateentry = require('../../model/gateentry/gateentry')
const Billentry = require('../../model/purchase/billentry')
const mongoose = require('mongoose');

router.post('/addbillentry', async (req, res) => {
  console.log(req.body)
  const billentry = new Billentry({
    _id: mongoose.Types.ObjectId(),
    billentryDate: req.body.billentryDate,
    bookNumber: req.body.bookNumber,
    partyNumber: req.body.partyNumber,
    partyCity: req.body.partyCity,
    againstForm: req.body.againstForm,
    inelegibleItc: req.body.inelegibleItc,
    purchaseOrderNo: req.body.purchaseOrderNo,

  })





  try {
    const savedbillentry = await billentry.save();

    res.send(savedbillentry)

  } catch (error) {

    res.status(404).send(error)
  }

});



// get all billentry
router.get('/billentry', async (req, res) => {
  try {
    const billentry = await Billentry.find();
    res.send(billentry)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }

})

// popolate and select example

// router.get('/purcha', async (req, res) => {
//   try {
//     const purchaseorder = await Billentry.find()
//       .select('orderNumber _id orderDate supplier')
//       .populate('indententry')
//       .exec();

//     res.send(purchaseorder)
//   } catch (error) {
//     res.status(404).send(error);
//     res.json({
//       message: error
//     })
//   }

// })
/// find by id populate

///  get api purcha

router.get('/billentry/:billentryid', (req, res) => {
  Billentry.findById({
    _id: req.params.billentryid
  }).exec().then(result => {
    console.log(result)
    console.log(result.indentNumber)
    // console.log(result.purchaseOrderNo)




    Indententry.findById({
      _id: result.indentNumber

    }).then(resp => {

      console.log(resp)
      console.log(result)

      res.send({
        purchaseorder: result,
        indetData: resp

      })
    })

  }).catch(err => {
    console.log(err);
    res.status(500).json({
      error: err,

    });
  });

});

// router.get('/purcha/:purchaseorderid', async (req, res) => {

//   try {
//     const purchaseorder = await Purchaseorder.findById({
//       _id: req.params.purchaseorderid
//     })
//     console.log(purchaseorder)
//     // res.send(purchaseorder)


//     try {
//       const Indententry = await Indententry.findById({

//         _id: purchaseorder.indentNumber

//       })
//       console.log(Indententry)
//       res.send({
//         purchaseorder: purchaseorder,
//         indetData: Indententry

//       })
//     } catch (error) {
//       res.status(404).send(error);
//       res.json({
//         message: error
//       })

//     }

//   } catch (error) {
//     res.status(404).send(error);
//     res.json({
//       message: error
//     })
//   }

// })




// router.get('/purchaseorder/:purchaseorderid', async (req, res) => {

//   try {
//     const purchaseorder = await Billentry.findById({
//       _id: req.params.purchaseorderid
//     });
//     res.send(purchaseorder)
//   } catch (error) {
//     res.status(404).send(error);
//     res.json({
//       message: error
//     })
//   }


// })






router.delete('/billentry/:billentryid', (req, res) => {
  Billentry.remove({
    _id: req.params.billentryid
  }).exec().then(result => {
    res.status(200).json({
      message: ' billentry   deleted',
      result: result,

    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      error: err,

    });
  });

});



router.patch('/billentry/:billentryid', (req, res) => {
  Billentry.findByIdAndUpdate({
    _id: req.params.billentryid
  }).exec().then(result => {
    res.status(200).json({
      message: 'billentry update',
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
