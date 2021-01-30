const express = require('express');
const router = require('express').Router();
const Roles = require('../../model/admin/roles')
const mongoose = require('mongoose');
const { hash } = require('bcrypt');
const bcrypt = require('bcrypt');

router.post('/addroles', async (req, res) => {
  console.log(req.body)


  Roles.find({ displayEmail: req.body.displayEmail }).exec().then(
    user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: 'User already exist!'
        })
      }
      else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          }

          else {

            const user = new Roles({
              _id: new mongoose.Types.ObjectId,
              displayName: req.body.displayName,
              mobileNumber: req.body.mobileNumber,
              displayEmail: req.body.displayEmail,
              roles: req.body.roles,
              password: hash,

              // this.role = roles.admin;

            })
            user.save().then(result => {
              console.log(result);
              res.status(201).json({
                message: 'User created successfully!'
              })
            }).catch(err => {
              res.status(500).json({
                error: err
              });

            })

          }
        });

      }
    }

  ).catch();

});



router.post('/adminroleslogin', async (req, res) => {
  var newUser = {};
  newUser.displayEmail = req.body.displayEmail;
  newUser.password = req.body.password;
  // newUser.name = req.body.name;

  await Roles.findOne({ displayEmail: newUser.displayEmail })
    .then(profile => {
      console.log(profile);
      if (!profile) {
        res.send("User not exist");
      } else {
        bcrypt.compare(
          newUser.password,
          profile.password,
          async (err, result) => {
            if (err) {
              console.log("Error is", err.message);
            } else if (result == true) {
              res.status(200).status({
                message: 'User authenticated Welcome to the project-name api'
              });
              // res.send("User authenticated");
            } else {
              res.send("User Unauthorized Access");
            }
          }
        );
      }
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
});

// router.post('/addroles', async (req, res) => {
//   console.log(req.body)
//   const rolesentry = new Roles({
//     _id: mongoose.Types.ObjectId(),
//     displayName: req.body.displayName,
//     mobileNumber: req.body.mobileNumber,
//     displayEmail: req.body.displayEmail,
//     password: req.body.password,
//     roles: req.body.roles,

//   })


//   try {
//     const savedrolesentry = await rolesentry.save();
//     res.send(savedrolesentry)

//   } catch (error) {

//     res.status(404).send(error)
//   }

// });





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







/// api correction 

// router.put('/gateentry/:gateentryid',
//   async (req, res) => {
//     console.log('gate entry' + req.body.purchaseOrderNo + 'truck weight' + req.body.truckWeight)
//     console.log('product weight' + req.body.productWeight)
//     Gateentry.find({
//       // purchaseOrderNo: req.body.purchaseOrderNo
//       purchaseOrderNo: req.params.gateentryid
//     }).exec().then(async result => {
//       console.log('result' + result)
//       console.log(result.allweight)


//       try {
//         const gateentry = await Gateentry.updateMany({
//           // _id: req.params.gateentryid,
//           // purchaseOrderNo: req.params.gateentryid,
//           // driverName: req.body.driverName,
//           // truckWeight: req.body.truckWeight,
//           // productWeight: result.allweight - req.body.truckWeight,
//           // truckWeight: req.body.truckWeight

//         });
//         res.send({ gateentry, });
//       } catch (error) {

//         res.status(500).send(error);
//         res.json({
//           message: error
//         })
//       }
//     })

//   });






// router.put('/gateentry/:gateentryid', async (req, res) => {
//   try {
//     const gate = {
//       // purchaseOrderNo: req.params.gateentryid,
//       driverName: req.body.driverName,
//       productWeight: req.body.productWeight,
//       truckWeight: req.body.truckWeight
//     }

//     const updategate = await Gateentry.findByIdAndUpdate({
//       _id: req.params.gateentryid
//     }, gate);
//     res.send(updategate)

//   } catch (error) {
//     res.status(404).send(error);
//     res.json({
//       message: error
//     })
//   }
// })






// router.patch('/gateentry/:gateentryid', async (req, res, next) => {
//   try {
//     _id = req.params.gateentryid;
//     const updates = req.body;
//     const options = { new: true };

//     const result = await Gateentry.findOneAndUpdate(_id, updates, options);

//     res.send(result);
//   } catch (error) {
//     console.log(error.message);

//     next(error);
//   }
// })


