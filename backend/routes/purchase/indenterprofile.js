
const express = require('express');
const router = require('express').Router();
const Indentprofile = require('../../model/purchase/indenterprofile')
let ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

router.post('/addindentprofile', async (req, res) => {
    console.log(req.body)
    const indentprofile = new Indentprofile({

        _id: new mongoose.Types.ObjectId(),
        indenterName: req.body.indenterName,
        department: req.body.department,
        dob: req.body.dob,

    })


    try {
        const savedindentprofile = await indentprofile.save();
        res.send(savedindentprofile)




    } catch (error) {

        res.status(404).send(error)
    }

});



// get all indententry
router.get('/indentprofile', async (req, res) => {
    try {
        const indentprofile = await Indentprofile.find();
        res.send(indentprofile)
    } catch (error) {
        res.status(404).send(error);
        res.json({
            message: error
        })
    }

})


router.get('/indentprofile/:indentprofileid', async (req, res) => {

    try {
        const indentprofile = await Indentprofile.findById({
            _id: req.params.indentprofileid
        });
        res.send(indentprofile)

    } catch (error) {
        res.status(404).send(error);
        res.json({
            message: error
        })
    }


})







module.exports = router;
