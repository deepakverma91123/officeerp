const mongoose = require('mongoose');
const { roless } = require('../permision/constant');
const { permission } = require('../perm/permission');
const {
  Schema,
  model
} = mongoose;



let inventory_type_enum = ["goods", "services"];
const RolesSchema = new Schema({
  // _id: Schema.Types.ObjectId,

  displayName: {
    type: String,
  },
  mobileNumber: {
    type: Number,
  },
  displayEmail: {
    type: String, unique: true,
  },
  password: {
    type: String,
  },


  roles: {
    type: String,

  },

  Creat: { type: Boolean },
  Read: { type: Boolean },
  Delete: { type: Boolean },
  Update: { type: Boolean },

  ro: {
    type: String,
    default: 'basic',
    enum: ["basic", "supervisor", "admin"]
  },

  role: {
    type: String,
    enum: [roless.admin, roless.client],
    default: roless.admin,
  },

  permission: {
    type: String,
    enum: [permission.admin, permission.client],
    default: [permission.admin],
  },



  //   indententry: [{
  //     type: Schema.Types.ObjectId,
  //     ref: "Indententry"
  //   }]

})

module.exports = model('Roles', RolesSchema)
