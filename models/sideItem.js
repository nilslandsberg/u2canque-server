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


  // SIDES EXAMPLE:
  // price: {
  //   pint: "13",
  //   quart: "22",
  //   halfPan: "45",
  //   fullPan: "75"},
  // size: {[
  //  "Pint (Serves 2-3): $13.00", 
  //  "Quart (Serves 4-6): $22.00", 
  //  "Half-Pan (Serves 12-14): $45.00", 
  //  "Full-Pan (Serves 24-28): $75.00"]}},

  // use the keys and values from 'price' to populate 'size' text
  // price = list on item card in menu
  // size = dropdown on item modal
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