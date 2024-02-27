const { HolidayOrder } = require("../models/holidayOrder");
const { Customer } = require("../models/customer");

exports.createNewHolidayOrder = async (req, res) => {
  console.log('New Holiday Order!')
  try {
    const { holiday, year, pickUpDate, pickUpTime, customer, items, orderTotal } = req.body;
   
    const { email } = customer;

    // Check if customer already exists in database based on email
    let existingCustomer = await Customer.findOne({ email: email });

    // If customer does not exist, create a new customer
    if (!existingCustomer) {
      existingCustomer = await Customer.create(customer)
    }

    const newHolidayOrder = await HolidayOrder.create({
      holiday: holiday,
      year: year,
      pickUpDate: pickUpDate,
      pickUpTime: pickUpTime,
      customer: existingCustomer._id,
      items: items,
      orderTotal: orderTotal
    });

    const populatedHolidayOrder = await HolidayOrder.findOne({ _id: newHolidayOrder._id }).populate('customer');

    return res.status(201).json({ success: true, newHolidayOrder: populatedHolidayOrder });
  } catch (err) {
    return res.status(500).json({ sucess: false, message: err.message });
  }
}