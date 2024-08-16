"use server";

import { streamObject } from "ai";
import { google } from "@ai-sdk/google";
import { createStreamableValue } from "ai/rsc";
import { z } from "zod";
import { getAllFilms } from "./film";
import { Film } from "../types/film";
import { SavedFilm } from "../types/film";

const streamRecos = async (input: string, stream: any) => {
  const { partialObjectStream } = await streamObject({
    model: google("models/gemini-1.5-pro-latest"),
    system:
      "Please generate THREE film recommendations based on user prefrences. REMEMBER that the films recommended should be different from the one provided by user.",
    prompt: input,
    schema: z.object({
      films: z.array(Film),
    }),
    maxTokens: 512,
  });

  for await (const partialObject of partialObjectStream) {
    stream.update(partialObject);
  }

  stream.done();

  return { object: stream.value };
};

export async function generate(input: string) {
  const stream = createStreamableValue();

  return streamRecos(input, stream);
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
