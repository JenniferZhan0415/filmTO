"use server";

import { NextRequest, NextResponse } from "next/server";
import { getFestivalsByMonth } from "@/actions/festival";

/**
 * Get festivals by month.
 *
 * @returns All festivals
 */
export async function GET(req: NextRequest) {
  try {
    const params = req.nextUrl.searchParams;
    const month =
      params.get("month") ||
      new Date().toLocaleString("default", { month: "long" });

    const festivals = await getFestivalsByMonth(month);

    return NextResponse.json(festivals, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Cannot fetch festivals." },
      { status: 500 }
    );
  }
}
