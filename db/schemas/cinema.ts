import { relations } from "drizzle-orm";
import {
  pgTable,
  real,
  serial,
  text,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";
import { likes } from "./like";

// define the cinema table
export const cinemas = pgTable(
  "cinema",
  {
    id: serial("id").primaryKey(),

    name: varchar("name", { length: 256 }).notNull(),

    address: varchar("address", { length: 256 }),

    website: varchar("website", { length: 256 }),

    description: text("description"),

    lat: real("lat").notNull(),

    lng: real("lng").notNull(),

    established: varchar("established", { length: 256 }),

    image: text("image"),
  },
  (cinemas) => {
    return {
      // cinema name must be unique
      nameIndex: uniqueIndex("name_idx").on(cinemas.name),
    };
  }
);

export const cinemaRelations = relations(cinemas, ({ many }) => ({
  likes: many(likes),
}));
