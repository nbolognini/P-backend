CREATE DATABASE multiview,
USE multiview;

CREATE TABLE login(
username varchar(30) not null,
password varchar(30) not null,
primary key(username, password)
);

INSERT INTO login (username, password) VALUES
('usuario1', 'clave1'),
('usuario2', 'clave2'),
('usuario3', 'clave3'),
('usuario4', 'clave4'),
('usuario5', 'clave5');
