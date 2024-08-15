"use server";

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
