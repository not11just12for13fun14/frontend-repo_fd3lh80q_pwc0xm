import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trust from './components/Trust'
import Technology from './components/Technology'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0B1020]">
      <Navbar />
      <main>
        <Hero />
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
