"use server";

import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";

import { db } from "@/db";
import { users } from "@/db/schemas/user";
import User from "@/types/user";

export const getUserByEmail = async (email: string) => {
  const res = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  return res?.[0];
};

export const addUser = async (user: User) => {
  return await db
    .insert(users)
    .values({
      name: user.name,
      email: user.email,
      ...(user.image && { image: user.image }),
      ...(user.password && { password: user.password }),
    })
    .returning();
};

export const updateUser = async (user: User, theme: string | null) => {
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

// TODO use zod to validate form inputs
export const signup = async (
  user: string,
  email: string,
  password: string,
): Promise<User | null> => {
  // form validation
  if (!user || !email || !password) {
    return null;
  }

  // check if user already exists
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return null;
  }

  const hashedPassword = await hashPassword(password);

  const res = await addUser({
    name: user,
    email,
    password: hashedPassword,
    theme: "default",
  } as User);

  return res[0];
};

export const hashPassword = async (password: string) =>
  bcrypt.hash(password, 12);

export const verifyPassword = async (
  password: string,
  hashedPassword: string,
) => bcrypt.compare(password, hashedPassword);
