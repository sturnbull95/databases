CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  /* Describe your table here.*/
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255)
);
CREATE TABLE rooms (
  /* Describe your table here.*/
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255)
);
CREATE TABLE messages (
  /* Describe your table here.*/
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  message varchar(255),
  user_id int(11),
  FOREIGN KEY (user_id) REFERENCES users(id),
  room_id int(11),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
