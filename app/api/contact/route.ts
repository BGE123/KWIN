import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, phone, country, subject, message } =
      await request.json();

    const apiKey = process.env.BREVO_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey || "",
      },
      body: JSON.stringify({
        sender: { name: "KWIN Website", email: receiverEmail },
        to: [{ email: receiverEmail, name: "KWIN Admin" }],
        replyTo: { email, name },
        subject: `New Contact Form: ${subject}`,
        htmlContent: `
          <h3>New message from KWIN Website</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to send" },
        { status: response.status },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
