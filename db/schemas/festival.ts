import {
  pgTable,
  serial,
  text,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

// define the festival table
export const festivals = pgTable(
  "festival",
  {
    id: serial("id").primaryKey(),

    name: varchar("name", { length: 256 }).notNull(),

    month: varchar("month", { length: 256 }),

    start: varchar("start", { length: 256 }),

    end: varchar("end", { length: 256 }),

    website: varchar("website", { length: 256 }),

    since: varchar("since", { length: 256 }),

    image: text("image"),
  },
  (festivals) => {
    return {
      // festival name must be unique
      festivalIndex: uniqueIndex("festival_index").on(festivals.name),
    };
  }
);
