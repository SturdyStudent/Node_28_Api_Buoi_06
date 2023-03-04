const express = require('express');
const rootRoute = express.Router();

const orderRoute = require('./orderRoute');
const likeResRoute = require('./likeResRoute');

rootRoute.use('/likeRes', likeResRoute);
rootRoute.use('/user', orderRoute);
module.exports = rootRoute;