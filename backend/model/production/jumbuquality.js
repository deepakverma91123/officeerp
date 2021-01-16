const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const JumbuqualitySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    quality: {
        type: String,
    },


})

module.exports = mongoose.model('Jumbuquality', JumbuqualitySchema);
