import Header from './components/Header'
import Hero from './components/Hero'
import AboutPanel from './components/AboutPanel'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      <Header />
      <main className="pt-14">
        <Hero />
        <AboutPanel />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} S. Ezhil Savier. All rights reserved.
      </footer>
    </div>
  )
}

export default App
