const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// route for adding an order to database
router
  .route('/newOrder')
  .post(orderController.postOrder)