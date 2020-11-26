const express = require('express');
const multer = require('multer')
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config()
// const events = require('events');
// const emitter = new events.EventEmitter();
// emitter.emit('error');





const productroutes = require('./routes/productsroute')
const unitmasterroutes = require('./routes/unitmaster')
const itemcategory = require('./routes/itemcategory')
const iteminformation = require('./routes/iteminformation')
const itemmaster = require('./routes/itemmaster')

const user = require('./routes/user');
const importFile = require('./routes/importfile')
const indententry = require('./routes/purchase/indententry')
const mrnentry = require('./routes/purchase/mrnentry')
const purchase = require('./routes/purchase/purchaseorder')
const billentry = require('./routes/purchase/billentry')
const purchasereturn = require('./routes/purchase/purchasereturn')


/// production routes
const jumborollentry = require('./routes/production/jumborollentry')
const bundleentry = require('./routes/production/bundleentry');
const reelcuttingentry = require('./routes/production/reelcuttingentry')
const packingweightentry = require('./routes/production/packingweightentry')
const sheetcuttingentry = require('./routes/production/sheetcuttingentry')

// gate entry  routes
const gateentry = require('./routes/gateentry/gateentry')


// roles entry
const rolesentry = require('./routes/admin/roles')


// mongo "mongodb+srv://cluster0-vwobt.mongodb.net/test"  --username deepakverma




mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (req, res) => {

  console.log('connect to db')

})

// let ObjectID = require('mongodb').ObjectID;



const app = express();


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', productroutes);
app.use('/api', user);
app.use('/api', importFile);
app.use('/api', unitmasterroutes);
app.use('/api', itemcategory);
app.use('/api', iteminformation);
app.use('/api', itemmaster);
app.use('/api', indententry);
app.use('/api', purchase);
app.use('/api', mrnentry);
app.use('/api', billentry);
app.use('/api', purchasereturn);

// production api call
app.use('/api', jumborollentry)

app.use('/api', bundleentry);
app.use('/api', reelcuttingentry);
app.use('/api', packingweightentry);
app.use('/api', sheetcuttingentry);


// gate entry
app.use('/api', gateentry);

// roles entry
app.use('/api', rolesentry)


app.use('/api/getallproducts/:_id', express.static(path.join(__dirname, 'dist/myexpressapp')));
app.use('/api/addproducts/:_id', express.static(path.join(__dirname, 'dist/myexpressapp')));

// app.use('/books', express.static(path.join(__dirname, 'dist/mean-angular6')));
// app.use('/book-details/:id', express.static(path.join(__dirname, 'dist/mean-angular6')));

app.use(express.static(path.join(__dirname, '/dist/myexpressapp')));
app.use(express.static('dist'));

// app.listen(3000, (req, res)=>{
//     console.log('server started');

// })



var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({
  storage: storage
})
app.post('/uploadmultiple', upload.array('myFiles', 12), (req, res, next) => {
  const files = req.files
  if (!files) {
    const error = new Error('Please choose files')
    error.httpStatusCode = 400
    return next(error)
  }

  res.send(files)

  // files.save().then(data => {
  //   res.json(data)
  // }).catch(err => {
  //   res.json(err);
  // })
  // console.log('file upload');

})

const callb = [{
    title: 'title one',
    body: 'this is post one'
  },
  {
    title: 'title two',
    body: 'this is post two'
  }

]


function between(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

console.log(
  between(10, 200)
)




// module.exports = getPost



module.exports = app;
