const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);
const RolesSchema = new mongoose.Schema({
    // id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },


    role: {
        type: String,
        enum: [admin, moderator, client],
        default: client,
    },
});




module.exports = Roles = mongoose.model("roles", RolesSchema);


//COMPARING PASSWORD METHOD
// User.methods.comparePassword = function ( candidatePassword, callback ) {
//     bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//         if(err) return callback(err);
//         callback(null, isMatch);
//     });
// }
