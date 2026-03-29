import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { env } from "../config/env";

const poolConnection = mysql.createPool({
  host: env.DB_HOST,
  user: env.DB_USER,
  database: env.DB_NAME,
});
const db = drizzle({ client: poolConnection });

// or if you need client connection
async function main() {
  const connection = await mysql.createConnection({
    host: env.DB_HOST,
    user: env.DB_USER,
    database: env.DB_NAME,
  });
  const db = drizzle({ client: connection });
}
main();
