import type { Config } from "drizzle-kit";
import { env } from './src/config/env';

export default {
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'mysql',
  dbCredentials: {
    host: env.DB_HOST!,
    port: env.DB_PORT!,
    user: env.DB_USER!,
    password: env.DB_PASSWORD!,
    database: env.DB_NAME!,
  },
} satisfies Config;
