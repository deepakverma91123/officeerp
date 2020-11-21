const mongoose = require('mongoose');
const jumborollregisterSchema = new mongoose.Schema({

  fromDate: Date,
  toDate: Date,
  siteName: String,
  itemName: String,
  bf: String,
  gsm: String


});

module.exports = mongoose.model('Jumborollregister', jumborollregisterSchema)
