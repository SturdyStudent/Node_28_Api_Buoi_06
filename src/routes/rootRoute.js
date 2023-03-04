const express = require('express');
const rootRoute = express.Router();

const orderRoute = require('./orderRoute');
const likeResRoute = require('./likeResRoute');
const rateResRoute = require( './rateResRoute' );

rootRoute.use('/likeRes', likeResRoute);
rootRoute.use('/order', orderRoute);
rootRoute.use('/rateRes', rateResRoute);
module.exports = rootRoute;
