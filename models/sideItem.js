const mongoose = require('mongoose');

const sideSchema = new mongoose.Schema({
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
    pint: { type: Number },
    quart: { type: Number },
    halfPan: { type: Number },
    fullPan: { type: Number },
  },
  size: [{ type: String }],
  side: { 
    type: Boolean, 
    default: true 
  },
});

const Side = mongoose.model('Side', sideSchema);
module.exports = Side;