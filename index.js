//TODO create requires for all the npm that I'm going to use. sequelize might not be used.

require("dotenv").config();
const inquirer = require("inquirer");
const mysql = reuire("mysql2");
const connection = require('connection');
const db = require('./db');

//TODO setup main prompts that will show up first
const question = () =>  {
 inquirer.prompt([
  {
    type:'list',
    name: 'choice',
    message: 'What is your choice?',
    choices: ['View All Departments', 'View All roles', 'View all employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role', 'Done' ]
  }
])
  .then(init => {
    switch(init.choice) {
      case 'View All Departments':
        viewAllDepartments();
      break;
      case 'View All roles':
        viewAllRoles();
      break;
      case 'View All employees':
        viewAllEmployees();
      break;
      case 'Add Department':
        addDepartment();
      break;
      case 'Add Role':
        addRole();
      break;
      case 'Add Employee':
        addEmployee();
      break;
      case 'Update Employee Role':
        updateEmployeeRole();
      break;
      case 'quit':
        console.log('quit')
      break;
    }
  })
}

const viewAllDepartments = () => {
  inquirer.prompt([{
    type: 'list',
    name: 'name',
    message: 'Which department would you like to look at?'
  }])
  db.query('SELECT * FROM departments', (err, departments) => {
    (err) ? console.error(err)
    console.table(department)
    question()
  })
}

const viewAllroles= () => {
  inquirer.prompt([{
    type: 'list',
    name: 'name',
    message: 'Which role would you like to look at?'
  }])
  db.query('SELECT * FROM role', (err, role) => {
    (err) ? console.error(err)
    console.table(role)
    question()
  })
}

const viewallemployees= () => {
  inquirer.prompt([{
    type: 'list',
    name: 'name',
    message: 'Which employee would you like to look at?'
  }])
  db.query('SELECT * FROM employee', (err, employee) => {
    (err) ? console.error(err)
    console.table(employee)
    question()
})
}

const addDepartment = () => {
  inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'What department would you like to add?'
  }])
  .then(departmentName =>{
    console.log(departmentName)
    
    db.query('INSERT INTO department SET ?', departmentName, err => {
      (err) ? console.error(err)
  })
    
    question()
})
}

const addRole = () => {
  inquirer.prompt([{
    type: 'input',
    name: 'title',
    message: 'What role would you like to add?'
  },
  {
    type: 'input',
    name: 'salary',
    message: 'How much does the role make?'
  },
  {
    type: 'input',
    name: 'department_id',
    message: 'what is the id of the role in the department?'
  }
  ])
  .then(role =>{
    console.log(role)
    
    db.query('INSERT INTO role SET ?', role, err => {
      (err) ? console.error(err)
  })
    
    question()
})
}

const addEmployee= () => {
  inquirer.prompt([{
    type: 'input',
    name: 'first_name',
    message: 'First name?'
  },
  {
    type: 'input',
    name: 'last_name',
    message: 'Last Name?'
  },
  {
    type: 'input',
    name: 'role_id',
    message: "role's id?"
  },
  {
    type: '',
    name: '',
    message: ''
  }
  ])
  .then(roleName =>{
    console.log(roleName)
    
    db.query('INSERT INTO department SET ?', roleName, err => {
      (err) ? console.error(err)
  })
    
    question()
})
}

const updateEmployeeRole= () => {
  inquirer.prompt
}

