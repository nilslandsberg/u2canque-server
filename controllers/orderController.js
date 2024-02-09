const { Order } = require("../models/order");
const { Customer } = require("../models/customer");
const moment = require("moment");
const momenttz = require("moment-timezone");

exports.createNewOrder = async (req, res) => {
  console.log('New Order!')
  try {
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


exports.getOrdersForNextBusinessDay = async (req, res) => {
  try {
    let nextBusinessDay;

    // Set the time zone to Eastern Time
    momenttz.tz.setDefault('America/New_York');

    // Get the current day of the week (0 for Sunday, 6 for Saturday)
    const currentDayOfWeek = moment().day();
    
    // Check if today is Friday, Saturday, or Sunday
    if (currentDayOfWeek === 5 || currentDayOfWeek === 6 || currentDayOfWeek === 0) {
      // Set next business day to Monday
      nextBusinessDay = moment().add(3, 'days').startOf('day').toDate();
    } else {
      // Set next business day to the next day
      nextBusinessDay = moment().add(1, 'day').startOf('day').toDate();
    }

    // Convert nextBusinessDay to a string with format YYYY-MM-DD
    const nextBusinessDayString = moment(nextBusinessDay).format('YYYY-MM-DD');

    // Query orders from the database where the date falls within the next business day
    const ordersForNextBusinessDay = await Order.find({
      $expr: {
        $eq: [
          {
            $dateToString: { format: '%Y-%m-%d', date: '$date' }
          },
          nextBusinessDayString
        ]
      }
    }).populate('customer').sort({ date: 1 });

    return res.status(200).json({ success: true, orders: ordersForNextBusinessDay });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
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