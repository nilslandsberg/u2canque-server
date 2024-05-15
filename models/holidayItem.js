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
  price: {
    default: { type: String },
    fourPounds: { type: String },
    fivePounds: { type: String },
    sixPounds: { type: String },
    sevenPounds: { type: String },
    eightPounds: { type: String },
    ninePounds: { type: String },
    tenPounds: { type: String },
  },
  size: [{ type: String }],
  holiday: { 
    type: Boolean, 
    default: true 
  },
  bulk: {
    type: Boolean
  },
  type: { 
    type: String, 
    enum: ['Christmas', 'Thanksgiving', 'Easter', 'Memorial Day', 'Independence Day']
  },
});

const HolidayItem = mongoose.model('HolidayItem', holidaySchema);
module.exports = HolidayItem;