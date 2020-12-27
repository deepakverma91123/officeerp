const express = require('express');
const router = require('express').Router();
const Supplier = require('../../model/supplier/supplier')
const mongoose = require('mongoose');
router.post('/addsupplier', async (req, res) => {
    console.log(req.body)
    const supplier = new Supplier({
        _id: mongoose.Types.ObjectId(),
        supplierName: req.body.supplierName,
        companyName: req.body.companyName,
        description: req.body.description,
        address: req.body.address,
        gstNumber: req.body.gstNumber,
        mobileNumber: req.body.mobileNumber,
        state: req.body.state,
        country: req.body.country,
        email: req.body.email

    })

    try {
        const savedsupplier = await supplier.save();
        res.send(savedsupplier)

    } catch (error) {

        res.status(404).send(error)
    }

});



// get all supplier
router.get('/supplier', async (req, res) => {
    try {
        const supplier = await Supplier.find();
        res.send(supplier)
    } catch (error) {
        res.status(404).send(error);
        res.json({
            message: error
        })
    }

})









router.delete('/supplier/:supplierid', (req, res, next) => {
    Supplier.findByIdAndRemove({
        _id: req.params.supplierid,
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


router.put('/supplier/:supplierid',
    async (req, res) => {
        console.log('gate entry' + req.body)
        // findByIdAndUpdate(req.params.id, req.body, {new: true},
        try {
            const supplier = await Supplier.findByIdAndUpdate(req.params.supplierid, req.body, { new: true }
            );
            res.send({ supplier, });
        } catch (error) {

            res.status(500).send(error);
            res.json({
                message: error
            })
        }


    });




module.exports = router;
