import { Menu, ScanLine } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#0B1020]/60 bg-[#0B1020]/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-rose-500 grid place-items-center shadow-lg shadow-blue-500/30">
            <ScanLine className="h-5 w-5 text-white" />
          </div>
          <span className="text-white/90 font-semibold tracking-tight">RedRadar</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#trust" className="text-white/70 hover:text-white transition">Confianza</a>
          <a href="#tech" className="text-white/70 hover:text-white transition">Tecnología</a>
          <a href="#testimonials" className="text-white/70 hover:text-white transition">Testimonios</a>
          <a href="#faq" className="text-white/70 hover:text-white transition">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#scan" className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-rose-600 text-white shadow-lg shadow-blue-500/30 hover:brightness-110 transition">
            <ScanLine className="h-4 w-4" />
            Escanear ahora
          </a>
          <button className="md:hidden p-2 rounded-md border border-white/10 text-white/80">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
