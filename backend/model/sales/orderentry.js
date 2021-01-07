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
    customerName: {
        type: String,
    },
    jumbuBrightness: {
        type: Number
    },
    jumbuGsm: {
        type: Number
    },

    jumbuQuality: {
        type: Number
    },
    saleitemType: {
        type: String
    },
    salesnumberofjumbu:{
        type:String,
    },
    salesnumberofreel:{
        type:String
    },

    

 




})

module.exports = mongoose.model('Salesorder', salesOrderSchema);
