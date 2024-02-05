const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// route for adding an order to database
router
  .route('/order')
  .post(orderController.createNewOrder)
  .get(orderController.getAllOrders)

router
  .route('/order/tomorrow')
  .get(orderController.getOrdersForTomorrow)

module.exports = router;