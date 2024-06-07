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
  },
  pricePerPound: { 
    type: String, 
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
    type: Array,
    default: [],
  },
  side: { 
    type: Boolean, 
    default: false 
  },
});

const HolidayItem = mongoose.model('HolidayItem', holidaySchema);
module.exports = HolidayItem;
