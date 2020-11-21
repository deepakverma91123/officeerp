const mongoose = require('mongoose');
const reelcuttingentrySchema = new mongoose.Schema({

  entryNumber: String,
  entrytDate: Date,
  setNumber: Number,
  jumboRoll: String,
  gsm: String,
  quality:String,
  brightness: String,



});

module.exports = mongoose.model('Reelcuttingentry', reelcuttingentrySchema)
