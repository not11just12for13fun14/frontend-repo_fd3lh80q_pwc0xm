import { ShieldCheck, Users2, Building2 } from "lucide-react";

export default function Trust() {
  const items = [
    { icon: ShieldCheck, title: "Seguridad de nivel empresarial", desc: "Cifrado extremo a extremo y cumplimiento de estándares" },
    { icon: Users2, title: "+120 clientes", desc: "Confían en RedRadar para visibilidad y control" },
    { icon: Building2, title: "Integración fácil", desc: "Conecta tus sistemas en días, no meses" },
  ];
  return (
    <section id="trust" className="bg-[#0B1020] text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <Icon className="h-6 w-6 text-blue-400" />
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
