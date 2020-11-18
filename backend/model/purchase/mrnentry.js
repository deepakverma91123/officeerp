const mongoose = require('mongoose');
const MrnSchema = new mongoose.Schema({

  purchaseOrderNumber: String,
  chalanNumber: String,
  entryDate: Date,
  transportType: String,
  vehicalNumber: String,
  driverName: String,
  gateEntryName: String,
  supplierName: String,
  billNumber: String,
  roadPermitNumber: String,
  // purchaseorderId: [{
  //   type: new mongoose.Schema.Types.ObjectId,
  //   ref: 'Purchaseorder'
  // }]


});

module.exports = mongoose.model('Mrns', MrnSchema)
