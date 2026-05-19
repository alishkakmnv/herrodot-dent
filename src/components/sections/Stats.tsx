import { motion } from "framer-motion";
import { TEMPLATE_DATA } from "@/data/template";
import { CountUp } from "@/components/CountUp";

export function Stats() {
  return (
    <section className="bg-mint py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="container grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
      >
        {TEMPLATE_DATA.stats.map((s, i) => (
          <div key={i} className="text-center border-l-4 border-primary lg:border-l-0 lg:border-r lg:border-primary/20 last:border-r-0 pl-4 lg:pl-0 lg:px-4">
            <div className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary">
              <CountUp to={s.number} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-navy/80 text-sm md:text-base font-medium">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
