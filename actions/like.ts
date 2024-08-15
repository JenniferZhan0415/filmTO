"use server";

import { db } from "@/db";
import { articles } from "@/db/schemas/article";
import { cinemas } from "@/db/schemas/cinema";
import { festivals } from "@/db/schemas/festival";
import { likes } from "@/db/schemas/like";
import { and, eq } from "drizzle-orm";

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

    default:
      break;
  }
  return liked.length > 0;
};

export const likedItems = async (userId: number, type: string) => {
  switch (type) {
    case "festival":
      return await db
        .select()
        .from(likes)
        .where(eq(likes.userId, userId))
        .leftJoin(festivals, eq(likes.festivalId, festivals.id));
    case "cinema":
      return await db
        .select()
        .from(likes)
        .where(eq(likes.userId, userId))
        .leftJoin(cinemas, eq(likes.cinemaId, cinemas.id));
    case "article":
      return await db
        .select()
        .from(likes)
        .where(eq(likes.userId, userId))
        .leftJoin(articles, eq(likes.articleId, articles.id));
    default:
      break;
  }
};
