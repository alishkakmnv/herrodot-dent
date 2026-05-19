// Click tracking utility for analytics (GA, Yandex.Metrika, Facebook Pixel, etc.)
// ЗАМЕНИТЬ: integrate with your analytics provider in trackEvent()

type EventName =
  | "phone_click"
  | "whatsapp_click"
  | "instagram_click"
  | "appointment_cta_click"
  | "calculator_cta_click";

interface EventPayload {
  source?: string; // where on the page the click originated (e.g. "navbar", "footer", "hero")
  value?: string;  // optional value (phone number, etc.)
}

export function trackEvent(name: EventName, payload: EventPayload = {}) {
  // Console log for development — replace with your analytics call
  // eslint-disable-next-line no-console
  console.log("[track]", name, payload);

  // ЗАМЕНИТЬ: подключите вашу аналитику ниже
  // Google Analytics 4:
  // window.gtag?.("event", name, payload);
  //
  // Yandex.Metrika:
  // window.ym?.(XXXXXXXX, "reachGoal", name, payload);
  //
  // Facebook Pixel:
  // window.fbq?.("trackCustom", name, payload);
}

// Strip everything except digits and a leading + for tel: / wa.me links
export const formatPhoneHref = (raw: string) => {
  const digits = raw.replace(/[^0-9+]/g, "");
  return digits.startsWith("+") ? digits : `+${digits}`;
};

export const formatWhatsAppHref = (raw: string) => {
  const digits = raw.replace(/[^0-9]/g, "");
  return `https://wa.me/${digits}`;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    ym?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}
