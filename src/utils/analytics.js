const allowedEvents = new Set([
  "whatsapp_click",
  "phone_click",
  "email_click",
  "social_click",
  "navigation_click",
  "section_view",
  "faq_open",
]);

const allowedPropertyNames = new Set([
  "route",
  "section",
  "cta_location",
  "cta_text",
  "service_id",
  "platform",
  "target_section",
  "target_route",
  "origin",
  "faq_id",
]);

function cleanProperties(properties) {
  return Object.fromEntries(
    Object.entries(properties).filter(([key, value]) => (
      allowedPropertyNames.has(key)
      && typeof value === "string"
      && value.length > 0
      && value.length <= 80
    )),
  );
}

export function isAnalyticsConfigured() {
  return (
    import.meta.env.PROD
    && typeof window !== "undefined"
    && typeof window.umami?.track === "function"
  );
}

export function track(eventName, properties = {}) {
  if (!allowedEvents.has(eventName) || !isAnalyticsConfigured()) return false;

  window.umami.track(eventName, cleanProperties(properties));
  return true;
}
