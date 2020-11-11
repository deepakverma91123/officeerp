const express = require('express');
const router = express.Router();
let ObjectID = require('mongodb').ObjectID;
const ImportFile = require('../model/importfile')
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);




router.post('/addmultiple', (req, res) => {
    const importFile = new ImportFile({
        _id: new mongoose.Types.ObjectId(),
        myfiles: req.body.myfiles

    });

    importFile.save().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
    console.log('all data import');


})

module.exports = router;