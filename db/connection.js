//TODO create requires for sequelize

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.CONNECTION);

module.exports = sequelize;