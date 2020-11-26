const express = require('express');
const router = require('express').Router();
const Roles = require('../../model/admin/roles')
const mongoose = require('mongoose');

router.post('/addroles', async (req, res) => {
  console.log(req.body)
  const rolesentry = new Roles({
    _id: mongoose.Types.ObjectId(),
    displayName: req.body.displayName,
    mobileNumber: req.body.mobileNumber,
    roles: req.body.roles,

  })



  try {
    const savedrolesentry = await rolesentry.save();
    res.send(savedrolesentry)

  } catch (error) {

    res.status(404).send(error)
  }

});



// get all indententry
router.get('/roles', async (req, res) => {
  try {
    const roles = await Roles.find();
    res.send(roles)
  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }

})


router.get('/roles/:rolesid', async (req, res) => {

  try {
    const rolesentry = await Roles.findById({
      _id: req.params.rolesid
    });
    res.send(rolesentry)

  } catch (error) {
    res.status(404).send(error);
    res.json({
      message: error
    })
  }


})






// router.delete('/indententry/:indententryid', (req, res, next) => {
//   Indententry.remove({
//     _id: req.params.indententryid
//   }).exec().then(result => {
//     res.status(200).json({
//       message: ' indent entry  deleted',
//       result: result,

//     });
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json({
//       error: err,

//     });
//   });

// });


router.delete('/roles/:rolesid', (req, res, next) => {
  Roles.findByIdAndRemove({
    _id: req.params.rolesid,
  }).exec().then(result => {
    res.status(200).json({
      message: ' roles entry  deleted',
      result: result,

    });
  }).catch(err => {
    console.log(err);
    // res.status(500).json({
    //   error: err,

    // });
  });

});




// router.patch('/indententry/:indententryid', (req, res, next) => {
//   Indententry.findByIdAndUpdate({
//     _id: req.params.indententryid
//   }).exec().then(result => {
//     res.status(200).json({
//       message: 'indententry update',
//       result: result,

//     });
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json({
//       error: err,

//     });
//   });

// });





router.put('/roles/:rolesid',
  async (req, res) => {

    try {
      const rolesentry = await Roles.updateOne({
        _id: req.params.rolesid,
        // indenterName: req.body.indenterName

      });
      res.send(rolesentry);
    } catch (error) {

      res.status(500).send(error);
      res.json({
        message: error
      })
    }


  });


module.exports = router;
