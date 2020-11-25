const mongoose = require('mongoose');

const {
  Schema,
  model
} = mongoose;


const BillentrySchema = new Schema({
  // _id: Schema.Types.ObjectId,

  billentryDate: {
    type: String,
  },
  bookNumber: {
    type: String,
  },
  partyNumber: {
    type: String,
  },
  partyCity: {
    type: String,
  },
  againstForm: {
    type: String,
  },

  inelegibleItc: {
    type: String,
  },
  purchaseOrderNo: {
    type: String,
  }


  //   indententry: [{
  //     type: Schema.Types.ObjectId,
  //     ref: "Indententry"
  //   }]

})

module.exports = model('Billentry', BillentrySchema)
