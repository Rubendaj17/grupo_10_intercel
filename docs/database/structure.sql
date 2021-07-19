CREATE DATABASE intercel_db;

CREATE TABLE intercel_db.brands (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(45) NOT NULL UNIQUE,
	`logo` VARCHAR(45) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);

CREATE TABLE intercel_db.models (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`id_brand` INT(10) UNSIGNED NOT NULL,
	`model` VARCHAR(50) NOT NULL UNIQUE,
	`main_image` VARCHAR(100) NOT NULL UNIQUE,
	PRIMARY KEY (`id`),
   	FOREIGN KEY (`id_brand`) REFERENCES intercel_db.brands (`id`)
  );

CREATE TABLE intercel_db.categories (
	`id` INT(10) UNSIGNED NOT NULL,
	`name` VARCHAR(5) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
  );
  
CREATE TABLE intercel_db.colors (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(50) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);
  
CREATE TABLE intercel_db.ram (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`storage` VARCHAR(5) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);
  
CREATE TABLE intercel_db.cellphones (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`id_model` INT(10) UNSIGNED NOT NULL,
	`id_color` INT(10) UNSIGNED NOT NULL,	
	`id_ram` INT(10) UNSIGNED NOT NULL,
	`price` INT(5) UNSIGNED NOT NULL,
	`offer` TINYINT(1) DEFAULT 0,
	`image_one` VARCHAR(100) NOT NULL,
	`image_two` VARCHAR(100) NOT NULL,
	`image_three` VARCHAR(100) NOT NULL,
	`created_at` DATE DEFAULT current_timestamp(),
	`updated_at` DATE DEFAULT current_timestamp(),
	PRIMARY KEY (`id`),
	FOREIGN KEY (`id_model`) REFERENCES intercel_db.models (`id`),
   	FOREIGN KEY (`id_color`) REFERENCES intercel_db.colors (`id`),
    FOREIGN KEY (`id_ram`) REFERENCES intercel_db.ram (`id`)
  );

CREATE TABLE intercel_db.users (
	`id` INT(10) UNSIGNED NOT NULL,
	`name` VARCHAR(50) NOT NULL,
	`last_name` VARCHAR(50) NOT NULL,
	`phone_number` VARCHAR(15) NOT NULL,
	`email` VARCHAR(30) NOT NULL UNIQUE,
	`password` VARCHAR(100) NOT NULL,
	`photo` VARCHAR(100) NOT NULL DEFAULT '/images/pp/default.png',
	`id_category` INT(10) UNSIGNED NOT NULL,
	`created_at` DATE DEFAULT current_timestamp(),
	`updated_at` DATE DEFAULT current_timestamp(),
	PRIMARY KEY (`id`),
	FOREIGN KEY (`id_category`) REFERENCES intercel_db.categories (`id`)
	);
    
CREATE TABLE intercel_db.sales (
    `id` INT(10) UNSIGNED NOT NULL,
	`id_user` INT(10) UNSIGNED NOT NULL,
    `comment` VARCHAR(400),
    `created_at` DATE DEFAULT current_timestamp(),
	`updated_at` DATE DEFAULT current_timestamp(),
	PRIMARY KEY (`id`),
	FOREIGN KEY (`id_user`) REFERENCES intercel_db.users (`id`)
    );
    
CREATE TABLE intercel_db.sales_cellphones (
	`id` INT(10) UNSIGNED NOT NULL,
	`id_cellphone` INT(10) UNSIGNED NOT NULL,
   	`id_sale` INT(10) UNSIGNED NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`id_cellphone`) REFERENCES intercel_db.cellphones (`id`),
	FOREIGN KEY (`id_sale`) REFERENCES intercel_db.sales (`id`)
	);