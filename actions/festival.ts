"use server";

import { cache } from "react";
import { eq } from "drizzle-orm";

import { db } from "@/db";
import { festivals } from "@/db/schemas/festival";

/**
 * Retrieve all festivals, cached as they are static.
 */
export const getAllFestivals = cache(async () => {
  return await db.select().from(festivals).orderBy(festivals.id);
});

export const getFestivalsByMonth = cache(async (month: string) => {
  return await db.select().from(festivals).where(eq(festivals.month, month));
});

/**
 * Get distinct months from the table.
 */
export const getMonths = cache(async () => {
  return await db
    .selectDistinct({ month: festivals.month })
    .from(festivals)
    .orderBy(festivals.month);
});
