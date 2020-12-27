
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const customerInformationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    customerName: {
        type: String,
    },

    companyName: {
        type: String,
    },
    description: {
        type: String,
    },

    address: {
        type: String,
    },

    gstNumber: {
        type: String,
    },


})

module.exports = mongoose.model('customerinformation', customerInformationSchema);



