export default function AboutPanel() {
  return (
    <section id="about" className="relative py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.2fr]">
          <div className="relative rounded-2xl border border-slate-200/60 bg-white/60 backdrop-blur-xl p-6 md:p-8 shadow-lg">
            <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white text-xs tracking-wider shadow">About Me</div>
            <p className="text-slate-700 leading-relaxed">
              I’m <span className="font-semibold">S. Ezhil Savier</span>, a passionate software developer with a love for blending creativity and technology. I specialize in designing and developing intelligent, user-focused digital solutions — from AI-driven tools to visually stunning web applications. My mission is to turn complex ideas into seamless, impactful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
