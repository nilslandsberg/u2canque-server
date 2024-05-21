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
  .post(checkAuth, menuController.createNewAppetizer);

router
  .route("/appetizers/:id")
  .get(menuController.getAnAppetizer) 
  .put(checkAuth, menuController.editAppetizer)
  .delete(checkAuth, menuController.deleteAppetizer);

// LUNCH ITEMS
router
  .route("/lunch")
  .get(menuController.getLunches)
  .post(checkAuth, menuController.createNewLunch);

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
  .put(checkAuth, menuController.editLunch)
  .delete(checkAuth, menuController.deleteLunch);

// SIDE ITEMS
router
  .route("/sides")
  .get(menuController.getSides)
  .post(checkAuth, menuController.createNewSide);

router
  .route("/sides/:id")
  .get(menuController.getASide) 
  .put(checkAuth, menuController.editSide)
  .delete(checkAuth, menuController.deleteSide);

// BULK ITEMS
router
  .route("/bulk-bbq")
  .get(menuController.getBulkBbqItems)
  .post(checkAuth, menuController.createNewBulkBbqItem);

router
  .route("/bulk-bbq/:id")
  .get(menuController.getABulkBbqItem) 
  .put(checkAuth, menuController.editBulkBbqItem)
  .delete(checkAuth, menuController.deleteBulkBbqItem);

// HOLIDAY ITEMS
router
  .route("/holiday-items")
  .get(menuController.getHolidayItems)
  .post(checkAuth, menuController.createNewHolidayItem);

router
  .route("/holiday-items/:id")
  .get(menuController.getAHolidayItem)
  .put(checkAuth, menuController.editHolidayItem)
  .delete(checkAuth, menuController.deleteHolidayItem);

// MENU MODIFIERS (all stored in one Mongo entry)
router
  .route("/modifiers")
  .get(menuController.getModifiers)
  .put(checkAuth, menuController.editModifiers)

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
  .route('/order/holiday/:orderId')
  .delete(checkAuth, holidayOrderController.cancelHolidayOrder)

router.post('/signup', authController.signup)
router.post('/login', authController.login)

router
  .route('/')
  .get(checkAuth, userController.getAllUsers)
  
module.exports = router;