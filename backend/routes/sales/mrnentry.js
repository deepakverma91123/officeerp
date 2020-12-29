const express = require('express');
const router = express.Router();
let ObjectID = require('mongodb').ObjectID;
const Salesmrn = require('../../model/sales/mrnentry');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


router.get('/getallsalesmrn', async (req, res) => {
    try {
        const salesmrn = await Salesmrn.find();
        res.json(salesmrn);
    } catch (err) {
        res.json({
            message: err
        })
    }
});

// search api 

// router.get('/getallitemmaster/:itemmasterid', (req, res, next) => {
//   Itemmaster.findById({
//     _id: req.params.itemmasterid
//   }).exec().then(result => {
//     res.status(200).json({
//       message: 'item master  get single document',
//       result: result,

//     });
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json({
//       error: err,

//     });
//   });

// });



// search api 




router.get('/getallsalesmrn/:salesmrnid', (req, res, next) => {
    Salesmrn.findById({
        _id: req.params.itemmasterid
    }).exec().then(result => {
        res.status(200).json({
            message: 'item master  get single document',
            result: result,

        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err,

        });
    });

});



router.post('/addsalesmrn', (req, res) => {
    console.log(req.body);
    const salesmrn = new Salesmrn({

        // _id: new mongoose.Types.ObjectId(),

        salesOrderNo: req.body.salesOrderNo,

        salesmrnNumber: req.body.salesmrnNumber

    });

    salesmrn.save().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
    console.log('sales add');


})





router.delete('/getallsalesmrn/:salesmrnid', (req, res, next) => {
    Salesmrn.remove({
        _id: req.params.salesmrnid
    }).exec().then(result => {
        res.status(200).json({
            message: 'Itemmaster  deleted',
            result: result,

        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err,

        });
    });

});



// router.patch('/getallitemmaster/:id', (req, res, next) => {
//   Itemmaster.updateOne({
//     _id: req.params.id
//   }).exec().then(result => {
//     res.status(200).json({
//       message: 'Itemmaster update',
//       result: result,

//     });
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json({
//       error: err,

//     });
//   });

// });


router.put('/getallsalesmrn/:salesmrnid',
    async (req, res) => {
        console.log(req.body)
        // findByIdAndUpdate(req.params.id, req.body, {new: true},
        try {
            const salesmrn = await Itemmaster.findByIdAndUpdate(req.params.salesmrnid, req.body, { new: true }
            );
            res.send({ salesmrn });
        } catch (error) {

            res.status(500).send(error);
            res.json({
                message: error
            })
        }


    });



module.exports = router;
