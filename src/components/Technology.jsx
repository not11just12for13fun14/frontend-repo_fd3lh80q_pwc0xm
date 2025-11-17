import { Cpu, Radar, Activity } from "lucide-react";

export default function Technology() {
  const features = [
    { icon: Radar, title: "Radar probabilístico", desc: "Modelos bayesianos que priorizan señales y contexto" },
    { icon: Cpu, title: "IA explicable", desc: "Transparencia en cada alerta para decisiones informadas" },
    { icon: Activity, title: "Tiempo real", desc: "Procesamiento de eventos con baja latencia" },
  ];
  return (
    <section id="tech" className="bg-[#0B1020] text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <Icon className="h-6 w-6 text-rose-400" />
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
