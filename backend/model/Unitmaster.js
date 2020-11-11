const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const unitmasterSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    }


})

module.exports = mongoose.model('Unitmaster', unitmasterSchema);
