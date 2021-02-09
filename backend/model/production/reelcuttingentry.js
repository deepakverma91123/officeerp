const mongoose = require('mongoose');
const { stringify } = require('querystring');
const reelcuttingentrySchema = new mongoose.Schema({


  jumbuGsm: String,
  jumbuQuality: String,
  jumbuBrightness: String,
  jumboRollNumber: String,
  reelcuttingentryDate: Date,
  reelcuttingentryNumber: String,
  jumboRollItemName: String,
  reelcuttingGsm: String,
  reelcuttingQuality: String,
  reelcuttingBrightness: String,
  manyReel: String,
  reelItemName: String,
   
  reelNumber: String,
  reelSize: String,
  reelUnit: String,
  reelWeight: String,
  reelRemark: String,
  reelMeterage: String,
  reelGsm: String,
  fromDate: { type: Date, default: Date.now }




});

module.exports = mongoose.model('Reelcuttingentry', reelcuttingentrySchema)
