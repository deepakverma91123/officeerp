const express = require('express');
const router = require('express').Router();
const Salesgateentry = require('../../model/gateentry/salesgateentry');
const Purchaseorder = require('../../model/purchase/purchaseorder');
const Salesorder = require('../../model/sales/orderentry');
const mongoose = require('mongoose');
router.post('/addsalegateentry', async (req, res) => {
    console.log(req.body)
    const salesgateentry = new Salesgateentry({
        _id: mongoose.Types.ObjectId(),
        salesOrderNo: req.body.salesOrderNo,
        salesgateEntryNumber: req.body.salesgateEntryNumber,
        salesManName: req.body.salesManName,
        salestransportType: req.body.salestransportType,
        salesdriverName: req.body.salesdriverName,
        salesvehicalNumber: req.body.salesvehicalNumber,
        salestruckWeight: req.body.salestruckWeight,
        salesentryDate: req.body.salesentryDate,
        salestime: req.body.salestime,
        salesPurpose: req.body.salesPurpose,
        selectedItem: req.body.selectedItem


    })

    try {
        const savedsalesgateentry = await salesgateentry.save();
        res.send(savedsalesgateentry)

    } catch (error) {

        res.status(404).send(error)
    }

});



// get all gateentry
router.get('/salesgateentry', async (req, res) => {
    try {
        const salesgateentry = await Salesgateentry.find();
        res.send(salesgateentry)
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


router.get('/salesgateentry/:salesgateentryid', (req, res) => {
    Salesgateentry.find({
        salesOrderNo: req.params.salesgateentryid
    }).exec().then(result => {
        console.log(result)
        // console.log(result.purchaseOrderNo)
        // res.send(result);

        res.send({
            gateData: result,
            message: 'first'

        })
        // console.log(result.purchaseOrderNo)




        Salesorder.findById({
            _id: result.salesOrderNo

        }).then(resp => {

            console.log(resp)
            console.log(result)

            res.send({
                salesOrder: resp,
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


router.delete('/salesgateentry/:salesgateentryid', (req, res, next) => {
    Salesgateentry.findByIdAndRemove({
        _id: req.params.salesgateentryid,
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





router.put('/salesgateentry/:salesgateentryid',
    async (req, res) => {
        console.log('gate entry' + req.body)
        // findByIdAndUpdate(req.params.id, req.body, {new: true},
        try {
            const salesgateentry = await Salesgateentry.findByIdAndUpdate(req.params.salesgateentryid, req.body, { new: true }
            );
            res.send({ salesgateentry, });
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
