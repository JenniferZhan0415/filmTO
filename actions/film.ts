"use server";

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
