"use server";

import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import { User as SessionUser } from "next-auth";

import { NewUser, User as DBUser } from "@/types/user";
import { db } from "@/db";
import { users } from "@/db/schemas/user";

export const getUserByEmail = async (email: string) => {
  const res = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  return res?.[0];
};

export const addUser = async (user: SessionUser, password?: string) => {
  if (!user.email) {
    return null;
  }

  const newUser: NewUser = {
    name: user.name || "Anonymous",
    email: user.email,
    ...(user.image && { image: user.image }),
    ...(password && { password: password }),
  };

  return await db.insert(users).values(newUser).returning();
};

export const updateUser = async (user: SessionUser, theme: string | null) => {
  if (!user.email) {
    return null;
  }

  await db
    .update(users)
    .set({
      name: user.name || "Anonymous",
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
): Promise<DBUser | null> => {
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

  const res = await addUser(
    {
      name: user,
      email,
    } as SessionUser,
    hashedPassword,
  );

  if (res) return res[0];

  return null;
};

export const hashPassword = async (password: string) =>
  bcrypt.hash(password, 12);

export const verifyPassword = async (
  password: string,
  hashedPassword: string,
) => bcrypt.compare(password, hashedPassword);
