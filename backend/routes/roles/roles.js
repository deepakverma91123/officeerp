const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Roles = require('../../model/roles/roles')
const bcrypt = require('bcrypt');


//  router.get('/signup',function(req, res){
// 	res.render("signup")
// });
// router.get('/login',function(req, res){
// 	res.render("login")
// });



router.post('/rolesignup', (req, res, next) => {
    Roles.find({ email: req.body.email }).exec().then(
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
                            email: req.body.email,
                            password: hash

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





// router.post('/login', async(req, res, next)=>{


//     User.find({email: req.body.email}).exec().then(
//     user =>{
//         if(user.password ==='user.password' && user.email ==='user.email'){
//         return res.status(200).json({
//         message:'user login'
//     })
//         }

//         else{
//             return res.status(409).json({
//                 message:'wrong  password'
//             })  
//         } 

//     }

//     ).catch();



//     });





// router.post('/login', async(req, res, next)=>{


//     User.find({email: req.body.email}).exec().then(
//     user =>{
//         if(!user) {
//             return response.status(400).send({ message: "The username does not exist" });
//         }



// bcrypt.Compare(req.body.password , (err,isMatch)=>{
// if(err) throw err
// if(!isMatch) return res.status(400).json({
//     message:'wrong paasword'
// })
// res.status(200).json({
//     message:'login success fuly'
// })
// })

//     }



//     ).catch();



//     });





// router.post('/login', async (req, res) => {
//     var newUser = {};
//     newUser.email = req.body.email;
//     newUser.password = req.body.password;

//     await User.findOne({ email: newUser.email })
//       .then(profile => {
//         if (!profile) {
//           res.send("User not exist");
//         } else {
//           bcrypt.compare(
//             newUser.password,
//             profile.password,
//             async (err, result) => {
//               if (err) {
//                 console.log("Error is", err.message);
//               } else if (result == true) {
//                 res.send("User authenticated");
//               } else {
//                 res.send("User Unauthorized Access");
//               }
//             }
//           );
//         }
//       })
//       .catch(err => {
//         console.log("Error is ", err.message);
//       });
//   });





router.post('/rolelogin', async (req, res) => {
    var newUser = {};
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    // newUser.name = req.body.name;

    await Roles.findOne({ email: newUser.email })
        .then(profile => {
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
                            res.send("User authenticated");
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



router.delete('/:userId', (req, res, next) => {
    Roles.remove({
        _id: req.params.userId
    }).exec().then(result => {
        res.status(200).json({
            message: 'user deleted', result: result,

        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err,

        });
    });

});



router.patch('/:userId', (req, res, next) => {
    Roles.update({
        _id: req.params.userId
    }).exec().then(result => {
        res.status(200).json({
            message: 'user update', result: result,

        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err,

        });
    });

});




router.get('/getalluser', async (req, res) => {
    try {
        const alluser = await Roles.find();
        res.json(alluser);
    } catch (err) {
        res.json({ message: err })
    }
});





module.exports = router;