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

CREATE TABLE temporalAnalytics(
    id SERIAL PRIMARY KEY,
    wantsToPay VARCHAR(300),
    doesNotWantToPay VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, urgent) VALUES ('Tribeca bagels', 'Cocinero', '14', 'cash', 'lunes a viernes tardes hasta cerrar', 'juana marcos', '127 East 7th
New York, NY 10009', '(646) 850-5345', 'manhattan', 'false');
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, urgent) VALUES ('Bubbas Bistro', 'Cocinero con experiencia', '13', 'ambos', 'fines de semana', 'maria', '2071 Clove Rd
Staten Island, NY 10304', '(718) 524-7174', 'Staten Island', 'false');
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, urgent) VALUES ('Lobster Joint', 'Preparador', '16', 'Check', 'lunes marte y miercoles', 'nicola', '225 Liberty St
New York, NY 10281', '(212) 981-8577', 'Manhattan', 'false');
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, urgent) VALUES ('Lobster Joint', 'Mesera', '16', 'Check', 'lunes marte y miercoles', 'nicola', '225 Liberty St
New York, NY 10281', '(212) 981-8577', 'Manhattan', 'false');
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, urgent) VALUES ('Daltons Bar Grill', 'Mesera', '15', 'Cash', 'lunes, martes, miercoles sabados y domingos', 'juan', '60 E 65th St.
New York, NY 10065', '(212) 288-0033', 'Manhattan', 'false');
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, urgent) VALUES ('East village deli', 'Lavaplatos', '13', 'ambos', 'fines de semana', 'maria', '2071 Clove Rd
Staten Island, NY 10304', '(718) 524-7174', 'Staten Island', 'false');
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, urgent) VALUES ('Molo Ristorante', 'Pizzero', '16', 'Check', 'lunes marte y miercoles', 'nicola', '225 Liberty St
New York, NY 10281', '(212) 981-8577', 'Manhattan', 'true');
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, extrainfo, urgent) VALUES ('Pizeria en Mamaroneck', 'front counter', '', '', 'part time o full time hay', '', '', '', 'Otra area en NY', 'se le entrena si tiene poca experiencia, se busca gente que pueda empezar de inmediato', 'true');
