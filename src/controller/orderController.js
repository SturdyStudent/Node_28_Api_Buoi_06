const User = require('../models/user');
const {Sequelize} = require('sequelize');

const initModels = require('../models/init-models');
const sequelize = require('../models/index')
const model = initModels(sequelize);

const Op = Sequelize.Op;
const {failCode, successCode, errorCode} = require('../config/response')

const orderFood = async (req, res) => {
    try{
        let {user_id, food_id, amount, code, arr_sub_id} = req.body; 

        //Thêm một dòng dữ liệu vào table
        let modelOrder = await model.order.create({
            user_id, food_id, amount, code, arr_sub_id
        });
    
        successCode(res, modelOrder, 'Tạo đơn hàng thành công')
    }catch(err){
        errorCode(res, "Lỗi BE");
    }
}

module.exports = {
    orderFood
}