//kết nối csdl
// host , database, user, password, port

const { Sequelize } = require('sequelize');
const config = require('../config/index');

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: config.dialect
});

module.exports = sequelize;