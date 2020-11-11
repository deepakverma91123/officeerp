const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  productName: {
    type: String,
  },
  productDescription: {
    type: String,
  },
  productCost: {
    type: String,
  },

  productType: {
    type: String,
  },

  productCode: {
    type: String,
  },
  secondaryName: {
    type: String,
  },
  weight: {
    type: String,
  },
  brandType: {
    type: String,
  },
  category: {
    type: String,
  },
  productUnit: {
    type: Number,
  },
  defaultPurchaseUnit: {
    type: Number,
  },
  productCost: {
    type: Number,
  },
  productPrice: {
    type: Number,
  },
  hsnCode: {
    type: String,
  },
  productTax: {
    type: String,
  },
  taxMethod: {
    type: String,
  },
  productDetails: {
    type: String,
  },

  startDate: {
    type: Date,
  },
  photos:{
    type: String
  }


})

module.exports = mongoose.model('products', productSchema);
