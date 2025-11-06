import { MonitorSmartphone, Brain, LineChart } from 'lucide-react'

function ProjectCard({ title, description, accent, Icon, thumbnail }) {
  return (
    <div className="group relative rounded-2xl border border-slate-200/60 bg-white/70 backdrop-blur-xl p-5 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl">
      <div className={`absolute inset-0 rounded-2xl ${accent} opacity-0 group-hover:opacity-10 transition-opacity`} />
      <div className="flex items-start gap-4">
        <div className="relative h-14 w-20 flex-shrink-0 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden shadow-inner">
          <div className="absolute inset-0 grid place-items-center text-slate-600/70">
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <div className="">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-700/80 whitespace-pre-line">{description}</p>
        </div>
      </div>
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
            description={`A web application that captures and preserves cherished photo memories.\nFeatures intelligent tagging, smooth navigation, and emotional storytelling through design.`}
          />
          <ProjectCard
            title="Sentient Shopper"
            Icon={Brain}
            accent="bg-blue-500"
            description={`An AI-powered shopping assistant that understands human emotions and preferences to suggest products intuitively.\nCombines computer vision, recommendation systems, and predictive insights.`}
          />
          <ProjectCard
            title="StockVision"
            Icon={LineChart}
            accent="bg-blue-700"
            description={`A data-driven stock analysis and forecasting tool that visualizes trends with clarity and precision.\nEmpowers users with AI-enhanced predictions and interactive dashboards.`}
          />
        </div>
      </div>
    </section>
  )
}
