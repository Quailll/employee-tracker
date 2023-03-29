USE employees_tracker;

INSERT INTO departments
  (name)
VALUES
  ('Administration'),
  ('Accounting'),
  ('Human Resources'),
  ('Customer Service');

INSERT INTO role
  (title, salary, department_id)
VALUES
  ('Receptionists', 36000, 1),
  ('Administrator' 60000, 1),
  ('Certified Public Accountant', 80000, 2),
  ('Forensic accountant', 72000, 2),
  ('Employment specialist', 40000, 3),
  ('Human resources manager', 70000, 3),
  ('Customer service representative', 37000, 4),
  ('Customer service manager', 96000, 4);

INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Fred', 'Flintstone', 1, NULL),
  ('John', 'Smith', 2, NULL),
  ('Susan', 'Elsher', 3, NULL),
  ('Jacob', 'Fitz', 4, NULL),
  ('Nell', 'Winton', 5, NULL),
  ('Kaye', 'Ross', 6, 1),
  ('Phillis', 'Randal', 7, NULL),
  ('Paulie', 'Emmitt', 8, 3);
