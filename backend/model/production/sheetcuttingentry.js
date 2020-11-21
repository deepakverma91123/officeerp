const mongoose = require('mongoose');
const sheetcuttingentrySchema = new mongoose.Schema({

  entryNumber: String,
  entrytDate: Date,
  itemName: String,
  quality: String,
  brightness: String,
  gsm: String,




});

module.exports = mongoose.model('Sheetcuttingentry', sheetcuttingentrySchema)
