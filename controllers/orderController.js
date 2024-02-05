const { Order } = require("../models/order");
const { Customer } = require("../models/customer");
const moment = require("moment");
const momenttz = require("moment-timezone");

exports.createNewOrder = async (req, res) => {
  try {
    console.log("request body: ", req.body)
    const { date, pickUpTime, customer, items } = req.body;

    const { firstName, lastName, email, phone } = customer;

    // Check if customer already exists in database based on email
    let existingCustomer = await Customer.findOne({ email: email });

    // If customer does not exist, create a new customer
    if (!existingCustomer) {
      existingCustomer = await Customer.create(customer)
    }

    // convert pickUpTime to UTC
    const utcPickUpTime = momenttz.tz(pickUpTime, 'h:mma;', 'America/New_York').utc();

    // Combine the date part from 'date' with the time part from 'utcPickUpTime'
    const newDateTime = momenttz.utc(date).set({
      hour: utcPickUpTime.hours(),
      minute: utcPickUpTime.minutes(),
      second: 0,
      millisecond: 0
    }).toDate();

    const newOrder = await Order.create({
      date: newDateTime,
      pickUpTime: pickUpTime,
      customer: existingCustomer._id,
      items: items
    });

    const populatedOrder = await Order.findOne({ _id: newOrder._id }).populate('customer');

    return res.status(201).json({ success: true, newOrder: populatedOrder });
  } catch (err) {
    return res.status(500).json({ sucess: false, message: err.message });
  }
}

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('customer');

    return res.status(200).json({ success: true, orders: orders });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message});
  }
}

exports.getOrdersForTomorrow = async (req, res) => {
  try {
    const tomorrow = moment().add(1, 'day').startOf('day').toDate();
    
    const ordersForTomorrow = await Order.find({
      date: { $gte: tomorrow, $lt: moment(tomorrow).endOf('day').toDate() }
    }).populate('customer').sort({ date: 1 });

    return res.status(200).json({ success: true, orders: ordersForTomorrow})
  } catch (err) {
    return res.status(500).json({ suceess: false, message: err.message })
  }
}

exports.cancelOrder = async (req, res) => {
  const { orderId } = req.params
  console.log(orderId)
  try {
    // Find and delete the order based on the id provided in the parameters of the request
    const cancelledOrder = await Order.findByIdAndDelete(orderId);
    return res.status(200).json({ success: true, message: "Order cancelled" })
  } catch (err) {
    return res.status(500).json({ suceess: false, message: err.message })
  }
}