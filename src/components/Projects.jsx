import { MonitorSmartphone, Brain, LineChart } from 'lucide-react'

function ProjectCard({ title, description, accent, Icon }) {
  return (
    <div className="group relative rounded-2xl border border-slate-200/60 bg-white/70 backdrop-blur-xl p-5 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl">
      <div className={`absolute inset-0 rounded-2xl ${accent} opacity-0 group-hover:opacity-10 transition-opacity`} />
      <div className="flex items-start gap-4">
        <div className="relative h-14 w-20 flex-shrink-0 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden shadow-inner">
          <div className="absolute inset-0 grid place-items-center text-slate-600/70">
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <div className="relative">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-700/80 whitespace-pre-line">{description}</p>
        </div>
      </div>
      <div className="pointer-events-none absolute left-6 right-6 -bottom-2 h-6 bg-gradient-to-r from-slate-300/10 via-slate-500/10 to-slate-300/10 blur-xl rounded-full" />
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Featured Projects</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <ProjectCard
            title="MemoSnap"
            Icon={MonitorSmartphone}
            accent="bg-teal-400"
            description={`MemoSnap — A smart photo memory web app that captures emotions through AI-powered tagging and intuitive design.`}
          />
          <ProjectCard
            title="Sentient Shopper"
            Icon={Brain}
            accent="bg-blue-500"
            description={`Sentient Shopper — An AI shopping assistant that understands user emotions to make personalized recommendations.`}
          />
          <ProjectCard
            title="StockVision"
            Icon={LineChart}
            accent="bg-gradient-to-r from-blue-700 to-emerald-600"
            description={`StockVision — A data-driven analysis and forecasting platform that visualizes market insights using machine learning.`}
          />
        </div>
      </div>
    </section>
  )
}
