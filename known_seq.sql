DROP DATABASE IF EXISTS known_seq_db;
CREATE DATABASE known_seq_db;
USE known_seq_db;

CREATE TABLE known_seq (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    info VARCHAR(150),
    seq VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO known_seq (name, info, seq)
VALUES ("Heart Disease", "Can be hereditary", "A,T,C,C,G,G,G,G,G,T,C,T,A,A,G,T,C,A,T,G,C");

INSERT INTO known_seq (name, info, seq)
VALUES ("Huntingtons Disease", "Hereditary", "C,G,A,T,A,A,A,A,A,T,C,A,G,A,C,T,G,A,C,G");

INSERT INTO known_seq (name, info, seq)
VALUES ("Hemophilia", "Hereditary", "A,T,G,T,G,T,C,C,C,C,C,T,A,G,C,G,T,A,G,C");

SELECT * FROM known_seq;