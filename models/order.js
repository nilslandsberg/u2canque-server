const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function isWeekday(value) {
  const date = new Date(value);
  return date.getDay() !== 0 && date.getDay() !== 6;
}

function isFutureDate(value) {
  return new Date(value) > new Date();
}

const itemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  options: {
      type: Schema.Types.Mixed // You can store any type of data in "options"
  },
  sideOne: String,
  sideTwo: String,
  bread: String,
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

const orderSchema = new Schema({
  date: {
    type: Date,
    required: true,
    validate: [
      {validator: isWeekday, message: "The date must bea  weekday (Monday to Friday)"},
      {validator: isFutureDate, message: "This date has already passed"},
    ]
  },
  pickUpTime: {
    type: String,
    required: true,
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Client"
  }

});

const Order = mongoose.model("Order", orderSchema);