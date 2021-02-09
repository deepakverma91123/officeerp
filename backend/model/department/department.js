
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const departmentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    departmentName: {
        type: String,
    },

})

module.exports = mongoose.model('department', departmentSchema);



