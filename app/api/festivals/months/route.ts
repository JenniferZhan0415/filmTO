"use server";

import { NextResponse } from "next/server";

import { getMonths } from "@/actions/festival";

// set order of months
const monthOrder = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export async function GET() {
  try {
    const months = await getMonths();

    const sortedMonths = months.sort((a, b) => {
      return monthOrder.indexOf(a.month!) - monthOrder.indexOf(b.month!);
    });

    return NextResponse.json(sortedMonths, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Cannot fetch months." },
      { status: 500 }
    );
  }
}
