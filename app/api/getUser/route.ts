import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "@/lib/auth-options";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Not authorized" }, { status: 400 });
    }

    return NextResponse.json({ success: session }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Fail to get session" }, { status: 500 });
  }
}
