const mongoose = require('mongoose');
const packingweightentrySchema = new mongoose.Schema({

  reelNumber: String,
  itemName: Date,
  quality: Number,
  size: String,
  gsm: String,
  quality: String,
  brightness: String,
  unit: String,
  rellRemark: String,
  jumboRemark: String,

});

module.exports = mongoose.model('Packingweightentry', packingweightentrySchema)
