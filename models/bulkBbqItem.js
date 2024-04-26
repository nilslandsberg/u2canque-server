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


  // BULK EXAMPLE:
  // pricePerPound: "21.50",
  // price: {
  //   onePound: "21.50",
  //   threePounds: "55.50",
  //   fivePounds: "107.50"
  // },
  // size: [
  //   "1lb (serves 3-4): $21.50", 
  //   "3lbs (serves 9-12): $55.50", 
  //   "5lbs (serves 15-20): $107.50"]
  // },

  // use the keys and values from 'price' to populate 'size' text
  // price = list on item card in menu
  // size = dropdown on item modal
  pricePerPound: { 
    type: Number 
  },
  price: {
    onePound: { 
      type: Number 
    },
    threePounds: { 
      type: Number 
    },
    fivePounds: { 
      type: Number 
    },
  },
  size: [{ 
    type: String 
  }],
  bulk: { 
    type: Boolean, 
    default: true 
  },
});

const BulkBbq = mongoose.model('BulkBbq', bulkBbqSchema);
module.exports = BulkBbq;