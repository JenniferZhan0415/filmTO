import type { films } from "@/db/schemas/film";

import { z } from "zod";

export const DisplayType = z.union([
  z.literal("description"),
  z.literal("cover"),
]);

export const Film = z.object({
  title: z.string().describe("Name of the film"),
  director: z.string().describe("Director of the film"),
  reason: z.string().describe("Reason why the film is recommended").optional(),
  year: z.string().describe("Release year of the film"),
});

export const FilmDetails = Film.merge(
  z.object({
    id: z.number().describe("TMDB ID"),
    genres: z.array(z.string()).describe("Genres of the film"),
    plot: z.string().describe("Plot of the film").optional(),
    poster: z.string(),
    type: DisplayType,
  }),
);

export type AIFilm = z.infer<typeof Film>;

export type TMDBFilm = z.infer<typeof FilmDetails>;

// film saved in db
export type SavedFilm = typeof films.$inferSelect;
// film to be saved in db
export type NewFilm = typeof films.$inferInsert;
