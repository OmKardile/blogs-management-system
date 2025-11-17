DROP DATABASE IF EXIST blogmanagement_db;
CREATE DATABASE blogmanagement_db;
USE blogmanagement_db;


CREATE TABLE users(

    uid INT PRIMARY KEY AUTO_INCREMENT,
    fullname VARCHAR(30),
    email VARCHAR(30),
    password VARCHAR(100),
    mobile CHAR(10),
    utime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE blogs (
    bid INT PRIMARY KEY AUTO_INCREMENT,
    uid INT NOT NULL,  
    cid INT NOT NULL,  
    title VARCHAR(50),
    content VARCHAR(200),
    btime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (uid) REFERENCES users(uid),
    FOREIGN KEY (cid) REFERENCES category(cid)
);

CREATE TABLE category(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(300),
  description VARCHAR (300)
);