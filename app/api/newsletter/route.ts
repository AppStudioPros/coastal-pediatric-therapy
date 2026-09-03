import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    // Newsletter signup — log and return success
    // In production this would integrate with a mailing list provider
    console.log("Newsletter signup:", email);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json({ ok: false, error: "Internal server error" }, { status: 500 });
  }
}
