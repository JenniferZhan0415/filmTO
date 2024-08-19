"use server";

import { NextResponse } from "next/server";

import { getAllCinemas } from "@/actions/cinema";

/**
 * Get cinemas.
 *
 * @returns All Cinemas
 */
export async function GET() {
  try {
    const cinemas = await getAllCinemas();

    return NextResponse.json(cinemas, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Cannot fetch cinemas." },
      { status: 500 },
    );
  }
}
