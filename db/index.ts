import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { config } from 'dotenv';
config({ path: '.env.local' });

const pool = new Pool({
  host: process.env.DB_HOST,
  port: 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export const db = drizzle(pool);