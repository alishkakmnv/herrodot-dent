import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TEMPLATE_DATA } from "@/data/template";
import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";
import doc4 from "@/assets/doctor-4.jpg";

const PHOTOS = [doc1, doc2, doc3, doc4];

export function Doctors() {
  return (
    <section id="doctors" className="bg-background py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Команда</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-navy mt-2">Наши специалисты</h2>
          <p className="text-navy/70 mt-4 text-lg">
            Сертифицированные врачи с многолетним опытом и регулярным повышением квалификации.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEMPLATE_DATA.doctors.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="doctor-card"
            >
              <div className="doctor-card-inner bg-background rounded-2xl shadow-card overflow-hidden border-t-[3px] border-primary h-full flex flex-col">
                <div className="aspect-[4/5] overflow-hidden bg-mint">
                  <img
                    src={PHOTOS[i % PHOTOS.length]}
                    alt={d.name}
                    loading="lazy"
                    width={768}
                    height={1024}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-navy text-lg">{d.name}</h3>
                  <p className="italic text-primary text-sm mt-1">{d.specialty}</p>
                  <span className="inline-block self-start bg-mint text-navy text-xs font-semibold px-3 py-1 rounded-full mt-3">
                    {d.experience} лет опыта
                  </span>
                  <p className="text-navy/60 text-xs mt-3 flex-1">{d.education}</p>
                  <Button variant="coral" size="sm" className="w-full mt-4" asChild>
                    <a href="#appointment">Записаться</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
