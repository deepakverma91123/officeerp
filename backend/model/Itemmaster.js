const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const itemmasterSchema = mongoose.Schema({
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

  gsm: {
    type: String,
  },
  stockUnit: {
    type: String,
  },
  secondaryUnit: {
    type: String,
  },
  fromRate: {
    type: String,
  },
  toRate: {
    type: String,
  },

  avgLife: {
    type: String,
  },

  description: {
    type: String,
  },

  tolerance: {
    type: String,
  },

  lotNumber: {
    type: String,
  },



})

module.exports = mongoose.model('Itemmaster', itemmasterSchema);
