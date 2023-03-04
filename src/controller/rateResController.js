const User = require('../models/user');
const {Sequelize} = require('sequelize');

const initModels = require('../models/init-models');
const sequelize = require('../models/index')
const model = initModels(sequelize);

const Op = Sequelize.Op;
const { successCode, errorCode} = require('../config/response');

const rateRes = async (req, res) => {
    try{
        let {user_id, res_id, amount} = req.body; 
        let isLike = req.params.like;

        var date_rate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        //Thêm một dòng dữ liệu vào table
        if(Number(isLike)){
            let modelLikeRes = await model.like_res.create({
                user_id,
                res_id,
                amount,
                date_rate
            });
            successCode(res, modelLikeRes, 'Rate nhà hàng thành công');
        }
    }catch(err){
        errorCode(res, err);
    }
}

const getRateResByRestaurant = async (req, res) => {
    let res_id = req.params.id;
    
    let data = await model.like_res.findAll({
        where: {res_id}
    });

    successCode(res, data, 'Lấy danh sách rate theo nhà hàng thành công');
}

const getRateResByUser = async (req, res) => {
    let user_id = req.params.id;
    let data = await model.rate_res.findAll({
        where: {user_id}
    });

    successCode(res, data, 'Lấy danh sách rate theo user thành công');
}

module.exports = {
    rateRes,
    getRateResByRestaurant,
    getRateResByUser
}