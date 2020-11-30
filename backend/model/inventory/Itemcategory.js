const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const itemcategorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    category: {
        type: String,
    },

    manualCode: {
        type: String,
    }

})

module.exports = mongoose.model('Itemcategory', itemcategorySchema);
