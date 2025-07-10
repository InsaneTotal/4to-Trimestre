CREATE DATABASE Prueba01;

USE Prueba01;

CREATE TABLE personas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age INT NOT NULL
);

CREATE TABLE admin_personal (
    dni INT PRIMARY KEY,
    names VARCHAR(100) NOT NULL,
    last_name_1 VARCHAR(50) NOT NULL,
    last_name_2 VARCHAR(50) ,
    email VARCHAR(50),
    password VARCHAR()

)

SELECT * FROM personas;