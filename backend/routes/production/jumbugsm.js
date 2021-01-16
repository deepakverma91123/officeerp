const express = require('express');
const router = express.Router();
let ObjectID = require('mongodb').ObjectID;
const Jumbugsm = require('../../model/production/jumbugsm');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


router.get('/getalljumbugsm', async (req, res) => {
    try {
        const jumbugsm = await Jumbugsm.find();
        res.json(jumbugsm);
    } catch (err) {
        res.json({
            message: err
        })
    }
});






router.get('/getalljumbugsm/:id', (req, res, next) => {
    Jumbugsm.findById({
        _id: req.params.id
    }).exec().then(result => {
        res.status(200).json({
            message: 'get single document',
            result: result,

        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err,

        });
    });

});



router.post('/addjumbugsm', (req, res) => {
    console.log(req.body);
    const jumbugsm = new Jumbugsm({

        _id: new mongoose.Types.ObjectId(),
        gsm: req.body.gsm,

    });

    jumbugsm.save().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
    console.log('gsm add');


})









module.exports = router;
