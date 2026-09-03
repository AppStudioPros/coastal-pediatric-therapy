import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message, smsConsent } = await req.json();

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #1a9cb5; margin-bottom: 16px;">New Website Message</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1a3a4a; width: 40%;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #4a6b7a;">${name || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1a3a4a;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #4a6b7a;">${email || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1a3a4a;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #4a6b7a;">${phone || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1a3a4a;">SMS Consent</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #4a6b7a;">${smsConsent ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #1a3a4a; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; color: #4a6b7a; white-space: pre-wrap;">${message || "—"}</td>
          </tr>
        </table>
        <p style="margin-top: 24px; font-size: 13px; color: #9ca3af;">
          This message was submitted via the Coastal Pediatric Therapy Center contact form.
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
        subject: `New Website Message — ${name || "Website Visitor"}`,
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
    console.error("Contact form error:", error);
    return NextResponse.json({ ok: false, error: "Internal server error" }, { status: 500 });
  }
}
