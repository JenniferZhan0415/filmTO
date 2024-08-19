import { relations } from "drizzle-orm";
import { pgTable, integer, varchar, boolean } from "drizzle-orm/pg-core";

import { likes } from "./like";

// define the festival table
export const films = pgTable("film", {
  id: integer("id").primaryKey(),

  title: varchar("title", { length: 256 }).notNull(),

  year: varchar("year", { length: 256 }),

  director: varchar("director", { length: 256 }),

  isPredefined: boolean("is_predefined").notNull().default(false),
});

export const filmRelations = relations(films, ({ many }) => ({
  likes: many(likes),
}));
