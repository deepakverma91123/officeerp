const mongoose = require('mongoose');
const { stringify } = require('querystring');
const reelcuttingentrySchema = new mongoose.Schema({


  jumboRollNumber: String,
  reelcuttingentryDate: Date,
  reelcuttingentryNumber: String,
  jumboRollItemName: String,
  reelcuttingGsm: String,
  reelcuttingQuality: String,
  reelcuttingBrightness: String,
  manyReel: String,

  Tickets: [{
    reelNumber: String,
    reelSize: String,
    reelUnit: String,
    reelWeight: String,
    reelRemark: String,
    reelMeterage: String,
  }]




});

module.exports = mongoose.model('Reelcuttingentry', reelcuttingentrySchema)
