CREATE DATABASE todo_list;

Create table task (
id INT auto_increment primary KEY,
task_name varchar(255) NOT NULL,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);