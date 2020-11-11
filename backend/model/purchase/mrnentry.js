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


});

module.exports = mongoose.model('MRN', MrnSchema)
