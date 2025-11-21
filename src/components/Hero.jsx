import { Music4, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-900/40 via-slate-900/60 to-slate-950/80 p-8 md:p-12 shadow-2xl">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute -top-32 -left-32 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="inline-flex items-center justify-center rounded-2xl bg-white/10 p-3 ring-1 ring-white/10">
          <Music4 className="h-8 w-8 text-indigo-300" />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Lirik Trending Indonesia
          </h1>
          <p className="mt-3 md:mt-4 text-indigo-200/80 text-base md:text-lg max-w-2xl">
            Temukan lagu yang sedang naik daun dan baca liriknya secara otomatis. Desain modern, pengalaman cepat.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-indigo-200 ring-1 ring-white/10">
            <Sparkles className="h-4 w-4" />
            Update realtime dari chart populer
          </div>
        </div>
      </div>
    </div>
  )
}
