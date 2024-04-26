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
    type: Number, 
    required: true 
  },
  options: {
    // use - type: Schema.Types.Mixed?
    sauce: [{ type: String }],
    // Add other options as needed
  },
  appetizer: { 
    type: Boolean, 
    default: true 
  },
});

const Appetizer = mongoose.model('Appetizer', appetizerSchema);
module.exports = Appetizer;