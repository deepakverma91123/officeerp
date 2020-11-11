const mongoose = require('mongoose');
const PurchaseorderSchema = new mongoose.Schema({

  indentNumber: String,
  orderNumber: String,
  orderDate: Date,
  supplier: String,
  currency: String,





});

module.exports = mongoose.model('Purchaseorder', PurchaseorderSchema)
