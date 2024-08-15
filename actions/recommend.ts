"use server";

import { streamObject, generateObject } from "ai";
import { google } from "@ai-sdk/google";
import { z } from "zod";

import { Film, DFilm } from "../types/film";

const config = {
  model: google("models/gemini-1.5-pro-latest"),
  system:
    "Please generate THREE film recommendations based on user prefrences. REMEMBER that the films recommended should be different from the one provided by user.",
  schema: z.object({
    films: z.array(Film),
  }),
  maxTokens: 512,
};

const streamRecos = async (input: string, stream: any) => {
  const { partialObjectStream } = await streamObject({
    ...config,
    prompt: input,
  });

  for await (const partialObject of partialObjectStream) {
    stream.update(partialObject);
  }

  stream.done();

  return { object: stream.value };
};

const generateRecos = async (input: string) => {
  const { object } = await generateObject({
    ...config,
    prompt: input,
  });

  return object.films;
};

export async function generate(input: string) {
  "use server";

  // const stream = createStreamableValue();

  // return streamRecos(input, stream);
  return await generateRecos(input);
}

/**
 * Generate preconfigured films.
 */
export const generatePredefined = (): Promise<DFilm[]> =>
  new Promise((res) =>
    res([
      {
        // id: "581734",
        title: "Nomadland",
        year: 2021,
        director: "Chloe Zhao",
        type: "cover",
        // poster:
        //   "https://image.tmdb.org/t/p/original/rIvfbT4UZB8Co304GgZ8tiszGlW.jpg",
      },
      {
        // id: "128846",
        title: "Not Reconciled",
        year: 1965,
        director: "Jean-Marie Straub and Danielle Huillet",
        type: "cover",
        // poster:
        //   "https://image.tmdb.org/t/p/original/cg85XzG0dziEV7hiktTGyhNKbBL.jpg",
      },
      {
        // id: "91296",
        title: "Histoire(s) du Cinéma 1a: All the (Hi)stories",
        year: 1989,
        director: "Jean-Luc Godard",
        type: "cover",
        // poster:
        //   "https://www.themoviedb.org/t/p/w1280/2wdbhSOucCW0R1Ud0iDDmnljKEP.jpg",
      },
    ]),
  );
