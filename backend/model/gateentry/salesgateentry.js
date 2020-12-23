const mongoose = require('mongoose');

const {
    Schema,
    model
} = mongoose;


const SalesgateentrySchema = new Schema({
    // _id: Schema.Types.ObjectId,

    salesOrderNo: {
        type: String,
    },
    salesgateEntryNumber: {
        type: String
    },
    salesManName: {
        type: String,
    },
    salestransportType: {
        type: String,
    },
    salesdriverName: {
        type: String,
    },
    salesvehicalNumber: {
        type: String
    },
    salestruckWeight: {
        type: Number
    },
    salesentryDate: {
        type: String
    },

    salestime: {
        type: String
    },
    salesPurpose: {
        type: String
    },
    selectedItem: { type: String },

    salesproductWeight: { type: Number, default: '' },
    salesallWeight: {
        type: Number,
        default: ''
    }




    //   indententry: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Indententry"
    //   }]

})

module.exports = model('Salesgateentry', SalesgateentrySchema)
