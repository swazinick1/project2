DROP DATABASE IF EXISTS patient_db;
CREATE DATABASE patient_db;
USE patient_db;

CREATE TABLE patients (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    birthdate VARCHAR(30) NOT NULL,
    info VARCHAR(200),
    seq VARCHAR(150) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO patients (name, birthdate, info, seq)
VALUES ("Eric Taz", 12/03/1988, "Vitamin deficient", "A,G,C,T,T,G,C,T,A,G,T,A,G,C,T,C,G,T,C,G,A,T,G,C,T,A,G,G,G,A,T,C,G,G,T,G,A,C,A,G,T,T,A,C,G,C,C,A,G,T,C");

INSERT INTO patients (name, birthdate, info, seq)
VALUES ("Jasmine Lee", 08/21/1977, "Over all healthy, Broke left arm, removed spleen 2008", "T,A,G,G,C,T,G,A,C,A,A,G,A,C,T,A,T,A,G,G,C,A,T,G,G,A,C,C,A,A,T,C,A,G,G,G,C,T,A,G,A,A,C,T,G,T,T,A,G,C");

INSERT INTO patients (name, birthdate, info, seq)
VALUES ("Marcus Barber", 07/07/1968, "Cancer Survivor", "G,C,G,C,T,A,G,T,A,G,C,T,G,A,A,T,C,G,A,T,C,G,G,A,T,G,C,T,A,A,T,C,C,G,T,A,A,T,T,A,G,C,C,T,G,G,A,T,C,G");

INSERT INTO patients ( name, birthdate, info, seq)
VALUES ("Issac Lee", 03/05/1965, "Stage II COPD", "A,T,G,T,G,G,C,T,C,C,C,G,A,A,T,G,C,T,A,A,G,T,C,G,A,T,G,C,C,T,A,A,T,G,T,T,T,C,A,G,C,G,T,A,G,C,T,A,G,G");

INSERT INTO patients (name, birthdate, info, seq)
VALUES ("Kelly Stark", 05/05/1986, "Healthy mother of two", "T,T,A,G,C,G,C,C,C,T,A,G,T,T,A,G,C,T,A,G,C,G,T,C,A,G,T,G,A,A,T,C,A,G,C,C,A,A,T,G,T,A,G,C,T,T,A,G,C,T");


CREATE TABLE known_seq (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    info VARCHAR(150),
    seq VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO known_seq (name, info, seq)
VALUES ("Heart Disease", "Can be hereditary", "C,C,G,G,G,G,G,T");

INSERT INTO known_seq (name, info, seq)
VALUES ("Huntingtons Disease", "Hereditary", "A,T,A,A,A,A,A,T");

INSERT INTO known_seq (name, info, seq)
VALUES ("Hemophilia", "Hereditary", "G,T,C,C,C,C,C,T");

SELECT * FROM known_seq;