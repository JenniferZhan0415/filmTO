import { readFile } from "fs/promises";
import { SQL, getTableColumns, sql } from "drizzle-orm";
import { PgTable } from "drizzle-orm/pg-core";
import { SQLiteTable } from "drizzle-orm/sqlite-core";

import { db } from "..";
import { cinemas } from "../schemas/cinema";
import { Cinema } from "@/types/cinema";
import Festival from "@/types/festival";
import { festivals } from "../schemas/festival";

const buildConflictUpdateColumns = <
  T extends PgTable | SQLiteTable,
  Q extends keyof T["_"]["columns"],
>(
  table: T,
  columns: Q[]
) => {
  const cls = getTableColumns(table);
  return columns.reduce(
    (acc, column) => {
      const colName = cls[column].name;
      acc[column] = sql.raw(`excluded.${colName}`);
      return acc;
    },
    {} as Record<Q, SQL>
  );
};

import { Cinema } from "@/types/cinema";

/**
 * Seed the database with initial data:
 *  - cinemas
 *  - festivals
 */
(async function seed() {
  try {
    // load cinemas
    const cinemaData: Cinema[] = JSON.parse(
      await readFile("./db/seeds/cinema.json", "utf-8"),
    );

    // insert cinemas
    await db
      .insert(cinemas)
      .values(cinemaData)
      .onConflictDoUpdate({
        target: cinemas.id,
        set: buildConflictUpdateColumns(cinemas, [
          "id",
          "name",
          "address",
          "website",
          "description",
          "lat",
          "lng",
          "established",
          "image",
        ]),
      });

    // load festivals
    const festivalData: Festival[] = JSON.parse(
      await readFile("./db/seeds/festival.json", "utf-8")
    );

    // insert festivals
    await db
      .insert(festivals)
      .values(festivalData)
      .onConflictDoUpdate({
        target: festivals.id,
        set: buildConflictUpdateColumns(festivals, [
          "id",
          "name",
          "month",
          "start",
          "end",
          "website",
          "since",
          "image",
        ]),
      });

    console.info("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
})(); // run the seed script
