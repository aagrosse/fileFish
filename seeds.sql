use passport_demo;

INSERT INTO exhibits (temperature, PH, salinity, disolvedOxygen, alkalinity, ammonia, nitrite, nitrate, iodine, calcium, createdAt, updatedAt, NameId) 
VALUES 
(76.5, 7.01, 36.5, 94, 3.5, 0, 0, 1.5, 0.06, 425, current_timestamp(),current_timestamp(), 1),
(76.5, 7.01, 36.5, 94, 3.5, 0, 0, 1.5, 0.06, 425, current_timestamp(),current_timestamp(), 1),
(76.5, 7.01, 36.5, 94, 3.5, 0, 0, 1.5, 0.06, 425, current_timestamp(),current_timestamp(), 2),
(76.5, 7.01, 36.5, 94, 3.5, 0, 0, 1.5, 0.06, 425, current_timestamp(),current_timestamp(), 2),
(76.5, 7.01, 36.5, 94, 3.5, 0, 0, 1.5, 0.06, 425, current_timestamp(),current_timestamp(), 3),
(76.5, 7.01, 36.5, 94, 3.5, 0, 0, 1.5, 0.06, 425, current_timestamp(),current_timestamp(), 4),
(76.5, 7.01, 36.5, 94, 3.5, 0, 0, 1.5, 0.06, 425, current_timestamp(),current_timestamp(), 5);

select * from exhibits;



INSERT INTO names (name, createdAt, updatedAt)
VALUES
('CW-11', current_timestamp(),current_timestamp()),
('CW-12', current_timestamp(),current_timestamp()),
('Ocean Voyager', current_timestamp(),current_timestamp()),
('Seamount', current_timestamp(),current_timestamp()),
('SS-2', current_timestamp(),current_timestamp()),
('Sea Lion', current_timestamp(),current_timestamp()),
('NH-3 Holding', current_timestamp(),current_timestamp()),
('Shark Holding', current_timestamp(),current_timestamp());

select * from names;