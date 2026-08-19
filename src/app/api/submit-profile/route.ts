const brevoApiUrl = "https://api.brevo.com/v3/smtp/email";

const profileFields = [
  ["mojeJmeno", "Jméno"],
  ["mujEmail", "E-mail"],
  ["mujVek", "Věk / na kolik se dnes cítím"],
  ["typickeVlastnosti", "Typické vlastnosti"],
  ["coMeBavi", "Co mě baví"],
  ["zkusenostiVzdelani", "Zkušenosti a vzdělání"],
  ["kurzyAkyce", "Významné kurzy a akce"],
  ["coMeZivi", "Co mě živí a dobrovolné aktivity"],
  ["uspech", "Osobně důležitý úspěch"],
  ["prekazka", "Nejtěžší životní překážka"],
  ["ocekavani", "Očekávání od kurzu"],
  ["kontakty", "Další kontakty"],
  ["faktura", "Faktura"],
] as const;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

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
  const payload = await request.json().catch(() => null);
  const values = new Map<string, string>();

  if (payload && typeof payload === "object" && !Array.isArray(payload)) {
    for (const [key, value] of Object.entries(payload)) {
      if (typeof value === "string") {
        values.set(key, value.trim());
      }
    }
  }

  const name = values.get("mojeJmeno") ?? "";
  const email = values.get("mujEmail") ?? "";
  const missingField = profileFields.find(([key]) => !values.get(key));
  const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(email);
  const brevoApiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const adminEmail = process.env.ADMIN_EMAIL;

  if (missingField || !validEmail) {
    return Response.json(
      { error: missingField ? `Chybí pole: ${missingField[1]}` : "Neplatný e-mail" },
      { status: 400 }
    );
  }

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

  const safeName = escapeHtml(name);
  const profileHtml = profileFields
    .map(([key, label]) => `<li><strong>${label}:</strong><br>${escapeHtml(values.get(key) ?? "").replace(/\n/g, "<br>")}</li>`)
    .join("");

  try {
    await sendEmail({
      to: email,
      subject: "Potvrzení profilu - Future Leader",
      htmlContent: `
        <h2>Děkujeme za vyplnění profilu!</h2>
        <p>Ahoj ${safeName},</p>
        <p>Váš profil jsme přijali. Děkujeme za jeho vyplnění.</p>
        <p>S pozdravem,<br>Tým Future Leader</p>
      `,
    });

    await sendEmail({
      to: adminEmail,
      subject: `Nový profil účastníka: ${safeName}`,
      replyTo: email,
      htmlContent: `
        <h2>Nový profil účastníka - ${safeName}</h2>
        <ul>${profileHtml}</ul>
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
