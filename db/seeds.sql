-- File for pre-populating the database

INSERT INTO department (department_name) VALUES
  ('Sales'),
  ('Marketing'),
  ('Engineering');

INSERT INTO role (role_title, salary, department_id) VALUES
  ('Sales Manager', 80000.00, 1),
  ('Sales Representative', 50000.00, 1),
  ('Marketing Manager', 75000.00, 2),
  ('Software Engineer', 70000.00, 3),
  ('QA Engineer', 65000.00, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 1, null),
  ('Jane', 'Smith', 2, 1),
  ('Mike', 'Johnson', 3, null),
  ('Sarah', 'Lee', 4, 3),
  ('David', 'Brown', 5, 3);
