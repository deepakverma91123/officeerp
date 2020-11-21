const mongoose = require('mongoose');
const bundleentrySchema = new mongoose.Schema({

  bundleEntryNumber: String,
  bundleEntrytDate: Date,
  GSM: String,
  Unit: String,
  Brightness: String,


});

module.exports = mongoose.model('Bundleentry', bundleentrySchema)
