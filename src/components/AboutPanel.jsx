import { Brain, Code, Cpu, BarChart3 } from 'lucide-react'

export default function AboutPanel() {
  return (
    <section id="about" className="relative py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.2fr]">
          <div className="relative rounded-2xl border border-slate-200/60 bg-white/60 backdrop-blur-xl p-6 md:p-8 shadow-lg">
            <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white text-xs tracking-wider shadow">About Me</div>

            {/* Decorative holographic-style icons */}
            <div className="pointer-events-none absolute -right-2 -top-2 flex flex-col gap-3 opacity-30">
              <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-to-br from-teal-200/60 to-blue-200/60">
                <Brain className="h-4 w-4 text-teal-700" />
              </span>
              <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-to-br from-sky-200/60 to-indigo-200/60">
                <Code className="h-4 w-4 text-sky-700" />
              </span>
              <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-200/60 to-blue-200/60">
                <Cpu className="h-4 w-4 text-cyan-700" />
              </span>
              <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-to-br from-blue-200/60 to-emerald-200/60">
                <BarChart3 className="h-4 w-4 text-blue-700" />
              </span>
            </div>

            <p className="text-slate-700 leading-relaxed">
              I’m <span className="font-semibold">S. Ezhil Savier</span>, a technology enthusiast and AI-driven developer passionate about creating intelligent and visually immersive digital experiences. My work blends creativity with data-driven logic — transforming ideas into interactive, user-centered applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
