const mongoose = require('mongoose');

const {
  Schema,
  model
} = mongoose;



const PurchaseorderSchema = new Schema({
  // _id: Schema.Types.ObjectId,


  supplierName: {
    type: String
  },
  purchaseorderId: {
    type: String
  },
  totalAmou: {
    type: String
  },
  totalTax: {
    type: String
  },
  netAmount: {
    type: String
  },
  inputValue: {
    type: String
  },
  purchaseDate: {
    type: String
  },
  vederconcernedpersonName: {
    type: String,
  },
  series: { type: String },
  requireDate: { type: String },
  description: { type: String },
  indentNo: { type: String },
  vederconcernedpersonName: {
    type: String
  },
  series: {
    type: String
  },
  indentNumber: {
    type: String,
  },
  supplierName: {
    type: String
  },

  finalSubmit: {
    type: String,
    default: ''
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
