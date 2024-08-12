import { readFile } from "fs/promises";
import { SQL, getTableColumns, sql } from "drizzle-orm";
import { PgTable } from "drizzle-orm/pg-core";
import { SQLiteTable } from "drizzle-orm/sqlite-core";

import { Cinema } from "@/types/cinema";
import { db } from "..";
import { cinemas } from "../schemas/cinema";

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

/**
 * Seed the database with initial data:
 *  - cinemas
 *  - festivals
 */
(async function seed() {
  try {
    // load cinemas
    const cinemaData: Cinema[] = JSON.parse(
      await readFile("./db/seeds/cinema.json", "utf-8")
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

    console.info("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
})(); // run the seed script
