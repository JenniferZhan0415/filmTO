import { relations } from "drizzle-orm";
import {
  pgTable,
  serial,
  text,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

import { likes } from "./like";

// define the user table
export const users = pgTable(
  "user",
  {
    id: serial("id").primaryKey(),

    name: varchar("name", { length: 256 }).notNull(),

    email: varchar("email", { length: 256 }).notNull(),

    password: text("password"),

    theme: varchar("theme", { length: 256 }).default("default"),

    image: text("image").default("/logo/icon.png"),
  },
  (users) => {
    return {
      // email must be unique
      emailIndex: uniqueIndex("email_index").on(users.email),
    };
  },
);

export const userRelations = relations(users, ({ many }) => ({
  likes: many(likes),
}));
