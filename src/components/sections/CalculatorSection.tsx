import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Minus, Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { TEMPLATE_DATA } from "@/data/template";

export function CalculatorSection() {
  const services = TEMPLATE_DATA.calculator.services;
  const [selected, setSelected] = useState<string[]>([services[0].id]);
  const [teeth, setTeeth] = useState(2);
  const [urgency, setUrgency] = useState<"standard" | "urgent">("standard");

  const { low, high, days } = useMemo(() => {
    const base = services
      .filter((s) => selected.includes(s.id))
      .reduce((sum, s) => sum + s.price, 0);
    const perTooth = base * teeth;
    const lowEst = Math.round(perTooth * 0.9);
    const highEst = Math.round(perTooth * 1.3);
    const urgencyMult = urgency === "urgent" ? 1.25 : 1;
    const d = Math.max(1, Math.ceil(selected.length * teeth * 0.5));
    return {
      low: Math.round(lowEst * urgencyMult),
      high: Math.round(highEst * urgencyMult),
      days: urgency === "urgent" ? Math.ceil(d / 2) : d,
    };
  }, [selected, teeth, urgency, services]);

  const toggle = (id: string) =>
    setSelected((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const fmt = (n: number) => n.toLocaleString("ru-RU");

  return (
    <section id="calculator" className="bg-mint py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-10"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Калькулятор</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-navy mt-2">
            Рассчитайте стоимость лечения
          </h2>
          <p className="text-navy/70 mt-4 text-lg">
            Получите предварительную оценку за 1 минуту. Точную смету составит врач на консультации.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-background rounded-2xl shadow-card p-6 md:p-10 grid lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display font-bold text-navy text-lg mb-4">
                <span className="text-primary mr-2">1.</span>Выберите услуги
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((s) => (
                  <label
                    key={s.id}
                    className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                      selected.includes(s.id)
                        ? "border-primary bg-mint"
                        : "border-border hover:border-primary/40"
                    }`}
                  >
                    <Checkbox
                      checked={selected.includes(s.id)}
                      onCheckedChange={() => toggle(s.id)}
                      className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-navy text-sm truncate">{s.label}</div>
                      <div className="text-xs text-primary font-semibold">от {fmt(s.price)} {TEMPLATE_DATA.currency}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-navy text-lg mb-4">
                <span className="text-primary mr-2">2.</span>Количество зубов
              </h3>
              <div className="inline-flex items-center gap-2 bg-mint rounded-xl p-1.5">
                <button
                  onClick={() => setTeeth((t) => Math.max(1, t - 1))}
                  className="w-10 h-10 rounded-lg bg-background text-navy hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  aria-label="Уменьшить"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="w-14 text-center font-display font-bold text-2xl text-navy">{teeth}</div>
                <button
                  onClick={() => setTeeth((t) => Math.min(32, t + 1))}
                  className="w-10 h-10 rounded-lg bg-background text-navy hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  aria-label="Увеличить"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-navy text-lg mb-4">
                <span className="text-primary mr-2">3.</span>Срочность
              </h3>
              <RadioGroup value={urgency} onValueChange={(v) => setUrgency(v as "standard" | "urgent")} className="flex flex-wrap gap-3">
                <label className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all ${urgency === "standard" ? "border-primary bg-mint" : "border-border"}`}>
                  <RadioGroupItem value="standard" id="std" className="text-primary" />
                  <Label htmlFor="std" className="cursor-pointer font-medium">Стандартная</Label>
                </label>
                <label className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all ${urgency === "urgent" ? "border-primary bg-mint" : "border-border"}`}>
                  <RadioGroupItem value="urgent" id="urg" className="text-primary" />
                  <Label htmlFor="urg" className="cursor-pointer font-medium">Срочная <span className="text-coral">(+25%)</span></Label>
                </label>
              </RadioGroup>
            </div>
          </div>

          <div className="bg-primary text-primary-foreground rounded-2xl p-6 flex flex-col justify-between sticky top-24 self-start">
            <div>
              <div className="text-sm opacity-90 uppercase tracking-wide font-semibold">Предварительная стоимость</div>
              <div className="font-display font-extrabold text-3xl md:text-4xl mt-3 leading-tight">
                от {fmt(low)}
                <div className="text-xl opacity-90">до {fmt(high)} {TEMPLATE_DATA.currency}</div>
              </div>
              <div className="mt-4 pt-4 border-t border-primary-foreground/20 text-sm">
                <div className="opacity-80">Срок выполнения</div>
                <div className="font-display font-bold text-lg">~ {days} рабочих дней</div>
              </div>
            </div>

            <Button variant="coral" size="lg" className="w-full mt-6" asChild>
              <a href="#appointment">
                Получить точную смету <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
