DROP TABLE IF EXISTS jobs;

CREATE TABLE jobs(
    id SERIAL PRIMARY KEY,
    restName VARCHAR(300),
    jobType VARCHAR(255),
    hourPay VARCHAR(255),
    typePay VARCHAR(255) ,
    schedule VARCHAR(255),
    contact VARCHAR(255) ,
    address VARCHAR(255),
    phone VARCHAR(255),
    area VARCHAR(255),
    extrainfo VARCHAR(255),
    urgent VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, urgent) VALUES ('Souths Bar & Restaurant', 'Cocinero', '14', 'cash', 'lunes a viernes tardes hasta cerrar', 'juana marcos', '127 East 7th
New York, NY 10009', '(646) 850-5345', 'manhattan', 'false');
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, urgent) VALUES ('Ambrosio Italian Restaurant & Banquet Hall', 'Cocinero', '13', 'ambos', 'fines de semana', 'maria', '2071 Clove Rd
Staten Island, NY 10304', '(718) 524-7174', 'Staten Island', 'false');
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, urgent) VALUES ('L’Appart', 'Preparador', '16', 'Check', 'lunes marte y miercoles', 'nicola', '225 Liberty St
New York, NY 10281', '(212) 981-8577', 'Manhattan', 'false');
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, urgent) VALUES ('Daniel', 'Lavaplatos', '15', 'Cash', 'lunes, martes, miercoles sabados y domingos', 'juan', '60 E 65th St.
New York, NY 10065', '(212) 288-0033', 'Manhattan', 'false');
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, urgent) VALUES ('Ambrosio Italian Restaurant & Banquet Hall', 'Lavaplatos', '13', 'ambos', 'fines de semana', 'maria', '2071 Clove Rd
Staten Island, NY 10304', '(718) 524-7174', 'Staten Island', 'false');

INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, urgent) VALUES ('superRestaurant', 'urgent dishwasher', '16', 'Check', 'lunes marte y miercoles', 'nicola', '225 Liberty St
New York, NY 10281', '(212) 981-8577', 'Manhattan', 'true');
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, urgent) VALUES ('superRestaurant', 'urgent dishwasher', '16', 'Check', 'lunes marte y miercoles', 'nicola', '225 Liberty St
New York, NY 10281', '(212) 981-8577', 'Manhattan', 'true');
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, urgent) VALUES ('superRestaurant', 'urgent dishwasher', '16', 'Check', 'lunes marte y miercoles', 'nicola', '225 Liberty St
New York, NY 10281', '(212) 981-8577', 'Manhattan', 'true');
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, urgent) VALUES ('superRestaurant', 'urgent dishwasher', '16', 'Check', 'lunes marte y miercoles', 'nicola', '225 Liberty St
New York, NY 10281', '(212) 981-8577', 'Manhattan', 'true');




CREATE TABLE ValidityTest (
   col1 varchar(100),
   Created datetime DEFAULT GETDATE()
);

INSERT INTO ValidityTest (col1) VALUES ('Some row');

SELECT *
FROM ValidityTest
WHERE Created >= DATEADD(minute, -10, GETDATE())
