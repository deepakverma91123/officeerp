const express = require('express');
const router = require('express').Router();
const Gateentry = require('../../model/gateentry/gateentry');
const Purchaseorder = require('../../model/purchase/purchaseorder')
const mongoose = require('mongoose');



const multer = require('multer');



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../../../public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})

const upload = multer({
  storage: storage
})


router.post('/addgateentry', upload.array('photos', 12), async (req, res) => {
  console.log(req.body)
  const gateentry = new Gateentry({
    _id: mongoose.Types.ObjectId(),
    gateEntryNumber: req.body.gateEntryNumber,
    supplierName: req.body.supplierName,
    transportType: req.body.transportType,
    driverName: req.body.driverName,
    vehicalNumber: req.body.vehicalNumber,
    entryDate: req.body.entryDate,
    purchaseOrderNo: req.body.purchaseOrderNo,
    allweight: req.body.allweight,
    productWeight: req.body.productWeight,
    truckWeight: req.body.truckWeight


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


// router.get('/gateentry/:gateentryid', async (req, res) => {

//   try {
//     const gateentry = await Gateentry.find({
//       purchaseOrderNo: req.params.gateentryid
//       // _id: req.params.gateentryid

//     });
//     res.send(gateentry)

//     // res.send({
//     //   gateData: gateentry

//     // })
//   } catch (error) {
//     res.status(404).send(error);
//     res.json({
//       message: error
//     })
//   }


// })


// router.get('/purcha/:purchaseorderid', (req, res) => {
//   Gateentry.find({
//     _id: req.params.purchaseorderid
//   }).exec().then(result => {
//     console.log(result)
//     console.log(result.indentNumber)
//     // console.log(result.purchaseOrderNo)




//     Indententry.findById({
//       _id: result.indentNumber

//     }).then(resp => {

//       console.log(resp)
//       console.log(result)

//       res.send({
//         purchaseorder: result,
//         indetData: resp

//       })
//     })

//   }).catch(err => {
//     console.log(err);
//     res.status(500).json({
//       error: err,

//     });
//   });

// });


router.get('/gateentry/:gateentryid', (req, res) => {
  Gateentry.find({
    purchaseOrderNo: req.params.gateentryid
  }).exec().then(result => {
    console.log(result)
    // console.log(result.purchaseOrderNo)
    // res.send(result);

    res.send({
      gateData: result,
      message: 'first'

    })
    // console.log(result.purchaseOrderNo)




    Purchaseorder.findById({
      _id: result.purchaseOrderNo

    }).then(resp => {

      console.log(resp)
      console.log(result)

      res.send({
        purchaseorder: resp,
        gateData: result,
        message: 'seceond'

      })
    })

  }).catch(err => {
    console.log(err);
    res.status(500).json({
      error: err,

    });
  });

});






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
    console.log('gate entry' + req.body)
    // findByIdAndUpdate(req.params.id, req.body, {new: true},
    try {
      const gateentry = await Gateentry.findByIdAndUpdate(req.params.gateentryid, req.body, { new: true }
      );
      res.send({ gateentry, });
    } catch (error) {

      res.status(500).send(error);
      res.json({
        message: error
      })
    }


  });



// router.put('/gateentry/:gateentryid', async (req, res) => {
//   try {
//     const gate = {
//       purchaseOrderNo: req.params.gateentryid,
//       driverName: req.body.driverName,
//       productWeight: req.body.productWeight,
//       truckWeight: req.body.truckWeight
//     }

//     const updategate = await gate.findByIdAndUpdate({
//       _id: req.params.gateentryid
//     }, gate);
//     res.send(updategate)

//   } catch (error) {
//     res.status(404).send(error);
//     res.json({
//       message: error
//     })
//   }
// })


module.exports = router;
