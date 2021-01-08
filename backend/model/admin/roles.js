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
    type: String,
  },
  roles: {
    type: String,
    enum: ['admin', 'user']
  },


  //   indententry: [{
  //     type: Schema.Types.ObjectId,
  //     ref: "Indententry"
  //   }]

})

module.exports = model('Roles', RolesSchema)
