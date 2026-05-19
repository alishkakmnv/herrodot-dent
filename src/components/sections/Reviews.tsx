import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TEMPLATE_DATA } from "@/data/template";

export function Reviews() {
  const r = TEMPLATE_DATA.reviews;
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-10"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Отзывы</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-navy mt-2">Отзывы пациентов</h2>
          <div className="flex flex-wrap items-center gap-3 mt-5 text-sm">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-coral text-coral" />
              ))}
            </div>
            <span className="font-display font-bold text-navy text-xl">{r.rating}/5</span>
            <span className="text-navy/60">·</span>
            <span className="text-navy/70 font-medium">{r.count}+ отзывов</span>
            <span className="text-navy/60">·</span>
            <span className="text-navy/70 font-medium">2GIS / Google</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {r.items.map((rv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-mint rounded-xl p-6 border-l-4 border-primary"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(rv.stars)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-coral text-coral" />
                ))}
              </div>
              <p className="text-navy leading-relaxed">"{rv.text}"</p>
              <div className="border-t border-primary/15 mt-5 pt-4">
                <div className="font-display font-semibold text-navy">{rv.name}</div>
                <div className="text-xs text-navy/60 mt-0.5">{rv.context}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
