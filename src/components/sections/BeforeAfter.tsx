import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { TEMPLATE_DATA } from "@/data/template";
import beforeImg from "@/assets/before-1.jpg";
import afterImg from "@/assets/after-1.jpg";

function Comparison({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-ew-resize select-none bg-mint"
      onMouseMove={(e) => e.buttons === 1 && onMove(e.clientX)}
      onMouseDown={(e) => onMove(e.clientX)}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
    >
      <img src={after} alt={`${alt} after`} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt={`${alt} before`}
          loading="lazy"
          className="absolute inset-0 h-full object-cover"
          style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
        />
      </div>
      <div
        className="absolute inset-y-0 w-1 bg-primary shadow-teal"
        style={{ left: `calc(${pos}% - 2px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xs shadow-elevated">
          ↔
        </div>
      </div>
      <div className="absolute top-3 left-3 bg-navy/80 text-background text-xs font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider">
        До
      </div>
      <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider">
        После
      </div>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Кейсы</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-navy mt-2">Результаты лечения</h2>
          <p className="text-navy/70 mt-4 text-lg">
            Реальные работы наших врачей. Передвиньте ползунок, чтобы увидеть разницу.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEMPLATE_DATA.results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-background rounded-2xl p-4 shadow-card border-l-4 border-primary"
            >
              <Comparison before={beforeImg} after={afterImg} alt={r.type} />
              <div className="mt-4 text-sm text-navy">
                <span className="font-display font-bold">{r.type}</span>
                <span className="text-navy/50"> · </span>
                <span>{r.visits} визитов</span>
                <span className="text-navy/50"> · </span>
                <span className="text-primary font-semibold">{r.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
