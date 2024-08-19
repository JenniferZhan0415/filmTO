import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

import { festivals } from "./festival";
import { cinemas } from "./cinema";
import { articles } from "./article";
import { films } from "./film";
import { users } from "./user";

// define the user table
export const likes = pgTable("like", {
  id: serial("id").primaryKey().notNull(),

  festivalId: integer("festival_id").references(() => festivals.id),

  cinemaId: integer("cinema_id").references(() => cinemas.id),

  articleId: integer("article_id").references(() => articles.id),

  filmId: varchar("film_id", { length: 256 }).references(() => films.tmdbId),

  userId: integer("user_id").references(() => users.id),
});

export const likeRelations = relations(likes, ({ one }) => ({
  user: one(users, {
    fields: [likes.userId],
    references: [users.id],
  }),
  festival: one(festivals, {
    fields: [likes.festivalId],
    references: [festivals.id],
  }),
  article: one(articles, {
    fields: [likes.articleId],
    references: [articles.id],
  }),
  cinema: one(cinemas, {
    fields: [likes.cinemaId],
    references: [cinemas.id],
  }),

  film: one(films, {
    fields: [likes.filmId],
    references: [films.tmdbId],
  }),
}));
