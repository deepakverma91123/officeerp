const mongoose = require('mongoose');

const {
  Schema,
  model
} = mongoose;


const GateentrySchema = new Schema({
  // _id: Schema.Types.ObjectId,

  gateEntryNumber: {
    type: String,
  },
  allweight: {
    type: String,
  },
  truckWeight: {
    type: String,
    default: ''

  },
  productWeight: {
    type: String,
    default: ''
  },
  supplierName: {
    type: String,
  },
  transportType: {
    type: String,
  },
  driverName: {
    type: String,
  },
  vehicalNumber: {
    type: String,
  },

  entryDate: {
    type: String,
  },
  purchaseOrderNo: {
    type: String,
  },
  status: {
    type: String,
    default: "0"
  }



  //   indententry: [{
  //     type: Schema.Types.ObjectId,
  //     ref: "Indententry"
  //   }]

})

module.exports = model('Gateentry', GateentrySchema)
