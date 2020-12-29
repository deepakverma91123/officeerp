const express = require('express');
const router = express.Router();
let ObjectID = require('mongodb').ObjectID;
// const Itemmaster = require('../model/Itemmaster')
// const Itemmaster = require('../../model/inventory/Itemmaster')
const Salesorder = require('../../model/sales/orderentry');

const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


router.get('/getallsalesorder', async (req, res) => {
    try {
        const salesorder = await Salesorder.find();
        res.json(salesorder);
    } catch (err) {
        res.json({
            message: err
        })
    }
});



// search api 
// router.get('/searchitemmaster/:itemName', async (req, res) => {
//     let regex = new RegExp(req.params.itemName, 'i');


//     try {

//         const itemmaster = await Itemmaster.find({ itemName: regex });
//         res.send(itemmaster);
//     } catch (err) {
//         res.json({
//             message: err
//         })
//     }
// });


router.get('/getallsalesorder/:salesorderid', (req, res, next) => {
    Salesorder.findById({
        _id: req.params.salesorderid
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



router.post('/addsalesorder', (req, res) => {
    console.log(req.body);
    const salesorder = new Salesorder({

        _id: new mongoose.Types.ObjectId(),
        salesorderNumber: req.body.salesorderNumber,
        salesorderDate: req.body.salesorderDate,

        salesmanName: req.body.salesmanName,
        salespaperType: req.body.salespaperType,
        salesnumberofjumbureel: req.body.salesnumberofjumbureel,

    });

    salesorder.save().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
    console.log('itemmaster add');


})





router.delete('/getallsalesorder/:salesorderid', (req, res, next) => {
    Salesorder.remove({
        _id: req.params.salesorderid
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


router.put('/getallsalesorder/:salesorderid',
    async (req, res) => {
        console.log(req.body)
        // findByIdAndUpdate(req.params.id, req.body, {new: true},
        try {
            const salesorder = await Salesorder.findByIdAndUpdate(req.params.salesorderid, req.body, { new: true }
            );
            res.send({ salesorder, });
        } catch (error) {

            res.status(500).send(error);
            res.json({
                message: error
            })
        }


    });



module.exports = router;
