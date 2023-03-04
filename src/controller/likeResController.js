const User = require('../models/user');
const {Sequelize} = require('sequelize');

const initModels = require('../models/init-models');
const sequelize = require('../models/index')
const model = initModels(sequelize);

const Op = Sequelize.Op;
const { successCode, errorCode} = require('../config/response');

const likeRes = async (req, res) => {
    try{
        let {user_id, res_id} = req.body; 
        let isLike = req.params.like;

        var date_like = new Date().toISOString().slice(0, 19).replace('T', ' ');
        //Thêm một dòng dữ liệu vào table
        if(Number(isLike)){
            let modelLikeRes = await model.like_res.create({
                user_id,
                res_id,
                date_like
            });
            successCode(res, modelLikeRes, 'Like nhà hàng thành công');
        }else{
            let modelLikeRes = await model.like_res.destroy({
                where: {user_id: user_id, res_id: res_id}
            })
            successCode(res, modelLikeRes, 'Unlike nhà hàng thành công');
        }
    }catch(err){
        errorCode(res, err);
    }
}

const getLikeResByRestaurant = async (req, res) => {
    let res_id = req.params.id;
    
    let data = await model.like_res.findAll({
        where: {res_id}
    });

    successCode(res, data, 'Lấy danh sách like theo nhà hàng thành công');
}

const getLikeResByUser = async (req, res) => {
    let user_id = req.params.id;
    let data = await model.like_res.findAll({
        where: {user_id}
    });

    successCode(res, data, 'Lấy danh sách like theo user thành công');
}

module.exports = {
    likeRes,
    getLikeResByRestaurant,
    getLikeResByUser
}