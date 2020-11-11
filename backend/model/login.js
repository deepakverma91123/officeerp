const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);
const LoginSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = Login = mongoose.model("login", LoginSchema);
