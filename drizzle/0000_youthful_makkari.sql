CREATE TABLE `users_table` (
	`id` int AUTO_INCREMENT NOT NULL,
	`firstname` varchar(255) NOT NULL,
	`lastname` varchar(255) NOT NULL,
	`age` int,
	`email` varchar(255) NOT NULL,
	`mobileNo` varchar(15) NOT NULL,
	`password` varchar(255) NOT NULL,
	CONSTRAINT `users_table_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_table_email_unique` UNIQUE(`email`),
	CONSTRAINT `users_table_mobileNo_unique` UNIQUE(`mobileNo`),
	CONSTRAINT `users_table_password_unique` UNIQUE(`password`)
);
