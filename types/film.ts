import { z } from "zod";

export const DisplayType = z.union([
  z.literal("description"),
  z.literal("cover"),
]);

export const Film = z.object({
  title: z.string().describe("Name of the film."),
  director: z.string().describe("Director of the film."),
  reason: z.string().describe("Reason why the film is recommended.").optional(),
});

export const DisplayFilm = Film.merge(
  z.object({
    id: z.string().describe("TMDB ID").optional(),
    year: z.number(),
    plot: z.string().describe("Plot of the film.").optional(),
    poster: z.string(),
    type: DisplayType,
  }),
);

export type Film = z.infer<typeof Film>;

export type DFilm = z.infer<typeof DisplayFilm>;
