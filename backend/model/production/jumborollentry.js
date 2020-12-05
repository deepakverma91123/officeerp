const mongoose = require('mongoose');
const jumborollentrySchema = new mongoose.Schema({


  jumbuRollNumber: String,
  jumbuentryDate: String,
  machineNumber: String,
  machineCategory: String,
  jumboRollItemName: String,
  jumbuQuality: String,
  jumbuGsm: String,
  jumbuBrightness: String,
  jumbuRemark: String,
  jumbuWeight: String,
  jumbuBarcode: String,


});

module.exports = mongoose.model('Jumborollentry', jumborollentrySchema)
