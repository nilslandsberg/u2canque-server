const mongoose = require('mongoose');

const testBulkSchema = new mongoose.Schema({
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
    type: String, 
    required: true 
  },
  size: [{ type: String }],
  bulk: { 
    type: Boolean, 
    default: true 
  },
});

const TestBulk = mongoose.model('TestBulk', testBulkSchema);
module.exports = TestBulk;
