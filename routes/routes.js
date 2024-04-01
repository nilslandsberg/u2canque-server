const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const holidayOrderController = require("../controllers/holidayOrderController");
const checkAuth = require("../middleware/checkAuth");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

// route for adding an order to database
router
  .route('/order')
  .post(orderController.createNewOrder)
  .get(orderController.getAllOrders)

router
  .route('/order/today')
  .get(orderController.getOrdersForToday)

router
  .route('/order/nextBusinessDay')
  .get(orderController.getOrdersForNextBusinessDay)

router
  .route('/order/nextWeek')
  .get(orderController.getOrdersForWeek)

router
  .route('/order/:orderId')
  .delete(orderController.cancelOrder)

router
  .route('/order/holiday')
  .post(holidayOrderController.createNewHolidayOrder)

router
  .route('/order/holiday/easter')
  .get(holidayOrderController.getEasterOrders)

router
  .route('/order/holiday/christmas')
  .get(holidayOrderController.getChristmasOrders)

router
  .route('/order/holiday/:orderId')
  .delete(holidayOrderController.cancelHolidayOrder)

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router
  .route('/')
  .get(checkAuth, userController.getAllUsers);
  
module.exports = router;