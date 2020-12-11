const router = require('express').Router();
const Purchaseorder = require('../../model/purchase/purchaseorder')
const Indententry = require('../../model/purchase/Indententry')
const Gateentry = require('../../model/gateentry/gateentry')
const mongoose = require('mongoose');

router.post('/addpurchase', async (req, res) => {
  console.log(req.body)
  const purchaseorder = new Purchaseorder({
    _id: mongoose.Types.ObjectId(),
    indentNumber: req.body.indentNo,
    orderNumber: req.body.orderNumber,
    orderDate: req.body.orderDate,
    supplier: req.body.supplier,
    currency: req.body.currency,
    indententry: req.body.indententry,
    isActive: req.body.isActive
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

// popolate and select example

router.get('/purcha', async (req, res) => {
  try {
    const purchaseorder = await Purchaseorder.find()
      .select('orderNumber _id orderDate supplier')
      .populate('indententry')
      .exec();

    res.send(purchaseorder)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }

})
/// find by id populate

///  get api purcha

router.get('/purcha/:purchaseorderid', (req, res) => {
  Purchaseorder.findById({
    _id: req.params.purchaseorderid
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




router.get('/purchaseorder/:purchaseorderid', async (req, res) => {

  try {
    const purchaseorder = await Purchaseorder.findById({
      _id: req.params.purchaseorderid
    });
    res.send(purchaseorder)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }


})






router.delete('/purchaseorder/:purchaseorderid', (req, res) => {
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



router.patch('/purchaseorder/:purchaseorderid', (req, res) => {
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
