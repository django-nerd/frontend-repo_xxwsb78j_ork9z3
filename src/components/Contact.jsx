import { Mail, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl border border-slate-200/60 bg-white/70 backdrop-blur-xl p-6 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Let’s build something great</h3>
              <p className="text-slate-700/80">Available for collaborations and opportunities.</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="mailto:sanjayraina023@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg border border-teal-500/30 bg-teal-50 text-teal-700 px-4 py-2 hover:bg-teal-100 transition"
              >
                <Mail className="h-5 w-5" />
                sanjayraina023@gmail.com
              </a>
              <a
                href="https://github.com/sanjayraina"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300/40 px-4 py-2 hover:bg-slate-50 transition text-slate-800"
              >
                <Github className="h-5 w-5" />
                github.com/sanjayraina
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
