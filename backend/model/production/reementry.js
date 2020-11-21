const mongoose = require('mongoose');
const reementrySchema = new mongoose.Schema({

  reemEntryNumber: String,
  reemEntrytDate: Date,
  gsm: String,
  unit: String,
  brightness: String,


});

module.exports = mongoose.model('Reementry', reementrySchema)
