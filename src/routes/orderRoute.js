const express = require('express');
const orderRoute = express.Router();

//import controller
const { orderFood} = require('../controller/orderController');

//GET ALL
orderRoute.post('/order', orderFood);

module.exports = orderRoute
