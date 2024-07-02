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

exports.getEasterOrders = async (req, res) => {
  try {
    const sortedEasterOrders = await HolidayOrder.aggregate([
      { $match: { holiday: "Easter", year: new Date().getFullYear() } }, // Filter documents where holiday is "easter" and is in the current year
      {
        $addFields: {
          customOrder: {
            $switch: {
              branches: [
                { case: { $eq: ["$pickUpDate", "the day before Easter"] }, then: 1 },
                { case: { $eq: ["$pickUpDate", "Easter"] }, then: 2 },
                { case: { $eq: ["$pickUpDate", "the day after Easter"] }, then: 3 }
              ],
              default: 0 
            }
          }
        }
      },
      { $sort: { customOrder: 1, pickUpTime: 1 } } // Sort based on the customOrder field
    ]);
    
    const customerPopulatedEasterOrders = await HolidayOrder.populate(sortedEasterOrders, { path: 'customer' });

    return res.status(200).json({ success: true, easterOrders: customerPopulatedEasterOrders });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

exports.getThanksgivingOrders = async (req, res) => {
  try {
    const sortedThanksgivingOrders = await HolidayOrder.aggregate([
      { $match: { holiday: "thanksgiving", year: new Date().getFullYear() } }, // Filter documents where holiday is "Thanksgiving" and is in the current year
      {
        $addFields: {
          customOrder: {
            $switch: {
              branches: [
                { case: { $eq: ["$pickUpDate", "the day before Thanksgiving"] }, then: 1 },
                { case: { $eq: ["$pickUpDate", "Thanksgiving"] }, then: 2 },
                { case: { $eq: ["$pickUpDate", "the day after Thanksgiving"] }, then: 3 }
              ],
              default: 0 
            }
          }
        }
      },
      { $sort: { customOrder: 1, pickUpTime: 1 } } // Sort based on the customOrder field
    ]);
    
    const customerPopulatedThanksgivingOrders = await HolidayOrder.populate(sortedThanksgivingOrders, { path: 'customer' });

    return res.status(200).json({ success: true, thanksgivingOrders: customerPopulatedThanksgivingOrders });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

exports.getChristmasOrders = async (req, res) => {
  try {
    const sortedChristmasOrders = await HolidayOrder.aggregate([
      { $match: { holiday: "christmas", year: new Date().getFullYear() } }, // Filter documents where holiday is "Christmas" and is in the current year
      {
        $addFields: {
          customOrder: {
            $switch: {
              branches: [
                { case: { $eq: ["$pickUpDate", "the day before Christmas"] }, then: 1 },
                { case: { $eq: ["$pickUpDate", "Christmas"] }, then: 2 },
                { case: { $eq: ["$pickUpDate", "the day after Christmas"] }, then: 3 }
              ],
              default: 0 
            }
          }
        }
      },
      { $sort: { customOrder: 1, pickUpTime: 1 } } // Sort based on the customOrder field
    ]);
    
    const customerPopulatedChristmasOrders = await HolidayOrder.populate(sortedChristmasOrders, { path: 'customer' });

    return res.status(200).json({ success: true, christmasOrders: customerPopulatedChristmasOrders });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

exports.getMemorialDayOrders = async (req, res) => {
  try {
    const sortedMemorialDayOrders = await HolidayOrder.aggregate([
      { $match: { holiday: "Memorial Day", year: new Date().getFullYear() } }, // Filter documents where holiday is "Memorial-Day" and is in the current year
      {
        $addFields: {
          customOrder: {
            $switch: {
              branches: [
                { case: { $eq: ["$pickUpDate", "the day before Memorial Day"] }, then: 1 },
                { case: { $eq: ["$pickUpDate", "Memorial Day"] }, then: 2 },
                { case: { $eq: ["$pickUpDate", "the day after Memorial Day"] }, then: 3 }
              ],
              default: 0 
            }
          }
        }
      },
      { $sort: { customOrder: 1, pickUpTime: 1 } } // Sort based on the customOrder field
    ]);
    
    const customerPopulatedMemorialDayOrders = await HolidayOrder.populate(sortedMemorialDayOrders, { path: 'customer' });

    return res.status(200).json({ success: true, memorialDayOrders: customerPopulatedMemorialDayOrders });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}

exports.getIndependenceDayOrders = async (req, res) => {
  try {
    const sortedIndependenceDayOrders = await HolidayOrder.aggregate([
      { $match: { holiday: "Independence Day", year: new Date().getFullYear() } }, // Filter documents where holiday is "Independence -Day" and is in the current year
      {
        $addFields: {
          customOrder: {
            $switch: {
              branches: [
                { case: { $eq: ["$pickUpDate", "the day before Independence  Day"] }, then: 1 },
                { case: { $eq: ["$pickUpDate", "Independence  Day"] }, then: 2 },
                { case: { $eq: ["$pickUpDate", "the day after Independence Day"] }, then: 3 }
              ],
              default: 0 
            }
          }
        }
      },
      { $sort: { customOrder: 1, pickUpTime: 1 } } // Sort based on the customOrder field
    ]);
    console.log(getIndependenceDayOrders);
    const customerPopulatedIndependenceDayOrders = await HolidayOrder.populate(sortedIndependenceDayOrders, { path: 'customer' });

    return res.status(200).json({ success: true, independenceDayOrders: customerPopulatedIndependenceDayOrders });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}

exports.cancelHolidayOrder = async (req, res) => {
  const { orderId } = req.params
  console.log(orderId)
  try {
    // Find and delete the order based on the id provided in the parameters of the request
    const cancelledHolidayOrder = await HolidayOrder.findByIdAndDelete(orderId);
    
    return res.status(200).json({ success: true, message: "Holiday order cancelled" })
  } catch (err) {
    return res.status(500).json({ suceess: false, message: err.message })
  }
}
