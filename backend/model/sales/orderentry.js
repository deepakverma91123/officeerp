const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const salesOrderSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    salesorderNumber: {
        type: String,
    },

    salesorderDate: {
        type: Date,
    },
    salesmanName: {
        type: String,
    },

    salespaperType: {
        type: String,
    },
    salesnumberofjumbureel: {
        type: String,
    },


  
})

module.exports = mongoose.model('Salesorder', salesOrderSchema);
