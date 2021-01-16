const mongoose = require('mongoose');

const {
  Schema,
  model
} = mongoose;


const RolesSchema = new Schema({
  // _id: Schema.Types.ObjectId,

  displayName: {
    type: String,
  },
  mobileNumber: {
    type: Number,
  },
  displayEmail: {
    type: String, unique: true, required: true
  },
  password: {
    type: String,
  },


  roles: {
    type: String,

  },




  //   indententry: [{
  //     type: Schema.Types.ObjectId,
  //     ref: "Indententry"
  //   }]

})

module.exports = model('Roles', RolesSchema)
