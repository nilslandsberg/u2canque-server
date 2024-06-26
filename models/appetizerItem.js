const mongoose = require('mongoose');

const appetizerSchema = new mongoose.Schema({
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
  price: { 
    type: String, 
    required: true 
  },
  options: {
    type: Object,
    default: {},
  },
  appetizer: { 
    type: Boolean, 
    default: true 
  },
});

const Appetizer = mongoose.model('Appetizer', appetizerSchema);
module.exports = Appetizer;
