import { Star } from "lucide-react";

const DATA = [
  {
    name: "María López",
    role: "COO, NovaLog",
    quote:
      "Pasamos de reaccionar a anticiparnos. RedRadar nos dio la visibilidad que faltaba.",
  },
  {
    name: "Javier Pérez",
    role: "CISO, Finux",
    quote:
      "Las alertas son claras y accionables. Menos ruido, más impacto.",
  },
  {
    name: "Lucía Martín",
    role: "Head of Ops, Kargo",
    quote:
      "La integración fue sorprendentemente rápida y sin fricción.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0B1020] text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {DATA.map((t) => (
            <figure key={t.name} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-white">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-white/70">
                {t.name} • {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
