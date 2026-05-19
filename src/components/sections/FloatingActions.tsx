import { Calendar, MessageCircle } from "lucide-react";
import { TEMPLATE_DATA } from "@/data/template";
import { formatWhatsAppHref, trackEvent } from "@/lib/tracking";

export function FloatingActions() {
  const { whatsapp } = TEMPLATE_DATA.contacts;
  return (
    <>
      <a
        href={formatWhatsAppHref(whatsapp)}
        target="_blank" rel="noopener noreferrer"
        aria-label="WhatsApp"
        onClick={() => trackEvent("whatsapp_click", { source: "floating_mobile", value: whatsapp })}
        className="md:hidden fixed bottom-5 left-5 z-40 w-14 h-14 rounded-full bg-[#25D366] text-background shadow-elevated flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href="#appointment"
        aria-label="Записаться"
        onClick={() => trackEvent("appointment_cta_click", { source: "floating_mobile" })}
        className="md:hidden fixed bottom-5 right-5 z-40 h-14 px-5 rounded-full bg-coral text-coral-foreground shadow-elevated flex items-center gap-2 font-semibold hover:scale-105 active:scale-95 transition-transform"
      >
        <Calendar className="w-5 h-5" />
        Записаться
      </a>
    </>
  );
}
