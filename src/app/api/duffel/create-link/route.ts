import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const token = process.env.DUFFEL_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.json(
        { error: "DUFFEL_ACCESS_TOKEN not set in .env.local" },
        { status: 500 }
      );
    }

    // Duffel requires clean HTTPS URLs — no localhost, no query strings
    const base =
      (process.env.NEXT_PUBLIC_BASE_URL || "https://milehigh5280-travels.vercel.app")
        .replace(/\/$/, "");

    const payload = {
      data: {
        reference: (body.reference || `milehigh_${Date.now()}`).slice(0, 50),
        logo_url:
          "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776535724/aaaaaaa_xu7z9a.png",
        primary_color: "#2f0877",
        secondary_color: "#e09c0b",
        markup_amount: "20",
        markup_currency: "USD",
        success_url: `${base}/confirmation/duffel-success`,
        failure_url: `${base}/flights/failure`,
        abandonment_url: `${base}/flights`,
        checkout_display_text: "MileHigh 5280 Travels",
      },
    };

    const res = await fetch("https://api.duffel.com/links/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Duffel-Version": "v2",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const json = await res.json();

    if (!res.ok) {
      // Log full Duffel error to server console for debugging
      console.error("[Duffel] Session creation failed:", JSON.stringify(json, null, 2));
      const msg =
        json?.errors?.[0]?.message ||
        json?.errors?.[0]?.title ||
        `Duffel API error ${res.status}`;
      return NextResponse.json({ error: msg }, { status: res.status });
    }

    return NextResponse.json({ url: json.data.url });
  } catch (e: any) {
    console.error("[Duffel] Unexpected error:", e);
    return NextResponse.json({ error: e.message || "Internal server error" }, { status: 500 });
  }
}
