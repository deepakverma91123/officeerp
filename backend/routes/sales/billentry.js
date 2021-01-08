const router = require('express').Router();
// const Purchaseorder = require('../../model/purchase/purchaseorder')
const Indententry = require('../../model/purchase/Indententry')
const Gateentry = require('../../model/gateentry/gateentry')
// const Billentry = require('../../model/purchase/billentry')
const Salesbillentry = require('../../model/sales/billentry')
const Salesmrn = require('../../model/sales/mrnentry')

const mongoose = require('mongoose');


router.post('/addsalesbillentry', async (req, res) => {
    console.log(req.body)
    const salesbillentry = new Salesbillentry({
        _id: mongoose.Types.ObjectId(),
        salesmrnNumber: req.body.salesmrnNumber,
        salesbillentryDate: req.body.salesbillentryDate,
        salesbookNumber: req.body.salesbookNumber,
        salespartyNumber: req.body.salespartyNumber,
        salespartyCity: req.body.salespartyCity,
        salesagainstForm: req.body.salesagainstForm,


    })





    try {
        const savedsalesbillentry = await salesbillentry.save();

        res.send(savedsalesbillentry)

    } catch (error) {

        res.status(404).send(error)
    }

});



// get all billentry
router.get('/salesbillentry', async (req, res) => {
    try {
        const salesbillentry = await Salesbillentry.find();
        res.send(salesbillentry)
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

router.get('/salesbillentry/:salesbillentryid', (req, res) => {
    Salesbillentry.findById({
        _id: req.params.salesbillentryid
    }).exec().then(result => {
        console.log(result)
        console.log(result.salesOrderNo)
        // console.log(result.purchaseOrderNo)




        Salesmrn.findById({
            _id: result.salesOrderNo

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






router.delete('/salesbillentry/:salesbillentryid', (req, res) => {
    Salesbillentry.remove({
        _id: req.params.salesbillentryid
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



router.patch('/salesbillentry/:salesbillentryid', (req, res) => {
    Salesbillentry.findByIdAndUpdate({
        _id: req.params.salesbillentryid
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
