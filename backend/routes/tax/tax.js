const express = require('express');
const router = express.Router();
let ObjectID = require('mongodb').ObjectID;
// const Itemcategory = require('../model/in')
// const Itemcategory = require('../../model/inventory/Itemcategory')
const Tax = require('../../model/tax/tax');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


router.get('/getalltax', async (req, res) => {
    try {
        const tax = await Tax.find();
        res.json(tax);
    } catch (err) {
        res.json({
            message: err
        })
    }
});





router.get('/getalltax/:id', (req, res, next) => {
    Tax.findById({
        _id: req.params.id
    }).exec().then(result => {
        res.status(200).json({
            message: ' get single document',
            result: result,

        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err,

        });
    });

});



router.post('/addtax', (req, res) => {
    console.log(req.body);
    const tax = new Tax({
        _id: new mongoose.Types.ObjectId(),
        taxId: req.body.taxId,
        unitDate: req.body.unitDate,
        taxName: req.body.taxName,
        taxPercentage: req.body.taxPercentage,
        category: req.body.category,
        status: req.body.status,


    });

    tax.save().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
    console.log('tax add');


})





router.delete('/:id', (req, res, next) => {
    Tax.remove({
        _id: req.params.id
    }).exec().then(result => {
        res.status(200).json({
            message: 'Tax  deleted',
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
    Tax.updateOne({
        _id: req.params.id
    }).exec().then(result => {
        res.status(200).json({
            message: 'Itemcategory update',
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
