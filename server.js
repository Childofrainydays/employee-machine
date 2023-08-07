// required packages variables
const mysql = require('mysql2');
const inquirer = require('inquirer');
const express = require('express');
// // Thanks to Sean and Todd for this one 
// const cTable = require('console.table');

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

// addDepartment();
addRole();

// Add a department
async function addDepartment() {
  try {
    const { userDepartment } = await inquirer.prompt({
      name: "userDepartment",
      type: "input",
      message: "Enter the new department name:",
    });

    db.query(`INSERT INTO department (department_name) VALUES ('${userDepartment}')`);
    console.log(`${userDepartment} has been added to departments`);
  } catch (err) {
    console.log(err);
  }
}

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
      const { userRole } = await inquirer.prompt([
    {
        name: "firstName",
        type: "input",
        message: "Enter the employee name:",
      },
      {
        name: "lastName",
        type: "input",
        message: "Enter:",
      },
      {
        name: "role_id",
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


// async function main() {
//     const answers = await inquirer.prompt(cliQuestions);

// }

// Run function
