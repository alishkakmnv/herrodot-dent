import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, MessageCircle, ExternalLink } from "lucide-react";
import { TEMPLATE_DATA } from "@/data/template";
import { formatPhoneHref, formatWhatsAppHref, trackEvent } from "@/lib/tracking";

export function ContactsFooter() {
  const { contacts, brand } = TEMPLATE_DATA;
  const year = new Date().getFullYear();

  return (
    <footer id="contacts" className="bg-navy text-background">
      <div className="container py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-10 mb-16"
        >
          <div className="space-y-6">
            <h2 className="font-display font-bold text-3xl md:text-4xl">Контакты</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-background/60 text-xs uppercase tracking-wider">Адрес</div>
                  <div className="font-medium">{contacts.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-background/60 text-xs uppercase tracking-wider">Телефон</div>
                  <a
                    href={`tel:${formatPhoneHref(contacts.phone)}`}
                    onClick={() => trackEvent("phone_click", { source: "footer", value: contacts.phone })}
                    className="font-display font-bold text-xl hover:text-primary transition-colors"
                  >
                    {contacts.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-background/60 text-xs uppercase tracking-wider">Режим работы</div>
                  <div className="font-medium">{contacts.hours}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={formatWhatsAppHref(contacts.whatsapp)}
                target="_blank" rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { source: "footer", value: contacts.whatsapp })}
                className="inline-flex items-center gap-2 bg-[#25D366] text-background px-5 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href={`https://instagram.com/${contacts.instagram.replace(/^@/, "")}`}
                target="_blank" rel="noopener noreferrer"
                onClick={() => trackEvent("instagram_click", { source: "footer", value: contacts.instagram })}
                className="inline-flex items-center gap-2 bg-background/10 border border-background/20 text-background px-5 py-3 rounded-xl font-semibold hover:bg-background/20 transition-colors"
              >
                <Instagram className="w-4 h-4" /> Instagram
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden bg-background/5 border border-background/10 min-h-[280px] relative">
            {contacts.mapEmbed ? (
              <iframe
                src={contacts.mapEmbed}
                title="Карта проезда"
                className="w-full h-full min-h-[280px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div
                className="w-full h-full min-h-[280px] flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-background/5 to-primary/10"
                role="img"
                aria-label="Карта появится здесь после добавления embed-ссылки"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div className="font-display font-bold text-background text-lg">{contacts.address}</div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contacts.address)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-primary text-sm font-semibold hover:underline"
                >
                  Открыть в Google Maps <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-background/10">
          <div>
            <div className="font-display font-bold text-xl">{brand.name}</div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mt-1">{brand.subtitle}</div>
            <p className="text-background/60 text-sm mt-3">{brand.tagline}</p>
          </div>

          <div>
            <h4 className="font-display font-bold mb-3">Услуги</h4>
            <ul className="space-y-1.5 text-sm text-background/70">
              {TEMPLATE_DATA.services.slice(0, 5).map((s) => (
                <li key={s.name}><a href="#services" className="hover:text-primary transition-colors">{s.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-3">Контакты</h4>
            <ul className="space-y-1.5 text-sm text-background/70">
              <li>{contacts.phone}</li>
              <li>{contacts.address}</li>
              <li>{contacts.hours}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-3">Лицензия</h4>
            <p className="text-sm text-background/70">{brand.license}</p>
            <p className="text-xs text-background/50 mt-2">Имеются противопоказания. Необходима консультация специалиста.</p>
          </div>
        </div>

        <div className="text-center text-xs text-background/50 mt-10 pt-6 border-t border-background/10">
          © {year} {brand.name} · Лицензия {brand.license}
        </div>
      </div>
    </footer>
  );
}
