// required packages variables
const mysql = require('mysql2');
const inquirer = require('inquirer');
const express = require('express');
// // Thanks to Sean and Todd for this one 
const cTable = require('console.table');
const e = require('express');

// port and app variables
const PORT = process.env.PORT || 3001;
const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: '16bitComputer!',
        database: 'employee_tracker_db'
    },
    console.log(`Connected to the employee_db database.`)
);

// addRole();
// addEmployee(); 

// Add a department
async function addDepartment() {
    const { userDepartment } = await inquirer.prompt({
      name: "userDepartment",
      type: "input",
      message: "Enter the new department name:",
    });

    db.query(`INSERT INTO department (department_name) VALUES ('${userDepartment}')`, (err, result) => { 
    console.log(`${userDepartment} has been added to departments`);
   if (err) {
    console.log(err);
  } else {
    const table = cTable.getTable(result);
    console.log('\n' + table);
    mainMenu(); // Ask again
  }  
 });
}

// Function to display the main menu and process user selection
async function mainMenu() {
    const userOptions = [
      {
        name: 'menu',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Exit',
        ],
      },
    ];
  
    try {
      const { menu } = await inquirer.prompt(userOptions);
  
      switch (menu) {
        case 'View all departments':
            db.query(`SELECT * FROM department`, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    const table = cTable.getTable(result);
                    console.log('\n' + table);
                    mainMenu(); // Ask again
                }
            });
          break;

        case 'View all roles':
            db.query(`SELECT * FROM role`, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    const table = cTable.getTable(result);
                    console.log('\n' + table);
                    mainMenu(); // Ask again
                }
            });
          break;

        case 'View all employees':
          db.query(`SELECT * FROM employee`, (err, result) => {
            if (err) {
              console.log(err);
            } else {
              const table = cTable.getTable(result);
              console.log('\n' + table);
              mainMenu(); // Ask again
            }
          });
          break;

        case 'Add a department':
            addDepartment();
            break;

        case 'Add a role':
            db.query(`INSERT INTO role (role_title, salary, department_id) VALUES ('${userRole}', ${salary}, ${department_id})`, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    const table = cTable.getTable(result);
                    console.log('\n' + table);
                    mainMenu(); // Ask again
                }
            });
          break;

        case 'Add an employee':
            db.query(`SELECT * FROM employee`, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    const table = cTable.getTable(result);
                    console.log('\n' + table);
                    mainMenu(); // Ask again
                }
            });
          break;

        case 'Update an employee role':
            db.query(`SELECT * FROM employee`, (err, result) => {
                if (err) {
                    console.log(err);
                } else {    
                    const table = cTable.getTable(result);
                    console.log('\n' + table);
                    mainMenu(); // Ask again
                }
            });
          break;

        case 'Exit':
          db.end(function (err) {
            if (err) {
              console.log(err);
            } else {
              console.log('Goodbye');
            }
          });
          break;
        default:
          console.log(`Invalid action: ${menu}`);
          mainMenu(); // Ask again
          break;
      }
    } catch (err) {
      console.log(err);
    }
  }
  
  // Call the mainMenu function to start the CLI
  mainMenu();


// Add a role
async function addRole() {
    try {
      const { userRole, salary, department_id } = await inquirer.prompt([
    {
        name: "userRole",
        type: "input",
        message: "Enter the new role name:",
      },
      {
        name: "salary",
        type: "input",
        message: "Enter the salary for this role:",
      },
      {
        name: "department_id",
        type: "input",
      },
    ] 
    );
  
      db.query(`INSERT INTO role (role_title, salary, department_id) VALUES ('${userRole}', ${salary}, ${department_id})`);
      console.log(`${userRole} has been added to departments`);
    } catch (err) {
      console.log(err);
    }
}

// // Add an employee
async function addEmployee() {
    try {
      const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
    {
        name: "first_name",
        type: "input",
        message: "Enter the employee's first name:",
      },
      {
        name: "last_name",
        type: "input",
        message: "Enter the employee's last name:",
      },
      {
        name: "role_id",
        type: "input",
      },
      {
        name: "manager_id",
        type: "input",
      },
    ] 
    );
  
      db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${first_name}', '${last_name}', ${role_id}, ${manager_id})`);
      console.log(`${last_name} has been added to departments`);
    } catch (err) {
      console.log(err);
    }
}



// async function main() {
//     const answers = await inquirer.prompt(cliQuestions);

// }

// Run function
