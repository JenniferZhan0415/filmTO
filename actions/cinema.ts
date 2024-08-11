"use server";

import { cache } from "react";
import { eq } from "drizzle-orm";

import { db } from "@/db";
import { cinemas } from "@/db/schemas/cinema";
import { Cinema } from "@/types/cinema";

/**
 * Retrieve all cinemas, cached as they are static.
 */
export const getAllCinemas = cache(async () => {
  const cinemas = await db.query.cinemas.findMany();

  return cinemas.map((cinema: Cinema) => ({
    ...cinema,
    key: cinema.name,
  }));
});

export const getCinemaByName = cache(async (name: string) => {
  return await db
    .select()
    .from(cinemas)
    // since cinema name is unique
    .where(eq(cinemas.name, name))
    .limit(1);
});
