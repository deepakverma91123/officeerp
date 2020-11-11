const mongoose = require('mongoose');
const IndententrySchema = new mongoose.Schema({

  indentNumber: String,
  indentDate: Date,
  department: String,
  indenterName: String,
  itemName: String,
  manualCode: String,
  currentStock: String,
  unitName: String,
  reorderQty: String,
  reqQty: String,
  costCenter: String,
  reqDate: String,
  remark: String,
  Tickets: [{
    itemNames: String
  }],



});

module.exports = mongoose.model('Indententry', IndententrySchema)
