-- @author: David Thurman
-- @github: doctort57
-- @comment: Homework 14 - Eat the Burger!


DROP DATABASE IF EXISTS burgers_db;
-- Database Creation
CREATE DATABASE burgers_db;

USE burgers_db;


-- Table Creation
CREATE TABLE burgers(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(50),
devoured BOOLEAN,
date TIMESTAMP);