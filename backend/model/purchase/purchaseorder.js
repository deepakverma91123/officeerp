const mongoose = require('mongoose');
const PurchaseorderSchema = new mongoose.Schema({

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

});

module.exports = mongoose.model('Purchaseorder', PurchaseorderSchema)
