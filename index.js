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
            console.log(err)
        }
        })
        question();
        break;
    case 'no':
      inquirer.prompt([{
        type: 'input',
        name: 'manager_id',
        message: 'enter id of manager of employee.'
      }])
        .then((subordinate)=> {
        delete employee.manager
        let newEmployee = {
          ...employee,
          manager_id: subordinate.manager_id
        }
          db.query('INSERT INTO employees SET ?', newEmployee, err=> {
          if(err) {
            console.log(err)
        }
        question()
      })
      
    })
  } 
})  
};
    
    const updateEmployeeRole= () => {
      inquirer
        .prompt([
          {
            type: "input",
            name: "id",
            message: "id of employee to update?",
          },
          {
            type: "input",
            name: "first_name",
            message: "first name of employee?",
          },
          {
            type: "input",
            name: "last_name",
            message: "last name of employee?",
          },
          {
            type: "input",
            name: "role_id",
            message: "role id of employee?",
          },
          {
            type: "input",
            name: "manager_id",
            message: "manager id of employee?",
          },
        ])
        .then((updatedEmployee) => {
          db.query(
            `UPDATE employees SET ? WHERE id =${updatedEmployee.id}`,
            updatedEmployee,
            (err) => {
              console.log(err);
            }
          );
          console.log("employee updated!");
          question();
        });

    }
    
const viewAllDepartments = () => {
  
  db.query('SELECT * FROM department', (err, department) => {
    if (err) {
      console.log(err);
    } else {
      console.log(department);
      question();
    }
    })
  }
    
    const viewAllRoles= () => {
       db.query("SELECT * FROM role", (err, role) => {
         if (err) {
           console.log(err);
         } else {
           console.log(role);
           question();
         }
       });
    }
    
    const viewAllEmployees= () => {
       db.query("SELECT * FROM employee", (err, employee) => {
         if (err) {
           console.log(err);
         } else {
           console.log(employee);
           question();
         }
       });
    }

question();