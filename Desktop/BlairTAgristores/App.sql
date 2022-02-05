CREATE DATABASE app;
CREATE TABLE text (autogen int(5) NOT NULL AUTO_INCREMENT, textee varchar(20), texter varchar(20), text varchar(20), PRIMARY KEY(autogen));
CREATE TABLE meet (autogen int(5), NOT NULL AUTO_INCREMENT, metee varchar(20), meeter varchar(20), meeting varchar(20), PRIMARY KEY(autogen));
CREATE TABLE call (autogen int(5) NOT NULL AUTO_INCREMENT, callee varchar(20), call varchar(20), caller varchar(20), PRIMARY KEY(autogen));
CREATE TABLE appers (autogen int(5) NOT NULL AUTO_INCREMENT, name varchar(20), PRIMARY KEY(autogen));
INSERT INTO appers (name) VALUES ('CEO'), ('CS'), ('CTO');
SELECT t.textee, t.texter, t.text, c.calee, c.caller, c.call FROM text as t LEFT JOIN calls as c ON t.textee = c.calee WHERE t.text LIKE "%" AND c.call LIKE "%" ORDER BY t.textee DESC; 
UPDATE TABLE appers SET name = "updated" WHERE autogen LIKE "%"; 

 

