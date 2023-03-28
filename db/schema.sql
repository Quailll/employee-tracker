DROP DATABASE IF EXISTS employees_tracker;
CREATE DATABASE employees_tracker;

USE employees_tracker;

CREATE TABLE department (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL, 
  salary DECIMAL UNSIGNED NOT NULL,
  department_id INT UNSIGNED NOT NULL, 
  INDEX department_ind (department_id),
  FOREIGN KEY(dpartment_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) UNIQUE NOT NULL, 
  last_name DECIMAL UNSIGNED NOT NULL,
  role_id INT UNSIGNED NOT NULL, 
  INDEX role_ind (role_id),
  FOREIGN KEY(dpartment_id) REFERENCES department(id) ON DELETE CASCADE,
  manager_id INT UNSIGNED,
  INDEX manager_ind (manager_id),
  FOREIGN KEY(manager_id) REFERENCES employee(id) ON DELETE SET NULL
);