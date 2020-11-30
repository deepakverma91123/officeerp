const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const unitmasterSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  unitName: {
    type: String,
  }

})

module.exports = mongoose.model('Unitmaster', unitmasterSchema);
