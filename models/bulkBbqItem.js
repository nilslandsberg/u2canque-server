const mongoose = require('mongoose');

const bulkBbqSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  image: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  pricePerPound: { 
    type: String 
  },
  price: {
    onePound: { type: String },
    threePounds: { type: String },
    fivePounds: { type: String },
  },
  size: [{ type: String }],
  bulk: { 
    type: Boolean, 
    default: true 
  },
});

const BulkBbq = mongoose.model('BulkBbq', bulkBbqSchema);
module.exports = BulkBbq;