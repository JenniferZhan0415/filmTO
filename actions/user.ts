"use server";

import { eq } from "drizzle-orm";
import Error from "next/error";
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
      image: user.image,
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
export const signup = async (user: string, email: string, password: string) => {
  // form validation
  if (!user || !email || !password) {
    throw new Error({
      message: "All fields are required.",
      statusCode: 400,
    });
  }

  // check if user already exists
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    throw new Error({
      message: "User already exists.",
      statusCode: 400,
    });
  }

  // const hashedPassword = await hashPassword(password);
  const hashPassword = password;

  await addUser({
    name: user,
    email,
    password: hashedPassword,
    theme: "default",
  });
};

export const hashPassword = async (password: string) =>
  bcrypt.hash(password, 12);

export const verifyPassword = async (
  password: string,
  hashedPassword: string,
) => bcrypt.compare(password, hashedPassword);
