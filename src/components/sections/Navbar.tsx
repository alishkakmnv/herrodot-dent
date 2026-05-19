import { motion } from "framer-motion";
import { Phone, Calendar, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TEMPLATE_DATA } from "@/data/template";
import { formatPhoneHref, trackEvent } from "@/lib/tracking";

export function Navbar() {
  const { brand, navbar } = TEMPLATE_DATA;
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container flex items-center justify-between py-4 gap-6">
        <a href="#" className="flex flex-col leading-tight">
          <span className="font-display font-bold text-xl md:text-2xl text-navy">{brand.name}</span>
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">{brand.subtitle}</span>
        </a>

        <a
          href={`tel:${formatPhoneHref(navbar.phone)}`}
          onClick={() => trackEvent("phone_click", { source: "navbar", value: navbar.phone })}
          className="hidden md:flex items-center gap-2 text-primary font-display font-bold text-lg hover:opacity-80 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          {navbar.phone}
        </a>

        <div className="flex items-center gap-3">
          <Button variant="coral" size="lg" className="hidden sm:inline-flex" asChild>
            <a
              href="#appointment"
              onClick={() => trackEvent("appointment_cta_click", { source: "navbar" })}
            >
              <Calendar className="w-4 h-4" />
              Записаться
            </a>
          </Button>
          <button className="md:hidden p-2 text-navy" aria-label="Menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-mint border-y border-primary/10"
      >
        <div className="container flex flex-wrap items-center justify-center gap-x-6 gap-y-1 py-2 text-xs md:text-sm text-navy font-medium">
          {navbar.trustStrip.map((t, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <span className="text-primary font-bold">✓</span> {t}
            </span>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
