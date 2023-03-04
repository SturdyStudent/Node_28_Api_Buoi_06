const express = require('express');
const rateResRoute = express.Router();

// import controller xử lý food
const {rateRes, getRateResByRestaurant, getRateResByUser } = require('../controller/rateResController');

rateResRoute.get("/getRateResByUser/:id", getRateResByUser);
rateResRoute.get("/getRateResByRestaurant/:id", getRateResByRestaurant);
rateResRoute.post("/rateRes", rateRes);

module.exports = rateResRoute;