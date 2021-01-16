const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const JumbugsmSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    gsm: {
        type: String,
    },


})

module.exports = mongoose.model('Jumbugsm', JumbugsmSchema);
