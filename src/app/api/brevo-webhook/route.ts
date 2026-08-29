const deliveryEvents = new Set([
  "delivered",
  "soft_bounce",
  "hard_bounce",
  "blocked",
  "invalid_email",
  "error",
]);

type BrevoEvent = {
  event?: unknown;
  "message-id"?: unknown;
  email?: unknown;
  reason?: unknown;
  date?: unknown;
  ts_event?: unknown;
};

function isAuthorized(request: Request) {
  const expectedToken = process.env.BREVO_WEBHOOK_TOKEN;

  if (!expectedToken) {
    return false;
  }

  const authorization = request.headers.get("authorization");
  const headerToken = request.headers.get("x-brevo-webhook-token");
  return (
    headerToken === expectedToken ||
    authorization === `Bearer ${expectedToken}`
  );
}

function isBrevoEvent(value: unknown): value is BrevoEvent {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function POST(request: Request) {
  if (!process.env.BREVO_WEBHOOK_TOKEN) {
    console.error("brevo_webhook_token_missing");
    return Response.json({ error: "Webhook is not configured" }, { status: 503 });
  }

  if (!isAuthorized(request)) {
    console.warn("brevo_webhook_unauthorized");
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = await request.json().catch(() => null);
  const events = Array.isArray(payload) ? payload : [payload];

  if (!events.every(isBrevoEvent)) {
    console.warn("brevo_webhook_invalid_payload");
    return Response.json({ error: "Invalid payload" }, { status: 400 });
  }

  for (const event of events) {
    const eventName = typeof event.event === "string" ? event.event : "unknown";
    const messageId =
      typeof event["message-id"] === "string" ? event["message-id"] : undefined;

    console.info("brevo_email_event", {
      event: eventName,
      messageId,
      status: deliveryEvents.has(eventName) ? eventName : "other",
      reason: typeof event.reason === "string" ? event.reason : undefined,
      eventTime: typeof event.ts_event === "number" ? event.ts_event : undefined,
    });
  }

  return Response.json({ received: events.length });
}
