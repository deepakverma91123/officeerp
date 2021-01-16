const express = require('express');
const router = express.Router();
let ObjectID = require('mongodb').ObjectID;
const Jumbuquality = require('../../model/production/jumbuquality');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


router.get('/getalljumbuquality', async (req, res) => {
    try {
        const jumbuquality = await Jumbuquality.find();
        res.json(jumbuquality);
    } catch (err) {
        res.json({
            message: err
        })
    }
});





router.get('/getalljumbuquality/:id', (req, res, next) => {
    Jumbuquality.findById({
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



router.post('/addjumbuquality', (req, res) => {
    console.log(req.body);
    const jumbuquality = new Jumbuquality({

        _id: new mongoose.Types.ObjectId(),
        quality: req.body.quality,

    });

    jumbuquality.save().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
    console.log('quality add');


})









module.exports = router;
