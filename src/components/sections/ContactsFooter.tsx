import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, ExternalLink, Send } from "lucide-react";
import { TEMPLATE_DATA } from "@/data/template";
import { formatPhoneHref, trackEvent } from "@/lib/tracking";

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
                <div className="space-y-1">
                  <div className="text-background/60 text-xs uppercase tracking-wider">Телефон</div>
                  <a
                    href={`tel:${formatPhoneHref(contacts.phone)}`}
                    onClick={() => trackEvent("phone_click", { source: "footer", value: contacts.phone })}
                    className="block font-display font-bold text-xl hover:text-primary transition-colors"
                  >
                    {contacts.phone}
                  </a>
                  <a
                    href={`tel:${formatPhoneHref(contacts.phone2)}`}
                    onClick={() => trackEvent("phone_click", { source: "footer", value: contacts.phone2 })}
                    className="block font-medium hover:text-primary transition-colors"
                  >
                    {contacts.phone2}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-background/60 text-xs uppercase tracking-wider">Email</div>
                  <a
                    href={`mailto:${contacts.email}`}
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {contacts.email}
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
                href={`https://t.me/${contacts.telegram}`}
                target="_blank" rel="noopener noreferrer"
                onClick={() => trackEvent("telegram_click", { source: "footer", value: contacts.telegram })}
                className="inline-flex items-center gap-2 bg-[#2AABEE] text-background px-5 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" /> Telegram
              </a>
              <a
                href={`https://vk.com/${contacts.vk}`}
                target="_blank" rel="noopener noreferrer"
                onClick={() => trackEvent("vk_click", { source: "footer", value: contacts.vk })}
                className="inline-flex items-center gap-2 bg-[#0077FF] text-background px-5 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21.579 6.855c.14-.465 0-.806-.666-.806h-2.2c-.56 0-.817.295-.957.621 0 0-1.117 2.719-2.7 4.482-.512.513-.745.676-1.024.676-.14 0-.341-.163-.341-.628V6.855c0-.559-.163-.806-.628-.806H9.642c-.349 0-.559.259-.559.504 0 .529.79.651.872 2.139v3.232c0 .71-.129.838-.408.838-.745 0-2.557-2.731-3.629-5.858-.21-.607-.42-.853-.983-.853H2.735c-.628 0-.755.295-.755.621 0 .582.745 3.462 3.464 7.271 1.814 2.603 4.37 4.014 6.693 4.014 1.394 0 1.565-.313 1.565-.853v-1.966c0-.628.133-.754.576-.754.326 0 .884.163 2.188 1.42 1.49 1.49 1.735 2.153 2.572 2.153h2.2c.628 0 .942-.313.761-.931-.198-.616-.91-1.51-1.854-2.569-.512-.605-1.28-1.257-1.513-1.582-.326-.42-.233-.606 0-.979 0 0 2.672-3.765 2.95-5.042z" />
                </svg>
                ВКонтакте
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
              <li>{contacts.phone2}</li>
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
          © {year} {brand.name} · {brand.subtitle}
        </div>
      </div>
    </footer>
  );
}
