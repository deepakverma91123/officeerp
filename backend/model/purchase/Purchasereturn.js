const mongoose = require('mongoose');

const {
  Schema
} = mongoose;

const PurchasereturnSchema = new Schema({
  purchaseOrderNo: String,
  prEntryNumber: String,
  entryDate: Date,
  transportType: String,
  vehicalNumber: String,
  gateEntryNumber: Number,
  supplierName: String,


})



module.exports = mongoose.model('PurchaseReturn', PurchasereturnSchema)
