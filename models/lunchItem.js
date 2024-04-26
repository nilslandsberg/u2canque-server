const mongoose = require('mongoose');

const lunchSchema = new mongoose.Schema({
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
    chicken: [{ type: String }],
    sauce: [{ type: String }],
    dressing: [{ type: String }],
    toppings: [{ type: String }],
    // Add other options as needed
  },
  twoSides: { 
    type: Boolean, 
    default: false 
  },
  oneSide: { 
    type: Boolean, 
    default: false 
  },
  bread: { 
    type: Boolean, 
    default: false 
  },
  lunch: { 
    type: Boolean, 
    default: true 
  },
  day: { 
    type: String, 
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] 
  },
});

const Lunch = mongoose.model('Lunch', lunchSchema);
module.exports = Lunch;