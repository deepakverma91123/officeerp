const mongoose = require('mongoose');

const {
  Schema,
  model
} = mongoose;


const PurchaseorderSchema = new Schema({
  // _id: Schema.Types.ObjectId,

  indentNumber: {
    type: String,
  },
  currency: {
    type: String,
  },
  supplier: {
    type: String,
  },
  orderDate: {
    type: String,
  },
  orderNumber: {
    type: String,
  },
  isActive: {
    type: String
  },
  indententry: [{
    type: Schema.Types.ObjectId,
    ref: "Indententry"
  }]

})

// const PurchaseorderSchema = new Schema({

//   indentNumber: {
//     type: String,
//   },
//   currency: {
//     type: String,
//   },
//   supplier: {
//     type: String,
//   },
//   orderDate: {
//     type: String,
//   },
//   orderNumber: {
//     type: String,
//   },

// });



module.exports = model('Purchaseorder', PurchaseorderSchema)
