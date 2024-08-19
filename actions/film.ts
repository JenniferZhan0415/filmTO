"use server";

import type { NewFilm, TMDBFilm } from "@/types/film";

import { cache } from "react";
import { pick } from "lodash";
import { eq } from "drizzle-orm";

import { films } from "@/db/schemas/film";
import { db } from "@/db";

export const getFilmById = async (id: number) => {
  const endpoint = process.env.TMDB_API! + `/movie/`;
  const res = await fetch(endpoint + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.TMDB_KEY!}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch film");

  return res.json();
};

export const getFilmByTitle = async (title: string, year: string) => {
  const endpoint = process.env.TMDB_API! + `/search/movie?`;
  const params = new URLSearchParams({
    query: title,
    year: year,
  }).toString();

  const res = await fetch(endpoint + params, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.TMDB_KEY!}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch film");

  return res.json();
};

/**
 * Fetch all films from the database.
 *
 * @param {boolean} predefined - whether to include predefined films only
 */
export const getAllFilms = cache(async (predefinedOnly: boolean = true) => {
  if (predefinedOnly)
    return await db.select().from(films).where(eq(films.isPredefined, true));

  return await db.select().from(films).orderBy(films.id);
});

export const saveFilm = async (film: TMDBFilm) => {
  const newFilm = pick(film, "id", "title", "year", "director") as NewFilm;

  return await db
    .insert(films)
    .values(newFilm)
    .onConflictDoNothing()
    .returning();
};
