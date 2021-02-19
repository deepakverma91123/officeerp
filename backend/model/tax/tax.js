const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const taxSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    taxId: {
        type: String
    },
    unitDate: {
        type: String,
    },
    taxName: {
        type: String,
    },
    taxPercentage: {
        type: String
    },
    category: {
        type: String
    },
    status: {
        type: String
    }


})

module.exports = mongoose.model('Tax', taxSchema);
