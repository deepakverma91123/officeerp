const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const salesOrderSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    sorderNumber: {
        type: String,
    },

    sorderDate: {
        type: Date,
    },
    ssalesMan: {
        type: String,
    },

    sitemType: {
        type: String,
    },
    paperType: {
        type: String,
    },


})

module.exports = mongoose.model('Salesorder', salesOrderSchema);
