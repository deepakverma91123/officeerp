
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const indenterProfileSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    indenterName: {
        type: String,
    },

    department: {
        type: String,
    },
    dob: {
        type: Date,
    },




})

module.exports = mongoose.model('Indenterprofile', indenterProfileSchema);



