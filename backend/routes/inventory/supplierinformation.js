

const express = require('express');
const router = express.Router();
let ObjectID = require('mongodb').ObjectID;
const SupplierInformation = require('../../model/inventory/supplierinformation')
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


router.get('/getallsupplierinformation', async (req, res) => {
    try {
        const supplierinformation = await SupplierInformation.find();
        res.json(supplierinformation);
    } catch (err) {
        res.json({
            message: err
        })
    }
});





// router.get('/getalliteminformation/:id', (req, res, next) => {
//   Iteminformation.findById({
//     _id: req.params.id
//   }).exec().then(result => {
//     res.status(200).json({
//       message: 'item information get single document',
//       result: result,

//     });
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json({
//       error: err,

//     });
//   });

// });


router.get('/getallsupplierinformation/:id', async (req, res) => {

    try {
        const supplierinformationentry = await SupplierInformation.findById({
            _id: req.params.id
        });
        res.send(supplierinformationentry)

    } catch (error) {
        res.status(404).send(error);
        res.json({
            message: error
        })
    }


})


router.post('/addsupplierinformation', (req, res) => {
    console.log(req.body);
    const supplierinformation = new SupplierInformation({

        _id: new mongoose.Types.ObjectId(),
        supplierName: req.body.supplierName,
        companyName: req.body.companyName,
        description: req.body.description,
        address: req.body.supplierName,
        gstNumber: req.body.gstNumber,

    });

    supplierinformation.save().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
    console.log('iteminformation add');


})





router.delete('getallsupplierinformation/:getallsupplierinformationid', (req, res, next) => {
    SupplierInformation.remove({
        _id: req.params.getallsupplierinformationid
    }).exec().then(result => {
        res.status(200).json({
            message: 'iteminformation  deleted',
            result: result,

        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err,

        });
    });

});



router.patch('/:id', (req, res, next) => {
    SupplierInformation.updateOne({
        _id: req.params.id
    }).exec().then(result => {
        res.status(200).json({
            message: 'Iteminformation update',
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
