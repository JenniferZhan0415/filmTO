import { readFile } from "fs/promises";

import { SQL, getTableColumns, sql } from "drizzle-orm";
import { PgTable } from "drizzle-orm/pg-core";
import { SQLiteTable } from "drizzle-orm/sqlite-core";

import { db, pool } from "..";
import { cinemas } from "../schemas/cinema";
import { festivals } from "../schemas/festival";
import { articles } from "../schemas/article";
import { films } from "../schemas/film";

import { Cinema } from "@/types/cinema";
import Festival from "@/types/festival";
import Article from "@/types/article";
import { SavedFilm } from "@/types/film";

const buildConflictUpdateColumns = <
  T extends PgTable | SQLiteTable,
  Q extends keyof T["_"]["columns"],
>(
  table: T,
  columns: Q[],
) => {
  const cls = getTableColumns(table);

  return columns.reduce(
    (acc, column) => {
      const colName = cls[column].name;

      acc[column] = sql.raw(`excluded.${colName}`);

      return acc;
    },
    {} as Record<Q, SQL>,
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
      await readFile("./db/seeds/festival.json", "utf-8"),
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

    // load articles
    const articleData: Article[] = JSON.parse(
      await readFile("./db/seeds/article.json", "utf-8"),
    );

    // insert articles
    await db
      .insert(articles)
      .values(articleData)
      .onConflictDoUpdate({
        target: articles.id,
        set: buildConflictUpdateColumns(articles, [
          "id",
          "type",
          "title",
          "subtitle",
          "url",
          "image",
        ]),
      });
    // load films
    const filmData: SavedFilm[] = JSON.parse(
      await readFile("./db/seeds/film.json", "utf-8"),
    );

    // insert films
    await db
      .insert(films)
      .values(filmData)
      .onConflictDoUpdate({
        target: films.id,
        set: buildConflictUpdateColumns(films, [
          "id",
          "title",
          "year",
          "director",
          "isPredefined",
        ]),
      });
    console.info("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await pool.end();
  }
})(); // run the seed script
