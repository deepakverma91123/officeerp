
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const supplierInformationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    supplierName: {
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

module.exports = mongoose.model('Supplierinformation', supplierInformationSchema);



