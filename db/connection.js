//TODO create requires for sequelize

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Thyia@i89ak3895tt",
  database: "employees_tracker"
});

module.exports = connection;