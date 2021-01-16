const express = require('express');
const router = express.Router();
let ObjectID = require('mongodb').ObjectID;
const Jumbubrightness = require('../../model/production/jumbubrightness');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


router.get('/getalljumbubrighness', async (req, res) => {
    try {
        const jumbubrighness = await Jumbubrightness.find();
        res.json(jumbubrighness);
    } catch (err) {
        res.json({
            message: err
        })
    }
});





router.get('/getalljumbubrighness/:id', (req, res, next) => {
    Jumbubrightness.findById({
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



router.post('/addjumbubrightness', (req, res) => {
    console.log(req.body);
    const jumbubrighness = new Jumbubrightness({

        _id: new mongoose.Types.ObjectId(),
        brightness: req.body.brightness,

    });

    jumbubrighness.save().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
    console.log('jumbubrighness add');


})









module.exports = router;
