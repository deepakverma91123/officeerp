const mongoose = require('mongoose');
const MrnSchema = new mongoose.Schema({


  entryDate: Date,
  vehicalNumber: String,
  driverName: String,
  Weight: String,
  supplierName: String,
  gates: String,
  receiveQuantity: String,
  purchaseOrderNo: String,
  // purchaseorderId: [{
  //   type: new mongoose.Schema.Types.ObjectId,
  //   ref: 'Purchaseorder'
  // }]


});

module.exports = mongoose.model('Mrns', MrnSchema)
