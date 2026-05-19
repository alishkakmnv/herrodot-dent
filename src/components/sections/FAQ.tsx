import { motion } from "framer-motion";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { TEMPLATE_DATA } from "@/data/template";

export function FAQ() {
  return (
    <section className="bg-mint py-20 md:py-28">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-navy mt-2">
            Часто задаваемые вопросы
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {TEMPLATE_DATA.faq.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <AccordionItem
                value={`item-${i}`}
                className="bg-background rounded-xl border-l-4 border-primary border border-border overflow-hidden data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="px-5 py-4 text-left font-display font-semibold text-navy hover:no-underline hover:text-primary [&[data-state=open]]:text-primary [&>svg]:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 text-navy/75 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
