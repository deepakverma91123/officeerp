const mongoose = require('mongoose');
const jumborollentrySchema = new mongoose.Schema({

  entryNumber: String,
  jumboRollNumber: String,
  jumbuentryDate: Date,
  jumboRollItemName: String,
  jumboCode: String,
  machineName: String,
  machineCategory: String,
  quality: String,
  gsm: String,
  brightness: String,
  remark: String,
  weight: Number,
  barcode: String,
  burstFactor: String

});

module.exports = mongoose.model('Jumborollentry', jumborollentrySchema)
