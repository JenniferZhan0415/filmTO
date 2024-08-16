"use server";

import { streamObject, generateObject } from "ai";
import { google } from "@ai-sdk/google";
import { z } from "zod";
import { getAllFilms } from "./film";
import { Film } from "../types/film";
import { SavedFilm } from "../types/film";

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
  // return streamRecos(input, stream);
  return await generateRecos(input);
}

/**
 * Generate preconfigured films.
 */
export const generatePredefined = async (): Promise<SavedFilm[]> => {
  const films = await getAllFilms();

  // Randomly shuffle the array and select 3 films
  const shuffledFilms = films.sort(() => 0.5 - Math.random());
  const selectedFilms = shuffledFilms.slice(0, 3);

  return selectedFilms;
};
