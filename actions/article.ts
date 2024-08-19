"use server";

import { cache } from "react";

import { db } from "@/db";
import { articles } from "@/db/schemas/article";

/**
 * Retrieve all articles, cached as they are static.
 */
export const getAllArticles = cache(async () => {
  return await db.select().from(articles).orderBy(articles.id);
});
