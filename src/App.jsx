import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trust from './components/Trust'
import Technology from './components/Technology'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import UserSection from './components/UserSection'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0B1020]">
      <Navbar />
      <main>
        <Hero />
        <section id="how" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-white text-2xl font-semibold">Cómo funciona</h2>
              <p className="text-white/70 mt-2">Subes un texto o imagen, el radar de IA evalúa el riesgo, te explica por qué y te sugiere qué hacer. Personaliza el contexto en tu perfil para mejorar la precisión.</p>
            </div>
          </div>
        </section>
        <UserSection />
        <Trust />
        <Technology />
        <Testimonials />
        <FAQ />
        <footer className="border-t border-white/10 bg-[#0B1020]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-white/60 text-sm flex items-center justify-between">
            <span>© {new Date().getFullYear()} RedRadar. Todos los derechos reservados.</span>
            <div className="flex items-center gap-4">
              <a className="hover:text-white" href="#">Privacidad</a>
              <a className="hover:text-white" href="#">Términos</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
