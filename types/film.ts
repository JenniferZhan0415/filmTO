import { z } from "zod";

export const DisplayType = z.union([
  z.literal("description"),
  z.literal("cover"),
]);

export const Film = z.object({
  title: z.string().describe("Name of the film"),
  director: z.string().describe("Director of the film"),
  reason: z.string().describe("Reason why the film is recommended").optional(),
  year: z.number().describe("Release year of the film"),
});

export const FilmDetails = Film.merge(
  z.object({
    id: z.string().describe("TMDB ID").optional(),
    genres: z.array(z.string()).describe("Genres of the film"),
    plot: z.string().describe("Plot of the film").optional(),
    poster: z.string(),
    type: DisplayType,
  }),
);

export type Film = z.infer<typeof Film>;

export type DFilm = z.infer<typeof FilmDetails>;
