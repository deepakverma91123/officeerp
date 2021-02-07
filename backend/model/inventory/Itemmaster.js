const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const itemmasterSchema = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  _id: mongoose.Schema.Types.ObjectId,
  itemName: {
    type: String,
  },

  manualCode: {
    type: String,
  },
  category: {
    type: String,
  },

  stockUnit: {
    type: String,
  },
  unit: {
    type: String,
  },
  lastAmount: { type: String },


  averageLife: {
    type: String,
  },

  description: {
    type: String,
  },

  tolerance: {
    type: String,
  },
  hsnSac: {
    type: String,
  },

  gstNature: {
    type: String
  },

  itemDate: {
    type: String
  },
  fromDate: { type: Date, default: Date.now },
  supplierName: { type: String },
  emailSupplier: { type: String },
  mobileSupplier: { type: String }


})

module.exports = mongoose.model('Itemmaster', itemmasterSchema);
