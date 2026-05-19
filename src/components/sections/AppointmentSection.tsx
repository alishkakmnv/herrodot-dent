import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { TEMPLATE_DATA } from "@/data/template";

export function AppointmentSection() {
  const { appointment, doctors } = TEMPLATE_DATA;
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Заявка отправлена",
        description: `Перезвоним в течение ${appointment.callbackTime} минут.`,
      });
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <section id="appointment" className="bg-coral py-20 md:py-28">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl text-coral-foreground">
            Запишитесь на приём прямо сейчас
          </h2>
          <p className="text-coral-foreground/90 mt-4 text-lg">
            Перезвоним в течение {appointment.callbackTime} минут
          </p>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-background rounded-2xl shadow-elevated p-6 md:p-10 grid sm:grid-cols-2 gap-5"
        >
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-navy font-medium">Имя *</Label>
            <Input id="name" required placeholder="Ваше имя" className="bg-mint border-mint h-12 rounded-xl" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-navy font-medium">Телефон *</Label>
            <Input id="phone" type="tel" required placeholder="+7 ___ ___ __ __" className="bg-mint border-mint h-12 rounded-xl" />
          </div>

          <div className="space-y-1.5">
            <Label className="text-navy font-medium">Услуга</Label>
            <Select>
              <SelectTrigger className="bg-mint border-mint h-12 rounded-xl">
                <SelectValue placeholder="Выберите услугу" />
              </SelectTrigger>
              <SelectContent>
                {appointment.services.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label className="text-navy font-medium">Врач</Label>
            <Select>
              <SelectTrigger className="bg-mint border-mint h-12 rounded-xl">
                <SelectValue placeholder="Любой свободный" />
              </SelectTrigger>
              <SelectContent>
                {doctors.map((d) => (
                  <SelectItem key={d.name} value={d.name}>{d.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="date" className="text-navy font-medium">Дата</Label>
            <Input id="date" type="date" className="bg-mint border-mint h-12 rounded-xl" />
          </div>

          <div className="space-y-1.5">
            <Label className="text-navy font-medium">Время</Label>
            <Select>
              <SelectTrigger className="bg-mint border-mint h-12 rounded-xl">
                <SelectValue placeholder="Удобное время" />
              </SelectTrigger>
              <SelectContent>
                {appointment.timeSlots.map((t) => (
                  <SelectItem key={t} value={t}>{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="sm:col-span-2 space-y-1.5">
            <Label htmlFor="comment" className="text-navy font-medium">Комментарий</Label>
            <Textarea id="comment" rows={3} placeholder="Опишите ваш вопрос (необязательно)" className="bg-mint border-mint rounded-xl" />
          </div>

          <div className="sm:col-span-2">
            <Button type="submit" variant="coral" size="xl" disabled={submitting} className="w-full">
              {submitting ? "Отправляем..." : "Записаться на приём"}
            </Button>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-navy/70 mt-4 font-medium">
              <span>✓ Бесплатно</span>
              <span>✓ Без предоплаты</span>
              <span>✓ Отмена в любое время</span>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
