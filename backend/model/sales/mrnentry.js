


const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const salesmrnSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,




    salesOrderNo: String,
    salesmrnNumber: String
})

module.exports = mongoose.model('Salesmrn', salesmrnSchema);
