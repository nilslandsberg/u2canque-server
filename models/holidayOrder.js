const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const itemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  options: {
      type: Schema.Types.Mixed // You can store any type of data in "options"
  },
  size: String,
  price: {
      type: Number,
      required: true
  },
  quantity: {
      type: Number,
      required: true
  },
  total: {
      type: Number,
      required: true
  }
})

const holidayOrderSchema = new Schema({
  holiday: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  pickUpDate: {
    type: String,
    required: true,
  },
  pickUpTime: {
    type: String,
    required: true,
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer"
  },
  items: [itemSchema],
  orderTotal: {
    type: String,
    required: true
  }
});

const HolidayOrder = mongoose.model("Holiday", holidayOrderSchema);

module.exports = { HolidayOrder }