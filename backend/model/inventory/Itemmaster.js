const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const itemmasterSchema = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  _id: mongoose.Schema.Types.ObjectId,

  itemmasterId: {
    type: String
  },
  ItemDate: {
    type: Date
  },
  itemName: {
    type: String,
  },
  manualCode: {
    type: String,
  },
  category: {
    type: String
  },
  unit: {
    type: String
  },

  averageLife: {
    type: String,
  },

  description: {
    type: String,
  },
  shortName:{
    type:String,
  },

  hsnsac:{
    type:String,
  },
 


 
  

  
   
 


  
 
 

   
  fromDate: { type: Date, default: Date.now },
  


})

module.exports = mongoose.model('Itemmaster', itemmasterSchema);
