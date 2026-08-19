const brevoApiUrl = "https://api.brevo.com/v3/smtp/email";

async function sendEmail(email: {
  to: string;
  subject: string;
  htmlContent: string;
  replyTo?: string;
}) {
  const response = await fetch(brevoApiUrl, {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": process.env.BREVO_API_KEY!,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: {
        email: process.env.BREVO_SENDER_EMAIL,
        name: "Future Leader",
      },
      to: [{ email: email.to }],
      subject: email.subject,
      htmlContent: email.htmlContent,
      ...(email.replyTo ? { replyTo: { email: email.replyTo } } : {}),
    }),
  });

  if (!response.ok) {
    throw new Error(`Brevo returned ${response.status}: ${await response.text()}`);
  }
}

export async function POST(request: Request) {
  const { name, email, subject, message, phone } = await request.json();
  const applicationSubject = typeof subject === "string" && subject.trim()
    ? subject.trim()
    : "Mám zájem o Future Leader";
  const brevoApiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!brevoApiKey || !senderEmail || !adminEmail) {
    console.error("Missing email configuration", {
      hasBrevoApiKey: Boolean(brevoApiKey),
      hasSenderEmail: Boolean(senderEmail),
      hasAdminEmail: Boolean(adminEmail),
    });

    return Response.json(
      { error: "Email service is not configured" },
      { status: 503 }
    );
  }

  try {
    await sendEmail({
      to: email,
      subject: "Potvrzení přihlášky - Future Leader",
      htmlContent: `
        <h2>Děkujeme za vaši přihlášku!</h2>
        <p>Ahoj ${name},</p>
        <p>Přijali jsme vaši přihlášku do programu Future Leader. Brzy se vám ozveme.</p>
        <p><strong>Vaše údaje:</strong></p>
        <ul>
          <li><strong>Jméno:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Telefon:</strong> ${phone || "Neuvedeno"}</li>
          <li><strong>Předmět:</strong> ${applicationSubject}</li>
          <li><strong>Zpráva:</strong> ${message}</li>
        </ul>
        <p>S pozdravem,<br>Tým Future Leader</p>
      `,
    });

    await sendEmail({
      to: adminEmail,
      subject: `Nová přihláška: ${name}`,
      replyTo: email,
      htmlContent: `
        <h2>Nová přihláška do programu</h2>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "Neuvedeno"}</p>
        <p><strong>Předmět:</strong> ${applicationSubject}</p>
        <p><strong>Zpráva:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
