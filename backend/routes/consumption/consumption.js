const express = require('express');
const router = express.Router();
// let ObjectID = require('mongodb').ObjectID;
// const Itemmaster = require('../model/Itemmaster')
const Consumption = require('../../model/consumption/consumption')
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


router.get('/getallconsumption', async (req, res) => {
    try {
        const consumption = await Consumption.find();
        res.json(consumption);
    } catch (err) {
        res.json({
            message: err
        })
    }
});

// search api 

// router.get('/getallitemmaster/:itemmasterid', (req, res, next) => {
//   Itemmaster.findById({
//     _id: req.params.itemmasterid
//   }).exec().then(result => {
//     res.status(200).json({
//       message: 'item master  get single document',
//       result: result,

//     });
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json({
//       error: err,

//     });
//   });

// });



// search api 
router.get('/searchitemmaster/:itemName', async (req, res) => {
    let regex = new RegExp(req.params.itemName, 'i');


    try {

        const itemmaster = await Itemmaster.find({ itemName: regex });
        res.send(itemmaster);
    } catch (err) {
        res.json({
            message: err
        })
    }
});




router.get('/getallconsumption/:consumptionid', (req, res, next) => {
    Consumption.findById({
        _id: req.params.consumptionid
    }).exec().then(result => {
        res.status(200).json({
            message: 'item master  get single document',
            result: result,

        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err,

        });
    });

});



router.post('/addconsumption', (req, res) => {
    console.log(req.body);
    const consumption = new Consumption({

        // _id: new mongoose.Types.ObjectId(),
        departmentName: req.body.departmentName,
        departmentHead: req.body.departmentHead,
        consumptionDate: req.body.consumptionDate,
        issuePerson: req.body.issuePerson,
        itemName: req.body.itemName,
        itemQuantity: req.body.itemQuantity,
        rate: req.body.rate,
        description: req.body.description

    });

    consumption.save().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
    console.log('itemmaster add');


})





router.delete('/getallconsumption/:consumptionid', (req, res, next) => {
    Consumption.remove({
        _id: req.params.consumptionid
    }).exec().then(result => {
        res.status(200).json({
            message: 'Itemmaster  deleted',
            result: result,

        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err,

        });
    });

});



// router.patch('/getallitemmaster/:id', (req, res, next) => {
//   Itemmaster.updateOne({
//     _id: req.params.id
//   }).exec().then(result => {
//     res.status(200).json({
//       message: 'Itemmaster update',
//       result: result,

//     });
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json({
//       error: err,

//     });
//   });

// });


router.put('/getallconsumption/:consumptionid',
    async (req, res) => {
        console.log(req.body)
        // findByIdAndUpdate(req.params.id, req.body, {new: true},
        try {
            const consumption = await Consumption.findByIdAndUpdate(req.params.itemmasterid, req.body, { new: true }
            );
            res.send({ consumption, });
        } catch (error) {

            res.status(500).send(error);
            res.json({
                message: error
            })
        }


    });



module.exports = router;
