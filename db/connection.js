//TODO create requires for sequelize

const mysql = require('mysql2');

const connection = mysql.createConnection(process.env.CONNECTION);

module.exports = connection;