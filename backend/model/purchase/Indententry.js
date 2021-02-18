// const mongoose = require('mongoose');
// const IndententrySchema = new mongoose.Schema({

//   indentNumber: String,
//   indentDate: Date,
//   department: String,
//   indenterName: String,
//   itemName: String,
//   manualCode: String,
//   currentStock: String,
//   unitName: String,
//   reorderQty: String,
//   reqQty: String,
//   costCenter: String,
//   reqDate: String,
//   remark: String,
//   Tickets: [{
//     itemNames: String,
//     manualCodes: String,
//     currentStocks: String,
//     unitNames: String,
//     reorderQtys: String,
//     reqQtys: String,
//     costCenters: String,
//     totalAmounts: String,
//     reqDates: String,
//     remarks: String,

//   }],




// });

// module.exports = mongoose.model('Indententry', IndententrySchema)


const mongoose = require('mongoose');

const {
  Schema,
  model
} = mongoose;


const IndententrySchema = new Schema({


  toDepartment: String,
  toEmployeerequireby: String,
  requiredDate: Date,
  description: String,
  itemN: String,

  indentNumber: String,
  indentDate: Date,
  department: String,
  requiredBy: String,
  createdBy: String,
  createdDepartment: String,
  indenterName: String,
  finalSubmit: {
    type: String,
    default: ''

  },

  itemNames: String,
  manualCodes: String,
  currentStocks: String,
  unitNames: String,
  reorderQtys: String,
  reqQtys: String,
  costCenters: String,
  totalAmounts: String,
  reqDates: String,
  remarks: String,
  Tickets: [{
    itemName: String,
    manualCode: String,
    itemNames: String,
    manualCodes: String,
    currentStocks: String,
    unitNames: String,
    reorderQtys: String,
    reqQtys: String,
    costCenters: String,
    totalAmounts: String,
    reqDates: String,
    remarks: String,

  }],
  indententry: [{
    type: Schema.Types.ObjectId,
    ref: "Purchaseorder"
  }]

})





module.exports = model('Indententry', IndententrySchema)
