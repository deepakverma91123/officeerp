const mongoose = require('mongoose');
const sheetregisterSchema = new mongoose.Schema({

  fromDate: Date,
  toDate: Date,
  siteName: String,
  itemName: String,
  bf: String,
  quality: String,
  brightness: String,
  gsm: String,




});

module.exports = mongoose.model('Sheetcuttingentry', sheetregisterSchema)
