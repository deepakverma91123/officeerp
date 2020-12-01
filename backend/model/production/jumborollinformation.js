const mongoose = require('mongoose');
const jumborollinformationSchema = new mongoose.Schema({

  jumboCode: String,
  jumboRollItemName: String,
  machineName: String,
  machineCategory: String,
  jumboRollDate: Date

});

module.exports = mongoose.model('Jumborollinformation', jumborollinformationSchema)
