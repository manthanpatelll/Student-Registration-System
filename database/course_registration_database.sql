INSERT INTO student(first_name, last_name, student_email, student_password)
VALUES 
	("Oluwajolasun", "Jaiyesimi", "jolasun@email.com","password"),
    ("Nicole", "Noble", "nicole@email.com", "password"),
	("Test", "User", "test@email.com", "test");

INSERT INTO course(course_name, course_capacity, course_start_date, course_end_date, has_prerequisites)
VALUES
	("ENSF592", 20, "2022-05-03", "2022-06-28", 0),
	("ENSF593", 12, "2022-05-03", "2022-06-28", 0),
	("ENSF594", 11, "2022-07-11", "2022-08-28", 0),
	("ENSF607", 23, "2022-09-08", "2022-12-05", 1),
	("ENSF608", 15, "2022-09-08", "2022-12-05", 1),
	("ENSF611", 17, "2022-09-08", "2022-12-05", 1),
	("ENSF612", 21, "2022-09-08", "2022-12-05", 1),
	("ENSF614", 22, "2022-09-08", "2022-12-05", 1);

-- DROP DATABASE IF EXISTS courseregistrtation;
-- CREATE DATABASE courseregistrtation;
-- USE courseregistrtation;

-- DROP TABLE IF EXISTS student;
-- CREATE TABLE student(
-- 	student_id INT AUTO_INCREMENT NOT NULL,
-- 	first_name VARCHAR (20) NOT NULL,
--     last_name VARCHAR (20) NOT NULL,
--     student_email VARCHAR (50) NOT NULL,
--     student_password VARCHAR (20) NOT NULL,
--     PRIMARY KEY (student_id)
-- );



-- DROP TABLE IF EXISTS course;
-- CREATE TABLE course(
-- 	course_name VARCHAR (4) NOT NULL,
--     course_number VARCHAR (3) NOT NULL
-- );


