const mongoose = require('mongoose');
const jumborollentrySchema = new mongoose.Schema({

  entryNumber: String,
  entrytDate: Date,
  machineNumber: Number,
  machineCategory: String,


});

module.exports = mongoose.model('Jumborollentry', jumborollentrySchema)
