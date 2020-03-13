use passport_demo;

INSERT INTO exhibits (name, date, temperature, PH, salinity, disolvedOxygen, alkalinity, ammonia, nitrite, nitrate, iodine, calcium, createdAt, updatedAt) 
VALUES 
('CW-11', '2020-03-11 11:23:45', 76.5, 7.01, 36.5, 94, 3.5, 0, 0, 1.5, 0.06, 425, current_timestamp(),current_timestamp()),
('CW-11', '2020-03-10 11:23:45', 76.5, 7.01, 36.5, 94, 3.5, 0, 0, 1.5, 0.06, 425, current_timestamp(),current_timestamp()),
('CW-11', '2020-03-09 11:23:45', 76.5, 7.01, 36.5, 94, 3.5, 0, 0, 1.5, 0.06, 425, current_timestamp(),current_timestamp()),
('CW-12', '2020-03-11 11:23:45', 76.5, 7.01, 36.5, 94, 3.5, 0, 0, 1.5, 0.06, 425, current_timestamp(),current_timestamp()),
('SS-02', '2020-03-11 11:23:45', 76.5, 7.01, 36.5, 94, 3.5, 0, 0, 1.5, 0.06, 425, current_timestamp(),current_timestamp()),
('SS-21', '2020-03-11 11:23:45', 76.5, 7.01, 36.5, 94, 3.5, 0, 0, 1.5, 0.06, 425, current_timestamp(),current_timestamp()),
('SS-19', '2020-03-11 11:23:45', 76.5, 7.01, 36.5, 94, 3.5, 0, 0, 1.5, 0.06, 425, current_timestamp(),current_timestamp());

select * from exhibits;