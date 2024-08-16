"use server";

import { cache } from "react";
import { SavedFilm } from "@/types/film";
import { films } from "@/db/schemas/film";
import { db } from "@/db";

export const getFilmById = async (id: string) => {
  const res = await fetch(process.env.TMDB_API! + `/movie/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.TMDB_KEY!}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch film");

  return res.json();
};

export const getAllFilms = cache(async () => {
  return (await db.select().from(films).orderBy(films.id)).map(
    (film: SavedFilm) => ({
      ...film,
      key: film.title,
    })
  );
});
