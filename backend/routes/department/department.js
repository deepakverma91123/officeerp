const express = require('express');
const router = require('express').Router();
const Department = require('../../model/department/department');
const mongoose = require('mongoose');
router.post('/adddepartment', async (req, res) => {
    console.log(req.body)
    const department = new Department({
        _id: mongoose.Types.ObjectId(),
         departmentName: req.body.departmentName,
       

    })

    try {
        const saveddepartment = await department.save();
        res.send(saveddepartment)

    } catch (error) {

        res.status(404).send(error)
    }

});



// get all supplier
router.get('/department', async (req, res) => {
    try {
        const department = await Department.find();
        res.send(department)
    } catch (error) {
        res.status(404).send(error);
        res.json({
            message: error
        })
    }

})

router.get('/department/:departmentid', async (req, res) => {
    try {
        const department = await Department.findById({
            _id: req.params.departmentid
        });
        res.send(department)

    } catch (error) {
        res.status(404).send(error);
        res.json({
            message: error
        })
    }


})









router.delete('/department/:departmentid', (req, res, next) => {
    Department.findByIdAndRemove({
        _id: req.params.departmentid,
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


router.put('/department/:departmentid',
    async (req, res) => {
        console.log('gate entry' + req.body)
        // findByIdAndUpdate(req.params.id, req.body, {new: true},
        try {
            const department = await Department.findByIdAndUpdate(req.params.departmentid, req.body, { new: true }
            );
            res.send({ department, });
        } catch (error) {

            res.status(500).send(error);
            res.json({
                message: error
            })
        }


    });




module.exports = router;
