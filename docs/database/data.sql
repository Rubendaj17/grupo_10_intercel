INSERT INTO intercel_db.categories 
VALUES 
(1, 'admin'),
(2, 'user');

INSERT INTO intercel_db.users VALUES (1, 'Justina', 'Iturraspe', '+5493434195970', 'justi@admin.com', '$2a$10$kH4orr.jEUvIRHAuaz5yguuxFE3s0xJWk6fy6y9XMo8djj7.VbQYu', '/images/pp/justi.png', 1, DEFAULT, DEFAULT);
INSERT INTO intercel_db.users VALUES (2, 'Ruben', 'Jaime', '+573006114684', 'ruben@admin.com', '$2a$10$kH4orr.jEUvIRHAuaz5yguuxFE3s0xJWk6fy6y9XMo8djj7.VbQYu', '/images/pp/ruben.png', 1, DEFAULT, DEFAULT);
INSERT INTO intercel_db.users VALUES (3, 'Ale', 'Bullorini', '+5491155661334', 'ale@admin.com', '$2a$10$kH4orr.jEUvIRHAuaz5yguuxFE3s0xJWk6fy6y9XMo8djj7.VbQYu', '/images/pp/ale.png', 1, DEFAULT, DEFAULT);
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

INSERT INTO intercel_db.models (id_brand, model, main_image, description)
VALUES
(1, 'Iphone XS', 'XS.png', 'Teléfono inteligente de gama alta, diseñado y desarrollado por Apple, anunciado el 12 de septiembre de 2018. Tiene entre sus principales características ​una pantalla de 5.8 pulgadas (147,3mm); dimensiones de 143,6mm de alto, 70,9mm de ancho, 7,7mm de grosor y un peso de 177g; procesador A12 Bionic; cámara dual de 12 y otra de zoom x2 de 12 megapixeles.​'),
(3, 'E7', 'E7.png', 'Teléfono inteligente de gama baja, desarrollado y fabricado por Motorola, presentado en mayo de 2014. Es parte de la familia Moto. Cuenta con Android como la mayoría de los smartphone actuales, además de un rápido ciclo de actualizaciones. En marzo del 2015 fue presentada la Segunda Generación del Moto E, con 4G LTE y un procesador más rápido igual que el Moto G Tercera Generación con procesador Quad-Core a 64 bits'),
(1, 'Iphone 11', 'Iphone 11.png','Teléfono inteligente de gama alta con pantalla táctil producido por Apple, presentado el 10 de septiembre de 2019. El modelo cuenta con el nuevo chip Apple A13 Bionic y un nuevo sistema de cámara dual ultra ancho.'),
(1, 'Iphone 12', 'Iphone 12.png','Teléfono inteligente de gama alta producido por Apple, presentado el 13 de octubre de 2020. Apple lanzó este teléfono inteligente bajo el lema "Más allá de la velocidad", ya que era el primer modelo de iPhone compatible con la red 5G. El modelo cuenta con el chip A14 Bionic, y un sistema dual de cámaras. El móvil consta también de una pantalla OLED de 6.1'),
(1, 'Iphone SE', 'Iphone SE.png','Teléfono inteligente de gama alta producido por Apple, anunciado el 15 de abril de 2020. Es parte de la decimotercera generación del iPhone. Sucesor tanto del iPhone SE de primera generación como del iPhone 8. El diseño cuenta con un botón físico, marcos arriba y abajo con el Touch ID de la pantalla. Utiliza el mismo sistema en chip A13 Bionic que la línea del iPhone 11'),
(1, 'Iphone 12 Mini', 'Iphone 12 Mini.png', 'Teléfono inteligente de gama alta producido por Apple, presentado el 13 de octubre de 2020. Apple lanzó este teléfono inteligente bajo el lema "Más allá de la velocidad", ya que era el primer modelo de iPhone compatible con la red 5G. El modelo cuenta con el chip A14 Bionic, y un sistema dual de cámaras.'),
(5, 'A71', 'A71.png', 'Samsung Galaxy A71 es un teléfono inteligente Android diseñado, desarrollado, comercializado y fabricado por Samsung Electronics como parte de su serie Galaxy A.
. Las actualizaciones clave sobre el modelo anterior, el Samsung Galaxy A70, incluyen el sistema operativo Android 10, el chipset Qualcomm Snapdragon 730 y el sistema de cámara. Se anunció en diciembre de 2019 y se lanzó en enero de 2020.
El teléfono tiene una pantalla Super AMOLED Plus FHD + de 6.7", una cámara de 64 MP de ancho, 12 MP de ultraancho, 5 MP de profundidad y una macro de 5 MP, una batería de 4500 mAh y un sensor y huella digital ultrasónica en pantalla. del teléfono se introdujo en abril de 2020, así como una variante 5G UW en julio de 2020.'),
(5, 'Note 20', 'Note 20.png', ' Teléfonos inteligentes Android de gama alta diseñados, desarrollados, producidos y comercializados por Samsung Electronics para su serie Samsung Galaxy Note, siendo los sucesores del Samsung Galaxy Note 10. Los dispositivos se anunciaron el 5 de agosto del 2020.
En el evento, Samsung anunció que los teléfonos inteligentes incluyen soporte para redes 5G, lo que permite dar conexiones de mayor ancho de banda y menor latencia donde la cobertura de redes 5G se encuentre disponible. El S-Pen del Galaxy Note 20 ahora está más mejorado y tiene una latencia hasta 4 veces mejor que la de las generaciones anteriores. A diferencia de sus predecesores, la serie Galaxy Note 20 es la primera serie Note de Samsung que no cuenta con un modelo "+" (plus).​
La serie Galaxy Note 20 vienen con una serie de nuevas, potentes y mejoradas funciones de software, que incluyen la optimización del rendimiento para los juegos, sincronización de forma inalámbrica con ordenadores de escritorio y ordenadores portátiles,16​ y funciones mejoradas de Samsung DeX para la conexión de forma remota a dispositivos que sean compatibles.'),
(5, 'Z Fold', 'ZFold.png','Teléfono inteligente Android con pantalla flexible de gama alta producido por Samsung, anunciado en el evento Galaxy Unpacked el 5 de agosto de 2020. La pantalla flexible está protegida con un "Ultra-Thin Glass" de 0,0012 pulgadas de espesor con una capa de plástico como el Galaxy Z Flip.'),
(3, 'Edge S', 'Edge S.png', 'Teléfono inteligente de gama media, desarrollado y fabricado por Motorola. Cuenta con 6GB de memoria RAM y el procesador Snapdragon 765 (no confundir con el Snapdragon 765G), un SoC de siete nanómetros y ocho núcleos con una velocidad máxima de 2,3 GHz, GPU Adreno 620 y 5G integrado.'),
(3, 'G60', 'G60.png', 'Cuenta con una pantalla de 6.8 pulgadas FHD+ con tasa de refresco de 120 Hz. El Moto G60 está potenciado por un procesador Qualcomm Snapdragon 732G con 6GB de RAM y 128GB de almacenamiento interno. La cámara triple posterior tiene un lente principal de 108 MP y secundarios de 8 MP y 2MP, y su cámara selfie es de 32 MP.'),
(3, 'G100', 'G100.png', 'Description G100. Description G100. Description G100. Description G100. Description G100. Description G100. Description G100. Description G100. Description G100. Description G100. '),
(4, '4', '4.png', 'Teléfonos inteligentes Pixel 4, anunciado el 4 de octubre de 2016 durante el evento #MadeByGoogle.1 Originalmente ejecutaron Android 7.1 Nougat. Google enfatizó la cámara en los dos teléfonos, que se clasificó como la mejor cámara de teléfono inteligente en DxOMarkMobile con 90 puntos hasta que HTC lanzó el U11, que también obtuvo 90 puntos. Esto se debe en gran parte a optimizaciones de software como HDR+. Los teléfonos Pixel también incluyen almacenamiento en la nube ilimitado para imágenes en Google Fotos y un gestor de arranque desbloqueable.​'),
(4, '5', '5.png', 'Teléfonos inteligentes Pixel 5, anunciado el 4 de octubre de 2016 durante el evento #MadeByGoogle.1 Originalmente ejecutaron Android 7.1 Nougat. Google enfatizó la cámara en los dos teléfonos, que se clasificó como la mejor cámara de teléfono inteligente en DxOMarkMobile con 90 puntos hasta que HTC lanzó el U11, que también obtuvo 90 puntos. Esto se debe en gran parte a optimizaciones de software como HDR+. Los teléfonos Pixel también incluyen almacenamiento en la nube ilimitado para imágenes en Google Fotos y un gestor de arranque desbloqueable.'),
(2, 'K31', 'K31.png', 'El El LG K31 es un sencillo smartphone Android con una pantalla HD+ de 5.7 pulgadas y potenciado por un procesador Helio P22 de Mediatek con 2GB de memoria RAM y 32GB de almacenamiento interno expandible.'),
(2, 'K52', 'K52.png', 'El LG K52 es un smartphone Android con una pantalla HD+ de 6.6 pulgadas. Por dentro encontramos un procesador Helio P35 acompañado de 4GB de memoria RAM y 64GB de almacenamiento interno. ... Otras características del LG K52 incluyen puerto USB-C, lector de huellas montado sobre el botón de encendido y NFC.'),
(2, 'K61', 'K61.png', 'El LG K61 es el smartphone más poderoso de la nueva serie K para el 2020 de LG. Con una pantalla Full HD+ de 6.5 pulgadas, el LG k61 está potenciado por un procesador octa-core acompañado de 4GB de memoria RAM con opciones de 64GB o 128GB de almacenamiento interno. La cámara principal del LG K61 es cuádruple en configuración 48 MP + 8 MP + 2 MP + 5 MP, mientras que su cámara frontal es de 16 megapixels. El LG K61 completa sus características con una batería de 4000 mAh, resistencia de certificación militar y Android 9.0 Pie.'),
(2, 'W41', 'W41.png', 'LG W41 cuenta con sistemas GSM , HSPA , LTE. La fecha de presentación es Febrero 22 2021. Sistema operativo instalado es Android 10 y se utilizó el procesador Octa-core (4x2.3 GHz Cortex-A53 & 4x1.8 GHz Cortex-A53). El dispositivo LG W41 tiene 64GB 4GB RAM de memoria incorporada. LG W41 está equipado con un chipset MediaTek Helio G35 (12 nm). El tamaño de la pantalla principal es de 6.55 pulgadas, 118.3 cm2 con la resolución 900 x 1600 píxeles, 16:9 ratio . El número de píxeles por una pulgada (ppi) es de aproximadamente 280 ppi density). La pantalla ocupa alrededor de 91.9% de la superficie total del dispositivo. Este porcentaje de la superficie total del dispositivo a pantalla es una puntuación muy alta.');

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





