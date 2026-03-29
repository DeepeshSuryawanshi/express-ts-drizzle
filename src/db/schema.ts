import { int, mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

export const usersTable = mysqlTable('users_table', {
  id: int("id").primaryKey().autoincrement(),
  firstname: varchar("firstname", { length: 255 }).notNull(),
  lastname: varchar("lastname", { length: 255 }).notNull(),
  age: int(),
  email: varchar({ length: 255 }).notNull().unique(),
  mobileNo: varchar({ length: 15 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull().unique(),
}); 
