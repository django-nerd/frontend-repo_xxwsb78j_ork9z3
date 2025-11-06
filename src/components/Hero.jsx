import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[88vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="mb-3 text-sm tracking-widest uppercase text-slate-700/70">3D Futuristic Portfolio</p>
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-blue-700 to-blue-900 drop-shadow-sm">
          Transforming Ideas into Intelligent Digital Reality.
        </h2>
        <p className="mt-4 text-slate-700/80 max-w-2xl mx-auto">
          A cinematic, interactive 3D workspace that blends creativity with data-driven logic.
        </p>
      </div>
    </section>
  )
}
