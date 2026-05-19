import { motion } from "framer-motion";
import { Calendar, Calculator, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TEMPLATE_DATA } from "@/data/template";
import { trackEvent } from "@/lib/tracking";
import heroImg from "@/assets/hero-clinic.jpg";

export function Hero() {
  const { hero } = TEMPLATE_DATA;
  return (
    <section className="bg-background overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block bg-mint text-primary text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide">
            {hero.tag}
          </span>

          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.05] mt-6">
            {hero.headline}
          </h1>

          <p className="mt-6 text-lg text-navy/70 max-w-xl leading-relaxed">{hero.subheadline}</p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Button variant="coral" size="xl" asChild>
              <a
                href="#appointment"
                onClick={() => trackEvent("appointment_cta_click", { source: "hero" })}
              >
                <Calendar className="w-5 h-5" />
                Записаться на приём
              </a>
            </Button>
            <Button variant="tealOutline" size="xl" asChild>
              <a
                href="#calculator"
                onClick={() => trackEvent("calculator_cta_click", { source: "hero" })}
              >
                <Calculator className="w-5 h-5" />
                Рассчитать стоимость
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {hero.badges.map((b, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 200 }}
                className="bg-mint text-navy text-sm font-medium px-4 py-2 rounded-full border-l-4 border-primary"
              >
                {b}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-elevated">
            <img
              src={heroImg}
              alt="Modern dental clinic interior"
              width={1280}
              height={1280}
              className="w-full h-[420px] md:h-[560px] object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-5 -left-3 md:left-6 bg-primary text-primary-foreground rounded-xl px-5 py-4 shadow-teal flex items-center gap-3"
          >
            <Star className="w-6 h-6 fill-current" />
            <div className="leading-tight">
              <div className="font-display font-extrabold text-2xl">{hero.floatingCard}</div>
              <div className="text-xs opacity-90">Средний рейтинг 4.9 ★</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
