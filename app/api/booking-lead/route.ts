import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { fullName, phone, email, preferredTime } = await req.json();

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e3a4a;">
        <div style="background: #1e7faa; padding: 20px 28px; border-radius: 8px 8px 0 0;">
          <h2 style="color: #fff; margin: 0; font-size: 18px;">Potential Client Contact</h2>
          <p style="color: rgba(255,255,255,0.75); margin: 4px 0 0; font-size: 13px;">Submitted via the website before starting the new patient form</p>
        </div>
        <div style="background: #f8fafc; padding: 28px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151; width: 38%;">Full Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e3a4a; font-weight: 600;">${fullName || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><a href="tel:${(phone || "").replace(/\D/g, "")}" style="color: #1e7faa; font-weight: 600;">${phone || "—"}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email || ""}" style="color: #1e7faa; font-weight: 600;">${email || "—"}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">Preferred Time</td>
              <td style="padding: 10px 0; color: #4b5563;">${preferredTime || "Not specified"}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 14px 16px; background: #fff3cd; border: 1px solid #ffc107; border-radius: 6px;">
            <p style="margin: 0; font-size: 13px; color: #856404;">
              <strong>Follow-up tip:</strong> This person clicked through to the new patient form but may not have completed it. A quick call or email could convert them to a patient.
            </p>
          </div>
        </div>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Coastal Therapy Website <noreply@mail.coastaltherapy.net>",
        to: "info@coastaltherapy.net",
        replyTo: email || undefined,
        subject: `Potential Client Contact — ${fullName || "Website Visitor"}`,
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
