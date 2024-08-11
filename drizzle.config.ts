import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

const connection = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

export default defineConfig({
  schema: "./db/schemas/*",
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: connection,
  },
});
