"use server";

import { db } from "@/db";
import { articles } from "@/db/schemas/article";
import { cinemas } from "@/db/schemas/cinema";
import { festivals } from "@/db/schemas/festival";

import { films } from "@/db/schemas/film";

import { likes } from "@/db/schemas/like";
import { LikeType } from "@/types/like";
import { and, eq, isNotNull } from "drizzle-orm";

export const like = async (userId: number, type: string, id: number) => {
  switch (type) {
    case "festival":
      return await db
        .insert(likes)
        .values({
          userId: userId,
          festivalId: id,
        })
        .returning();

    case "cinema":
      return await db
        .insert(likes)
        .values({
          userId: userId,
          cinemaId: id,
        })
        .returning();

    case "article":
      return await db
        .insert(likes)
        .values({
          userId: userId,
          articleId: id,
        })
        .returning();

    case "film":
      return await db
        .insert(likes)
        .values({
          userId: userId,
          filmId: id,
        })
        .returning();

    default:
      break;
  }
};

export const unlike = async (userId: number, type: string, id: number) => {
  switch (type) {
    case "festival":
      return await db
        .delete(likes)
        .where(and(eq(likes.userId, userId), eq(likes.festivalId, id)))
        .returning();

    case "cinema":
      return await db
        .delete(likes)
        .where(and(eq(likes.userId, userId), eq(likes.cinemaId, id)))
        .returning();

    case "article":
      return await db
        .delete(likes)
        .where(and(eq(likes.userId, userId), eq(likes.articleId, id)))
        .returning();

    case "film":
      return await db
        .delete(likes)
        .where(and(eq(likes.userId, userId), eq(likes.filmId, id)))
        .returning();

    default:
      break;
  }
};

export const hasLikedItem = async (
  userId: number,
  type: string,
  id: number
) => {
  let liked = [];
  switch (type) {
    case "festival":
      liked = await db
        .select()
        .from(likes)
        .where(and(eq(likes.userId, userId), eq(likes.festivalId, id)))
        .limit(1);

      break;

    case "cinema":
      liked = await db
        .select()
        .from(likes)
        .where(and(eq(likes.userId, userId), eq(likes.cinemaId, id)))
        .limit(1);

      break;

    case "article":
      liked = await db
        .select()
        .from(likes)
        .where(and(eq(likes.userId, userId), eq(likes.articleId, id)))
        .limit(1);

      break;

    case "film":
      liked = await db
        .select()
        .from(likes)
        .where(and(eq(likes.userId, userId), eq(likes.filmId, id)))
        .limit(1);

      break;

    default:
      break;
  }
  return liked.length > 0;
};

export const likedItems = async (userId: number, type: LikeType) => {
  switch (type) {
    case "festival":
      const likedFestivals = await db
        .select()
        .from(likes)
        .where(eq(likes.userId, userId))
        .rightJoin(festivals, eq(likes.festivalId, festivals.id));

      return likedFestivals.map(({ festival }) => festival);

    case "cinema":
      const likedCinemas = await db
        .select()
        .from(likes)
        .where(eq(likes.userId, userId))
        .rightJoin(cinemas, eq(likes.cinemaId, cinemas.id));

      return likedCinemas.map(({ cinema }) => cinema);

    case "article":
      const likedArticles = await db
        .select()
        .from(likes)
        .where(eq(likes.userId, userId))
        .rightJoin(articles, eq(likes.articleId, articles.id));

      return likedArticles.map(({ article }) => article);

    case "film":
      const likedFilms = await db
        .select()
        .from(likes)
        .where(eq(likes.userId, userId))
        .rightJoin(films, eq(likes.filmId, films.tmdbId));

      return likedFilms.map(({ film }) => film);

    default:
      break;
  }
};
