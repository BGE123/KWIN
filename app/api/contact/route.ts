import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, phone, country, subject, message } =
      await request.json();

    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail =
      process.env.BREVO_SENDER_EMAIL || "info@kindlewomeninitiative.org";
    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL || "info@kindlewomeninitiative.org";

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey || "",
      },
      body: JSON.stringify({
        sender: { name: "KWIN Contact Form", email: senderEmail },
        to: [{ email: receiverEmail, name: "KWIN Team" }],
        replyTo: { email, name },
        subject: `New Contact Form Submission: ${subject}`,
        htmlContent: `
          <h3>New Message from KWIN Website</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("🚨 BREVO API ERROR:", errorData); // This will print the exact issue!
      return NextResponse.json(
        { error: "Failed to send" },
        { status: response.status },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("🚨 SERVER ERROR:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
