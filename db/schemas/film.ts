import { relations } from "drizzle-orm";
import { pgTable, serial, uniqueIndex, varchar } from "drizzle-orm/pg-core";

import { likes } from "./like";

// define the festival table
export const films = pgTable(
  "film",
  {
    id: serial("id").primaryKey(),

    title: varchar("title", { length: 256 }).notNull(),

    year: varchar("year", { length: 256 }),

    director: varchar("director", { length: 256 }),

    tmdbId: varchar("tmdb_id", { length: 256 }).notNull().unique(),
  },
  (films) => {
    return {
      // film name must be unique
      filmIndex: uniqueIndex("film_index").on(films.tmdbId),
    };
  },
);

export const filmRelations = relations(films, ({ many }) => ({
  likes: many(likes),
}));
