import {
  pgTable,
  serial,
  text,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

// define the festival table
export const articles = pgTable("article", {
  id: serial("id").primaryKey(),

  type: varchar("type", { length: 256 }).notNull(),

  title: varchar("title", { length: 256 }).notNull(),

  subtitle: varchar("subtitle", { length: 256 }),

  url: varchar("url", { length: 256 }),

  image: text("image"),
});
