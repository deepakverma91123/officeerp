const express = require('express');
const router = require('express').Router();
const Customer = require('../../model/customer/customer');
const mongoose = require('mongoose');
router.post('/addcustomer', async (req, res) => {
    console.log(req.body)
    const customer = new Customer({
        _id: mongoose.Types.ObjectId(),
        customerName: req.body.customerName,
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
        const savedcustomer = await supplier.save();
        res.send(savedcustomer)

    } catch (error) {

        res.status(404).send(error)
    }

});



// get all supplier
router.get('/customer', async (req, res) => {
    try {
        const customer = await Customer.find();
        res.send(customer)
    } catch (error) {
        res.status(404).send(error);
        res.json({
            message: error
        })
    }

})









router.delete('/customer/:customerid', (req, res, next) => {
    Customer.findByIdAndRemove({
        _id: req.params.customerid,
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


router.put('/customer/:customerid',
    async (req, res) => {
        console.log('gate entry' + req.body)
        // findByIdAndUpdate(req.params.id, req.body, {new: true},
        try {
            const customer = await Customer.findByIdAndUpdate(req.params.customerid, req.body, { new: true }
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
