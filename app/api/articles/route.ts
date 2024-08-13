"use server";

import { NextResponse } from "next/server";

import { getAllArticles } from "@/actions/article";

/**
 * Get articles.
 *
 * @returns All articles
 */
export async function GET() {
  try {
    const articles = await getAllArticles();

    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Cannot fetch articles." },
      { status: 500 }
    );
  }
}
