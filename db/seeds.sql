-- File for pre-populating the database

INSERT INTO department (id, department_name) VALUES
  (1, 'Sales'),
  (2, 'Marketing'),
  (3, 'Engineering');

INSERT INTO role (id, role_title, salary, department_id) VALUES
  (1, 'Sales Manager', 80000.00, 1),
  (2, 'Sales Representative', 50000.00, 1),
  (3, 'Marketing Manager', 75000.00, 2),
  (4, 'Software Engineer', 70000.00, 3),
  (5, 'QA Engineer', 65000.00, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
  (1, 'John', 'Doe', 1, null),
  (2, 'Jane', 'Smith', 2, 1),
  (3, 'Mike', 'Johnson', 3, null),
  (4, 'Sarah', 'Lee', 4, 3),
  (5, 'David', 'Brown', 5, 3);
