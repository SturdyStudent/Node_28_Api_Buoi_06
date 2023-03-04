const express = require('express');
const likeResRoute = express.Router();

// import controller xử lý food
const {likeRes, getLikeResByRestaurant, getLikeResByUser } = require('../controller/likeResController');

likeResRoute.get("/getLikeResByUser/:id", getLikeResByUser);
likeResRoute.get("/getLikeResByRestaurant/:id", getLikeResByRestaurant);
likeResRoute.post("/likeRes/:like", likeRes);

module.exports = likeResRoute;