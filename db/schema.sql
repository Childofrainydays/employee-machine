-- make sure there's no database with the same name
DROP DATABASE IF EXISTS employee_tracker_db;
-- create a new database
CREATE DATABASE employee_tracker_db;
-- use the new database
USE employee_tracker_db;

-- File for defining the database schema
-- Create department table
CREATE TABLE department (
    -- primary key defines the unique id for each department
    -- INT means that the id is an integer
    -- Resource: https://www.w3schools.com/sql/sql_primarykey.asp
    id INT AUTO_INCREMENT PRIMARY KEY ,
    -- name is the name of the department
    -- VARCHAR(30) means that the name cannot be more than 30 characters
    department_name VARCHAR(30)
);

-- Create role table
CREATE TABLE role (
    -- primary key defines the unique id for each role
    id INT AUTO_INCREMENT PRIMARY KEY,
    -- title is the name of the role
    role_title VARCHAR(30),
    -- salary is the amount of money the role makes
    -- DECIMAL(10,2) means that the salary can have up to 10 digits, with 2 of them being after the decimal point
    -- Resource: https://www.w3schools.com/sql/sql_datatypes.asp
    salary INT NOT NULL,
    -- department_id is the id of the department that the role belongs to
    department_id INT,
    -- FOREIGN KEY (department_id) REFERENCES department(id) means that the department_id must match an id in the department table
    -- Resource: https://www.w3schools.com/sql/sql_foreignkey.asp
    FOREIGN KEY (department_id) REFERENCES department(id)
    ON DELETE SET NULL
);

-- Create employee table
CREATE TABLE employee (
    -- primary key defines the unique id for each employee
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    -- role_id is the id of the role that the employee has
    role_id INT,
    -- manager_id is the id of the employee's manager
    manager_id INT,
    -- FOREIGN KEY (role_id) REFERENCES role(id) means that the role_id must match an id in the role table
    FOREIGN KEY (role_id) REFERENCES role(id),
    -- FOREIGN KEY (manager_id) REFERENCES employee(id) means that the manager_id must match an id in the employee table
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);