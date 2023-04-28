-- Suggested testing environments
-- For MS SQL:
-- https://sqliteonline.com/ with language set as MS SQL
-- For MySQL:
-- https://www.db-fiddle.com/ with MySQL version set to 8
-- For SQLite:
-- http://sqlite.online/
-- Put the following without '--' at the top to enable foreign key support in SQLite.
-- PRAGMA foreign_keys = ON;

-- Example case create statement:

CREATE TABLE colleges (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  collegeId INTEGER,
  FOREIGN KEY (collegeId) REFERENCES colleges(id)
);

CREATE TABLE rankings (
  studentId INTEGER,
  ranking INTEGER NOT NULL,
  year INTEGER NOT NULL,
  FOREIGN KEY (studentId) REFERENCES students(id)
);

INSERT INTO colleges(id, name) VALUES(1, 'Pi Institute Of Engineering');
INSERT INTO colleges(id, name) VALUES(2, 'Kappa Institute Of Technology');
INSERT INTO colleges(id, name) VALUES(3, 'Omega Science Academy');

INSERT INTO students(id, name, collegeId) VALUES(1, 'Rob', 1);
INSERT INTO students(id, name, collegeId) VALUES(2, 'Shawn', 1);
INSERT INTO students(id, name, collegeId) VALUES(3, 'Bill', 2);
INSERT INTO students(id, name, collegeId) VALUES(4, 'Steve', 2);
INSERT INTO students(id, name, collegeId) VALUES(5, 'Roger', 3);
INSERT INTO students(id, name, collegeId) VALUES(6, 'Megan', 3);

INSERT INTO rankings(studentId, ranking, year) VALUES(1, 1, 2014);
INSERT INTO rankings(studentId, ranking, year) VALUES(6, 2, 2014);
INSERT INTO rankings(studentId, ranking, year) VALUES(3, 1, 2015);
INSERT INTO rankings(studentId, ranking, year) VALUES(4, 2, 2015);
INSERT INTO rankings(studentId, ranking, year) VALUES(2, 3, 2015);
INSERT INTO rankings(studentId, ranking, year) VALUES(5, 4, 2015);
INSERT INTO rankings(studentId, ranking, year) VALUES(3, 1, 2016);
INSERT INTO rankings(studentId, ranking, year) VALUES(4, 2, 2016);


/*
-- Expected output (rows in any order):
-- Name                             TopRank     NumberOfStudents
-- ----------------------------------------------------------------
-- Kappa Institute of Technology      1               2
-- Pi Institute of Engineering        3               1
*/
