const express = require('express');
const router = express.Router();
let ObjectID = require('mongodb').ObjectID;
const products = require('../model/products')
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const multer = require('multer');



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})

const upload = multer({ storage: storage })

router.get('/home', (req, res) => {
  res.send('home route');
  console.log('gdfh');

})

router.get('/getallproducts', async (req, res) => {
  try {
    const allproducts = await products.find();
    res.json(allproducts);
  } catch (err) {
    res.json({
      message: err
    })
  }
});


//    router.get('/:productId', (req, res)=>{

//     if (mongoose.Types.ObjectId.isValid(ObjectID.id)){     
//         User.findById(productId.id)
//         .then((doc)=> { 
//            if (doc) {
//              console.log(doc)
//            } else {
//              console.log("No data exist for this id");
//            }
//        })
//       .catch((err)=> {
//           console.log(err);
//        });
//       } else {
//           res.json(doc);
//         console.log("Please provide correct Id");
//       }
// });


//    router.get('/:productId', async(req, res)=>{
//     try{
//         if (mongoose.Types.ObjectId.isValid(ObjectID.id)){  
//    const singleproducts = await products.findById({
//    id:req.params.productId

//    });
//    res.json(singleproducts);
//     }}catch(err ){
//         res.json({message: err})
//     }
//    });





router.get('/getallproducts/:id', (req, res, next) => {
  products.findById({
    _id: req.params.id
  }).exec().then(result => {
    res.status(200).json({
      message: 'product  get single document',
      result: result,

    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      error: err,

    });
  });

});



router.post('/addproducts', upload.array('photos', 12), (req, res) => {
  console.log(req.file)
  console.log(req.body);
  const product = new products({

    _id: new mongoose.Types.ObjectId(),
    // photos: req.file.
    productName: req.body.productName,
    productCost: req.body.productCost,
    productDescription: req.body.productDescription,
    productType: req.body.productType,
    productCode: req.body.productCode,
    secondaryName: req.body.secondaryName,
    weight: req.body.weight,
    brandType: req.body.brandType,
    category: req.body.category,
    productUnit: req.body.productUnit,
    defaultPurchaseUnit: req.body.defaultPurchaseUnit,
    productPrice: req.body.productPrice,
    hsnCode: req.body.hsnCode,
    productTax: req.body.productTax,
    taxMethod: req.body.taxMethod,
    productDetails: req.body.productDetails,
    startDate: req.body.startDate,
    // photos: req.file.path

  });

  product.save().then(data => {
    res.json(data)
  }).catch(err => {
    res.json(err);
  })
  console.log('deepak post');


})



// router.post('/addproducts', function(req, res, next) {
//     products.create(req.body, function (err, post) {
//       if (err) return next(err);
//       res.json(post);
//     });
//   });


router.delete('/:id', (req, res, next) => {
  products.remove({
    _id: req.params.id
  }).exec().then(result => {
    res.status(200).json({
      message: 'product  deleted',
      result: result,

    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      error: err,

    });
  });

});



router.patch('/:id', (req, res, next) => {
  products.updateOne({
    _id: req.params.id
  }).exec().then(result => {
    res.status(200).json({
      message: 'products update',
      result: result,

    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      error: err,

    });
  });

});




// router.post('/add', (req,res)=>{
//     const product = new products({
//         productName: req.body.productName,
//         productCost: req.body.productCost,
//         productDescription: req.body.productDescription
//     });

//     product.save().then(data =>{
//         res.json(data)
//     }).catch(err=>{
//        res.json(err); 
//     })
//     console.log('deepak post');

//     })

//  router.get('/getproducts',products.findAll())









//    router.patch('/addproducts/id', (req, res, next)=>{
//     let _id = ObjectID(req.param.id);

//     findUserByUsername(_id, function(error, user) {
//         if (error) return next(error);
//         return res.send('user', user);
//       });

//     const product = new products({
//      productName:req.body.productName,
//      productDescription: req.body.productDescription,
//      productCost: req.body.productCost

//    })

//    product.update(_id).then( 
// data=>{
// res.json(data);
// }

// ).catch(
// err=>{res.json(err);}

// )
// console.log('post update');

// })



// router.put('/add/:id', (req, res, next) => {
//     let id = {
//       _id: ObjectID(req.params.id)
//     };

//     dbase.collection("products").update({_id: id}, {$set:{'productName': req.body.productName, 'productCost': req.body.productCost, 'productDescription':req.body.productDescription}}, (err, result) => {
//       if(err) {
//         throw err;
//       }
//       res.send('user updated sucessfully');
//     });
// });

// router.delete('/:conts', async(req,res)=>{
//     try{
//         const removecontacts= await contacts.remove({_id:req.params.conts})
//         res.json(removecontacts)
//     }
//     catch(err){
//     res.json({message:err})
//     }


//     })



// router.post('/post', (req, res)=>{
// res.send('post')

// } )



module.exports = router;
