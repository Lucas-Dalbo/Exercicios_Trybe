CREATE DATABASE IF NOT EXISTS zoo;

USE zoo;

CREATE TABLE animals (
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(30) NOT NULL,
    espécie VARCHAR(30) NOT NULL,
    sexo VARCHAR(1) NOT NULL,
    idade INT NOT NULL,
    localizacao VARCHAR(2) NOT NULL,
    data_registro DATETIME DEFAULT NOW()
) ENGINE=InnoDB;

CREATE TABLE gerentes (
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(30) NOT NULL,
    sobrenome VARCHAR(30) NOT NULL,
    data_registro DATETIME DEFAULT NOW()
) ENGINE=InnoDB;

CREATE TABLE staff (
	staff_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    sobrenome VARCHAR(30) NOT NULL,
    gerente_id INT NOT NULL,
    data_registro DATETIME DEFAULT NOW(),
    FOREIGN KEY (gerente_id) REFERENCES gerentes (gerente_id) ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE staff_animals (
	staff_id INT NOT NULL,
    animal_id INT NOT NULL,
    data_registro DATETIME DEFAULT NOW(),
    FOREIGN KEY (staff_id) REFERENCES staff (staff_id) ON UPDATE CASCADE,
    FOREIGN KEY (animal_id) REFERENCES animals (animal_id) ON UPDATE CASCADE
) ENGINE=InnoDB;