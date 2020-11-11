const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const fileSchema = mongoose.Schema({
  myfiles: {
    type: String,
  },


})

module.exports = mongoose.model('product', fileSchema);
