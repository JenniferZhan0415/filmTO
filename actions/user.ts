"use server";

import { eq } from "drizzle-orm";
import { db } from "@/db";
import { users } from "@/db/schemas/user";

export const getUserByEmail = async (email: string) => {
  return await db.select().from(users).where(eq(users.email, email)).limit(1);
};

export const addUser = async (user) => {
  return await db
    .insert(users)
    .values({
      name: user.name,
      email: user.email,
      image: user.image,
    })
    .returning();
};

export const updateUser = async (user, theme: string | null) => {
  await db
    .update(users)
    .set({
      name: user.name,
      image: user.image,
      theme: theme || "default",
    })
    .where(eq(users.email, user.email))
    .returning();
};
