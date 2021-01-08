


const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const salesbillentrySchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,

    salesmrnNumber: String,
    salesbillentryDate: Date,

    salesbookNumber: String,
    salespartyNumber: String,
    salespartyCity: String,
    salesagainstForm: String,
   
})

module.exports = mongoose.model('Salesbillentry', salesbillentrySchema);
