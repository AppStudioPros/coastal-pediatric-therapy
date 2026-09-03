import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { firstName, phone, preferredTime } = await req.json();

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #1e7faa; margin-bottom: 16px;">New Appointment Request</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151; width: 40%;">First Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #4b5563;">${firstName || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Phone Number</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #4b5563;">${phone || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #374151;">Preferred Time</td>
            <td style="padding: 10px 0; color: #4b5563;">${preferredTime || "Not specified"}</td>
          </tr>
        </table>
        <p style="margin-top: 24px; font-size: 13px; color: #9ca3af;">
          This request was submitted via the Coastal Pediatric Therapy Center website booking form.
        </p>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Coastal Therapy Website <noreply@webdesignpros365.com>",
        to: "info@coastaltherapy.net",
        subject: `New Appointment Request — ${firstName || "Website Visitor"}`,
        html,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Resend error:", err);
      return NextResponse.json({ ok: false, error: err }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Booking lead error:", error);
    return NextResponse.json({ ok: false, error: "Internal server error" }, { status: 500 });
  }
}
