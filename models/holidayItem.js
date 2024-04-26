const mongoose = require('mongoose');

const holidaySchema = new mongoose.Schema({
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

  // refer to what we did for sides & bulk here
  price: {
    default: { type: String },
    fourPounds: { type: Number },
    fivePounds: { type: Number },
    sixPounds: { type: Number },
    sevenPounds: { type: Number },
    eightPounds: { type: Number },
    ninePounds: { type: Number },
    tenPounds: { type: Number },
  },
  size: [{ 
    type: String 
  }],
  holiday: { 
    type: Boolean, 
    default: true 
  },
  type: { 
    type: String, 
    enum: ['Christmas', 'Thanksgiving', 'Easter', 'Memorial Day']
  },
});

const Holiday = mongoose.model('Holiday', holidaySchema);
module.exports = Holiday;