//TODO create requires for all the npm that I'm going to use. sequelize might not be used.

require("dotenv").config();
const inquirer = require("inquirer");
const msql = reuire("mysql2");
const sequelize = require('./db/connection');
const db = require('./db');

return inquirer.prompt([
  {
    type:
  }
])


sequelize.sync({ force: false }).then(() => app.listen(3001));