INSERT INTO intercel_db.categories 
VALUES 
(1, 'admin'),
(2, 'user');

INSERT INTO intercel_db.users VALUES (1, 'Justina', 'Iturraspe', '+5493434195970', 'justi@admin.com', '$2a$10$Dq3buOMWrxfO5qLQe4Cq2OoLvmESr/czN2BS2grPyLaJlXYowRfYi', '/images/pp/justi.png', 1, DEFAULT, DEFAULT);
INSERT INTO intercel_db.users VALUES (2, 'Ruben', 'Jaime', '+573006114684', 'ruben@admin.com', '$2a$10$Dq3buOMWrxfO5qLQe4Cq2OoLvmESr/czN2BS2grPyLaJlXYowRfYi', '/images/pp/ruben.png', 1, DEFAULT, DEFAULT);
INSERT INTO intercel_db.users VALUES (3, 'Ale', 'Bullorini', '+5491155661334', 'ale@admin.com', '$2a$10$Dq3buOMWrxfO5qLQe4Cq2OoLvmESr/czN2BS2grPyLaJlXYowRfYi', '/images/pp/ale.png', 1, DEFAULT, DEFAULT);
INSERT INTO intercel_db.users VALUES (4, 'Juan', 'Perez', '44331265', 'JPerez@gmail.com', '$2a$10$sHACn9dssHkJM8fKTD3T2uolxpjzvFG3e7eKKZeBX9pfOPXBmH1yS', DEFAULT, 2, DEFAULT, DEFAULT);
INSERT INTO intercel_db.users VALUES (5, 'Maria', 'Hernandez', '54110303456', 'hernandez-77@gmail.com', '$2a$10$DcJMGj1G2Jq70rQn.qDmMuc5gifLF8UKu29WFo4BREhittZgwEAai', DEFAULT, 2, DEFAULT, DEFAULT);

INSERT INTO intercel_db.ram (storage)
VALUES
('4GB'),
('8GB'),
('12GB'),
('16GB'),
('18GB'),
('24GB'),
('32GB'),
('36GB'),
('124GB');

INSERT INTO intercel_db.colors (name)
VALUES
('negro'),
('blanco'),
('gris metálico'),
('plateado'),
('dorado'),
('jade'),
('rosa pastel'),
('azul'),
('azul francia'),
('gris plomo'),
('verde agua'),
('celeste'),
('lavanda'),
('amarillo pastel'),
('rojo pastel'); 

INSERT INTO intercel_db.brands (name, logo)
VALUES
('apple', 'apple.svg'),
('lg', 'lg.svg'),
('motorola', 'motorola.svg'),
('pixel', 'Google-Pixel.svg'),
('samsung', 'samsung.svg'); 

INSERT INTO intercel_db.models (id_brand, model, main_image)
VALUES
(1, 'Iphone XS', 'XS.png'),
(3, 'E7', 'E7.png'),
(1, 'Iphone 11', 'Iphone 11.png'),
(1, 'Iphone 12', 'Iphone 12.png'),
(1, 'Iphone SE', 'Iphone SE.png'),
(1, 'Iphone 12 Mini', 'Iphone 12 Mini.png'),
(5, 'A71', 'A71.png'),
(5, 'Note 20', 'Note 20.png'),
(5, 'Z Fold', 'ZFold.png'),
(3, 'Edge S', 'Edge S.png'),
(3, 'G60', 'G60.png'),
(3, 'G100', 'G100.png'),
(4, '4', '4.png'),
(4, '5', '5.png'),
(2, 'K31', 'K31.png'),
(2, 'K52', 'K52.png'),
(2, 'K61', 'K61.png'),
(2, 'W41', 'W41.png');

INSERT INTO intercel_db.cellphones (id_model, id_color, id_ram, price, offer, image_one, image_two, image_three)
VALUES
(1, 2, 3, 500, 0, 'XS 1.png','XS 2.png','XS 3.png'),
(1, 3, 6, 700, 0, 'XS 1.png','XS 2.png','XS 3.png'),
(2, 3, 4, 600, 0, 'E7 1.png','E7 2.png','E7 3.png'),
(2, 1, 7, 800, 0, 'E7 1.png','E7 2.png','E7 3.png'),
(3, 5, 1, 300, 1, '11 1.png','11 2.png','11 3.png'),
(3, 7, 3, 400, 0, '11 1.png','11 2.png','11 3.png'),
(4, 1, 2, 400, 0, '12 1.png','12 2.png','12 3.png'),
(4, 5, 6, 650, 0, '12 1.png','12 2.png','12 3.png'),
(5, 7, 5, 800, 0, 'SE 1.png','SE 2.png','SE 3.png'),
(5, 3, 7, 999, 0, 'SE 1.png','SE 2.png','SE 3.png'), 
(6, 4, 2, 400, 1, '12 mini 1.png','12 mini 2.png','12 mini 3.png'),
(7, 2, 3, 600, 0, 'A71 1.png','A71 2.png','A71 3.png'),
(7, 1, 5, 700, 1, 'A71 1.png','A71 2.png','A71 3.png'),
(8, 3, 2, 500, 1, 'Note 20 1.png','Noe 20 2.png','Note 20 3.png'),
(8, 1, 2, 500, 1, 'Note 20 1.png','Note 20 2.png','Note 20 3.png'),
(9, 5, 4, 800, 0, 'ZFold 1.png','ZFold 2.png','ZFold 3.png'),
(10, 1, 2, 500, 1, 'Edge S 1.png','Edge S 2.png','Edge S 3.png'),
(11, 9, 3, 400, 0, 'G60 1.png','G60 2.png','G60 3.png'),
(12, 4, 5, 700, 0, 'G100 1.png','G100 2.png','G100 3.png'),
(13, 7, 6, 500, 1, '4 1.png','4 2.png','4 3.png'),
(13, 2, 6, 500, 1, '4 1.png','4 2.png','4 3.png'),
(14, 3, 6, 700, 0, '5 1.png','5 2.png','5 3.png'),
(15, 9, 1, 300, 1, 'K31 1.png','K31 2.png','K31 3.png'),
(15, 2, 1, 300, 1, 'K31 1.png','K31 2.png','K31 3.png'),
(16, 4, 6, 600, 0, 'K52 1.png','K52 2.png','K52 3.png'),
(16, 4, 5, 500, 0, 'K52 1.png','K52 2.png','K52 3.png'),
(17, 1, 3, 650, 0, 'K61 1.png','K61 2.png','K61 3.png');





