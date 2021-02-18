const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const unitmasterSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  unitId: {
    type: String
  },
  unitDate: {
    type: String,
  },
  unitName: {
    type: String,
  },
  mannualCode: {
    type: String
  }


})

module.exports = mongoose.model('Unitmaster', unitmasterSchema);
