import { motion } from "framer-motion";
import {
  Stethoscope, Scissors, Crown, AlignCenter, Sparkles, Baby, Activity, Smile, ArrowRight,
} from "lucide-react";
import { TEMPLATE_DATA } from "@/data/template";

const ICONS = { Stethoscope, Scissors, Crown, AlignCenter, Sparkles, Baby, Activity, Smile } as const;

export function Services() {
  return (
    <section id="services" className="bg-background py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Услуги</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-navy mt-2">Наши услуги</h2>
          <p className="text-navy/70 mt-4 text-lg">
            Полный спектр стоматологической помощи — от профилактики до сложных хирургических операций.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TEMPLATE_DATA.services.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS] ?? Sparkles;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-mint rounded-xl p-6 border-l-4 border-primary hover:shadow-card hover:-translate-y-1 transition-all group"
              >
                <Icon className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-display font-semibold text-lg text-navy">{s.name}</h3>
                <p className="text-sm text-navy/60 mt-1.5 min-h-[2.5em]">{s.desc}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-primary/15">
                  <span className="font-display font-bold text-primary">от {s.price} {TEMPLATE_DATA.currency}</span>
                  <a href="#appointment" className="text-primary text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Подробнее <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
