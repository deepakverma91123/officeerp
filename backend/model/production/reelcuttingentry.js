const mongoose = require('mongoose');
const reelcuttingentrySchema = new mongoose.Schema({

  reelcuttingentryNumber: String,
  reelcuttingentryDate: Date,
  jumboRollNumber: String,
  reelcuttingGsm: String,
  reelcuttingQuality: String,
  reelcuttingBrightness:String,
  jumboRollItemName: String,
  jumboCode: String,
  machineName: String,
  machineCategory: String,
  


});

module.exports = mongoose.model('Reelcuttingentry', reelcuttingentrySchema)
