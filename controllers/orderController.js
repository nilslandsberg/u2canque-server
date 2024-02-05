const { Order } = require("../models/order");
const { Customer } = require("../models/customer")

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

    const newOrder = await Order.create({
      date: date,
      pickUpTime: pickUpTime,
      customer: existingCustomer._id,
      items: items
    });

    const populatedOrder = await Order.findOne({ _id: newOrder._id }).populate('customer');

    res.status(201).json({ success: true, newOrder: populatedOrder });
  } catch (err) {
    return res.status(500).json({ sucess: false, message: err.message });
  }
}

