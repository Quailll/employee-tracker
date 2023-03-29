//TODO create requires for all the npm that I'm going to use. sequelize might not be used.

const db = require('./db/connection');
const mysql = require("mysql2");
const inquirer = require("inquirer");
require('console.table');



//TODO setup main prompts that will show up first
const question = () =>  {
 inquirer
   .prompt([
     {
       type: "list",
       name: "answer",
       message: "What is your choice?",
       choices: [
         "View All Departments",
         "View All Roles",
         "View all Employees",
         "Add Department",
         "Add Role",
         "Add Employee",
         "Update Employee Role",
         "Quit",
       ],
     },
   ])
   .then((res) => {
     switch (res.answer) {
       case "View All Departments":
         viewAllDepartments();
         break;
       case "View All Roles":
         viewAllRoles();
         break;
       case "View All Employees":
         viewAllEmployees();
         break;
       case "Add Department":
         addDepartment();
         break;
       case "Add Role":
         addRole();
         break;
       case "Add Employee":
         addEmployee();
         break;
       case "Update Employee Role":
         updateEmployeeRole();
         break;
       case "Quit":
         console.log("quit");
         break;
     }
   });
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
      if(err) {
            console.log(err)
          }
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
    if(err) {
            console.log(err)
          }
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
    type: 'list',
    name: 'manager',
    choices:['yes', 'no']
  }
])
.then(init => {
  switch(init.manager){
    case 'yes':
      db.query('INSERT INTO employee SET ?', employee, err=>{
          if(err) {
            delete employee.manager
            console.log(err)
          }
        })
        question();
        break;
    case 'no':
      inquirer.prompt([{
        type: 'input',
        name: 'manager_id',
        message: 'id of the managar for employee.'
      }]);
        db.query('INSERT INTO employee SET ?', )
          break;
        }
      })
      
      question()
    }
    
    
    const updateEmployeeRole= () => {
      inquirer.prompt
    }
    
const viewAllDepartments = () => {
  inquirer.prompt([{
    type: 'input',
     name: 'name',
     message: 'Which department would you like to look at?'
  }])
  db.query('SELECT * FROM departments', (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
      question();
    }
    })
  }
    
    const viewAllRoles= () => {
      inquirer.prompt([{
        type: 'list',
        name: 'name',
        message: 'Which role would you like to look at?'
      }])
      db.query('SELECT * FROM role', (err, role) => {
        if (err) {
          console.error(err);
          question();
        } else {
          console.table(roles);
          question();
          return roles;
        }
      })
    }
    
    const viewallemployees= () => {
      inquirer.prompt([{
        type: 'list',
        name: 'name',
        message: 'Which employee would you like to look at?'
      }])
      db.query('SELECT * FROM employee', (err, employee) => {
        (err) ? console.error(err):
        console.table(employee)
        question()
    })
    }
question();