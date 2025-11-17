import { ChevronDown } from "lucide-react";
import { useState } from "react";

const items = [
  { q: "¿Necesito datos históricos?", a: "No. Podemos empezar con tus eventos actuales y mejorar con el tiempo." },
  { q: "¿Cómo se integra?", a: "Conectores listos para tus herramientas y APIs; onboarding en días." },
  { q: "¿Qué tan seguro es?", a: "Infraestructura con cifrado, control de acceso y auditoría por defecto." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="bg-[#0B1020] text-white/80">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-center text-2xl font-semibold text-white">Preguntas frecuentes</h2>
        <div className="mt-8 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full text-left p-5 hover:bg-white/5 transition">
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">{item.q}</span>
                <ChevronDown className={`h-5 w-5 text-white/70 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </div>
              {open === i && (
                <p className="mt-3 text-sm text-white/70">{item.a}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
