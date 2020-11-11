const express = require('express');
const router = express.Router();
let ObjectID = require('mongodb').ObjectID;
const Unitmaster = require('../model/Unitmaster')
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


router.get('/home', (req, res) => {
    res.send('home route');
    console.log('gdfh');

})


router.post('/addunitmaster', (req, res) => {

    console.log(req.body);
    const unitmaster = new Unitmaster({

        _id: new mongoose.Types.ObjectId(),
        name: req.body.name


    });

    unitmaster.save().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
    console.log('deepak post');


})



router.get('/allunitmaster', async (req, res) => {

    try {
        const allunitmaster = await Unitmaster.find();
        res.json(allunitmaster)
    }
    catch (err) {
        res.json({
            message: err
        })


    }


})





module.exports = router;
