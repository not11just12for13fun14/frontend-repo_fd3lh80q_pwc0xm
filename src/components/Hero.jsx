import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full bg-[#0B1020] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1020]/30 via-[#0B1020]/60 to-[#0B1020] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            Nuevo: Radar de riesgos en tiempo real
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Visibilidad total. Decisiones más seguras.
          </h1>
          <p className="mt-5 text-lg text-white/70">
            RedRadar detecta señales débiles y patrones de riesgo en tus operaciones con tecnología de IA y análisis en tiempo real.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#scan" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-rose-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-500/30 hover:brightness-110 transition">
              Escanear ahora
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-md border border-white/10 px-6 py-3 text-white/90 hover:bg-white/5 transition">
              Ver cómo funciona
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
