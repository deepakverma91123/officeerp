
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const itemInformationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    itemName: {
        type: String,
    },

    manualCode: {
        type: String,
    },
    category: {
        type: String,
    },

    group: {
        type: String,
    },
    
    itemDate: {
        type: Date, default: Date.now
    },
    

})

module.exports = mongoose.model('Iteminformation', itemInformationSchema);



