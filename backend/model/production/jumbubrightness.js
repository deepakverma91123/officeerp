const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const JumbubrightnessSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    brightness: {
        type: String,
    },


})

module.exports = mongoose.model('Jumbubrightness', JumbubrightnessSchema);
