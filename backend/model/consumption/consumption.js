const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const consumptionSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
  
    departmentName: {
        type: String
    },
    departmentHead: {
        type: String
    },
    consumptionDate: {
        type: String
    },
    issuePerson: {
        type: String
    },
    itemName: { type: String },






    itemQuantity: {
        type: String
    },
    rate: {
        type: String
    },
    description: {
        type: String
    },



})

module.exports = mongoose.model('Consumption', consumptionSchema);
