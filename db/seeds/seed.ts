import { readFile } from "fs/promises";

import { db } from "..";
import { cinemas } from "../schemas/cinema";

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
    await db.insert(cinemas).values(cinemaData);

    console.info("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
})(); // run the seed script
