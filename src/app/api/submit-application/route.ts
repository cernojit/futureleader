import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, subject, message, phone } = await request.json();

  try {
    // Send user confirmation email
    await resend.emails.send({
      from: "info@futureleader.cz",
      to: email,
      subject: "Potvrzení přihlášky - Future Leader",
      html: `
        <h2>Děkujeme za vaši přihlášku!</h2>
        <p>Ahoj ${name},</p>
        <p>Přijali jsme vaši přihlášku do programu Future Leader. Brzy se vám ozveme.</p>
        <p><strong>Vaše údaje:</strong></p>
        <ul>
          <li><strong>Jméno:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Telefon:</strong> ${phone || "Neuvedeno"}</li>
          <li><strong>Předmět:</strong> ${subject || "Neuvedeno"}</li>
          <li><strong>Zpráva:</strong> ${message}</li>
        </ul>
        <p>S pozdravem,<br>Tým Future Leader</p>
      `,
    });

    // Send admin notification email
    await resend.emails.send({
      from: "info@futureleader.cz",
      to: process.env.ADMIN_EMAIL!,
      subject: `Nová přihláška: ${name}`,
      html: `
        <h2>Nová přihláška do programu</h2>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "Neuvedeno"}</p>
        <p><strong>Předmět:</strong> ${subject || "Neuvedeno"}</p>
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
