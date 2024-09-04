const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const holidayOrderController = require("../controllers/holidayOrderController");
const checkAuth = require("../middleware/checkAuth");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const menuController = require("../controllers/menuController");

// APPETIZERS
router
  .route("/appetizers")
  .get(menuController.getAppetizers)
  .post(menuController.createNewAppetizer);

router
  .route("/appetizers/:id")
  .get(menuController.getAnAppetizer) 
  .put(menuController.editAppetizer)
  .delete(menuController.deleteAppetizer);

// LUNCH ITEMS
router
  .route("/lunch")
  .get(menuController.getLunches)
  .post(menuController.createNewLunch);

router
  .route("/lunch/monday")
  .get(menuController.getMondayLunch)
  router
  .route("/lunch/tuesday")
  .get(menuController.getTuesdayLunch)
  router
  .route("/lunch/wednesday")
  .get(menuController.getWednesdayLunch)
  router
  .route("/lunch/thursday")
  .get(menuController.getThursdayLunch)
  router
  .route("/lunch/friday")
  .get(menuController.getFridayLunch)

router
  .route("/lunch/:id")
  .get(menuController.getALunch) 
  .put(menuController.editLunch)
  .delete(menuController.deleteLunch);

// SIDE ITEMS
router
  .route("/sides")
  .get(menuController.getSides)
  .post(menuController.createNewSide);

router
  .route("/sides/:id")
  .get(menuController.getASide) 
  .put(menuController.editSide)
  .delete(menuController.deleteSide);

// BULK ITEMS
router
  .route("/bulk-bbq")
  .get(menuController.getBulkBbqItems)
  .post(menuController.createNewBulkBbqItem);

router
  .route("/bulk-bbq/:id")
  .get(menuController.getABulkBbqItem) 
  .put(menuController.editBulkBbqItem)
  .delete(menuController.deleteBulkBbqItem);

// HOLIDAY ITEMS
router
  .route("/holiday-items")
  .get(menuController.getHolidayItems)
  .post(menuController.createNewHolidayItem);

router
  .route("/holiday-items/:id")
  .get(menuController.getAHolidayItem)
  .put(menuController.editHolidayItem)
  .delete(menuController.deleteHolidayItem);

// MENU MODIFIERS (all stored in one Mongo entry)
router
  .route("/modifiers")
  .get(menuController.getModifiers)
  .put(menuController.editModifiers);

// route for adding an order to database
router
  .route('/order')
  .post(orderController.createNewOrder)
  .get(orderController.getAllOrders)

router
  .route('/order/today')
  .get(checkAuth, orderController.getOrdersForToday)

router
  .route('/order/nextBusinessDay')
  .get(checkAuth, orderController.getOrdersForNextBusinessDay)

router
  .route('/order/nextWeek')
  .get(checkAuth, orderController.getOrdersForWeek)

router
  .route('/order/:orderId')
  .delete(checkAuth, orderController.cancelOrder)

router
  .route('/order/holiday')
  .post(holidayOrderController.createNewHolidayOrder)

router
  .route('/order/holiday/easter')
  .get(checkAuth, holidayOrderController.getEasterOrders)

router
  .route('/order/holiday/christmas')
  .get(checkAuth, holidayOrderController.getChristmasOrders)

router
  .route('/order/holiday/thanksgiving')
  .get(checkAuth, holidayOrderController.getThanksgivingOrders)

router
  .route('/order/holiday/memorial-day')
  .get(checkAuth, holidayOrderController.getMemorialDayOrders)

router
  .route('/order/holiday/independence-day')
  .get(checkAuth, holidayOrderController.getIndependenceDayOrders)

router
  .route('/order/holiday/ribs-flash-sale')
  .get(checkAuth, holidayOrderController.getRibsFlashSaleOrders)

router
  .route('/order/holiday/:orderId')
  .delete(checkAuth, holidayOrderController.cancelHolidayOrder)

router.post('/signup', authController.signup)
router.post('/login', authController.login)

router
  .route('/')
  .get(checkAuth, userController.getAllUsers)
  
module.exports = router;
