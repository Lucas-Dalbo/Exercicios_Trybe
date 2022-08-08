CREATE SCHEMA IF NOT EXISTS exercicio_23_1;

USE exercicio_23_1;

CREATE TABLE users (
	user_id INT AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    user_email VARCHAR(50) NOT NULL,
    user_password VARCHAR(30) NOT NULL
);
