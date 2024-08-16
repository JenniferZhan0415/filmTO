"use server";

import { cache } from "react";
import { SavedFilm } from "@/types/film";
import { films } from "@/db/schemas/film";
import { db } from "@/db";

export const getFilmById = async (id: string) => {
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

export const getFilmByTitle = async (title: string, year: number) => {
  const endpoint = process.env.TMDB_API! + `/search/movie?`;
  const params = new URLSearchParams({
    query: title,
    year: year.toString(),
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

export const getAllFilms = cache(async () => {
  return (await db.select().from(films).orderBy(films.id)).map(
    (film: SavedFilm) => ({
      ...film,
      key: film.title,
    })
  );
});
