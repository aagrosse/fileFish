use passport_demo;

INSERT INTO exhibits (temperature, PH, salinity, disolvedOxygen, alkalinity, ammonia, nitrite, nitrate, iodine, calcium, createdAt, updatedAt, NameId) 
VALUES 
(56.3, 8.28, 34.88, 94, 202.9, 0, 0, 1.3, 0.06, 425, current_timestamp(),current_timestamp(), 1),
(56.4, 8.24, 34.72, 94, 205.6, 0, 0, 1.3, 0.06, 425, current_timestamp(),current_timestamp(), 1),

(52, 8.07, 31.8, 92, 154.1, 0, 0, 10.2, 0.06, 425, current_timestamp(),current_timestamp(), 2),
(51.8, 8.13, 32.28, 93, 152.4, 0, 0, 10.15, 0.06, 425, current_timestamp(),current_timestamp(), 2),

(76.5, 8.16, 32.45, 109, 178.4, 0, 0, 64.5, 0.06, 425, current_timestamp(),current_timestamp(), 3),
(76.5, 8.15, 32.47, 109, 176, 0, 0, 66.6, 0.06, 425, current_timestamp(),current_timestamp(), 3),
(76.5, 8.17, 32.52, 109, 177, 0, 0, 67, 0.06, 425, current_timestamp(),current_timestamp(), 3),

(59, 7.75, 30.94, 94, 3.5, 0, 0, 256, 0, 425, current_timestamp(),current_timestamp(), 4),

(77.9, 8.25, 33.43, 94, 169.3, 0, 9.9, 1.5, 0.06, 361, current_timestamp(),current_timestamp(), 5),

(65.0, 7.99, 31.6, 94, 175.9, 0, 0, 842, 0.06, 425, current_timestamp(),current_timestamp(), 6);

(76.7, 8.29, 35.07, 94, 185, 0, 0, 2.4, 0.06, 533, current_timestamp(),current_timestamp(), 8),
(76.5, 8.24, 35.02, 94, 156.6, 0, 0, 2.3, 0.06, 494, current_timestamp(),current_timestamp(), 8),
(76.8, 8.16, 35.75, 94, 120.5, 0, 0, 2.0, 0.06, 437, current_timestamp(),current_timestamp(), 8),
(76.2, 8.18, 35.93, 94, 140.1, 0, 0, 1.9, 0.06, 437, current_timestamp(),current_timestamp(), 8),
(76.1, 8.24, 35.57, 94, 177.1, 0, 0, 1.8, 0.06, 468, current_timestamp(),current_timestamp(), 8);

select * from exhibits;


INSERT INTO names (name, createdAt, updatedAt)
VALUES
('CW-11 Sea Dragon', current_timestamp(),current_timestamp()),
('CW-12 Rocky Coast', current_timestamp(),current_timestamp()),
('Ocean Voyager', current_timestamp(),current_timestamp()),
('Seamount', current_timestamp(),current_timestamp()),
('SS-2 Pacific Reef', current_timestamp(),current_timestamp()),
('Sea Lion', current_timestamp(),current_timestamp()),
('NH-3 Holding', current_timestamp(),current_timestamp()),
('Johns Reef', current_timestamp(),current_timestamp()),
('Shark Holding', current_timestamp(),current_timestamp());

select * from names;