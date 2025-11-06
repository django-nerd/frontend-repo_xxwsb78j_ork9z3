import { useEffect, useState } from 'react'

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="px-3 py-1 text-sm md:text-base text-slate-700/80 hover:text-slate-900 hover:underline underline-offset-4 transition"
    >
      {children}
    </a>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition-all ${
        scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-teal-400 to-blue-600 shadow-lg" />
          <h1 className="text-lg md:text-2xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-700">
            S. Ezhil Savier
          </h1>
        </div>
        <nav className="flex items-center gap-1 md:gap-3">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
